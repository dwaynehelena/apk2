
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VehicleHAL } from '../www/hal.js';

describe('VehicleHAL Native Features', () => {
    let hal;
    let mockTwahhPlugin;

    beforeEach(() => {
        mockTwahhPlugin = {
            setVolume: vi.fn(),
            setBrightness: vi.fn(),
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

    it('should set system volume via native bridge', async () => {
        await hal.setVolume(50);
        expect(mockTwahhPlugin.setVolume).toHaveBeenCalledWith({ value: 50 });
    });

    it('should set screen brightness via native bridge', async () => {
        await hal.setBrightness(0.8);
        expect(mockTwahhPlugin.setBrightness).toHaveBeenCalledWith({ value: 0.8 });
    });

    it('should clamp volume between 0 and 100', async () => {
        await hal.setVolume(150);
        expect(mockTwahhPlugin.setVolume).toHaveBeenCalledWith({ value: 100 });

        await hal.setVolume(-10);
        expect(mockTwahhPlugin.setVolume).toHaveBeenCalledWith({ value: 0 });
    });

    it('should clamp brightness between 0.0 and 1.0', async () => {
        await hal.setBrightness(1.5);
        expect(mockTwahhPlugin.setBrightness).toHaveBeenCalledWith({ value: 1.0 });

        await hal.setBrightness(-0.5);
        expect(mockTwahhPlugin.setBrightness).toHaveBeenCalledWith({ value: 0.0 });
    });
});
