import { VehicleHAL } from '../services/VehicleHAL';

export class PerformanceTab {
    element: HTMLDivElement;
    private timerRunning = false;
    private startTime = 0;

    constructor(private hal: VehicleHAL) {
        this.element = document.createElement('div');
        this.element.className = 'tab-content performance-tab';
        this.render();
        this.startLoop();
    }

    private render() {
        this.element.innerHTML = `
            <div class="perf-grid">
                <!-- 0-60 Timer -->
                <div class="glass-panel perf-card">
                    <h3>0-60 MPH</h3>
                    <div id="timer-0-60" class="digital-readout">--.-s</div>
                    <div class="status-indicator">READY</div>
                </div>

                <!-- 1/4 Mile -->
                <div class="glass-panel perf-card">
                    <h3>1/4 MILE</h3>
                    <div id="timer-quarter" class="digital-readout">--.-s</div>
                    <div class="sub-readout" id="trap-speed">@ --- MPH</div>
                </div>

                <!-- G-Force -->
                <div class="glass-panel perf-card">
                    <h3>G-FORCE</h3>
                    <div class="g-circle">
                        <div id="g-dot" class="g-dot"></div>
                    </div>
                    <div class="g-readout">
                        <span id="g-max">MAX: 0.0G</span>
                    </div>
                </div>

                <!-- Instant Power -->
                <div class="glass-panel perf-card">
                    <h3>INSTANT POWER</h3>
                    <div class="gauge-container">
                        <div class="power-val" id="hp-val">0</div>
                        <div class="unit">HP</div>
                    </div>
                    <div class="gauge-container">
                        <div class="power-val" id="tq-val">0</div>
                        <div class="unit">FT-LB</div>
                    </div>
                </div>
            </div>
        `;
    }

    private startLoop() {
        setInterval(() => {
            if (!this.element.isConnected) return;

            const speed = this.hal.powertrain.speed.value; // km/h
            const speedMph = speed * 0.621371;
            const rpm = this.hal.powertrain.rpm.value;
            const load = this.hal.powertrain.load.value;

            // 1. HP Calculation (Simplified approximation)
            // HP = (Torque * RPM) / 5252
            // Estimated Torque = MaxTorque * Load% (Very crude)
            // Let's assume a generic 3.6L V6 profile (~260 lb-ft max)
            const estTorque = 260 * (load / 100);
            const estHp = (estTorque * rpm) / 5252;

            const hpEl = this.element.querySelector('#hp-val');
            const tqEl = this.element.querySelector('#tq-val');
            if (hpEl) hpEl.textContent = Math.round(estHp).toString();
            if (tqEl) tqEl.textContent = Math.round(estTorque).toString();

            // 2. 0-60 Logic
            if (!this.timerRunning && speedMph < 1) {
                // Ready state
                const tmr = this.element.querySelector('#timer-0-60');
                if (tmr) tmr.textContent = "READY";
            } else if (!this.timerRunning && speedMph > 1 && speedMph < 60) {
                // Start
                this.timerRunning = true;
                this.startTime = Date.now();
            } else if (this.timerRunning && speedMph >= 60) {
                // Finish
                this.timerRunning = false;
                const delta = (Date.now() - this.startTime) / 1000;
                const tmr = this.element.querySelector('#timer-0-60');
                if (tmr) tmr.textContent = delta.toFixed(2) + "s";
            } else if (this.timerRunning) {
                // Update
                const delta = (Date.now() - this.startTime) / 1000;
                const tmr = this.element.querySelector('#timer-0-60');
                if (tmr) tmr.textContent = delta.toFixed(1) + "s";
            }

            // 3. G-Force (Simulated from accel)
            const ax = this.hal.motion.accel.x.value;
            const ay = this.hal.motion.accel.y.value;
            // Map to CSS pixels (50px radius)
            const maxG = 1.5;
            const x = Math.max(-50, Math.min(50, (ax / maxG) * 50));
            const y = Math.max(-50, Math.min(50, (ay / maxG) * 50));

            const dot = this.element.querySelector('#g-dot') as HTMLElement;
            if (dot) dot.style.transform = `translate(${x}px, ${-y}px)`; // -y because up is negative Y in CSS

        }, 100);
    }
}
