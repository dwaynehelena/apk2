import { signal, effect, Signal } from '@preact/signals-core';
import { VehicleHAL } from './VehicleHAL';

export class CameraService {
    private hal: VehicleHAL;
    public isCameraActive: Signal<boolean> = signal(false);

    constructor(hal: VehicleHAL) {
        this.hal = hal;

        // Reactive trigger: Watch gear changes
        effect(() => {
            const gear = this.hal.powertrain.gear.value;
            this.isCameraActive.value = (gear === 'R');

            if (gear === 'R') {
                console.log('--- REVERSE CAMERA ACTIVATED ---');
            } else {
                // Return to dashboard but only if we were in reverse
                if (this.isCameraActive.peek() === false) {
                    // console.log('Camera deactivated');
                }
            }
        });
    }

    /**
     * Future placeholder for manual camera toggle (e.g. Dashcam view)
     */
    toggleCamera() {
        this.isCameraActive.value = !this.isCameraActive.value;
    }
}
