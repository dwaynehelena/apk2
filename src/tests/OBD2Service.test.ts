import { describe, it, expect, beforeEach, vi } from 'vitest';
import { OBD2Service } from '../services/OBD2Service';
import { VehicleHAL } from '../services/VehicleHAL';

describe('OBD2Service (TDD)', () => {
    let hal: VehicleHAL;
    let service: OBD2Service;

    beforeEach(() => {
        hal = new VehicleHAL();
        service = new OBD2Service(hal);
    });

    it('should start scanning and update HAL status', async () => {
        // Mock fallback to ensure async path
        (service as any).nativeFallbackMode = true;
        const scanPromise = service.scanForFaults();
        expect(hal.diagnostics.isScanning.value).toBe(true);
        await scanPromise;
        expect(hal.diagnostics.isScanning.value).toBe(false);
    });

    it('should store detected DTCs in HAL (via Native Fallback)', async () => {
        // Simulate Native Fallback Mode
        (service as any).nativeFallbackMode = true;

        // Simulate Low Battery to trigger a native DTC
        hal.powertrain.batteryVoltage.value = 11.0;

        await service.scanForFaults();

        expect(hal.diagnostics.dtcs.value.length).toBeGreaterThan(0);
        expect(hal.diagnostics.dtcs.value[0]).toContain('U0001');
    });

    it('should clear DTCs in HAL', () => {
        hal.diagnostics.dtcs.value = ['P0300'];
        service.clearFaults();
        expect(hal.diagnostics.dtcs.value.length).toBe(0);
    });

    it('should update live telemetry (Voltage)', () => {
        service.updateLiveTelemetry({ voltage: 12.8 });
        expect(hal.diagnostics.voltage.value).toBe(12.8);
    });
});
