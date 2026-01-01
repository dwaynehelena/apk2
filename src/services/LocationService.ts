import { VehicleHAL } from './VehicleHAL';

export class LocationService {
    private hal: VehicleHAL;
    private smoothingFactor = 0.2; // 0.2 = slow smoothing, 1.0 = instant

    constructor(hal: VehicleHAL) {
        this.hal = hal;
    }

    /**
     * Updates the vehicle location with smoothing and bounds checking
     */
    handleUpdate(lat: number, lng: number, heading: number) {
        // Basic Bounds Checking
        if (Math.abs(lat) > 90 || Math.abs(lng) > 180) {
            console.error('Invalid coordinates received:', lat, lng);
            return;
        }

        // Apply Smoothing (Simple Lerp)
        const currentLat = this.hal.motion.location.lat.value;
        const currentLng = this.hal.motion.location.lng.value;

        // If current is 0 (initial), jump to new location immediately
        if (currentLat === 0 && currentLng === 0) {
            this.hal.motion.location.lat.value = lat;
            this.hal.motion.location.lng.value = lng;
        } else {
            this.hal.motion.location.lat.value = currentLat + (lat - currentLat) * this.smoothingFactor;
            this.hal.motion.location.lng.value = currentLng + (lng - currentLng) * this.smoothingFactor;
        }

        this.hal.motion.location.heading.value = heading;
    }
}
