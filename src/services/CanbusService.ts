import { VehicleHAL } from './VehicleHAL';

export class CanbusService {
    private hal: VehicleHAL;

    constructor(hal: VehicleHAL) {
        this.hal = hal;
    }

    /**
     * Entry point for raw CAN messages from the native layer.
     * @param id The CAN arbitration ID
     * @param data The data bytes
     */
    handleCanMessage(id: number, data: number[]) {
        switch (id) {
            case 0x201: // Steering Wheel Control (SWC)
                this.handleSwcMessage(data);
                break;
            case 0x305: // Gear / Transmission
                this.handleGearMessage(data);
                break;
            default:
                // Log unhandled messages for debugging
                // console.log(`CAN [0x${id.toString(16)}]:`, data);
                break;
        }
    }

    /**
     * Handles XYAUTO/Allwinner specific native broadcast intents
     * @param intent The JSON object from the native bridge
     */
    handleNativeIntent(intent: any) {
        if (!intent) return;

        if (intent.volume_key === 'up') {
            this.adjustVolume(1);
        } else if (intent.volume_key === 'down') {
            this.adjustVolume(-1);
        }

        // Handle other actions like source switching, nav triggers, etc.
    }

    private handleSwcMessage(data: number[]) {
        const volumeByte = data[0];
        const mediaByte = data[1];

        if (volumeByte === 0x01) this.adjustVolume(1);
        if (volumeByte === 0x02) this.adjustVolume(-1);

        if (mediaByte === 0x01) {
            this.hal.media.isPlaying.value = !this.hal.media.isPlaying.value;
        }
    }

    private handleGearMessage(data: number[]) {
        const gearByte = data[0];
        // 0x01 = Reverse, 0x00 = Other (Default to Park for safety in mock)
        if (gearByte === 0x01) {
            this.hal.powertrain.gear.value = 'R';
        } else {
            this.hal.powertrain.gear.value = 'P';
        }
    }

    private adjustVolume(delta: number) {
        const current = this.hal.media.volume.value;
        this.hal.media.volume.value = Math.max(0, Math.min(30, current + delta));
    }
}
