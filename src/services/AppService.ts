import { signal } from '@preact/signals-core';

interface AppInfo {
    name: string;
    package: string;
    icon?: string;
}

export class AppService {
    apps = signal<AppInfo[]>([]);
    isLoading = signal(false);

    constructor() {
        this.loadApps();
    }

    async loadApps() {
        this.isLoading.value = true;

        if ((window as any).Capacitor?.isNative) {
            const { Plugins } = (window as any).Capacitor;
            try {
                const res = await Plugins.TwahhPlugin.getApps();
                this.apps.value = res.apps || [];
            } catch (e) {
                console.error("Failed to load apps from native bridge", e);
                this.apps.value = [];
            }
        } else {
            // Production Readiness: No mocks by default.
            // Only show empty state or specific debug items if explicitly needed.
            console.warn('Native Bridge not detected. App list empty.');
            this.apps.value = [];
        }

        this.isLoading.value = false;
    }

    // FYT Specific Intent Map
    private fytIntentMap: Record<string, { activity?: string, action?: string }> = {
        'com.syu.radio': { action: 'com.syu.radio.Launch' },
        'com.syu.bt': { activity: 'com.syu.bt.PhoneActivity' }, // Default to Phone
        'com.syu.music': { action: 'com.syu.music.Launch' },
        'com.syu.video': { action: 'com.syu.video.Launch' },
        'com.syu.settings': { activity: 'com.syu.settings.EqActivity' }, // Default to EQ for settings
        'com.syu.av': { action: 'com.syu.av.Launch' },
        'com.syu.canbus': { activity: 'com.syu.canbus.VehicleInfo' }, // Default to Vehicle Info
    };

    async launchApp(pkg: string) {
        if ((window as any).Capacitor?.isNative) {
            const { Plugins } = (window as any).Capacitor;
            const target = this.fytIntentMap[pkg] || {};

            await Plugins.TwahhPlugin.launchApp({
                package: pkg,
                activity: target.activity,
                action: target.action
            });
        } else {
            console.log(`[Mock] Launching app: ${pkg}`);
            alert(`Launching ${pkg}`);
        }
    }
}
