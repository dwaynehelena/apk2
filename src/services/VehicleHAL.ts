import { signal, computed, effect } from '@preact/signals-core';

export class VehicleHAL {
    // Powertrain Signals
    powertrain = {
        rpm: signal(0),
        speed: signal(0),
        gear: signal('N'),
        boost: signal(0),
        oil: signal(90),
        coolant: signal(85)
    };

    // Body Signals
    body = {
        doors: {
            fl: signal(false),
            fr: signal(false),
            rl: signal(false),
            rr: signal(false),
            hood: signal(false),
            trunk: signal(false)
        },
        climate: {
            on: signal(false),
            tempL: signal(20),
            tempR: signal(20),
            fan: signal(0)
        }
    };

    readState() {
        // Return structure compatible with tests/legacy views
        return {
            powertrain: this.powertrain,
            body: this.body
        }
    }

    updateRPM(rpm: number) {
        this.powertrain.rpm.value = rpm;
    }

    toggleDoor(door: keyof typeof this.body.doors) {
        this.body.doors[door].value = !this.body.doors[door].value;
    }

    setClimateTemp(side: 'left' | 'right', temp: number) {
        if (side === 'left') this.body.climate.tempL.value = temp;
        else this.body.climate.tempR.value = temp;
    }
}
