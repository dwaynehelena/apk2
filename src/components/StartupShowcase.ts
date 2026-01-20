
import { VehicleHAL } from '../services/VehicleHAL';
import { OBD2Service } from '../services/OBD2Service';
import { Vehicle3D } from './Vehicle3D';

export class StartupShowcase {
    element: HTMLDivElement;
    private vehicle3D!: Vehicle3D;
    private retryCount: number = 0;
    private isConnecting: boolean = false;

    constructor(private hal: VehicleHAL, private obd: OBD2Service, private onComplete: () => void) {
        this.element = document.createElement('div');
        this.element.className = 'startup-container';

        this.render();
        // this.init3D(); // DISABLED FOR EMULATOR DEBUGGING
        this.startConnectionLoop();
    }

    private render() {
        this.element.innerHTML = `
            <!-- Jeep Render Container -->
            <div id="vehicle-canvas" style="position:absolute; inset:0; z-index:0; opacity:0; transition: opacity 1s; display: flex; align-items: center; justify-content: center;">
                <img src="./assets/jeep_render.png" style="width: 80%; max-width: 600px; height: auto; filter: drop-shadow(0 0 20px rgba(0,0,0,0.8)); opacity: 0.8;" />
            </div>

            <!-- Content -->
            <div style="z-index: 10; text-align: center; display: flex; flex-direction: column; gap: 30px;">
                
                <h1 style="font-size: 80px; margin: 0; letter-spacing: -2px; font-style: italic; color: #ffffff; text-shadow: 0 0 20px rgba(255,255,255,0.5);">
                    QUANTUM
                </h1>
                
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                    <div style="height: 1px; width: 50px; background: var(--q-primary);"></div>
                    <span style="color: var(--q-primary); letter-spacing: 5px; font-weight: bold;">OS VER 4.0</span>
                    <div style="height: 1px; width: 50px; background: var(--q-primary);"></div>
                </div>

                <!-- Status Box -->
                <div class="glass-panel" style="padding: 30px; min-width: 400px; margin-top: 40px;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 15px;">
                        <div id="status-icon" style="width: 10px; height: 10px; background: #ff0000; border-radius: 50%; box-shadow: 0 0 10px #ff0000;"></div>
                        <span id="connection-status" style="font-family: var(--font-mono); font-size: 12px; letter-spacing: 2px;">INITIALIZING UPLINK...</span>
                    </div>
                    
                    <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
                        <div id="progress-bar" style="width: 0%; height: 100%; background: var(--q-primary); transition: width 0.3s;"></div>
                    </div>
                </div>

                <div id="retry-msg" style="font-family: var(--font-mono); font-size: 10px; color: #666; height: 15px;"></div>

                <button id="btn-enter" class="q-btn" style="opacity: 0; transform: translateY(20px); transition: all 0.5s; font-size: 14px; padding: 15px 40px; margin-top: 20px;">
                    ENTER DASHBOARD
                </button>
            </div>
        `;

        const enterBtn = this.element.querySelector('#btn-enter');
        if (enterBtn) {
            enterBtn.addEventListener('click', () => this.transitionToDashboard());
        }

        // Add Demo Button - VISIBLE FOR DEBUGGING
        const demoBtn = document.createElement('button');
        demoBtn.id = 'btn-demo';
        demoBtn.textContent = "[ ENTER DEMO MODE ]";
        demoBtn.className = 'q-btn';
        demoBtn.style.cssText = `
            opacity: 1; 
            pointer-events: all; 
            margin-top: 10px; 
            background: rgba(255,255,255,0.1); 
            border: 1px solid #444; 
            color: #fff; 
            font-size: 12px; 
            padding: 10px 20px;
            cursor: pointer;
        `;
        demoBtn.onclick = () => {
            console.log("Entering Demo Mode...");
            this.transitionToDashboard();
        };
        this.element.querySelector('div[style*="flex-direction: column"]')?.appendChild(demoBtn);
    }

    private init3D() {
        try {
            const container = this.element.querySelector('#vehicle-canvas') as HTMLElement;
            if (container) {
                // Force lights on for showcase
                this.hal.body.lights.on.value = true;
                this.hal.powertrain.speed.value = 120; // 120 km/h simulate for spin

                this.vehicle3D = new Vehicle3D(container, this.hal);

                // Fade in
                requestAnimationFrame(() => {
                    container.style.opacity = '1';
                });
            }
        } catch (e) {
            console.error("3D Init Failed:", e);
            // Non-fatal, just continue without 3D
        }
    }

    private async startConnectionLoop() {
        if (this.isConnecting) return;
        this.isConnecting = true;

        const updateStatus = (msg: string, color: string, progress: number) => {
            const statusEl = this.element.querySelector('#connection-status');
            const iconEl = this.element.querySelector('#status-icon') as HTMLElement;
            const barEl = this.element.querySelector('#progress-bar') as HTMLElement;
            const retryEl = this.element.querySelector('#retry-msg');

            if (statusEl) statusEl.textContent = msg;
            if (iconEl) {
                iconEl.style.background = color;
                iconEl.style.boxShadow = `0 0 10px ${color}`;
            }
            if (barEl) barEl.style.width = `${progress}%`;
            if (retryEl && this.retryCount > 0) retryEl.textContent = `RETRY_ATTEMPT: ${this.retryCount}`;
        };

        while (true) {
            // Check for Native CAN Uplink (Head Unit internal bus)
            if (this.hal.system.canbusActive.value) {
                updateStatus('NATIVE UPLINK DETECTED', '#00ff00', 100);
                this.onSuccess();
                return;
            }

            updateStatus('SEARCHING FOR ELM327 (WIFI)...', '#ffff00', 30);

            try {
                // Try Wi-Fi
                let connected = await this.obd.connectWifi('192.168.0.10', 35000);

                // If Wi-Fi fails, try Bluetooth
                if (!connected) {
                    updateStatus('SEARCHING FOR ELM327 (BLUETOOTH)...', '#00ffff', 40);
                    await this.delay(500);
                    connected = await this.obd.connectBluetooth();
                }

                if (connected) {
                    updateStatus('HANDSHAKE SUCCESS', '#00ff00', 75);
                    await this.delay(500);

                    // Verify data
                    updateStatus('VERIFYING DATA STREAM...', '#00ff00', 90);
                    const hasData = await this.waitForData(5000); // 5s check

                    if (hasData) {
                        updateStatus('SYSTEM LINKED', '#00ff00', 100);
                        this.onSuccess();
                        return;
                    } else {
                        throw new Error('No data stream detected');
                    }
                } else {
                    throw new Error('All connection methods failed');
                }
            } catch (e) {
                this.retryCount++;
                updateStatus(`CONNECTION FAILED. RETRYING...`, '#ff0000', 100);

                // Show debug info
                const retryEl = this.element.querySelector('#retry-msg');
                if (retryEl) retryEl.textContent = `RETRY: ${this.retryCount} | ERR: ${e instanceof Error ? e.message : String(e)}`;

                if (this.retryCount > 2) {
                    console.log("Emulator Debug: Auto-entering Demo Mode...");
                    this.transitionToDashboard();
                    return;
                }

                if (this.retryCount > 0) {
                    const demoBtn = this.element.querySelector('#btn-demo') as HTMLElement;
                    if (demoBtn) {
                        demoBtn.style.opacity = '1';
                        demoBtn.style.pointerEvents = 'all';
                    }
                }

                await this.delay(2000); // Wait before retry
            }
        }
    }

    private async waitForData(timeout: number): Promise<boolean> {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (this.obd.hasActiveData()) return true;
            await this.delay(200);
        }
        return false;
    }

    private onSuccess() {
        const enterBtn = this.element.querySelector('#btn-enter') as HTMLElement;
        const statusContainer = this.element.querySelector('.glass-panel') as HTMLElement;

        if (statusContainer) {
            statusContainer.style.border = '1px solid var(--q-success)';
            statusContainer.style.background = 'rgba(0, 255, 157, 0.1)';
        }

        if (enterBtn) {
            enterBtn.style.opacity = '1';
            enterBtn.style.transform = 'translateY(0)';
        }

        // Auto-enter
        setTimeout(() => this.transitionToDashboard(), 1500);
    }

    private transitionToDashboard() {
        this.hal.powertrain.speed.value = 0;
        this.element.style.transition = 'opacity 0.8s ease-out';
        this.element.style.opacity = '0';

        setTimeout(() => {
            this.onComplete();
            this.element.remove();
        }, 800);
    }

    private delay(ms: number) {
        return new Promise(r => setTimeout(r, ms));
    }
}
