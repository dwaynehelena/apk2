
import { VehicleHAL } from '../services/VehicleHAL';
import { OBD2Service } from '../services/OBD2Service';
import { Capacitor } from '@capacitor/core';

export class DeepDiagnostics {
    element: HTMLDivElement;
    private onClose: () => void;
    private logHistory: string[] = [];
    private lineCount: number = 0;

    constructor(private hal: VehicleHAL, private obd: OBD2Service, onClose: () => void) {
        this.onClose = onClose;
        this.element = document.createElement('div');
        this.element.style.position = 'fixed';
        this.element.style.inset = '0';
        this.element.style.zIndex = '9999';
        this.element.style.background = 'rgba(0,0,0,0.95)';
        this.element.style.backdropFilter = 'blur(10px)';
        this.element.style.color = 'var(--q-primary)';
        this.element.style.padding = '30px';
        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'column';
        this.element.style.fontFamily = 'var(--font-mono)';

        this.renderUI();
    }

    private renderUI() {
        this.element.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(0,240,255,0.3); padding-bottom: 20px; margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 24px;">⚡</span>
                    <div>
                        <h2 style="margin: 0; font-size: 20px; letter-spacing: 2px;">DEEP_DIAG_MATRIX</h2>
                        <p style="margin: 0; font-size: 10px; opacity: 0.6;">SYSTEM INTERPOLATION & PACKET INSPECTION</p>
                    </div>
                </div>
                <button id="btn-close" class="q-btn" style="border-color: var(--q-accent); color: var(--q-accent);">
                    [ X ] TERMINATE
                </button>
            </div>

            <div class="glass-panel" style="flex: 1; margin-bottom: 20px; padding: 15px; overflow: hidden; display: flex; flex-direction: column;">
                <div id="console-logs" style="flex: 1; overflow-y: auto; font-size: 12px; line-height: 1.5; font-family: 'Roboto Mono', monospace;">
                    <div style="text-align: center; opacity: 0.3; padding-top: 50px;">
                        READY TO INITIALIZE DEEP SCAN SEQUENCE...<br>
                        WARNING: HIGH BUS LOAD EVENT
                    </div>
                </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                <div style="display: flex; flex-direction: column; gap: 5px;">
                    <span style="font-size: 10px; opacity: 0.5; text-transform: uppercase;">Operations</span>
                    <div style="display: flex; gap: 10px;">
                        <button id="btn-run-all" class="q-btn" style="border-color: var(--q-primary); color: var(--q-primary);">
                            [ INITIATE FULL SEQUENCE ]
                        </button>
                        <button id="btn-sniff" class="q-btn" style="border-color: var(--q-warning); color: var(--q-warning);">
                            [ START SNIFFER ]
                        </button>
                         <button id="btn-save" class="q-btn" style="display: none; border-color: white; color: white;">
                            [ SAVE DUMP ]
                        </button>
                    </div>
                </div>
                
                <div style="text-align: right;">
                    <div id="scan-status" style="font-size: 24px; font-weight: bold; color: var(--q-primary);">STANDBY</div>
                    <div style="font-size: 10px; opacity: 0.3;">IDLE</div>
                </div>
            </div>
        `;

        this.element.querySelector('#btn-close')?.addEventListener('click', () => {
            this.element.remove();
            this.onClose();
        });

        this.element.querySelector('#btn-run-all')?.addEventListener('click', () => {
            const consoleEl = this.element.querySelector('#console-logs');
            if (consoleEl) consoleEl.innerHTML = '';
            this.runSequence();
        });

        this.element.querySelector('#btn-sniff')?.addEventListener('click', () => this.startSniffer());

        this.element.querySelector('#btn-save')?.addEventListener('click', () => this.saveLogs());
    }

    private log(msg: string, type: 'info' | 'success' | 'warn' | 'error' = 'info') {
        const logContainer = this.element.querySelector('#console-logs');
        if (!logContainer) return;

        // Remove placeholder if present
        if (logContainer.querySelector('div[style*="text-align: center"]')) {
            logContainer.innerHTML = '';
        }

        const line = document.createElement('div');
        line.style.display = 'flex';
        line.style.gap = '10px';
        line.style.marginBottom = '2px';
        line.style.borderBottom = '1px solid rgba(255,255,255,0.02)';

        const timestamp = new Date().toISOString().split('T')[1].slice(0, -1);
        let color = 'var(--q-primary)';
        let prefix = 'INFO';

        if (type === 'success') { color = 'var(--q-success)'; prefix = 'OK  '; }
        if (type === 'warn') { color = 'var(--q-warning)'; prefix = 'WARN'; }
        if (type === 'error') { color = 'var(--q-accent)'; prefix = 'FAIL'; }

        // Store log for export
        this.logHistory.push(`[${timestamp}] ${prefix} ${msg}`);

        line.innerHTML = `<span style="opacity: 0.3; font-size: 10px;">[${timestamp}]</span> <span style="color: ${color}; font-weight: bold; font-size: 10px; min-width: 30px;">${prefix}</span> <span style="color: #ddd;">${msg}</span>`;
        logContainer.appendChild(line);
        logContainer.scrollTop = logContainer.scrollHeight;
        this.lineCount++;
    }

    private async runSequence() {
        const status = this.element.querySelector('#scan-status');
        if (status) status.textContent = "EXECUTING...";

        await this.delay(500);
        this.log('Accessing Kernel...', 'info');
        this.log(`Plat: ${Capacitor.getPlatform()} (Native: ${Capacitor.isNativePlatform()})`, 'info');

        try {
            const { TwahhPlugin } = (window as any).Capacitor.Plugins;
            const info = await TwahhPlugin.getSystemInfo();
            this.log(`HW: ${info.manufacturer} ${info.model}`, 'warn');
        } catch (e) {
            this.log('Could not fetch System Info', 'error');
        }

        // AUTO-SAVE TIMER (60s)
        this.log('⏳ LOG TIMER STARTED (60s)', 'info');
        setTimeout(() => {
            this.log('⏰ AUTO-SAVE TRIGGERED', 'warn');
            this.saveLogs();
        }, 60000);


        // ELM327 CONNECTION CHECK
        this.log('--- ELM327 DIAGNOSTICS ---', 'warn');
        this.log('Checking ELM327 Status...', 'info');

        let isConnected = this.obd.isWifiConnected();

        if (isConnected) {
            this.log('🔗 ELM327 ALREADY CONNECTED (WiFi)', 'success');
        } else {
            this.log('ELM327 Disconnected. Attempting Uplink...', 'warn');
            try {
                // Try standard ID/Port
                const success = await this.obd.connectWifi('192.168.0.10', 35000);
                if (success) {
                    this.log('🔗 ELM327 CONNECTION ESTABLISHED', 'success');
                    isConnected = true;
                } else {
                    this.log('❌ ELM327 CONNECTION FAILED', 'error');
                }
            } catch (e: any) {
                this.log(`ELM327 Error: ${e.message}`, 'error');
            }
        }

        // DEEP DIAGNOSTICS: Scan for CANbus-related apps
        this.log('--- SCANNING CANBUS APPS ---', 'warn');
        try {
            const { TwahhPlugin } = (window as any).Capacitor.Plugins;
            const scanResult = await TwahhPlugin.scanCanbusApps();
            this.log(`Found ${scanResult.count} potential CANbus apps:`, 'info');
            if (scanResult.apps && scanResult.apps.length > 0) {
                for (const app of scanResult.apps) {
                    this.log(`  [${app.matchedKeyword}] ${app.package}`, 'success');
                }
            } else {
                this.log('  (No CANbus-related packages found)', 'warn');
            }
        } catch (e: any) {
            this.log(`App scan failed: ${e.message}`, 'error');
        }

        // DEEP DIAGNOSTICS: Probe ContentProviders
        this.log('--- PROBING PROVIDERS ---', 'warn');
        try {
            const { TwahhPlugin } = (window as any).Capacitor.Plugins;
            const probeResult = await TwahhPlugin.probeTwContentProviders();
            let accessibleCount = 0;
            for (const result of probeResult.results) {
                if (result.accessible) {
                    accessibleCount++;
                    this.log(`[ACCESSIBLE] ${result.uri}`, 'success');
                } else {
                    this.log(`[DENIED] ${result.uri}`, 'warn');
                }
            }
        } catch (e: any) {
            this.log(`ContentProvider probe failed: ${e.message}`, 'error');
        }

        // Show save button
        const btnSave = this.element.querySelector('#btn-save') as HTMLElement;
        if (btnSave) btnSave.style.display = 'block';

        if (status) {
            status.textContent = "COMPLETE";
            status.style.color = 'var(--q-success)';
        }
    }

    private async startSniffer() {
        this.log('--- STARTING SNIFFER ---', 'warn');
        try {
            const { TwahhPlugin } = (window as any).Capacitor.Plugins;
            const res = await TwahhPlugin.startSuperAggressiveSniffer();
            this.log(`📡 SNIFFER STARTED`, 'success');
            this.log(`Status: ${res.status}`, 'info');
            this.log(`Log File: ${res.logFile}`, 'info');

            // Also enable raw ELM sniffing if connected
            if (this.obd.isWifiConnected()) {
                await TwahhPlugin.toggleRawSniffing({ target: 'elm327', enable: true });
                this.log('ELM327 Raw Capture: ENABLED', 'success');
            }
        } catch (e: any) {
            this.log(`Sniffer failed: ${e.message}`, 'error');
        }
    }

    private async saveLogs() {
        const { TwahhPlugin } = (window as any).Capacitor.Plugins;
        try {
            this.log('Saving dump...', 'info');
            const content = this.logHistory.join('\n');
            const res = await TwahhPlugin.saveLogFile({ content });
            if (res && res.paths) {
                this.log(`Logs written to ${res.paths.join(', ')}`, 'success');
                alert('Saved!');
            }
        } catch (e: any) {
            this.log(`Save failed: ${e.message}`, 'error');
        }
    }

    private delay(ms: number) {
        return new Promise(r => setTimeout(r, ms));
    }
}
