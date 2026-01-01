import { effect, signal } from '@preact/signals-core';
import { VehicleHAL } from '../services/VehicleHAL';

export class CameraSystem {
    private videoElement: HTMLVideoElement;
    private overlay: HTMLDivElement;

    constructor(private hal: VehicleHAL) {
        //Create Fullscreen Overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'fixed inset-0 z-50 bg-black hidden flex items-center justify-center';
        this.overlay.innerHTML = `
            <video id="camera-feed" class="w-full h-full object-cover" autoplay playsinline></video>
            <div class="absolute inset-0 border-4 border-red-500/50 pointer-events-none"></div>
            <div class="absolute bottom-10 left-0 right-0 text-center text-red-500 text-2xl font-bold animate-pulse">check surroundings for safety</div>
        `;
        document.body.appendChild(this.overlay);

        this.videoElement = this.overlay.querySelector('video')!;

        // React to Reverse Signal
        // Since we haven't added reverse signal to HAL explicitly yet, let's mock/add it
        // Assuming we add it to hal.body.gear or similar
        effect(() => {
            const gear = this.hal.powertrain.gear.value;
            if (gear === 'R') {
                this.startCamera();
            } else {
                this.stopCamera();
            }
        });
    }

    async startCamera() {
        this.overlay.classList.remove('hidden');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true }); // Request Rear camera in real app
            this.videoElement.srcObject = stream;
        } catch (e) {
            console.error("Camera access failed", e);
            // Show static noise placeholder if no camera
            this.videoElement.style.background = 'url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif) center/cover';
        }
    }

    stopCamera() {
        this.overlay.classList.add('hidden');
        if (this.videoElement.srcObject) {
            const stream = this.videoElement.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
            this.videoElement.srcObject = null;
        }
    }
}
