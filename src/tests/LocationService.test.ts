import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LocationService } from '../services/LocationService';
import { VehicleHAL } from '../services/VehicleHAL';

describe('LocationService (TDD)', () => {
    let hal: VehicleHAL;
    let service: LocationService;

    beforeEach(() => {
        hal = new VehicleHAL();
        service = new LocationService(hal);
    });

    it('should update HAL location when receiving raw coordinates', () => {
        service.handleUpdate(45.523062, -122.676482, 180);

        expect(hal.motion.location.lat.value).toBe(45.523062);
        expect(hal.motion.location.lng.value).toBe(-122.676482);
        expect(hal.motion.location.heading.value).toBe(180);
    });

    it('should ignore invalid coordinates', () => {
        service.handleUpdate(91, 181, 0); // Out of range
        expect(hal.motion.location.lat.value).toBe(0);
    });

    it('should smooth GPS jitter (Mock simulation)', () => {
        service.handleUpdate(10, 10, 0);
        service.handleUpdate(10.000001, 10.000001, 0); // Very tiny change

        // If smoothing is on, it shouldn't jump immediately to the jittery value
        // This is a placeholder for actual smoothing logic we'll implement
        expect(hal.motion.location.lat.value).toBeLessThan(10.000001);
    });
});
