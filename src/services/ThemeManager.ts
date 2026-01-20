import { signal, computed, effect } from '@preact/signals-core';
import { VehicleHAL } from './VehicleHAL';

export class ThemeManager {
    // Core Accent Color (HSL)
    accentColor = signal('hsl(120, 100%, 50%)'); // Default: Eco Green

    // Theme State
    isNightMode = signal(false);
    currentTheme = signal<'kinetic' | 'cyberpunk' | 'sport'>('kinetic');

    private hal: VehicleHAL;
    private targetHue = 120; // Green
    private currentHue = 120;
    private animationFrame: number | null = null;

    constructor(hal: VehicleHAL) {
        this.hal = hal;
        this.init();
    }

    private init() {
        // Reactive Trigger for Night Mode
        effect(() => {
            this.isNightMode.value = this.hal.nightMode.value;
            this.updateRootClasses();
        });

        // Reactive Trigger for Speed -> Color Mapping
        effect(() => {
            if (this.currentTheme.value === 'kinetic') {
                const speed = this.hal.powertrain.speed.value;
                this.updateTargetColor(speed);
            }
        });

        // Start Animation Loop for Smooth Color Transitions
        this.startColorLoop();
    }

    setTheme(theme: 'kinetic' | 'cyberpunk' | 'sport') {
        this.currentTheme.value = theme;
        if (theme === 'cyberpunk') {
            this.targetHue = 180; // Cyan
        } else if (theme === 'sport') {
            this.targetHue = 0; // Red
        }
    }

    private updateTargetColor(speed: number) {
        // Kinetic Theming Logic
        // 0-60km/h: Eco (Green 120 -> Cyan 180)
        // 60-120km/h: Cruise (Cyan 180 -> Blue 240)
        // >120km/h: Performance (Blue 240 -> Red 0/360)

        if (speed < 60) {
            // Lerp 120 -> 180
            const t = speed / 60;
            this.targetHue = 120 + (60 * t);
        } else if (speed < 120) {
            // Lerp 180 -> 240
            const t = (speed - 60) / 60;
            this.targetHue = 180 + (60 * t);
        } else {
            // Lerp 240 -> 360 (Red)
            // Clamp at max performance color
            this.targetHue = 360;
        }
    }

    private startColorLoop() {
        const loop = () => {
            // Smoothly interpolate currentHue towards targetHue
            const diff = this.targetHue - this.currentHue;

            if (Math.abs(diff) > 0.5) {
                this.currentHue += diff * 0.05; // 5% easing factor
                this.accentColor.value = `hsl(${this.currentHue}, 100%, 50%)`;

                // Update CSS Variable for global usage
                document.documentElement.style.setProperty('--c-accent', this.accentColor.value);
            }

            this.animationFrame = requestAnimationFrame(loop);
        };
        loop();
    }

    private updateRootClasses() {
        if (this.isNightMode.value) {
            document.documentElement.classList.add('theme-night');
        } else {
            document.documentElement.classList.remove('theme-night');
        }
    }
}
