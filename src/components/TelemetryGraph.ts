import { VehicleHAL } from '../services/VehicleHAL';
import { effect } from '@preact/signals-core';

export class TelemetryGraph {
    private ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, private hal: VehicleHAL) {
        this.ctx = canvas.getContext('2d')!;

        // Resize canvas
        const rect = canvas.parentElement!.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        this.animate();
    }

    private animate() {
        requestAnimationFrame(() => this.animate());

        const w = this.ctx.canvas.width;
        const h = this.ctx.canvas.height;
        const ctx = this.ctx;

        ctx.clearRect(0, 0, w, h);

        // Draw Crosshair
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
        ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
        ctx.stroke();

        // Draw G-Force Dot ( Simulated for now since HAL doesn't have accel signals yet, adding mock)
        // Ideally we subscribe to hal.motion.accelX
        const x = w / 2;
        const y = h / 2;

        ctx.fillStyle = '#ff0055';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}
