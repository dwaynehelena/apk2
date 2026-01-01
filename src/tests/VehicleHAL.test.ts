import { describe, it, expect } from 'vitest';
import { VehicleHAL } from '../services/VehicleHAL';

describe('VehicleHAL', () => {
    it('should initialize with default state', () => {
        const hal = new VehicleHAL();
        const state = hal.readState();

        expect(state.powertrain.rpm.value).toBe(0);
        expect(state.powertrain.speed.value).toBe(0);
        expect(state.powertrain.gear.value).toBe('N');
    });

    it('should update state via signals', () => {
        const hal = new VehicleHAL();
        hal.updateRPM(5000);
        expect(hal.readState().powertrain.rpm.value).toBe(5000);
    });
});
