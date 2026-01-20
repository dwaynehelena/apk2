import { signal, computed, effect } from '@preact/signals-core';
import { VehicleHAL } from './VehicleHAL';

export enum LayoutState {
    PARKED = 'parked',
    CITY = 'city',
    HIGHWAY = 'highway'
}

export class LayoutManager {
    currentState = signal<LayoutState>(LayoutState.PARKED);

    private hal: VehicleHAL;
    private stateTimeout: any = null;

    constructor(hal: VehicleHAL) {
        this.hal = hal;
        this.init();
    }

    private init() {
        effect(() => {
            const speed = this.hal.powertrain.speed.value;
            const handbrake = this.hal.body.parkingBrake.value;

            this.determineState(speed, handbrake);
        });
    }

    private determineState(speed: number, handbrake: boolean) {
        // Debounce state changes to prevent UI flickering in stop-and-go traffic
        clearTimeout(this.stateTimeout);

        this.stateTimeout = setTimeout(() => {
            if (speed === 0 && handbrake) {
                this.updateState(LayoutState.PARKED);
            } else if (speed > 80) {
                this.updateState(LayoutState.HIGHWAY);
            } else {
                this.updateState(LayoutState.CITY);
            }
        }, 1000); // 1 second stability required
    }

    private updateState(newState: LayoutState) {
        if (this.currentState.value !== newState) {
            this.currentState.value = newState;

            // Update Body Class for CSS Grid adjustments
            document.body.setAttribute('data-layout', newState);
        }
    }
}
