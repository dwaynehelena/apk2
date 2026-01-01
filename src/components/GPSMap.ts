import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { VehicleHAL } from '../services/VehicleHAL';
import { effect } from '@preact/signals-core';

export class GPSMap {
    private map: L.Map;
    private marker: L.Marker;

    constructor(container: HTMLElement, private hal: VehicleHAL) {
        // Initialize Map
        this.map = L.map(container, {
            zoomControl: false,
            attributionControl: false
        }).setView([0, 0], 13);

        // Dark Mode Tiles (CartoDB Dark Matter)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 20
        }).addTo(this.map);

        // Vehicle Marker
        const icon = L.divIcon({
            className: 'vehicle-marker',
            html: '<div style="width: 20px; height: 20px; background: #00f3ff; border-radius: 50%; box-shadow: 0 0 10px #00f3ff;"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        this.marker = L.marker([0, 0], { icon }).addTo(this.map);

        // Reactive Bindings
        effect(() => {
            const lat = this.hal.motion.location.lat.value;
            const lng = this.hal.motion.location.lng.value;

            if (lat !== 0 && lng !== 0) {
                const pos = new L.LatLng(lat, lng);
                this.marker.setLatLng(pos);
                this.map.panTo(pos);
            }
        });

        // Handle Resize
        setTimeout(() => this.map.invalidateSize(), 500);
    }
}
