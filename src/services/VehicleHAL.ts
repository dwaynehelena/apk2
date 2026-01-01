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

    // Motion Signals (GPS/Accel)
    motion = {
        location: {
            lat: signal(0),
            lng: signal(0),
            heading: signal(0),
            elevation: signal(0)
        }
    };

    // Media/SWC Signals
    media = {
        volume: signal(15), // 0-30
        nowPlaying: signal('FM 88.5'),
        isPlaying: signal(false)
    };

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
}
