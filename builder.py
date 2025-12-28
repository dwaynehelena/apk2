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
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.BatteryManager;
import android.util.Log;
import java.util.List;

@CapacitorPlugin(name = "TwahhPlugin")
public class TwahhPlugin extends Plugin {

    private BroadcastReceiver receiver;

    @Override
    public void load() {
        IntentFilter filter = new IntentFilter();
        // Standard Android
        filter.addAction(Intent.ACTION_BATTERY_CHANGED);
        // XYAUTO / Allwinner T5 T507 specific intents
        filter.addAction("com.xyauto.broadcast.ACC_EVENT");
        filter.addAction("com.xyauto.broadcast.canbus.RECEIVE");
        filter.addAction("com.xyauto.broadcast.CAN_AIR_INFO");
        filter.addAction("com.xyauto.broadcast.CAN_DOOR_INFO");
        filter.addAction("com.microntek.canbus.display");
        
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
                        ret.put(key, value != null ? value.toString() : "null");
                    }
                }
                notifyListeners("systemEvent", ret);
            }
        };
        getContext().registerReceiver(receiver, filter);
    }

    @PluginMethod
    public void getApps(PluginCall call) {
        PackageManager pm = getContext().getPackageManager();
        List<ApplicationInfo> apps = pm.getInstalledApplications(PackageManager.GET_META_DATA);
        JSArray retApps = new JSArray();

        for (ApplicationInfo app : apps) {
            // Only include apps that have a launcher entry
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
        Intent intent = getContext().getPackageManager().getLaunchIntentForPackage(pkg);
        if (intent != null) {
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
            call.resolve();
        } else {
            call.reject("App not found");
        }
    }
}
""")

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
        super.onCreate(savedInstanceState);
        registerPlugin(TwahhPlugin.class);
    }
}
""")

    # 3. Patch AndroidManifest.xml (HOME Intent & Launcher Permissions)
    manifest_path = "android/app/src/main/AndroidManifest.xml"
    if os.path.exists(manifest_path):
        print("Patching AndroidManifest for Launcher functionality...")
        with open(manifest_path, "r") as f: m_content = f.read()
        
        # Add Home categories if missing
        if "android.intent.category.HOME" not in m_content:
            category_insert = '                <category android:name="android.intent.category.LAUNCHER" />\n                <category android:name="android.intent.category.HOME" />\n                <category android:name="android.intent.category.DEFAULT" />'
            m_content = m_content.replace('<category android:name="android.intent.category.LAUNCHER" />', category_insert)
        
        # Add QUERY_ALL_PACKAGES for App Listing
        if "QUERY_ALL_PACKAGES" not in m_content:
            permission_insert = '    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" />'
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
    update_status("Syncing Web Assets...", 30, "running", log_history)
    run_command("npx cap sync", env=env)

    # 3. Inject Native Code & Patches
    update_status("Injecting Native Launcher Bridge & Patches...", 50, "running", log_history)
    inject_native_code()

    # 4. Build APK
    update_status("Cleaning Ghost Files...", 60, "running", log_history)
    subprocess.run("find . -name '._*' -delete", cwd=os.getcwd(), shell=True)

    update_status("Compiling Cyberpunk Launcher APK...", 70, "running", log_history)
    android_project_dir = os.path.abspath("android")
    if os.path.exists(os.path.join(android_project_dir, "gradlew")):
         os.chmod(os.path.join(android_project_dir, "gradlew"), 0o755)
         ret, out = run_command("./gradlew assembleDebug", cwd=android_project_dir, env=env)
         log_history.extend(out)
         
         if ret == 0:
            update_status("Build Complete!", 100, "success", log_history)
            apk_path = "/tmp/twahh_build/app/outputs/apk/debug/app-debug.apk"
            if os.path.exists(apk_path):
                 print(f"Copying APK from {apk_path}...")
                 shutil.copy(apk_path, "TwahhModelRM-Real.apk")
            else:
                 print("Searching for APK...")
                 subprocess.run("find /tmp/twahh_build -name '*.apk'", shell=True)
         else:
            update_status("Build Failed", 90, "error", log_history)
    else:
        update_status("Gradle Wrapper Not Found", 90, "error", log_history)

if __name__ == "__main__":
    main()
