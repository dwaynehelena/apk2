import { VehicleHAL } from '../services/VehicleHAL';

export class OffroadTab {
    element: HTMLDivElement;

    constructor(private hal: VehicleHAL) {
        this.element = document.createElement('div');
        this.element.className = 'tab-content offroad-tab';
        this.render();
        this.startLoop();
    }

    private render() {
        this.element.innerHTML = `
            <div class="offroad-grid">
                <!-- Inclinometer Main -->
                <div class="glass-panel main-vis">
                    <div class="vehicle-container">
                        <!-- Jeep Back View (Roll) -->
                        <div class="jeep-roll-view" id="roll-vis">
                            <img src="./assets/jeep_render.png" class="jeep-rear" />
                            <div class="angle-overlay">0°</div>
                        </div>
                        
                        <!-- Jeep Side View (Pitch) -->
                        <div class="jeep-pitch-view" id="pitch-vis">
                            <div class="jeep-side-shape"></div>
                            <div class="angle-overlay">0°</div>
                        </div>
                    </div>
                </div>

                <!-- Compass & Info -->
                <div class="side-panel">
                    <div class="glass-panel compass-card">
                        <h3>COMPASS</h3>
                        <div class="compass-ring" id="compass-ring">
                            <span>N</span>
                        </div>
                        <div class="heading-val" id="heading-val">0°</div>
                        <div class="alt-val" id="alt-val">ALT: 120m</div>
                    </div>

                    <div class="glass-panel status-card">
                        <h3>DRIVETRAIN</h3>
                        <div class="drivetrain-status">
                            <div class="wheel fl"></div>
                            <div class="wheel fr"></div>
                            <div class="diff center locked"></div>
                            <div class="wheel rl"></div>
                            <div class="wheel rr"></div>
                        </div>
                        <div class="mode-text">4WD HIGH</div>
                    </div>
                </div>
            </div>
        `;
    }

    private startLoop() {
        setInterval(() => {
            if (!this.element.isConnected) return;

            // Mock Data for now as most head units don't have gyro
            // Use accel z/y/x to approximate if available, or just mock for showcase

            // 1. Pitch/Roll Animation
            const pitch = this.hal.motion.orientation.pitch.value;
            const roll = this.hal.motion.orientation.roll.value;

            const rollVis = this.element.querySelector('#roll-vis img') as HTMLElement;
            const pitchVis = this.element.querySelector('.jeep-side-shape') as HTMLElement; // Needs assets
            const rollText = this.element.querySelector('#roll-vis .angle-overlay');
            const pitchText = this.element.querySelector('#pitch-vis .angle-overlay');

            if (rollVis) rollVis.style.transform = `rotate(${roll}deg)`;
            if (rollText) rollText.textContent = `${Math.round(roll)}°`;

            // 2. Compass
            const heading = this.hal.motion.location.heading.value;
            const ring = this.element.querySelector('#compass-ring') as HTMLElement;
            const hVal = this.element.querySelector('#heading-val');

            if (ring) ring.style.transform = `rotate(${-heading}deg)`;
            if (hVal) hVal.textContent = `${Math.round(heading)}°`;

            // 3. Altimeter
            const alt = this.hal.motion.location.elevation.value;
            const altEl = this.element.querySelector('#alt-val');
            if (altEl) altEl.textContent = `ALT: ${Math.round(alt)}m`;

        }, 100);
    }
}
