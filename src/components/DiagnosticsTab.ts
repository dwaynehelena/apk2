import { VehicleHAL } from '../services/VehicleHAL';
import { effect } from '@preact/signals-core';

import { OBD2Service } from '../services/OBD2Service';

export class DiagnosticsTab {
    element: HTMLDivElement;

    constructor(private hal: VehicleHAL, private obd: OBD2Service) {
        this.element = document.createElement('div');
        this.element.style.height = '100%';
        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'column';
        this.element.style.gap = '20px';
        this.element.style.padding = '20px';

        effect(() => {
            const diag = this.hal.diagnostics;
            const dtcs = diag.dtcs.value;
            const isScanning = diag.isScanning.value;

            this.element.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h2 class="text-glow text-primary" style="margin: 0; font-size: 28px;">DIAGNOSTICS</h2>
                        <p style="margin: 0; font-size: 10px; opacity: 0.6; letter-spacing: 2px;">OBD-II REAL-TIME TELEMETRY</p>
                    </div>
                    <div style="display: flex; gap: 10px;">
                         <button id="btn-deep-diag" class="q-btn" style="border-color: var(--q-warning); color: var(--q-warning);">
                            ADVANCED TOOLS
                        </button>
                        <button id="btn-scan" class="q-btn" style="${isScanning ? 'opacity: 0.5; cursor: wait;' : ''}">
                            ${isScanning ? 'SCANNING...' : 'FULL SYSTEM SCAN'}
                        </button>
                        <button id="btn-clear" class="q-btn" style="border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.5);">
                            CLEAR CODES
                        </button>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex: 1;">
                    <!-- Live Stats -->
                    <div class="quantum-card" style="display: flex; flex-direction: column; gap: 20px;">
                        <div class="card-title">TELEMETRY FLUX</div>
                        
                        <div class="glass-panel" style="padding: 20px; display: flex; justify-content: space-between; align-items: center;">
                            <span style="opacity: 0.7; font-size: 14px;">BATTERY</span>
                            <span class="text-glow text-primary" style="font-size: 32px;">${diag.voltage.value}<span style="font-size: 14px; opacity: 0.5;">V</span></span>
                        </div>
                        <div class="glass-panel" style="padding: 20px; display: flex; justify-content: space-between; align-items: center;">
                            <span style="opacity: 0.7; font-size: 14px;">INTAKE TEMP</span>
                            <span class="text-glow text-warn" style="font-size: 32px;">${diag.intakeTemp.value}<span style="font-size: 14px; opacity: 0.5;">°C</span></span>
                        </div>
                    </div>

                    <!-- DTC List -->
                    <div class="quantum-card" style="display: flex; flex-direction: column;">
                         <div class="card-title">SIGNAL ANOMALIES</div>
                        
                        <div style="flex: 1; overflow-y: auto; padding-right: 5px;">
                            ${dtcs.length === 0
                    ? `
                                <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0.3;">
                                    <span style="font-size: 40px;">🛡️</span>
                                    <span style="font-size: 12px; font-weight: bold; margin-top: 10px;">SYSTEM NOMINAL</span>
                                </div>`
                    : dtcs.map(code => `
                                    <div class="glass-panel" style="padding: 15px; margin-bottom: 10px; border-left: 3px solid var(--q-accent); display: flex; align-items: center; gap: 15px;">
                                        <span style="font-size: 20px;">⚠️</span>
                                        <div>
                                            <div style="font-weight: bold; color: var(--q-accent);">${code.split(' ')[0]}</div>
                                            <div style="font-size: 10px; opacity: 0.7;">${code.split(' ').slice(1).join(' ')}</div>
                                        </div>
                                    </div>
                                `).join('')
                }
                        </div>
                    </div>
                </div>

                <!-- Monitor Readiness -->
                <div class="quantum-card" style="padding: 15px;">
                     <div class="card-title" style="margin-bottom: 10px;">SUBSYSTEM READINESS</div>
                     <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
                        ${['MIL', 'EVAP', 'O2S', 'CAT'].map(sys => `
                            <div style="text-align: center;">
                                <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-bottom: 5px; overflow: hidden;">
                                     <div style="width: 100%; height: 100%; background: var(--q-success); box-shadow: 0 0 5px var(--q-success);"></div>
                                </div>
                                <span style="font-size: 10px; font-weight: bold; opacity: 0.5;">${sys}</span>
                            </div>
                        `).join('')}
                     </div>
                </div>
                <div class="quantum-card" style="margin-top: 20px;">
                    <div class="card-title">NATIVE DEBUG CONSOLE</div>
                    <div id="native-console" style="background: rgba(0,0,0,0.5); font-family: 'Roboto Mono', monospace; font-size: 10px; color: #0f0; padding: 10px; height: 150px; overflow-y: auto; white-space: pre-wrap;">
                        > INITIALIZING...
                    </div>
                </div>

                <!-- Network Tools -->
                 <div class="quantum-card" style="margin-top: 20px;">
                    <div class="card-title">NETWORK PROBE</div>
                    <div style="display: flex; gap: 10px;">
                        <button id="btn-net-scan" class="q-btn" style="flex: 1;">SCAN 192.168.0.*</button>
                    </div>
                 </div>
            `;

            this.element.querySelector('#btn-scan')?.addEventListener('click', () => {
                this.obd.connectWifi();
                this.obd.scanForFaults();
            });
            this.element.querySelector('#btn-clear')?.addEventListener('click', () => this.obd.clearFaults());

            this.element.querySelector('#btn-net-scan')?.addEventListener('click', () => {
                const { TwahhPlugin } = (window as any).Capacitor.Plugins;
                if (TwahhPlugin) TwahhPlugin.scanNetwork();
            });

            this.element.querySelector('#btn-deep-diag')?.addEventListener('click', () => {
                import('./DeepDiagnostics').then(({ DeepDiagnostics }) => {
                    const deep = new DeepDiagnostics(this.hal, this.obd, () => {
                        // On close
                    });
                    document.body.appendChild(deep.element);
                });
            });

            // Start Log Polling
            setInterval(async () => {
                if (!this.element.isConnected) return;
                const { TwahhPlugin } = (window as any).Capacitor?.Plugins || {};
                if (TwahhPlugin && TwahhPlugin.getPluginLogs) {
                    try {
                        const res = await TwahhPlugin.getPluginLogs();
                        const consoleEl = this.element.querySelector('#native-console');
                        if (consoleEl && res.logs) {
                            consoleEl.innerHTML = res.logs.join('\n');
                            consoleEl.scrollTop = consoleEl.scrollHeight;
                        }
                    } catch (e) { }
                }
            }, 1000);
        });
    }
}
