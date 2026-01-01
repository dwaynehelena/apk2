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

    async launchApp(pkg: string) {
        if ((window as any).Capacitor?.isNative) {
            const { Plugins } = (window as any).Capacitor;
            await Plugins.TwahhPlugin.launchApp({ package: pkg });
        } else {
            console.log(`[Mock] Launching app: ${pkg}`);
            alert(`Launching ${pkg}`);
        }
    }
}
