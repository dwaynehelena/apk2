/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VehicleHAL } from '../services/VehicleHAL';
import { FYT_BRIDGE_EVENT, FytCanbusCodes } from '../services/FytTypes';

describe('FYT Adapter Integration', () => {
    let hal: VehicleHAL;

    beforeEach(() => {
        // Reset HAL before each test
        hal = new VehicleHAL();
        // Clear any previous mock calls if we used spies (not using yet)
    });

    it('should update RPM and Speed from CANBUS_RPM_SPEED event', () => {
        // Mock payload: [Type, Speed, RPM_High, RPM_Low]
        // Speed = 50 km/h
        // RPM = 2500 (0x09C4) -> High: 0x09 (9), Low: 0xC4 (196)
        const payload = {
            codes: [FytCanbusCodes.CANBUS_RPM_SPEED, 50, 9, 196]
        };

        const event = new CustomEvent(FYT_BRIDGE_EVENT, { detail: payload });
        window.dispatchEvent(event);

        expect(hal.powertrain.speed.value).toBe(50);
        expect(hal.powertrain.rpm.value).toBe(2500);
    });

    it('should update Door status from CANBUS_DOOR_INFO event', () => {
        // Mock payload: [Type, Bitmask]
        // Bitmask 0x05 (0000 0101) -> FL (0x01) and RL (0x04) open
        const payload = {
            codes: [FytCanbusCodes.CANBUS_DOOR_INFO, 0x05]
        };

        const event = new CustomEvent(FYT_BRIDGE_EVENT, { detail: payload });
        window.dispatchEvent(event);

        expect(hal.body.doors.fl.value).toBe(true);
        expect(hal.body.doors.fr.value).toBe(false);
        expect(hal.body.doors.rl.value).toBe(true);
        expect(hal.body.doors.rr.value).toBe(false);
    });

    it('should update Climate temps from CANBUS_TEMP_INFO event', () => {
        // Mock payload: [Type, TempL, TempR]
        const payload = {
            codes: [FytCanbusCodes.CANBUS_TEMP_INFO, 22, 24]
        };

        const event = new CustomEvent(FYT_BRIDGE_EVENT, { detail: payload });
        window.dispatchEvent(event);

        expect(hal.body.climate.tempL.value).toBe(22);
        expect(hal.body.climate.tempR.value).toBe(24);
    });

    it('should ignore invalid payloads', () => {
        const initialRpm = hal.powertrain.rpm.value;

        // Payload too short
        const payload = {
            codes: [FytCanbusCodes.CANBUS_RPM_SPEED]
        };

        const event = new CustomEvent(FYT_BRIDGE_EVENT, { detail: payload });
        window.dispatchEvent(event);

        expect(hal.powertrain.rpm.value).toBe(initialRpm);
    });
});
