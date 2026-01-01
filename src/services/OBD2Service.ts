import { VehicleHAL } from './VehicleHAL';

export class OBD2Service {
    private hal: VehicleHAL;
    private demoFaults = [
        'P0300: Random or Multiple Cylinder Misfire Detected',
        'P0171: System Too Lean (Bank 1)',
        'P0420: Catalyst System Efficiency Below Threshold',
        'B1202: Fuel Sender Circuit Open'
    ];

    constructor(hal: VehicleHAL) {
        this.hal = hal;
    }

    /**
     * Simulates scanning for DTCs. In a real scenario, this would
     * request data from the ELM327 interface via the native bridge.
     */
    async scanForFaults(): Promise<void> {
        if (this.hal.diagnostics.isScanning.value) return;

        this.hal.diagnostics.isScanning.value = true;

        // Simulate hardware latency
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock logic: 20% chance of finding a fault
        const codes: string[] = [];
        if (Math.random() < 0.2) {
            const count = Math.floor(Math.random() * 2) + 1;
            for (let i = 0; i < count; i++) {
                codes.push(this.demoFaults[Math.floor(Math.random() * this.demoFaults.length)]);
            }
        }

        this.hal.diagnostics.dtcs.value = codes;
        this.hal.diagnostics.isScanning.value = false;
    }

    /**
     * Clears all detected fault codes.
     */
    clearFaults(): void {
        this.hal.diagnostics.dtcs.value = [];
    }

    /**
     * Updates live telemetry data (Voltage, Temperatures, etc.)
     * @param telemetry Partial telemetry object
     */
    updateLiveTelemetry(telemetry: { voltage?: number; intakeTemp?: number }): void {
        if (telemetry.voltage !== undefined) {
            this.hal.diagnostics.voltage.value = telemetry.voltage;
        }
        if (telemetry.intakeTemp !== undefined) {
            this.hal.diagnostics.intakeTemp.value = telemetry.intakeTemp;
        }
    }
}
