package com.twahh.rm;

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
