
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VehicleHAL } from '../www/hal.js';

describe('VehicleHAL Door Logic', () => {
    let hal;

    beforeEach(() => {
        global.window = { Capacitor: { Plugins: { TwahhPlugin: { addListener: vi.fn(), getApps: vi.fn() } } } };
        hal = new VehicleHAL();
    });

    it('should parse Door Status from CAN_DOOR_INFO', () => {
        const data = {
            action: 'com.xyauto.broadcast.CAN_DOOR_INFO',
            LF_Door: '1',
            RF_Door: '0',
            LR_Door: '1',
            RR_Door: '0',
            Trunk: '1',
            Hood: '0'
        };

        hal.handleNativeEvent(data);
        const doors = hal.readState().body.doors;

        expect(doors.fl).toBe(true);
        expect(doors.fr).toBe(false);
        expect(doors.rl).toBe(true);
        expect(doors.rr).toBe(false);
        expect(doors.trunk).toBe(true);
        expect(doors.hood).toBe(false);
    });

    it('should handle partial updates (ignore undefined keys)', () => {
        // Initial state
        hal.body.doors.fl = true;

        const data = {
            action: 'com.xyauto.broadcast.CAN_DOOR_INFO',
            // LF_Door missing
            RF_Door: '1'
        };

        hal.handleNativeEvent(data);
        const doors = hal.readState().body.doors;

        // LF should remain true (unchanged) ideally, OR generic parser might require full update.
        // Current implementation in hal.js: if (data.LF_Door !== undefined) 
        expect(doors.fl).toBe(true);
        expect(doors.fr).toBe(true);
    });
});
