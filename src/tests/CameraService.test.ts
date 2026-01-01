import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CameraService } from '../services/CameraService';
import { VehicleHAL } from '../services/VehicleHAL';
import { effect } from '@preact/signals-core';

describe('CameraService (TDD)', () => {
    let hal: VehicleHAL;
    let service: CameraService;

    beforeEach(() => {
        hal = new VehicleHAL();
        service = new CameraService(hal);
    });

    it('should trigger camera active state when gear is set to R', () => {
        hal.powertrain.gear.value = 'R';
        expect(service.isCameraActive.value).toBe(true);
    });

    it('should deactivate camera when gear is shifted out of R', () => {
        hal.powertrain.gear.value = 'R';
        hal.powertrain.gear.value = 'D';
        expect(service.isCameraActive.value).toBe(false);
    });

    it('should trigger a callback/event when camera state changes', () => {
        const spy = vi.fn();
        effect(() => spy(service.isCameraActive.value));

        hal.powertrain.gear.value = 'R';
        expect(spy).toHaveBeenCalledWith(true);
    });
});
