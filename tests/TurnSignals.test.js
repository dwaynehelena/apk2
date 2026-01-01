
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VehicleHAL } from '../www/hal.js';

describe('VehicleHAL Turn Signal Logic', () => {
    let hal;

    beforeEach(() => {
        global.window = { Capacitor: { Plugins: { TwahhPlugin: { addListener: vi.fn(), getApps: vi.fn() } } } };
        hal = new VehicleHAL();
    });

    it('should parse Left Turn Signal', () => {
        hal.handleNativeEvent({
            action: 'com.xyauto.broadcast.canbus.RECEIVE',
            TurnLeft: '1'
        });
        expect(hal.readState().body.lights.leftSig).toBe(true);

        hal.handleNativeEvent({
            action: 'com.xyauto.broadcast.canbus.RECEIVE',
            TurnLeft: '0'
        });
        expect(hal.readState().body.lights.leftSig).toBe(false);
    });

    it('should parse Right Turn Signal', () => {
        hal.handleNativeEvent({
            action: 'com.xyauto.broadcast.canbus.RECEIVE',
            TurnRight: '1'
        });
        expect(hal.readState().body.lights.rightSig).toBe(true);
    });

    it('should handled Hazard Lights (Both active)', () => {
        hal.handleNativeEvent({
            action: 'com.xyauto.broadcast.canbus.RECEIVE',
            TurnLeft: '1',
            TurnRight: '1'
        });
        const lights = hal.readState().body.lights;
        expect(lights.leftSig).toBe(true);
        expect(lights.rightSig).toBe(true);
    });
});
