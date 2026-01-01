import { signal } from '@preact/signals-core';

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
        },
        lights: {
            on: signal(false),
            highBeam: signal(false),
            hazards: signal(false)
        }
    };

    // Motion Signals (GPS/Accel)
    motion = {
        location: {
            lat: signal(0),
            lng: signal(0),
            heading: signal(0),
            elevation: signal(0)
        },
        accel: {
            x: signal(0),
            y: signal(0),
            z: signal(9.81)
        }
    };

    // Media/SWC Signals
    media = {
        volume: signal(15), // 0-30
        nowPlaying: signal('FM 88.5'),
        isPlaying: signal(false)
    };

    // Diagnostics/OBD2 Signals
    diagnostics = {
        dtcs: signal<string[]>([]),
        voltage: signal(14.2),
        intakeTemp: signal(35),
        isScanning: signal(false)
    };

    // System State
    system = {
        demoMode: signal(false) // Defaults to FALSE for production
    };

    constructor() {
        // Mock Movement Simulation
        setInterval(() => {
            if (this.powertrain.speed.value > 0) {
                // Drift location based on heading
                const speed = this.powertrain.speed.value / 36000; // km/h to units/100ms
                const heading = this.motion.location.heading.value * (Math.PI / 180);
                this.motion.location.lat.value += Math.cos(heading) * speed;
                this.motion.location.lng.value += Math.sin(heading) * speed;

                // Simulate Accel based on speed changes
                this.motion.accel.x.value = (Math.random() - 0.5) * 2;
                this.motion.accel.y.value = (Math.random() - 0.5) * 2;
            } else {
                this.motion.accel.x.value *= 0.8;
                this.motion.accel.y.value *= 0.8;
            }
        }, 100);
    }

    readState() {
        // Return structure compatible with tests/legacy views
        return {
            powertrain: this.powertrain,
            body: this.body,
            motion: this.motion,
            media: this.media
        }
    }

    updateRPM(rpm: number) {
        this.powertrain.rpm.value = rpm;
    }

    toggleDoor(door: keyof typeof this.body.doors) {
        this.body.doors[door].value = !this.body.doors[door].value;
    }

    updateLocation(lat: number, lng: number, heading: number) {
        this.motion.location.lat.value = lat;
        this.motion.location.lng.value = lng;
        this.motion.location.heading.value = heading;
    }

    handleSWC(keyCode: number) {
        // Mock SWC logic
        switch (keyCode) {
            case 24: // KEYCODE_VOLUME_UP
                this.media.volume.value = Math.min(30, this.media.volume.value + 1);
                break;
            case 25: // KEYCODE_VOLUME_DOWN
                this.media.volume.value = Math.max(0, this.media.volume.value - 1);
                break;
            case 85: // KEYCODE_MEDIA_PLAY_PAUSE
                this.media.isPlaying.value = !this.media.isPlaying.value;
                break;
        }
    }

    setClimateTemp(side: 'left' | 'right', temp: number) {
        if (side === 'left') this.body.climate.tempL.value = temp;
        else this.body.climate.tempR.value = temp;
    }

    async scanDTCs() {
        this.diagnostics.isScanning.value = true;
        await new Promise(r => setTimeout(r, 1500));
        const demoCodes = ['P0300 (Random Misfire)', 'P0171 (System Too Lean)', 'B1202 (Fuel Sender Open)'];
        this.diagnostics.dtcs.value = Math.random() > 0.4 ? [demoCodes[Math.floor(Math.random() * 3)]] : [];
        this.diagnostics.isScanning.value = false;
    }

    clearDTCs() {
        this.diagnostics.dtcs.value = [];
    }
}
