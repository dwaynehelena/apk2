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

        // Check if running in Capacitor
        if ((window as any).Capacitor?.isNative) {
            const { Plugins } = (window as any).Capacitor;
            try {
                const res = await Plugins.TwahhPlugin.getApps();
                this.apps.value = res.apps || [];
            } catch (e) {
                console.error("Failed to load apps", e);
            }
        } else {
            // Mock Data for Browser Dev
            this.apps.value = [
                { name: 'Spotify', package: 'com.spotify.music', icon: '🎧' },
                { name: 'Maps', package: 'com.google.android.apps.maps', icon: '📍' },
                { name: 'Netflix', package: 'com.netflix.mediaclient', icon: '🍿' },
                { name: 'Chrome', package: 'com.android.chrome', icon: '🌐' },
                { name: 'YouTube', package: 'com.google.android.youtube', icon: '📺' },
                { name: 'Files', package: 'com.android.documentsui', icon: '📂' },
            ];
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
