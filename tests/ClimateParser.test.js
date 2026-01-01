
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VehicleHAL } from '../www/hal.js';

describe('VehicleHAL Climate Logic', () => {
    let hal;

    beforeEach(() => {
        global.window = { Capacitor: { Plugins: { TwahhPlugin: { addListener: vi.fn(), getApps: vi.fn() } } } };
        hal = new VehicleHAL();
    });

    it('should parse Climate Info (XYAUTO Standard)', () => {
        const data = {
            action: 'com.xyauto.broadcast.CAN_AIR_INFO',
            temp_left: '22.5',
            temp_right: '21.0',
            wind_level: '3',
            ac_open: '1',
            circle: '0' // Fresh Air
        };

        hal.handleNativeEvent(data);
        const climate = hal.readState().body.climate;

        expect(climate.tempL).toBe(22.5);
        expect(climate.tempR).toBe(21.0);
        expect(climate.fan).toBe(3);
        expect(climate.ac).toBe(true);
        expect(climate.recirc).toBe(false);
    });

    it('should handle "LO" and "HI" temp strings', () => {
        const data = {
            action: 'com.xyauto.broadcast.CAN_AIR_INFO',
            temp_left: 'LO',
            temp_right: 'HI'
        };
        hal.handleNativeEvent(data);
        const climate = hal.readState().body.climate;
        expect(climate.tempL).toBe('LO');
        expect(climate.tempR).toBe('HI');
    });
});
