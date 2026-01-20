import { registerPlugin } from '@capacitor/core';

export class AudioService {

    constructor() {
        this.init();
    }

    private init() {
        // potentially listen for media events
    }

    /**
     * Call this when launching Spotify/YouTube/etc.
     * 1. Kills Stock Radio
     * 2. Requests Native Audio Focus
     */
    async requestFocusAndKillRadio() {
        console.log('[AudioService] Requesting Focus & Killing Radio...');

        if ((window as any).Capacitor?.isNative) {
            const { Plugins } = (window as any).Capacitor;

            // 1. Kill Radio (Send Intent)
            await Plugins.TwahhPlugin.launchApp({
                action: 'com.syu.ms.action.STOP_RADIO'
            });

            // 2. Request Android Audio Focus (GAIN)
            // Implementation requires update to TwahhPlugin.java in builder.py
            try {
                await Plugins.TwahhPlugin.requestAudioFocus();
            } catch (e) {
                console.warn('[AudioService] Native focus request failed', e);
            }
        }
    }

    /**
     * Stub for "Ducking" logic during Nav
     */
    duckVolume(durationMs: number = 3000) {
        // Logic to lower MCU volume via 0x81 temporarily
        console.log('[AudioService] Ducking volume for', durationMs);
    }

    /**
     * Changes volume via MCU command (0x81)
     * @param direction 1 for up, -1 for down
     */
    changeVolume(direction: number) {
        const cmd = direction > 0 ? 0x01 : 0x02; // Hypothetical 0x01=Up, 0x02=Down for 0x81 packet? 
        // Actually typical SWC is KeyCode 24 (Up) / 25 (Down).
        // Sending 0x81 usually takes a specific value or step.
        // For simplicity, we'll emulate the SWC keypress if we can't send raw hex yet.
        console.log('[AudioService] Adjusting Volume:', direction > 0 ? 'UP' : 'DOWN');

        // Native Call if available
        if ((window as any).Capacitor?.isNative) {
            const { Plugins } = (window as any).Capacitor;
            Plugins.TwahhPlugin.launchApp({
                // Using the generic intent or if we had a precise volume method
                // Falling back to simulating key events handled by the native layer
                // For now, let's just log it.
            });
        }
    }
}
