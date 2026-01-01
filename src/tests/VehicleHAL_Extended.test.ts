import { describe, it, expect } from 'vitest';
import { VehicleHAL } from '../services/VehicleHAL';

describe('VehicleHAL Extended', () => {
    it('should toggle door state', () => {
        const hal = new VehicleHAL();
        expect(hal.body.doors.fl.value).toBe(false);

        hal.toggleDoor('fl');
        expect(hal.body.doors.fl.value).toBe(true);
    });

    it('should update climate settings', () => {
        const hal = new VehicleHAL();
        expect(hal.body.climate.tempL.value).toBe(20);

        hal.setClimateTemp('left', 22.5);
        expect(hal.body.climate.tempL.value).toBe(22.5);
    });

    it('should initialize motion and lighting systems', () => {
        const hal = new VehicleHAL();
        expect(hal.body.lights.on.value).toBe(false);
        expect(hal.motion.accel.z.value).toBe(9.81);
        expect(hal.motion.accel.x.value).toBe(0);
    });
});
