
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VehicleHAL } from '../www/hal.js';

describe('VehicleHAL App Scanner', () => {
    let hal;
    let mockTwahhPlugin;

    beforeEach(() => {
        mockTwahhPlugin = {
            getApps: vi.fn(),
            launchApp: vi.fn(),
            addListener: vi.fn()
        };

        global.window = {
            Capacitor: {
                Plugins: {
                    TwahhPlugin: mockTwahhPlugin
                }
            }
        };

        hal = new VehicleHAL();
    });

    it('should fetch apps from native plugin', async () => {
        const mockApps = {
            apps: [
                { label: 'Spotify', package: 'com.spotify.music' },
                { label: 'Maps', package: 'com.google.android.apps.maps' }
            ]
        };
        mockTwahhPlugin.getApps.mockResolvedValue(mockApps);

        const apps = await hal.getApps();

        expect(mockTwahhPlugin.getApps).toHaveBeenCalled();
        expect(apps.length).toBe(2);
        expect(apps[0].label).toBe('Spotify');
        expect(apps[0].package).toBe('com.spotify.music');
    });

    it('should return empty list on native error', async () => {
        mockTwahhPlugin.getApps.mockRejectedValue(new Error('Native failure'));

        const apps = await hal.getApps();

        expect(apps).toEqual([]);
    });

    it('should call launchApp on native plugin', async () => {
        await hal.launchApp('com.foo.bar');
        expect(mockTwahhPlugin.launchApp).toHaveBeenCalledWith({ package: 'com.foo.bar' });
    });
});
