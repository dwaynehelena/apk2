import { describe, it, expect } from 'vitest';
import { VehicleHAL } from '../services/VehicleHAL';

describe('VehicleHAL GPS', () => {
    it('should initialize with default GPS state', () => {
        const hal = new VehicleHAL();
        expect(hal.motion.location.lat.value).toBe(0);
        expect(hal.motion.location.lng.value).toBe(0);
        expect(hal.motion.location.heading.value).toBe(0);
    });

    it('should update GPS location', () => {
        const hal = new VehicleHAL();
        hal.updateLocation(37.7749, -122.4194, 180);

        expect(hal.motion.location.lat.value).toBe(37.7749);
        expect(hal.motion.location.lng.value).toBe(-122.4194);
        expect(hal.motion.location.heading.value).toBe(180);
    });
});
