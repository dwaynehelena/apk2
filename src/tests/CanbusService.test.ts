import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CanbusService } from '../services/CanbusService';
import { VehicleHAL } from '../services/VehicleHAL';

describe('CanbusService (TDD)', () => {
    let hal: VehicleHAL;
    let service: CanbusService;

    beforeEach(() => {
        hal = new VehicleHAL();
        service = new CanbusService(hal);
    });

    it('should handle Volume Up CAN message', () => {
        // Mock CAN message: ID 0x201, Data [0x01, 0x00...] (Volume Up)
        service.handleCanMessage(0x201, [0x01, 0x00]);
        expect(hal.media.volume.value).toBe(16); // Default 15 + 1
    });

    it('should handle Volume Down CAN message', () => {
        service.handleCanMessage(0x201, [0x02, 0x00]);
        expect(hal.media.volume.value).toBe(14); // Default 15 - 1
    });

    it('should handle Media Play/Pause CAN message', () => {
        expect(hal.media.isPlaying.value).toBe(false);
        service.handleCanMessage(0x201, [0x00, 0x01]);
        expect(hal.media.isPlaying.value).toBe(true);
    });

    it('should detect Reverse Gear from CAN message', () => {
        // Mock CAN message: ID 0x305, Data [0x01] (Reverse ON)
        service.handleCanMessage(0x305, [0x01]);
        expect(hal.powertrain.gear.value).toBe('R');
    });

    it('should return to Park when Reverse is cleared', () => {
        hal.powertrain.gear.value = 'R';
        service.handleCanMessage(0x305, [0x00]);
        expect(hal.powertrain.gear.value).toBe('P');
    });

    it('should process native intents for Volume', () => {
        const mockIntent = { action: 'com.xyauto.broadcast.ACC_EVENT', volume_key: 'up' };
        service.handleNativeIntent(mockIntent);
        expect(hal.media.volume.value).toBe(16);
    });
});
