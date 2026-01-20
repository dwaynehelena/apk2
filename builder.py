import os
import sys
import subprocess
import urllib.request
import tarfile
import zipfile
import json
import time
import shutil
import platform

# Configuration - Tuned for macOS x86_64
JDK_URL = "https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.9%2B9/OpenJDK17U-jdk_x64_mac_hotspot_17.0.9_9.tar.gz"
SDK_TOOLS_URL = "https://dl.google.com/android/repository/commandlinetools-mac-9477386_latest.zip"

BUILD_DIR = os.path.abspath("build_system")
JAVA_HOME = os.path.join(BUILD_DIR, "jdk-17.0.9+9/Contents/Home")
ANDROID_HOME = os.path.join(BUILD_DIR, "android-sdk")
STATUS_FILE = "build_status.json"

APP_PKG = "com.twahh.rm"
JAVA_SRC_DIR = f"android/app/src/main/java/{APP_PKG.replace('.', '/')}"

def update_status(step, progress, status="running", logs=[]):
    data = {
        "current_step": step,
        "progress": progress,
        "status": status,
        "logs": logs[-50:] # Keep last 50 lines
    }
    with open(STATUS_FILE, "w") as f:
        json.dump(data, f)
    print(f"[{status.upper()}] {step} ({progress}%)")

def download_file(url, dest):
    print(f"Downloading {url} to {dest}...")
    urllib.request.urlretrieve(url, dest)

def extract(file_path, dest_dir):
    print(f"Extracting {file_path}...")
    if file_path.endswith(".tar.gz"):
        with tarfile.open(file_path, "r:gz") as tar:
            tar.extractall(path=dest_dir)
    elif file_path.endswith(".zip"):
        with zipfile.ZipFile(file_path, "r") as zip_ref:
            zip_ref.extractall(dest_dir)

def run_command(cmd, cwd=None, env=None):
    print(f"Running: {cmd}")
    process = subprocess.Popen(
        cmd, 
        shell=True, 
        cwd=cwd, 
        env=env, 
        stdout=subprocess.PIPE, 
        stderr=subprocess.STDOUT,
        text=True
    )
    output_lines = []
    while True:
        line = process.stdout.readline()
        if not line and process.poll() is not None:
            break
        if line:
            clean_line = line.strip()
            print(clean_line)
            output_lines.append(clean_line)
            try:
                with open(STATUS_FILE, "r") as f:
                    current = json.load(f)
                update_status(current["current_step"], current["progress"], "running", output_lines)
            except:
                pass
    return process.returncode, output_lines

def inject_native_code():
    print("Injecting Native Java Plugin...")
    
    # 1. Create TwahhPlugin.java (Expanded for Launcher & XYAUTO)
    os.makedirs(JAVA_SRC_DIR, exist_ok=True)
    with open(f"{JAVA_SRC_DIR}/TwahhPlugin.java", "w") as f:
        f.write("""package com.twahh.rm;

import com.getcapacitor.JSObject;
import com.getcapacitor.JSArray;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.BatteryManager;
import android.os.Build;
import android.util.Log;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.net.Socket;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;
import android.provider.MediaStore;
import android.database.Cursor;
import android.net.Uri;
import android.content.IntentFilter;
import android.os.Bundle;
import java.util.ArrayList;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import java.util.Locale;
import java.util.HashMap;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothSocket;
import java.util.UUID;
import java.util.concurrent.ConcurrentLinkedQueue;

@CapacitorPlugin(name = "TwahhPlugin")
public class TwahhPlugin extends Plugin implements TextToSpeech.OnInitListener {

    // LOGGING
    private static final int MAX_LOGS = 500;
    private ConcurrentLinkedQueue<String> logBuffer = new ConcurrentLinkedQueue<>();
    private void addLog(String msg) {
        String timestamp = new java.text.SimpleDateFormat("HH:mm:ss.SSS").format(new java.util.Date());
        logBuffer.add("["+timestamp+"] "+msg);
        if(logBuffer.size()>MAX_LOGS) logBuffer.poll();
        Log.d("TwahhPlugin", msg);
    }
    @PluginMethod
    public void getPluginLogs(PluginCall call) {
        JSObject ret = new JSObject();
        JSArray logsFn = new JSArray();
        for (String l : logBuffer) logsFn.put(l);
        ret.put("logs", logsFn);
        call.resolve(ret);
    }

    @PluginMethod
    public void addNativeLog(PluginCall call) {
        String msg = call.getString("msg");
        if (msg != null) addLog(msg);
        call.resolve();
    }

    private BroadcastReceiver receiver;
    private TextToSpeech tts;
    private boolean ttsReady = false;
    private BluetoothSocket elm327BtSocket;
    private boolean elm327Connected = false;
    private boolean elm327Sniffing = false;
    private boolean hiworldSniffing = false;
    private java.io.FileWriter elmRawLog;
    private java.io.FileWriter hiworldRawLog;

    @Override
    public void load() {
        Log.d("TwahhPlugin", "TwahhPlugin Loaded and Registered!");
        
        // Initialize Text-to-Speech for boot announcements
        tts = new TextToSpeech(getContext(), this);
        
        IntentFilter filter = new IntentFilter();
        // Standard Android
        filter.addAction(Intent.ACTION_BATTERY_CHANGED);
        // XYAUTO / Allwinner T5 T507 specific intents
        filter.addAction("com.xyauto.broadcast.ACC_EVENT");
        filter.addAction("com.xyauto.broadcast.canbus.RECEIVE");
        filter.addAction("com.xyauto.broadcast.CAN_AIR_INFO");
        filter.addAction("com.xyauto.broadcast.CAN_DOOR_INFO");
        filter.addAction("com.microntek.canbus.display");
        
        // FYT / Syook Platform Events
        filter.addAction("com.syu.ms.action.BUTTON_CLICK");
        filter.addAction("com.syu.ms.action.EXTERNAL_COMMAND");
        
        receiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                JSObject ret = new JSObject();
                String action = intent.getAction();
                ret.put("action", action);
                
                if (Intent.ACTION_BATTERY_CHANGED.equals(action)) {
                    int level = intent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
                    int scale = intent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
                    float batPct = level * 100 / (float)scale;
                    ret.put("batteryLevel", batPct);
                }
                
                if (intent.getExtras() != null) {
                    for (String key : intent.getExtras().keySet()) {
                        Object value = intent.getExtras().get(key);
                        if (value instanceof int[]) {
                             int[] arr = (int[]) value;
                             JSArray jsArr = new JSArray();
                             for (int i : arr) jsArr.put(i);
                             ret.put(key, jsArr);
                        } else if (value instanceof byte[]) {
                             // Handle byte arrays as well if needed
                             byte[] arr = (byte[]) value;
                             JSArray jsArr = new JSArray();
                             for (byte b : arr) jsArr.put((int)b);
                             ret.put(key, jsArr);
                        } else {
                             ret.put(key, value != null ? value.toString() : "null");
                        }
                    }
                }
                notifyListeners("systemEvent", ret);
            }
        };
        
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.TIRAMISU) {
            getContext().registerReceiver(receiver, filter, Context.RECEIVER_EXPORTED);
        } else {
            getContext().registerReceiver(receiver, filter);
        }
    }

    @PluginMethod
    public void getSystemInfo(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("model", android.os.Build.MODEL);
        ret.put("device", android.os.Build.DEVICE);
        ret.put("product", android.os.Build.PRODUCT);
        ret.put("display", android.os.Build.DISPLAY);
        ret.put("manufacturer", android.os.Build.MANUFACTURER);
        ret.put("board", android.os.Build.BOARD);
        call.resolve(ret);
    }

    @PluginMethod
    public void startSniffer(PluginCall call) {
        saveCall(call);
        IntentFilter filter = new IntentFilter();
        
        // XYAUTO / Allwinner Targets
        filter.addAction("com.xyauto.broadcast"); 
        filter.addAction("com.xyauto.broadcast.ACC_OFF");
        filter.addAction("com.xyauto.broadcast.ACC_ON");
        filter.addAction("com.android.ecar.canbus.action");
        filter.addAction("com.canbus.action");

        // HiWorld / EX Specifics
        filter.addAction("com.ex.canbus");
        filter.addAction("com.hiworld.canbus"); 
        filter.addAction("com.lhz.canbus");
        filter.addAction("com.syu.canbus"); 

        // Wide net for known Chinese HU prefixes
        // Wide net for known Chinese HU prefixes
        filter.addAction("ch.car.canbus");
        filter.addAction("com.uni.canbus");
        filter.addAction("com.ts.canbus");

        // Expanded Coverage for Debugging
        filter.addAction("com.tw.canbus");
        filter.addAction("com.qz.canbus");
        filter.addAction("com.fyt.canbus");
        filter.addAction("android.intent.action.CONFIGURATION_CHANGED");
        
        // Standard Android Targets (for baseline)
        filter.addAction(Intent.ACTION_BATTERY_CHANGED);
        filter.addAction("android.media.VOLUME_CHANGED_ACTION");

        BroadcastReceiver sniffer = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                JSObject ret = new JSObject();
                ret.put("action", intent.getAction());
                
                Bundle extras = intent.getExtras();
                if (extras != null) {
                    JSObject data = new JSObject();
                    for (String key : extras.keySet()) {
                         Object value = extras.get(key);
                         if (value instanceof int[]) {
                            // Serialize int arrays manually
                            int[] arr = (int[]) value;
                            String s = "[";
                            for (int i=0; i<arr.length; i++) s += arr[i] + (i<arr.length-1 ? "," : "");
                            s += "]";
                            data.put(key, s);
                         } else {
                            data.put(key, value != null ? value.toString() : "null");
                         }
                    }
                    ret.put("extras", data);
                }
                
                notifyListeners("snifferEvent", ret);
            }
        };

        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.TIRAMISU) {
            getContext().registerReceiver(sniffer, filter, Context.RECEIVER_EXPORTED);
        } else {
            getContext().registerReceiver(sniffer, filter);
        }
        
        Log.d("TwahhPlugin", "Sniffer BroadcastReceiver registered with " + filter.countActions() + " actions");
        call.resolve();
    }

    @PluginMethod
    public void scanCanbusApps(PluginCall call) {
        PackageManager pm = getContext().getPackageManager();
        List<ApplicationInfo> apps = pm.getInstalledApplications(PackageManager.GET_META_DATA);
        JSArray results = new JSArray();
        
        String[] keywords = {"canbus", "hiworld", "syu", "xyauto", "mcu", "car", "vehicle", "ecar", "lhz", "fyt"};
        
        for (ApplicationInfo app : apps) {
            String pkgLower = app.packageName.toLowerCase();
            for (String kw : keywords) {
                if (pkgLower.contains(kw)) {
                    JSObject obj = new JSObject();
                    obj.put("package", app.packageName);
                    obj.put("name", pm.getApplicationLabel(app).toString());
                    obj.put("matchedKeyword", kw);
                    results.put(obj);
                    break;
                }
            }
        }
        
        JSObject ret = new JSObject();
        ret.put("apps", results);
        ret.put("count", results.length());
        Log.d("TwahhPlugin", "Found " + results.length() + " potential CANbus-related apps");
        call.resolve(ret);
    }

    private Thread logcatThread;
    private boolean isLogcatRunning = false;

    @PluginMethod
    public void startLogcatCapture(PluginCall call) {
        if (isLogcatRunning) {
            call.resolve();
            return;
        }
        
        isLogcatRunning = true;
        logcatThread = new Thread(() -> {
            try {
                Runtime.getRuntime().exec("logcat -c");
                Thread.sleep(100);
                
                Process process = Runtime.getRuntime().exec("logcat -v brief");
                java.io.BufferedReader reader = new java.io.BufferedReader(
                    new java.io.InputStreamReader(process.getInputStream())
                );
                
                String line;
                while (isLogcatRunning && (line = reader.readLine()) != null) {
                    String lineLower = line.toLowerCase();
                    // Skip our own logs to prevent echo
                    if (lineLower.contains("capacitor/console") || lineLower.contains("twahhplugin")) {
                        continue;
                    }
                    if (lineLower.contains("broadcast") || 
                        lineLower.contains("intent") || 
                        lineLower.contains("canbus") ||
                        lineLower.contains("hiworld") ||
                        lineLower.contains("syu") ||
                        lineLower.contains("tw.car") ||
                        lineLower.contains("xyauto")) {
                        JSObject ret = new JSObject();
                        ret.put("line", line);
                        notifyListeners("logcatEvent", ret);
                    }
                }
            } catch (Exception e) {
                Log.e("TwahhPlugin", "Logcat capture error: " + e.getMessage());
            }
        });
        logcatThread.start();
        Log.d("TwahhPlugin", "Logcat capture started");
        call.resolve();
    }

    @PluginMethod
    public void stopLogcatCapture(PluginCall call) {
        isLogcatRunning = false;
        if (logcatThread != null) {
            logcatThread.interrupt();
        }
        call.resolve();
    }

    @PluginMethod
    public void probeTwContentProviders(PluginCall call) {
        JSArray results = new JSArray();
        
        String[] uris = {
            "content://com.tw.carinfoservice",
            "content://com.tw.carinfoservice/carinfo",
            "content://com.tw.carinfoservice.provider",
            "content://com.tw.car",
            "content://com.tw.car/canbus",
            "content://com.tw.car.provider",
            "content://com.dofun.carassistant.car",
            "content://settings/system"
        };
        
        for (String uri : uris) {
            JSObject result = new JSObject();
            result.put("uri", uri);
            
            try {
                android.database.Cursor cursor = getContext().getContentResolver().query(
                    android.net.Uri.parse(uri),
                    null, null, null, null
                );
                
                if (cursor != null) {
                    result.put("accessible", true);
                    result.put("rowCount", cursor.getCount());
                    
                    String[] columns = cursor.getColumnNames();
                    JSArray colArray = new JSArray();
                    for (String col : columns) colArray.put(col);
                    result.put("columns", colArray);
                    
                    if (cursor.moveToFirst()) {
                        JSObject firstRow = new JSObject();
                        for (int i = 0; i < columns.length; i++) {
                            try {
                                String val = cursor.getString(i);
                                firstRow.put(columns[i], val != null ? val : "null");
                            } catch (Exception e) {
                                firstRow.put(columns[i], "<binary>");
                            }
                        }
                        result.put("firstRow", firstRow);
                    }
                    cursor.close();
                } else {
                    result.put("accessible", false);
                    result.put("error", "Cursor is null");
                }
            } catch (SecurityException e) {
                result.put("accessible", false);
                result.put("error", "Permission Denied");
            } catch (Exception e) {
                result.put("accessible", false);
                result.put("error", e.getMessage());
            }
            
            results.put(result);
            Log.d("TwahhPlugin", "Probed " + uri);
        }
        
        JSObject ret = new JSObject();
        ret.put("results", results);
        call.resolve(ret);
    }

    @PluginMethod
    public void dumpSystemSettings(PluginCall call) {
        JSArray allSettings = new JSArray();
        JSArray carSettings = new JSArray();
        
        String[] carKeywords = {"can", "car", "speed", "door", "light", "rpm", "fuel", "temp", "gear", "brake", "engine", "vehicle", "obd", "ecu", "mcu"};
        
        try {
            android.database.Cursor cursor = getContext().getContentResolver().query(
                android.net.Uri.parse("content://settings/system"),
                null, null, null, null
            );
            
            if (cursor != null) {
                int nameIdx = cursor.getColumnIndex("name");
                int valueIdx = cursor.getColumnIndex("value");
                
                while (cursor.moveToNext()) {
                    String name = cursor.getString(nameIdx);
                    String value = cursor.getString(valueIdx);
                    
                    JSObject setting = new JSObject();
                    setting.put("name", name);
                    setting.put("value", value != null ? value : "null");
                    allSettings.put(setting);
                    
                    String nameLower = name.toLowerCase();
                    for (String kw : carKeywords) {
                        if (nameLower.contains(kw)) {
                            setting.put("matchedKeyword", kw);
                            carSettings.put(setting);
                            break;
                        }
                    }
                }
                cursor.close();
            }
            
            JSObject ret = new JSObject();
            ret.put("totalCount", allSettings.length());
            ret.put("carRelatedCount", carSettings.length());
            ret.put("carSettings", carSettings);
            call.resolve(ret);
            
        } catch (Exception e) {
            call.reject("Failed to dump settings: " + e.getMessage());
        }
    }

    @PluginMethod
    public void getAllCarSettings(PluginCall call) {
        JSObject settings = new JSObject();
        
        String[] carKeys = {
            "DOOR", "SYSTEM_DOOR", "SYSTEM_DOOR2",
            "TWCameraBrake", "CAR_TYPE", "MCUID",
            "TEMP_MODE", "SHOW_TEMPERATURE", "TEMP_CONVERT",
            "color_temp", "notification_light_pulse",
            "MCUOHTER", "MCU_LOCK", "hicar_screen_size",
            "CarChooseUpdateNewTime"
        };
        
        try {
            android.database.Cursor cursor = getContext().getContentResolver().query(
                android.net.Uri.parse("content://settings/system"),
                null, null, null, null
            );
            
            if (cursor != null) {
                int nameIdx = cursor.getColumnIndex("name");
                int valueIdx = cursor.getColumnIndex("value");
                
                while (cursor.moveToNext()) {
                    String name = cursor.getString(nameIdx);
                    String value = cursor.getString(valueIdx);
                    
                    for (String key : carKeys) {
                        if (name.equals(key)) {
                            settings.put(name, value != null ? value : "null");
                            break;
                        }
                    }
                }
                cursor.close();
            }
            
            call.resolve(settings);
            
        } catch (Exception e) {
            call.reject("Failed to get car settings: " + e.getMessage());
        }
    }

    private Thread watcherThread;
    private boolean isWatcherRunning = false;
    private java.util.HashMap<String, String> lastValues = new java.util.HashMap<>();

    @PluginMethod
    public void startWatchingCarSettings(PluginCall call) {
        if (isWatcherRunning) {
            call.resolve();
            return;
        }
        
        isWatcherRunning = true;
        watcherThread = new Thread(() -> {
            while (isWatcherRunning) {
                try {
                    android.database.Cursor cursor = getContext().getContentResolver().query(
                        android.net.Uri.parse("content://settings/system"),
                        null, null, null, null
                    );
                    
                    if (cursor != null) {
                        int nameIdx = cursor.getColumnIndex("name");
                        int valueIdx = cursor.getColumnIndex("value");
                        
                        while (cursor.moveToNext()) {
                            String name = cursor.getString(nameIdx);
                            String value = cursor.getString(valueIdx);
                            if (value == null) value = "null";
                            
                            // Watch ALL settings, not just car keys
                            String lastValue = lastValues.get(name);
                            if (lastValue == null) {
                                // First run - just store the value
                                lastValues.put(name, value);
                            } else if (!lastValue.equals(value)) {
                                // Value changed!
                                JSObject event = new JSObject();
                                event.put("key", name);
                                event.put("oldValue", lastValue);
                                event.put("newValue", value);
                                notifyListeners("settingChanged", event);
                                notifyListeners("carSettingChanged", event);
                                lastValues.put(name, value);
                                Log.d("TwahhPlugin", "SETTING CHANGED: " + name + " = " + value);
                                
                                // TTS for important changes
                                if (name.toUpperCase().contains("REVERSE")) {
                                    speakNow("1".equals(value) ? "Reverse engaged" : "Reverse disengaged");
                                } else if (name.toUpperCase().contains("DOOR")) {
                                    speakNow("Door status changed");
                                } else if (name.toUpperCase().contains("BRAKE")) {
                                    speakNow("1".equals(value) ? "Brake on" : "Brake off");
                                }
                            }
                        }
                        cursor.close();
                    }
                    Thread.sleep(100); // Poll faster for better capture
                } catch (InterruptedException e) {
                    break;
                } catch (Exception e) {
                    Log.e("TwahhPlugin", "Watcher error: " + e.getMessage());
                }
            }
        });
        watcherThread.start();
        Log.d("TwahhPlugin", "ALL SETTINGS WATCHER STARTED");
        call.resolve();
    }

    @PluginMethod
    public void stopWatchingCarSettings(PluginCall call) {
        isWatcherRunning = false;
        if (watcherThread != null) {
            watcherThread.interrupt();
        }
        call.resolve();
    }

    @PluginMethod
    public void scanPackageIntentFilters(PluginCall call) {
        JSArray results = new JSArray();
        
        String[] targetPackages = {
            "com.tw.carinfoservice",
            "com.tw.car",
            "com.tw.carchoose",
            "com.tw.carapps",
            "com.dofun.carassistant.car",
            "com.dofun.carsetting"
        };
        
        for (String pkg : targetPackages) {
            try {
                android.content.pm.PackageInfo pkgInfo = getContext().getPackageManager().getPackageInfo(pkg, 
                    PackageManager.GET_RECEIVERS | PackageManager.GET_SERVICES | PackageManager.GET_ACTIVITIES);
                
                JSObject pkgResult = new JSObject();
                pkgResult.put("package", pkg);
                
                JSArray receivers = new JSArray();
                if (pkgInfo.receivers != null) {
                    for (android.content.pm.ActivityInfo receiver : pkgInfo.receivers) {
                        JSObject r = new JSObject();
                        r.put("name", receiver.name);
                        r.put("exported", receiver.exported);
                        receivers.put(r);
                    }
                }
                pkgResult.put("receivers", receivers);
                
                JSArray services = new JSArray();
                if (pkgInfo.services != null) {
                    for (android.content.pm.ServiceInfo service : pkgInfo.services) {
                        JSObject s = new JSObject();
                        s.put("name", service.name);
                        s.put("exported", service.exported);
                        services.put(s);
                    }
                }
                pkgResult.put("services", services);
                
                results.put(pkgResult);
            } catch (PackageManager.NameNotFoundException e) {
                // Package not installed, skip
            }
        }
        
        JSObject ret = new JSObject();
        ret.put("packages", results);
        call.resolve(ret);
    }

    @PluginMethod
    public void startDeepBroadcastMonitor(PluginCall call) {
        IntentFilter filter = new IntentFilter();
        
        // Standard system
        filter.addAction(Intent.ACTION_SCREEN_ON);
        filter.addAction(Intent.ACTION_SCREEN_OFF);
        filter.addAction(Intent.ACTION_USER_PRESENT);
        
        // TW / HiWorld specific
        filter.addAction("com.tw.broadcast");
        filter.addAction("com.tw.carinfoservice.action");
        filter.addAction("com.tw.car.action");
        filter.addAction("com.tw.canbus");
        filter.addAction("com.tw.mcu");
        filter.addAction("com.tw.action.DOOR");
        filter.addAction("com.tw.action.ACC");
        filter.addAction("com.tw.action.REVERSE");
        filter.addAction("com.tw.action.LIGHT");
        filter.addAction("com.tw.action.CANBUS");
        
        // HiWorld
        filter.addAction("com.hiworld.broadcast");
        filter.addAction("com.hiworld.canbus");
        filter.addAction("com.hiworld.mcu");
        
        // LHZ / LHL
        filter.addAction("com.lhz.broadcast");
        filter.addAction("com.lhz.canbus");
        filter.addAction("com.lhl.broadcast");
        filter.addAction("com.lhl.canbus");
        
        // EX
        filter.addAction("com.ex.canbus");
        filter.addAction("com.ex.broadcast");
        
        // DoFun
        filter.addAction("com.dofun.broadcast");
        filter.addAction("com.dofun.canbus");
        filter.addAction("com.dofun.carassistant.action");
        
        // XYAUTO / Allwinner
        filter.addAction("com.xyauto.broadcast");
        filter.addAction("com.xyauto.broadcast.ACC_EVENT");
        filter.addAction("com.xyauto.broadcast.canbus.RECEIVE");
        filter.addAction("com.xyauto.broadcast.CAN_AIR_INFO");
        filter.addAction("com.xyauto.broadcast.CAN_DOOR_INFO");
        
        // Generic patterns
        filter.addAction("CANBUS_EVENT");
        filter.addAction("MCU_EVENT");
        filter.addAction("CAR_EVENT");
        filter.addAction("ACC_ON");
        filter.addAction("ACC_OFF");
        filter.addAction("REVERSE_ON");
        filter.addAction("REVERSE_OFF");
        
        BroadcastReceiver deepReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                String action = intent.getAction();
                if (Intent.ACTION_BATTERY_CHANGED.equals(action)) return;
                
                JSObject ret = new JSObject();
                ret.put("action", action);
                ret.put("timestamp", System.currentTimeMillis());
                
                Bundle extras = intent.getExtras();
                if (extras != null) {
                    JSObject data = new JSObject();
                    for (String key : extras.keySet()) {
                        Object value = extras.get(key);
                        if (value instanceof int[]) {
                            int[] arr = (int[]) value;
                            StringBuilder sb = new StringBuilder("[");
                            for (int i = 0; i < arr.length; i++) {
                                sb.append(arr[i]);
                                if (i < arr.length - 1) sb.append(",");
                            }
                            sb.append("]");
                            data.put(key, sb.toString());
                        } else if (value instanceof byte[]) {
                            byte[] arr = (byte[]) value;
                            StringBuilder sb = new StringBuilder("[bytes:");
                            for (int i = 0; i < Math.min(arr.length, 16); i++) {
                                sb.append(String.format("%02X", arr[i]));
                            }
                            if (arr.length > 16) sb.append("...");
                            sb.append("]");
                            data.put(key, sb.toString());
                        } else {
                            data.put(key, value != null ? value.toString() : "null");
                        }
                    }
                    ret.put("extras", data);
                }
                
                Log.d("TwahhPlugin", "DEEP BROADCAST: " + action);
                notifyListeners("deepBroadcast", ret);
            }
        };
        
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.TIRAMISU) {
            getContext().registerReceiver(deepReceiver, filter, Context.RECEIVER_EXPORTED);
        } else {
            getContext().registerReceiver(deepReceiver, filter);
        }
        
        Log.d("TwahhPlugin", "DEEP BROADCAST MONITOR registered with " + filter.countActions() + " actions");
        
        JSObject ret = new JSObject();
        ret.put("actionsRegistered", filter.countActions());
        call.resolve(ret);
    }

    // Super aggressive sniffer - captures EVERYTHING
    private Thread aggressiveSnifferThread;
    private boolean aggressiveSnifferRunning = false;
    private java.util.HashMap<String, String> allSettingsCache = new java.util.HashMap<>();
    private java.io.FileWriter snifferLogFile;
    
    @PluginMethod
    public void startSuperAggressiveSniffer(PluginCall call) {
        if (aggressiveSnifferRunning) {
            call.resolve();
            return;
        }
        
        aggressiveSnifferRunning = true;
        
        // Open log file - use structured TWLogs directory
        try {
            // Base paths
            java.util.List<String> pathList = new java.util.ArrayList<>();
            pathList.add("/storage/emulated/0/TWLogs/Sniffer/twahh_canbus_dump.txt");
            pathList.add("/sdcard/TWLogs/Sniffer/twahh_canbus_dump.txt");
            pathList.add("/storage/usb1/TWLogs/Sniffer/twahh_canbus_dump.txt");
            pathList.add("/usb1/TWLogs/Sniffer/twahh_canbus_dump.txt");
            pathList.add("/mnt/usb_storage/TWLogs/Sniffer/twahh_canbus_dump.txt");
            
            // App-specific fallback
            java.io.File appFile = getContext().getExternalFilesDir(null);
            if (appFile != null) {
                pathList.add(new java.io.File(appFile, "TWLogs/Sniffer/twahh_canbus_dump.txt").getAbsolutePath());
            }

            for (String path : pathList) {
                try {
                    java.io.File f = new java.io.File(path);
                    ensureDirForFile(f); // Ensure parent directories exist
                    java.io.File parent = f.getParentFile();
                    if (parent != null && parent.exists() && parent.canWrite()) {
                        snifferLogFile = new java.io.FileWriter(path, true);
                        snifferLogFile.write("\\n\\n=== NEW SESSION " + new java.util.Date() + " ===\\n");
                        snifferLogFile.write("Log file: " + path + "\\n");
                        snifferLogFile.flush();
                        Log.d("TwahhPlugin", "SNIFFER LOG: " + path);
                        break;
                    }
                } catch (Exception e) {
                    // Try next path
                }
            }
        } catch (Exception e) {
            Log.e("TwahhPlugin", "Cannot open log file: " + e.getMessage());
        }
        
        // Register for EVERY broadcast we can think of
        IntentFilter megaFilter = new IntentFilter();
        
        // TW specific
        String[] twActions = {
            "com.tw.broadcast", "com.tw.carinfoservice.action", "com.tw.car.action",
            "com.tw.canbus", "com.tw.mcu", "com.tw.door", "com.tw.reverse", "com.tw.acc",
            "com.tw.action.DOOR", "com.tw.action.ACC", "com.tw.action.REVERSE",
            "com.tw.action.LIGHT", "com.tw.action.CANBUS", "com.tw.action.MCU",
            "com.tw.action.TEMPERATURE", "com.tw.action.VOLTAGE", "com.tw.action.RADAR",
            "com.tw.carinfoservice.DOOR_CHANGED", "com.tw.carinfoservice.ACC_CHANGED",
            "com.tw.carinfoservice.CANBUS_DATA", "com.tw.carinfoservice.MCU_DATA",
            "com.tw.car.DOOR_STATUS", "com.tw.car.CANBUS_UPDATE"
        };
        for (String a : twActions) megaFilter.addAction(a);
        
        // HiWorld / LHL specific
        String[] hwActions = {
            "com.hiworld.broadcast", "com.hiworld.canbus", "com.hiworld.mcu",
            "com.hiworld.door", "com.hiworld.acc", "com.lhl.broadcast", "com.lhl.canbus",
            "com.lhz.broadcast", "com.lhz.canbus", "com.ex.canbus", "com.ex.broadcast"
        };
        for (String a : hwActions) megaFilter.addAction(a);
        
        // DoFun
        String[] dfActions = {
            "com.dofun.broadcast", "com.dofun.canbus", "com.dofun.carassistant.action",
            "com.dofun.carsetting.action", "com.dofun.car.status"
        };
        for (String a : dfActions) megaFilter.addAction(a);
        
        // XYAUTO / Allwinner
        String[] xyActions = {
            "com.xyauto.broadcast", "com.xyauto.broadcast.ACC_EVENT",
            "com.xyauto.broadcast.canbus.RECEIVE", "com.xyauto.broadcast.CAN_AIR_INFO",
            "com.xyauto.broadcast.CAN_DOOR_INFO", "com.xyauto.broadcast.CAN_RADAR_INFO",
            "com.xyauto.broadcast.MCU_EVENT", "com.xyauto.canbus"
        };
        for (String a : xyActions) megaFilter.addAction(a);
        
        // Generic CANbus
        String[] genericActions = {
            "CANBUS_EVENT", "MCU_EVENT", "CAR_EVENT", "ACC_ON", "ACC_OFF",
            "REVERSE_ON", "REVERSE_OFF", "DOOR_OPEN", "DOOR_CLOSE",
            "android.intent.action.MEDIA_BUTTON", "android.media.VOLUME_CHANGED_ACTION",
            "android.intent.action.SCREEN_ON", "android.intent.action.SCREEN_OFF"
        };
        for (String a : genericActions) megaFilter.addAction(a);
        
        BroadcastReceiver megaReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                String action = intent.getAction();
                if (Intent.ACTION_BATTERY_CHANGED.equals(action)) return;
                
                StringBuilder logLine = new StringBuilder();
                logLine.append("[BROADCAST] ").append(action);
                
                Bundle extras = intent.getExtras();
                if (extras != null && !extras.isEmpty()) {
                    logLine.append(" {");
                    for (String key : extras.keySet()) {
                        Object value = extras.get(key);
                        String valStr;
                        if (value instanceof int[]) {
                            int[] arr = (int[]) value;
                            StringBuilder sb = new StringBuilder("[");
                            for (int i = 0; i < arr.length; i++) {
                                sb.append(arr[i]);
                                if (i < arr.length - 1) sb.append(",");
                            }
                            sb.append("]");
                            valStr = sb.toString();
                        } else if (value instanceof byte[]) {
                            byte[] arr = (byte[]) value;
                            StringBuilder sb = new StringBuilder("BYTES[");
                            for (int i = 0; i < Math.min(arr.length, 32); i++) {
                                sb.append(String.format("%02X", arr[i]));
                            }
                            if (arr.length > 32) sb.append("...");
                            sb.append("]");
                            valStr = sb.toString();
                        } else {
                            valStr = value != null ? value.toString() : "null";
                        }
                        logLine.append(key).append("=").append(valStr).append(", ");
                    }
                    logLine.append("}");
                }
                
                Log.d("CANBUS_DUMP", logLine.toString());
                writeToSnifferLog(logLine.toString());
                
                JSObject ret = new JSObject();
                ret.put("type", "broadcast");
                ret.put("action", action);
                ret.put("raw", logLine.toString());
                notifyListeners("canbusDump", ret);
            }
        };
        
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.TIRAMISU) {
            getContext().registerReceiver(megaReceiver, megaFilter, Context.RECEIVER_EXPORTED);
        } else {
            getContext().registerReceiver(megaReceiver, megaFilter);
        }
        
        Log.d("TwahhPlugin", "MEGA BROADCAST registered: " + megaFilter.countActions() + " actions");
        writeToSnifferLog("MEGA BROADCAST registered: " + megaFilter.countActions() + " actions");
        
        // Start aggressive thread to poll ALL settings + content providers
        aggressiveSnifferThread = new Thread(() -> {
            String[] settingsUris = {
                "content://settings/system",
                "content://settings/secure",
                "content://settings/global"
            };
            
            while (aggressiveSnifferRunning) {
                try {
                    // Poll all settings types
                    for (String uriStr : settingsUris) {
                        try {
                            android.database.Cursor cursor = getContext().getContentResolver().query(
                                android.net.Uri.parse(uriStr), null, null, null, null
                            );
                            
                            if (cursor != null) {
                                int nameIdx = cursor.getColumnIndex("name");
                                int valueIdx = cursor.getColumnIndex("value");
                                
                                while (cursor.moveToNext()) {
                                    String name = cursor.getString(nameIdx);
                                    String value = cursor.getString(valueIdx);
                                    if (value == null) value = "null";
                                    
                                    String cacheKey = uriStr + ":" + name;
                                    String lastValue = allSettingsCache.get(cacheKey);
                                    
                                    if (lastValue == null) {
                                        allSettingsCache.put(cacheKey, value);
                                    } else if (!lastValue.equals(value)) {
                                        String logLine = "[SETTING] " + uriStr.replace("content://settings/", "").toUpperCase() + 
                                                         " | " + name + ": " + lastValue + " -> " + value;
                                        Log.d("CANBUS_DUMP", logLine);
                                        writeToSnifferLog(logLine);
                                        
                                        allSettingsCache.put(cacheKey, value);
                                        
                                        JSObject event = new JSObject();
                                        event.put("type", "setting");
                                        event.put("uri", uriStr);
                                        event.put("key", name);
                                        event.put("oldValue", lastValue);
                                        event.put("newValue", value);
                                        notifyListeners("canbusDump", event);
                                        notifyListeners("settingChanged", event);
                                    }
                                }
                                cursor.close();
                            }
                        } catch (Exception e) {
                            // Some URIs may not be accessible
                        }
                    }
                    
                    // ContentProvider queries removed - they all fail on this unit
                    // Data comes through AIDL service binding instead
                    
                    Thread.sleep(500); // Poll at 500ms to reduce log noise
                } catch (InterruptedException e) {
                    break;
                } catch (Exception e) {
                    Log.e("TwahhPlugin", "Aggressive sniffer error: " + e.getMessage());
                }
            }
        });
        aggressiveSnifferThread.start();
        
        // Try to bind to CarService
        tryBindCarService();
        
        // Start serial port sniffer for CANbox protocol
        // Based on research: Raise/HiWorld uses 38400 baud, header 0x2E
        startSerialSniffer();
        
        Log.d("TwahhPlugin", "SUPER AGGRESSIVE SNIFFER STARTED");
        writeToSnifferLog("SUPER AGGRESSIVE SNIFFER STARTED - polling at 500ms");
        
        JSObject ret = new JSObject();
        ret.put("status", "running");
        ret.put("broadcastActions", megaFilter.countActions());
        ret.put("logFile", "/storage/emulated/0/twahh_canbus_dump.txt");
        call.resolve(ret);
    }
    
    private void tryBindCarService() {
        // Try to bind to the TW CarService
        String[] serviceNames = {
            "com.tw.carinfoservice/.CarService",
            "com.tw.car/.CarService",
            "com.dofun.carassistant.car/.service.CarService"
        };
        
        for (String svcName : serviceNames) {
            try {
                String[] parts = svcName.split("/");
                Intent bindIntent = new Intent();
                bindIntent.setComponent(new ComponentName(parts[0], parts[0] + parts[1]));
                
                android.content.ServiceConnection conn = new android.content.ServiceConnection() {
                    @Override
                    public void onServiceConnected(ComponentName name, android.os.IBinder service) {
                        String msg = "BOUND TO SERVICE: " + name.flattenToString();
                        Log.d("CANBUS_DUMP", msg);
                        writeToSnifferLog(msg);
                        speakNow("Connected to " + name.getShortClassName());
                        
                        // Probe AIDL with various interface descriptors
                        // AIDL requires writeInterfaceToken before transact
                        String pkg = name.getPackageName();
                        String cls = name.getClassName();
                        
                        // Build list of possible interface names
                        String[] possibleInterfaces = {
                            pkg + ".ICarService",           // com.tw.carinfoservice.ICarService
                            pkg + ".ICarInfoService",       // com.tw.carinfoservice.ICarInfoService  
                            pkg + ".aidl.ICarService",      // com.tw.carinfoservice.aidl.ICarService
                            cls.replace("Service", ""),     // com.tw.carinfoservice.Car (Stub pattern)
                            "com.tw.car.ICarService",       // Cross-package
                            "com.tw.ICarService",           // Short form
                            "ICarService",                  // No package
                            "com.dofun.carassistant.car.service.ICarService",
                            "com.dofun.carassistant.ICarService",
                            ""                               // Empty (raw transact)
                        };
                        
                        writeToSnifferLog("PROBING SERVICE: " + name.flattenToString());
                        writeToSnifferLog("Trying " + possibleInterfaces.length + " interface descriptors...");
                        
                        for (String iface : possibleInterfaces) {
                            try {
                                android.os.Parcel data = android.os.Parcel.obtain();
                                android.os.Parcel reply = android.os.Parcel.obtain();
                                
                                // Write interface token if not empty
                                if (iface.length() > 0) {
                                    data.writeInterfaceToken(iface);
                                }
                                
                                // Try first few transaction codes
                                for (int code = 1; code <= 10; code++) {
                                    try {
                                        reply.setDataPosition(0);
                                        data.setDataPosition(0);
                                        if (iface.length() > 0) {
                                            data.writeInterfaceToken(iface);
                                        }
                                        
                                        boolean result = service.transact(code, data, reply, 0);
                                        
                                        if (reply.dataSize() > 0) {
                                            reply.setDataPosition(0);
                                            
                                            // Check for exception (first 4 bytes = -1 means error)
                                            int status = reply.readInt();
                                            
                                            if (status != -1) {
                                                // SUCCESS! We found the right interface
                                                reply.setDataPosition(0);
                                                byte[] bytes = reply.marshall();
                                                
                                                StringBuilder hex = new StringBuilder();
                                                for (int i = 0; i < Math.min(bytes.length, 64); i++) {
                                                    hex.append(String.format("%02X ", bytes[i]));
                                                }
                                                
                                                String logLine = "[AIDL SUCCESS!] IFACE=" + iface + " TX=" + code + 
                                                                " STATUS=" + status + " SIZE=" + reply.dataSize() +
                                                                "\\n  HEX: " + hex.toString();
                                                Log.d("CANBUS_DUMP", logLine);
                                                writeToSnifferLog(logLine);
                                                
                                                // Try to parse common data structures
                                                reply.setDataPosition(4); // Skip status
                                                try {
                                                    // Try reading as int
                                                    int intVal = reply.readInt();
                                                    writeToSnifferLog("  DATA INT[0]: " + intVal);
                                                } catch (Exception ex) {}
                                                
                                                JSObject event = new JSObject();
                                                event.put("type", "aidl_success");
                                                event.put("interface", iface);
                                                event.put("code", code);
                                                event.put("status", status);
                                                event.put("hex", hex.toString());
                                                notifyListeners("canbusDump", event);
                                            } else {
                                                // Still an error, log it briefly
                                                if (code == 1) {
                                                    writeToSnifferLog("[AIDL FAIL] IFACE=" + iface + " (incorrect interface)");
                                                }
                                            }
                                        }
                                    } catch (android.os.RemoteException re) {
                                        // Expected for unsupported codes
                                    } catch (Exception e) {
                                        // Other error
                                    }
                                }
                                
                                data.recycle();
                                reply.recycle();
                            } catch (Exception e) {
                                writeToSnifferLog("[AIDL ERROR] IFACE=" + iface + " ERR=" + e.getMessage());
                            }
                        }
                        
                        // Also try to get the interface descriptor directly from the binder
                        try {
                            String descriptor = service.getInterfaceDescriptor();
                            if (descriptor != null && descriptor.length() > 0) {
                                writeToSnifferLog("[BINDER] getInterfaceDescriptor() = " + descriptor);
                                
                                // Now try transact with the real descriptor
                                android.os.Parcel data = android.os.Parcel.obtain();
                                android.os.Parcel reply = android.os.Parcel.obtain();
                                data.writeInterfaceToken(descriptor);
                                
                                for (int code = 1; code <= 20; code++) {
                                    try {
                                        data.setDataPosition(0);
                                        data.writeInterfaceToken(descriptor);
                                        reply.setDataPosition(0);
                                        
                                        service.transact(code, data, reply, 0);
                                        if (reply.dataSize() > 0) {
                                            reply.setDataPosition(0);
                                            int status = reply.readInt();
                                            if (status != -1) {
                                                byte[] bytes = reply.marshall();
                                                StringBuilder hex = new StringBuilder();
                                                for (int i = 0; i < Math.min(bytes.length, 64); i++) {
                                                    hex.append(String.format("%02X ", bytes[i]));
                                                }
                                                String logLine = "[AIDL REAL!] DESC=" + descriptor + " TX=" + code + 
                                                                " SIZE=" + reply.dataSize() + "\\n  HEX: " + hex.toString();
                                                writeToSnifferLog(logLine);
                                                
                                                JSObject aidlEvent = new JSObject();
                                                aidlEvent.put("type", "aidl_real");
                                                aidlEvent.put("desc", descriptor);
                                                aidlEvent.put("tx", code);
                                                aidlEvent.put("hex", hex.toString());
                                                notifyListeners("canbusDump", aidlEvent);
                                            }
                                        }
                                    } catch (Exception e) {}
                                }
                                
                                data.recycle();
                                reply.recycle();
                            }
                        } catch (Exception e) {
                            writeToSnifferLog("[BINDER] getInterfaceDescriptor failed: " + e.getMessage());
                        }
                    }
                    
                    @Override
                    public void onServiceDisconnected(ComponentName name) {
                        Log.d("CANBUS_DUMP", "SERVICE DISCONNECTED: " + name.flattenToString());
                    }
                };
                
                boolean bound = getContext().bindService(bindIntent, conn, Context.BIND_AUTO_CREATE);
                if (bound) {
                    writeToSnifferLog("BIND ATTEMPT to " + svcName + ": SUCCESS");
                } else {
                    writeToSnifferLog("BIND ATTEMPT to " + svcName + ": FAILED");
                }
            } catch (Exception e) {
                writeToSnifferLog("BIND ATTEMPT to " + svcName + ": ERROR - " + e.getMessage());
            }
        }
    }
    
    private void startSerialSniffer() {
        // Scan for available tty ports and try to read CANbox data
        // CANbox uses: 38400 baud, 8N1, header 0x2E
        writeToSnifferLog("=== SERIAL TTY SNIFFER ===");
        
        new Thread(() -> {
            // List of common serial ports for CANbox communication
            String[] possiblePorts = {
                "/dev/ttyS0",
                "/dev/ttyS1", 
                "/dev/ttyS2",
                "/dev/ttyS3",
                "/dev/ttyS4",
                "/dev/ttyS5",
                "/dev/ttyMCU",     // Some units use named MCU port
                "/dev/tty_canbus", // Some units use named canbus port
                "/dev/ttyUSB0"     // USB serial
            };
            
            // First, list all available serial ports
            try {
                java.io.File devDir = new java.io.File("/dev");
                String[] files = devDir.list((dir, name) -> name.startsWith("tty"));
                if (files != null) {
                    StringBuilder portList = new StringBuilder("[SERIAL] Available tty ports: ");
                    int count = 0;
                    for (String f : files) {
                        if (count < 20) { // Limit output
                            portList.append(f).append(" ");
                            count++;
                        }
                    }
                    if (files.length > 20) portList.append("... (").append(files.length).append(" total)");
                    writeToSnifferLog(portList.toString());
                }
            } catch (Exception e) {
                writeToSnifferLog("[SERIAL] Cannot list /dev: " + e.getMessage());
            }
            
            // Try to read from each port using stty + cat (requires root)
            for (String port : possiblePorts) {
                java.io.File portFile = new java.io.File(port);
                if (!portFile.exists()) continue;
                
                writeToSnifferLog("[SERIAL] Trying port: " + port);
                
                // Check if we can read it
                try {
                    // Try using su to read the serial port
                    String[] bauds = {"38400", "19200", "115200", "9600"};
                    
                    for (String baud : bauds) {
                        try {
                            // Set baud rate and read data - increase sample size and time
                            ProcessBuilder pb = new ProcessBuilder("su", "-c", 
                                "stty -F " + port + " " + baud + " raw -echo; timeout 2 cat " + port + " | xxd -p -c 32");
                            pb.redirectErrorStream(true);
                            Process proc = pb.start();
                            
                            java.io.BufferedReader reader = new java.io.BufferedReader(
                                new java.io.InputStreamReader(proc.getInputStream()));
                            
                            StringBuilder output = new StringBuilder();
                            String line;
                            while ((line = reader.readLine()) != null) {
                                output.append(line);
                            }
                            
                            proc.waitFor(3, java.util.concurrent.TimeUnit.SECONDS);
                            proc.destroyForcibly();
                            
                            if (output.length() > 0) {
                                String result = output.toString().toLowerCase();
                                boolean foundHeader = false;
                                
                                // Check for common HiWorld/CANbox headers
                                // 2e = HiWorld standard
                                // 5aa5 = Alternative HiWorld/MCU
                                // a55a = Sync
                                if (result.contains("2e") || result.contains("5aa5") || result.contains("a55a")) {
                                    writeToSnifferLog("[SERIAL CAN!] Match found on " + port + " @ " + baud + "! Data: " + result.substring(0, Math.min(result.length(), 64)));
                                    foundHeader = true;
                                } else {
                                    writeToSnifferLog("[SERIAL] Activity on " + port + " @ " + baud + ": " + result.substring(0, Math.min(result.length(), 100)));
                                }
                                
                                JSObject event = new JSObject();
                                event.put("type", "serial");
                                event.put("port", port);
                                event.put("baud", baud);
                                event.put("hex", result);
                                event.put("match", foundHeader);
                                notifyListeners("canbusDump", event);
                            }
                        } catch (Exception e) {
                            // Port access failed at this baud
                        }
                    }
                } catch (Exception e) {
                    writeToSnifferLog("[SERIAL] Error reading " + port + ": " + e.getMessage());
                }
            }
            
            // Also try to find the MCU interface via dmesg/logcat
            try {
                ProcessBuilder pb = new ProcessBuilder("su", "-c", "dmesg | grep -iE 'tty|uart|serial|mcu'");
                pb.redirectErrorStream(true);
                Process proc = pb.start();
                
                java.io.BufferedReader reader = new java.io.BufferedReader(
                    new java.io.InputStreamReader(proc.getInputStream()));
                
                StringBuilder output = new StringBuilder();
                String line;
                int count = 0;
                while ((line = reader.readLine()) != null && count < 10) {
                    output.append(line).append("\\n");
                    count++;
                }
                
                proc.waitFor(2, java.util.concurrent.TimeUnit.SECONDS);
                proc.destroyForcibly();
                
                if (output.length() > 0) {
                    writeToSnifferLog("[DMESG UART] " + output.toString());
                }
            } catch (Exception e) {
                writeToSnifferLog("[DMESG] Failed: " + e.getMessage());
            }
            
            // Look for MCU communication via /proc
            try {
                ProcessBuilder pb = new ProcessBuilder("su", "-c", "cat /proc/tty/driver/serial 2>/dev/null");
                pb.redirectErrorStream(true);
                Process proc = pb.start();
                
                java.io.BufferedReader reader = new java.io.BufferedReader(
                    new java.io.InputStreamReader(proc.getInputStream()));
                
                StringBuilder output = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line).append("\\n");
                }
                
                proc.waitFor(2, java.util.concurrent.TimeUnit.SECONDS);
                proc.destroyForcibly();
                
                if (output.length() > 0) {
                    writeToSnifferLog("[PROC SERIAL] " + output.toString());
                }
            } catch (Exception e) {
                // Not available
            }
            
            writeToSnifferLog("=== SERIAL SCAN COMPLETE ===");
        }).start();
    }
    
    // ============================================
    // TEXT-TO-SPEECH IMPLEMENTATION
    // ============================================
    
    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS) {
            tts.setLanguage(Locale.US);
            tts.setSpeechRate(1.1f);
            ttsReady = true;
            Log.d("TwahhPlugin", "TTS Engine Ready!");
            // Welcome announcement - delay for 2 seconds to ensure hardware ready
            new android.os.Handler(android.os.Looper.getMainLooper()).postDelayed(() -> {
                speakNow("TW Dashboard initialized. Ready for vehicle diagnostics.");
            }, 2000);
        } else {
            Log.e("TwahhPlugin", "TTS Init failed: " + status);
        }
    }
    
    private void speakNow(String text) {
        if (ttsReady && tts != null) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                tts.speak(text, TextToSpeech.QUEUE_ADD, null, "twahh_" + System.currentTimeMillis());
            } else {
                tts.speak(text, TextToSpeech.QUEUE_ADD, null);
            }
            addLog("TTS: " + text);
        }
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text", "");
        if (text.isEmpty()) {
            call.reject("No text provided");
            return;
        }
        speakNow(text);
        JSObject ret = new JSObject();
        ret.put("spoken", true);
        ret.put("text", text);
        call.resolve(ret);
    }

    @PluginMethod
    public void scanNetwork(PluginCall call) {
        addLog("Starting Network Scan...");
        new Thread(() -> {
            JSArray results = new JSArray();
            String subnet = "192.168.0.";
            int[] commonPorts = {35000, 23, 2000};
            
            for (int i = 1; i < 20; i++) {
                String ip = subnet + i;
                try {
                    java.net.InetAddress addr = java.net.InetAddress.getByName(ip);
                    if (addr.isReachable(100)) {
                        addLog("Ping success: " + ip);
                        JSObject dev = new JSObject();
                        dev.put("ip", ip);
                        dev.put("status", "reachable");
                        results.put(dev);
                        for(int p : commonPorts) {
                             try {
                                 Socket s = new Socket();
                                 s.connect(new InetSocketAddress(ip, p), 100);
                                 s.close();
                                 addLog("  > Port Open: " + p);
                             } catch(Exception e) {}
                        }
                    }
                } catch (Exception e) {}
            }
            JSObject ret = new JSObject();
            ret.put("devices", results);
            notifyListeners("scanResult", ret);
            addLog("Network Scan Complete.");
            call.resolve();
        }).start();
    }
    
    @PluginMethod
    public void toggleRawSniffing(PluginCall call) {
        String target = call.getString("target", "elm327");
        boolean enable = call.getBoolean("enable", true);
        
        if ("elm327".equals(target)) {
            if (enable) {
                if (!elm327Connected) {
                    call.reject("ELM327 not connected. Connect first.");
                    return;
                }
                if (elm327Sniffing) {
                    call.resolve();
                    return;
                }
                startELMRawSniffing(call);
            } else {
                elm327Sniffing = false;
                speakNow("E L M raw sniffing stopped");
                call.resolve();
            }
        } else if ("hiworld".equals(target)) {
            hiworldSniffing = enable;
            if (enable) {
                startHiWorldRawSniffing(call);
            } else {
                hiworldSniffing = false;
                speakNow("Hi World raw sniffing stopped");
                call.resolve();
            }
        }
    }

    private void startELMRawSniffing(PluginCall call) {
        elm327Sniffing = true;
        speakNow("Starting E L M raw CAN monitor");
        
        new Thread(() -> {
            try {
                // Initialize raw log file
                String logPath = "/storage/emulated/0/TWLogs/OBD/elm327_can_dump.txt";
                java.io.File logFile = new java.io.File(logPath);
                ensureDirForFile(logFile);
                elmRawLog = new java.io.FileWriter(logPath, true);
                elmRawLog.write("\\n\\n=== ELM327 RAW SNIFF " + new java.util.Date() + " ===\\n");
                elmRawLog.flush();

                OutputStream out = (elm327BtSocket != null) ? elm327BtSocket.getOutputStream() : null;
                InputStream in = (elm327BtSocket != null) ? elm327BtSocket.getInputStream() : null;

                if (out == null || in == null) {
                    elm327Sniffing = false;
                    return;
                }

                out.write("ATH1\\r".getBytes());
                Thread.sleep(100);
                out.write("ATD1\\r".getBytes());
                Thread.sleep(100);
                out.write("ATS1\\r".getBytes());
                Thread.sleep(100);
                out.write("ATCAF0\\r".getBytes());
                Thread.sleep(100);
                out.write("ATMA\\r".getBytes());
                out.flush();

                writeToSnifferLog("[ELM SNIFF] Monitor All (ATMA) engaged.");

                byte[] buffer = new byte[2048];
                while (elm327Sniffing && elm327Connected) {
                    if (in.available() > 0) {
                        int len = in.read(buffer);
                        if (len > 0) {
                            String data = new String(buffer, 0, len);
                            if (elmRawLog != null) {
                                elmRawLog.write(data);
                                elmRawLog.flush();
                            }
                            if (data.trim().length() > 0) {
                                writeToSnifferLog("[ELM RAW] " + data.trim().replace("\\r", "\\\\r").replace("\\n", "\\\\n"));
                            }
                            if (data.contains("\\r")) {
                                JSObject event = new JSObject();
                                event.put("type", "elm_raw");
                                event.put("data", data.trim());
                                notifyListeners("canbusDump", event);
                            }
                        }
                    } else {
                        Thread.sleep(50);
                    }
                }
                out.write(" ".getBytes());
                Thread.sleep(1000);
                out.write("ATZ\\r".getBytes()); 
                if (elmRawLog != null) elmRawLog.close();
                writeToSnifferLog("[ELM SNIFF] Monitor All stopped.");

            } catch (Exception e) {
                addLog("ELM Sniff Error: " + e.getMessage());
                elm327Sniffing = false;
            }
        }).start();
        call.resolve();
    }

    private void startHiWorldRawSniffing(PluginCall call) {
        speakNow("Starting Hi World raw serial monitor");
        try {
            String logPath = "/storage/emulated/0/TWLogs/HiWorld/hiworld_can_dump.txt";
            java.io.File logFile = new java.io.File(logPath);
            ensureDirForFile(logFile);
            hiworldRawLog = new java.io.FileWriter(logPath, true);
            hiworldRawLog.write("\\n\\n=== HIWORLD RAW SNIFF " + new java.util.Date() + " ===\\n");
            hiworldRawLog.flush();
        } catch (Exception e) {}
        call.resolve();
    }
    
    @PluginMethod
    public void connectELM327(PluginCall call) {
        // Enforce Bluetooth Mode
        addLog("Initiating Bluetooth ELM327 Connection...");
        speakNow("Connecting to E L M 3 2 7 via Bluetooth");
        
        new Thread(() -> {
            try {
                BluetoothAdapter btAdapter = BluetoothAdapter.getDefaultAdapter();
                if (btAdapter == null) {
                    addLog("Bluetooth Adapter NOT FOUND");
                    speakNow("Bluetooth not available");
                    getActivity().runOnUiThread(() -> call.reject("Bluetooth not available"));
                    return;
                }
                if (!btAdapter.isEnabled()) {
                    addLog("Bluetooth disabled");
                    speakNow("Please enable Bluetooth");
                    getActivity().runOnUiThread(() -> call.reject("Bluetooth is disabled"));
                    return;
                }
                
                BluetoothDevice device = null;
                String providedMac = call.getString("mac", "");

                if (!providedMac.isEmpty()) {
                    device = btAdapter.getRemoteDevice(providedMac);
                    addLog("Using provided MAC: " + providedMac);
                } else {
                    addLog("Scanning paired devices...");
                    for (BluetoothDevice paired : btAdapter.getBondedDevices()) {
                        String name = paired.getName();
                        addLog("Paired: " + name + " [" + paired.getAddress() + "]");
                        if (name != null) {
                            String upperName = name.toUpperCase();
                            if (upperName.contains("OBD") || upperName.contains("ELM") || upperName.contains("V-LINK") || upperName.contains("OBDII")) {
                                device = paired;
                                addLog("MATCH FOUND: " + name);
                                break;
                            }
                        }
                    }
                }
                
                if (device == null) {
                    addLog("No ELM327 candidate found in paired list.");
                    addLog("Please pair your OBDII device in Android Settings first.");
                    speakNow("No E L M 3 2 7 device found in paired list");
                    getActivity().runOnUiThread(() -> call.reject("No ELM327/OBD device found. Please pair in settings."));
                    return;
                }
                
                addLog("Targeting Device: " + device.getName() + " [" + device.getAddress() + "]");
                
                UUID sppUuid = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");
                try {
                    elm327BtSocket = device.createRfcommSocketToServiceRecord(sppUuid);
                    elm327BtSocket.connect();
                } catch (IOException connectException) {
                    addLog("Standard SPP Connect Failed: " + connectException.getMessage());
                    addLog("Attempting Fallback (Reflection)...");
                    try {
                        java.lang.reflect.Method m = device.getClass().getMethod("createRfcommSocket", int.class);
                        elm327BtSocket = (BluetoothSocket) m.invoke(device, 1);
                        elm327BtSocket.connect();
                        addLog("Fallback Connect SUCCESS!");
                    } catch (Exception fallbackEx) {
                        addLog("Fallback Failed: " + fallbackEx.getMessage());
                        throw connectException;
                    }
                }

                elm327Connected = true;
                
                OutputStream out = elm327BtSocket.getOutputStream();
                initELMProtocol(out);
                addLog("Bluetooth Socket CONNECTED");
                speakNow("Bluetooth E L M 3 2 7 connected");
                startObdReaderThread(elm327BtSocket.getInputStream());

                final String deviceName = device.getName();
                getActivity().runOnUiThread(() -> {
                    JSObject ret = new JSObject();
                    ret.put("connected", true);
                    ret.put("mode", "bluetooth");
                    ret.put("device", deviceName);
                    call.resolve(ret);
                });

            } catch (Exception e) {
                addLog("Connect Final Error: " + e.getMessage());
                Log.e("TwahhPlugin", "ELM327 connect error: " + e.getMessage());
                speakNow("E L M 3 2 7 connection failed");
                getActivity().runOnUiThread(() -> call.reject("Connection failed: " + e.getMessage()));
            }
        }).start();
    }
    
    private void initELMProtocol(OutputStream out) throws Exception {
        addLog("Initializing ELM Protocol (ATZ, ATE0...)");
        out.write("ATZ\\r".getBytes());
        Thread.sleep(500);
        out.write("ATE0\\r".getBytes());
        Thread.sleep(200);
        out.write("ATL0\\r".getBytes());
        Thread.sleep(200);
        out.write("ATSP0\\r".getBytes());
        Thread.sleep(200);
    }

    private boolean isObdReaderRunning = false;
    private Thread obdReaderThread;

    private void startObdReaderThread(InputStream in) {
        if (isObdReaderRunning) return;
        isObdReaderRunning = true;
        addLog("Starting OBD Reader Thread");
        
        obdReaderThread = new Thread(() -> {
            byte[] buffer = new byte[1024];
            while (isObdReaderRunning && elm327Connected) {
                try {
                    int bytesRead = in.read(buffer);
                    if (bytesRead > 0) {
                        String data = new String(buffer, 0, bytesRead);
                        JSObject ret = new JSObject();
                        ret.put("data", data);
                        notifyListeners("obdData", ret);
                    } else if (bytesRead == -1) {
                         addLog("OBD Socket EOF");
                         break;
                    }
                } catch (IOException e) {
                    addLog("OBD Read Error: " + e.getMessage());
                    break;
                }
            }
            isObdReaderRunning = false;
            JSObject ret = new JSObject();
            ret.put("status", "disconnected");
            notifyListeners("obdStatus", ret);
            addLog("OBD Reader Thread Stopped");
        });
        obdReaderThread.start();
    }

    @PluginMethod
    public void sendOBD(PluginCall call) {
        String cmd = call.getString("cmd");
        OutputStream out = null;
        try {
            if (elm327Connected) {
                if (elm327BtSocket != null) {
                     out = elm327BtSocket.getOutputStream();
                }
            }
            if (out == null) {
                call.reject("Not Connected");
                return;
            }
            out.write((cmd + "\\r").getBytes());
            out.flush();
            call.resolve();
        } catch (IOException e) {
            addLog("Send Failed: " + e.getMessage());
            call.reject("Send Failed: " + e.getMessage());
        }
    }
    
    @PluginMethod
    public void readOBD(PluginCall call) {
         call.reject("Use event stream via connectELM327");
    }

    @PluginMethod
    public void disconnectELM327(PluginCall call) {
        isObdReaderRunning = false; 
        try {
            if (elm327BtSocket != null) {
                elm327BtSocket.close();
                elm327BtSocket = null;
            }
            elm327Connected = false;
            speakNow("E L M 3 2 7 disconnected");
            addLog("Disconnected.");
            
            JSObject ret = new JSObject();
            ret.put("disconnected", true);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Disconnect error: " + e.getMessage());
        }
    }
    
    private void writeToSnifferLog(String msg) {
        if (snifferLogFile != null) {
            try {
                String timestamp = new java.text.SimpleDateFormat("HH:mm:ss.SSS").format(new java.util.Date());
                snifferLogFile.write("[" + timestamp + "] " + msg + "\\n");
                snifferLogFile.flush();
                if (hiworldSniffing && hiworldRawLog != null) {
                    hiworldRawLog.write("[" + timestamp + "] " + msg + "\\n");
                    hiworldRawLog.flush();
                }
            } catch (Exception e) {}
        }
    }

    private void ensureDirForFile(java.io.File file) {
        java.io.File parent = file.getParentFile();
        if (parent != null && !parent.exists()) {
            parent.mkdirs();
        }
    }
    
    @PluginMethod
    public void stopSuperAggressiveSniffer(PluginCall call) {
        aggressiveSnifferRunning = false;
        if (aggressiveSnifferThread != null) {
            aggressiveSnifferThread.interrupt();
        }
        if (snifferLogFile != null) {
            try {
                snifferLogFile.write("\\n=== SESSION ENDED ===\\n");
                snifferLogFile.close();
            } catch (Exception e) {}
        }
        call.resolve();
    }

    @PluginMethod
    public void getApps(PluginCall call) {
        PackageManager pm = getContext().getPackageManager();
        List<ApplicationInfo> apps = pm.getInstalledApplications(PackageManager.GET_META_DATA);
        JSArray retApps = new JSArray();

        for (ApplicationInfo app : apps) {
            if (pm.getLaunchIntentForPackage(app.packageName) != null) {
                JSObject obj = new JSObject();
                obj.put("name", pm.getApplicationLabel(app).toString());
                obj.put("package", app.packageName);
                retApps.put(obj);
            }
        }
        JSObject ret = new JSObject();
        ret.put("apps", retApps);
        call.resolve(ret);
    }

    @PluginMethod
    public void launchApp(PluginCall call) {
        String pkg = call.getString("package");
        String activity = call.getString("activity");
        String action = call.getString("action");

        Intent intent = null;

        if (activity != null && !activity.isEmpty()) {
            intent = new Intent();
            intent.setComponent(new ComponentName(pkg, activity));
        } else if (action != null && !action.isEmpty()) {
            intent = new Intent(action);
            if (pkg != null) intent.setPackage(pkg);
        } else {
            intent = getContext().getPackageManager().getLaunchIntentForPackage(pkg);
        }

        if (intent != null) {
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
            getContext().startActivity(intent);
            call.resolve();
        } else {
            call.reject("App/Intent not found");
        }
    }

    @PluginMethod
    public void requestAudioFocus(PluginCall call) {
        android.media.AudioManager am = (android.media.AudioManager) getContext().getSystemService(Context.AUDIO_SERVICE);
        int result = am.requestAudioFocus(null, android.media.AudioManager.STREAM_MUSIC, android.media.AudioManager.AUDIOFOCUS_GAIN);
        
        if (result == android.media.AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
            call.resolve();
        } else {
            call.reject("Focus request failed");
        }
    }

    @PluginMethod
    public void getAudioFiles(PluginCall call) {
        new Thread(() -> {
             try {
                 JSArray songs = new JSArray();
                 Uri uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                 String[] projection = {
                     MediaStore.Audio.Media._ID,
                     MediaStore.Audio.Media.TITLE,
                     MediaStore.Audio.Media.ARTIST,
                     MediaStore.Audio.Media.DATA,
                     MediaStore.Audio.Media.DURATION
                 };
                 String selection = MediaStore.Audio.Media.IS_MUSIC + "!= 0";
                 String sortOrder = MediaStore.Audio.Media.TITLE + " ASC";
                 
                 Cursor cursor = getContext().getContentResolver().query(uri, projection, selection, null, sortOrder);
                 
                 if (cursor != null) {
                     while (cursor.moveToNext()) {
                         JSObject song = new JSObject();
                         song.put("id", cursor.getString(0));
                         song.put("title", cursor.getString(1));
                         song.put("artist", cursor.getString(2));
                         song.put("url", cursor.getString(3)); // Path
                         song.put("duration", cursor.getLong(4) / 1000); // ms to sec
                         songs.put(song);
                     }
                     cursor.close();
                 }
                 
                 JSObject ret = new JSObject();
                 ret.put("songs", songs);
                 call.resolve(ret);
                 
             } catch (Exception e) {
                 call.reject("Media Scan Failed: " + e.getMessage());
             }
        }).start();
    }

    @PluginMethod
    public void sendMcuCommand(PluginCall call) {
        try {
            int cmd = call.getInt("cmd");
            JSArray dataJson = call.getArray("data");
            
            if (cmd == 0x81) { 
                 android.media.AudioManager am = (android.media.AudioManager) getContext().getSystemService(Context.AUDIO_SERVICE);
                 int vol = dataJson.getInt(0);
                 int max = am.getStreamMaxVolume(android.media.AudioManager.STREAM_MUSIC);
                 int target = (vol * max) / 30;
                 am.setStreamVolume(android.media.AudioManager.STREAM_MUSIC, target, 0);
                 call.resolve();
                 return;
            }

            Intent intent = new Intent("com.syu.ms.action.EXTERNAL_COMMAND");
            intent.putExtra("cmd", cmd);
            int[] data = new int[dataJson.length()];
            for(int i=0; i<dataJson.length(); i++) data[i] = dataJson.getInt(i);
            intent.putExtra("data", data);
            getContext().sendBroadcast(intent);
            Log.d("TwahhPlugin", "Sent MCU Broadcast CMD: " + cmd);
            call.resolve();
            
        } catch (Exception e) {
            call.reject("MCU Command Failed: " + e.getMessage());
        }
    }

    @PluginMethod
    public void saveLogFile(PluginCall call) {
        String content = call.getString("content");
        if (content == null) {
            call.reject("No content provided");
            return;
        }

        new Thread(() -> {
            boolean success = false;
            List<String> successPaths = new ArrayList<>();
            List<String> errors = new ArrayList<>();
            try {
                java.io.File[] extDirs = getContext().getExternalFilesDirs(null);
                for (java.io.File dir : extDirs) {
                    if (dir != null && dir.exists() && dir.canWrite()) {
                         java.io.File logDir = new java.io.File(dir, "TWLogs/Boot");
                         if (!logDir.exists()) logDir.mkdirs();
                         java.io.File logFile = new java.io.File(logDir, "twahh_boot_log.txt");
                         try {
                             java.io.FileWriter writer = new java.io.FileWriter(logFile);
                             writer.write(content);
                             writer.close();
                             success = true;
                             successPaths.add(logFile.getAbsolutePath());
                         } catch (Exception e) {
                             errors.add("Write failed " + dir.getAbsolutePath() + ": " + e.getMessage());
                         }
                    }
                }
            } catch (Exception e) {}

            String[] paths = {
                "/storage/usb1", "/mnt/media_rw/usb1", "/hp", "/storage/sdcard1",
                "/storage/usb0", "/mnt/media_rw/usb0", "/mnt/usb_storage",
                "/sdcard", "/udisk", "/sdcard/external_sd"
            };

            for (String path : paths) {
                try {
                     java.io.File dir = new java.io.File(path);
                     if (dir.exists() && dir.canWrite()) {
                         java.io.File file = new java.io.File(dir, "twahh_boot_log.txt");
                         java.io.FileWriter writer = new java.io.FileWriter(file);
                         writer.write(content);
                         writer.close();
                         success = true;
                         successPaths.add(path + "/twahh_boot_log.txt");
                     }
                } catch (Exception e) {}
            }

            if (success) {
                JSObject ret = new JSObject();
                ret.put("paths", new JSArray(successPaths));
                call.resolve(ret);
            } else {
                call.reject("Save Failed. Errors: " + String.join(" | ", errors));
            }
        }).start();
    }
}""")
    # 2. Rewrite MainActivity (Idempotent)
    activity_path = f"{JAVA_SRC_DIR}/MainActivity.java"
    os.makedirs(JAVA_SRC_DIR, exist_ok=True)
    with open(activity_path, "w") as f:
        f.write("""package com.twahh.rm;

import com.getcapacitor.BridgeActivity;
import com.twahh.rm.TwahhPlugin;
import android.os.Bundle;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(TwahhPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
""")

    # 3. Patch AndroidManifest.xml (HOME Intent & Launcher Permissions)
    manifest_path = "android/app/src/main/AndroidManifest.xml"
    if os.path.exists(manifest_path):
        print("Patching AndroidManifest for Launcher functionality...")
        with open(manifest_path, "r") as f: m_content = f.read()
        
        # Add Shared User ID for System Privileges
        # DISABLED FOR COMPATIBILITY (User App Mode)
        # if 'android:sharedUserId="android.uid.system"' not in m_content:
        #    m_content = m_content.replace('<manifest xmlns:android="http://schemas.android.com/apk/res/android"', '<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:sharedUserId="android.uid.system"')

        # Add Critical System Permissions for MCU/Serial Access
        if "WRITE_SECURE_SETTINGS" not in m_content:
            perm_block = """
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" />
    <!-- <uses-permission android:name="android.permission.WRITE_SECURE_SETTINGS" /> -->
    <!-- <uses-permission android:name="android.permission.INTERACT_ACROSS_USERS" /> -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />"""
            m_content = m_content.replace('<uses-permission android:name="android.permission.INTERNET" />', perm_block)

        if 'android:requestLegacyExternalStorage="true"' not in m_content:
             m_content = m_content.replace('<application', '<application android:requestLegacyExternalStorage="true" android:usesCleartextTraffic="true"')

        # Add Home categories if missing
        if "android.intent.category.HOME" not in m_content:
            category_insert = '                <category android:name="android.intent.category.LAUNCHER" />\n                <category android:name="android.intent.category.HOME" />\n                <category android:name="android.intent.category.DEFAULT" />'
            m_content = m_content.replace('<category android:name="android.intent.category.LAUNCHER" />', category_insert)
        
        # Add QUERY_ALL_PACKAGES for App Listing
        if "QUERY_ALL_PACKAGES" not in m_content:
            permission_insert = '    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" />\n    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />'
            m_content = m_content.replace('<uses-permission android:name="android.permission.INTERNET" />', permission_insert)

            
        with open(manifest_path, "w") as f: f.write(m_content)

    # 4. Patch App build.gradle (Java 17)
    app_gradle = "android/app/build.gradle"
    if os.path.exists(app_gradle):
        with open(app_gradle, "r") as f: g_content = f.read()
        if "compileOptions" not in g_content:
            insertion = "    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_17\n        targetCompatibility JavaVersion.VERSION_17\n    }\n    buildTypes {"
            g_content = g_content.replace("buildTypes {", insertion)
            with open(app_gradle, "w") as f: f.write(g_content)

    # 5. Patch Capacitor Library build.gradle (Java 17)
    cap_lib_gradle = "node_modules/@capacitor/android/capacitor/build.gradle"
    if os.path.exists(cap_lib_gradle):
        with open(cap_lib_gradle, "r") as f: lib_content = f.read()
        lib_content = lib_content.replace("JavaVersion.VERSION_21", "JavaVersion.VERSION_17")
        with open(cap_lib_gradle, "w") as f: f.write(lib_content)
        
    # 6. Patch App-side Capacitor generated gradle (Java 17)
    app_cap_gradle = "android/app/capacitor.build.gradle"
    if os.path.exists(app_cap_gradle):
        with open(app_cap_gradle, "r") as f: ac_content = f.read()
        ac_content = ac_content.replace("JavaVersion.VERSION_21", "JavaVersion.VERSION_17")
        with open(app_cap_gradle, "w") as f: f.write(ac_content)

    # 7. Redirect buildDir to /tmp to avoid FAT filesystem dot-file issues (._Classes)
    root_gradle = "android/build.gradle"
    if os.path.exists(root_gradle):
        print("Redirecting build artifacts to /tmp/twahh_build...")
        with open(root_gradle, "r") as f: r_content = f.read()
        if "allprojects {" in r_content and "buildDir =" not in r_content:
             r_content = r_content.replace("allprojects {", "allprojects {\n    buildDir = \"/tmp/twahh_build/${project.name}\"")
             with open(root_gradle, "w") as f: f.write(r_content)

def main():
    if not os.path.exists(BUILD_DIR):
        os.makedirs(BUILD_DIR)

    env = os.environ.copy()
    env["JAVA_HOME"] = JAVA_HOME
    env["ANDROID_HOME"] = ANDROID_HOME
    env["PATH"] = f"{JAVA_HOME}/bin:{os.path.join(ANDROID_HOME, 'cmdline-tools/latest/bin')}:" + env["PATH"]

    log_history = []
    
    # 0. Check for Node/NPM Dependencies
    if not os.path.exists("package.json"):
        update_status("Initializing NPM...", 5, "running", log_history)
        run_command("npm init -y", env=env)
    
    if not os.path.exists("node_modules"):
        update_status("Installing Capacitor...", 6, "running", log_history)
        run_command("npm install @capacitor/core @capacitor/cli @capacitor/android", env=env)
        run_command("npx cap init TwahhRM com.twahh.rm --web-dir www", env=env)

    if os.path.exists("capacitor.config.json"):
        with open("capacitor.config.json", "r") as f:
            try:
                config = json.load(f)
                if config.get("webDir") != "www":
                    config["webDir"] = "www"
                    with open("capacitor.config.json", "w") as fw: json.dump(config, fw, indent=2)
            except: pass

    # 1. Add/Update Android Platform
    if os.path.exists("android") and not os.path.exists("android/gradlew"):
        print("Detected corrupted android platform. Removing...")
        subprocess.run("rm -rf android", shell=True)

    if not os.path.exists("android"):
        update_status("Adding Android Platform...", 10, "running", log_history)
        run_command("npx cap add android", env=env)
    
    # 2. Sync Web Assets
    update_status("Compiling TypeScript...", 20, "running", log_history)
    run_command("npm run build", env=env)
    
    update_status("Syncing Web Assets...", 30, "running", log_history)
    run_command("npx cap sync", env=env)

    # 3. Inject Native Code & Patches
    update_status("Injecting Native Launcher Bridge & Patches...", 50, "running", log_history)
    inject_native_code()

    # 3.5 Inject Custom Icon
    icon_source = "/Users/dwayne/.gemini/antigravity/brain/053ca98e-4e05-4fe3-b44a-8341c0b014a3/app_icon_deep_diver_1_1768119743969.png"
    if os.path.exists(icon_source):
        print(f"Injecting Custom Icon from {icon_source}...")
        res_dir = "android/app/src/main/res"
        # Overwrite all mpmap folders to be safe
        for folder in ["mipmap-mdpi", "mipmap-hdpi", "mipmap-xhdpi", "mipmap-xxhdpi", "mipmap-xxxhdpi"]:
            target_dir = os.path.join(res_dir, folder)
            os.makedirs(target_dir, exist_ok=True)
            shutil.copy(icon_source, os.path.join(target_dir, "ic_launcher.png"))
            shutil.copy(icon_source, os.path.join(target_dir, "ic_launcher_round.png"))
            shutil.copy(icon_source, os.path.join(target_dir, "ic_launcher_foreground.png"))
            
    # 4. Build APK
    update_status("Cleaning Ghost Files...", 60, "running", log_history)
    subprocess.run("find . -name '._*' -delete", cwd=os.getcwd(), shell=True)

    # 4. Build APK & Increment Version
    update_status("Versioning & Compiling...", 70, "running", log_history)
    
    # Read and Increment Version
    new_version = "3.5.0-verbose"
    if os.path.exists("package.json"):
        with open("package.json", "r") as f:
            # Auto-increment enabled
            pkg = json.load(f)
            current_version = pkg.get("version", "1.0.0")
            
            # SemVer Increment Logic
            try:
                major, minor, patch = map(int, current_version.split('.'))
                patch += 1
                new_version = f"{major}.{minor}.{patch}"
                
                # Write back to package.json
                pkg["version"] = new_version
                with open("package.json", "w") as fw:
                    json.dump(pkg, fw, indent=2)
                    
                print(f"Auto-Incremented Version: {current_version} -> {new_version}")
            except:
                print(f"Versioning Error: Could not parse {current_version}. Keeping default.")
                new_version = current_version

    # Sync version to build.gradle
    app_gradle = "android/app/build.gradle"
    if os.path.exists(app_gradle):
        with open(app_gradle, "r") as f: lines = f.readlines()
        with open(app_gradle, "w") as f:
            for line in lines:
                if "versionName" in line:
                    f.write(f'        versionName "{new_version}"\n')
                else:
                    f.write(line)

    android_project_dir = os.path.abspath("android")
    if os.path.exists(os.path.join(android_project_dir, "gradlew")):
         os.chmod(os.path.join(android_project_dir, "gradlew"), 0o755)
         
         # Optional: Pass version to gradle if easy, otherwise just stick to filename for now
         ret, out = run_command("./gradlew assembleDebug", cwd=android_project_dir, env=env)
         log_history.extend(out)
         
         if ret == 0:
            update_status("Build Complete!", 100, "success", log_history)
            apk_path = "/tmp/twahh_build/app/outputs/apk/debug/app-debug.apk"
            target_name = f"TwahhModelRM-v{new_version}.apk"
            
            if os.path.exists(apk_path):
                 print(f"Copying APK from {apk_path} to {target_name}...")
                 shutil.copy(apk_path, target_name)
                 # Also copy to USB if available
                 usb_path = f"/Volumes/STORE N GO/{target_name}"
                 if os.path.exists("/Volumes/STORE N GO"):
                     print(f"Copying to USB: {usb_path}...")
                     shutil.copy(apk_path, usb_path)
            else:
                 print("Searching for APK...")
                 subprocess.run("find /tmp/twahh_build -name '*.apk'", shell=True)
         else:
            update_status("Build Failed", 90, "error", log_history)
    else:
        update_status("Gradle Wrapper Not Found", 90, "error", log_history)

if __name__ == "__main__":
    main()
