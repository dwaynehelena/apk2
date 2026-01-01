
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VehicleHAL } from '../www/hal.js';

describe('VehicleHAL Drivetrain Parsing', () => {
    let hal;

    beforeEach(() => {
        // Mock window and Capacitor
        global.window = {
            Capacitor: {
                Plugins: {
                    TwahhPlugin: {
                        addListener: vi.fn(),
                        getApps: vi.fn()
                    }
                }
            }
        };
        global.navigator = { userAgent: 'TestRunner' };

        hal = new VehicleHAL();
    });

    it('should initialize with zero values', () => {
        const state = hal.readState();
        expect(state.powertrain.rpm).toBe(0);
        expect(state.powertrain.speed).toBe(0);
    });

    it('should parse valid RPM and Speed from CAN event', () => {
        const data = {
            action: 'com.xyauto.broadcast.canbus.RECEIVE',
            RPM: '3500',
            Speed: '120'
        };

        hal.handleNativeEvent(data);
        const state = hal.readState();

        expect(state.powertrain.rpm).toBe(3500);
        expect(state.powertrain.speed).toBe(120);
    });

    it('should ignore invalid data types', () => {
        const data = {
            action: 'com.xyauto.broadcast.canbus.RECEIVE',
            RPM: 'invalid',
            Speed: null
        };

        hal.handleNativeEvent(data);
        const state = hal.readState();
        expect(state.powertrain.rpm).not.toBeNaN();
    });

    it('should parse Voltage from CAN event', () => {
        const data = {
            action: 'com.xyauto.broadcast.canbus.RECEIVE',
            Voltage: '13.5'
        };
        hal.handleNativeEvent(data);
        expect(hal.readState().powertrain.voltage).toBe(13.5);
    });
});
