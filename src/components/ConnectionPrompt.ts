
import { VehicleHAL } from '../services/VehicleHAL';
import { OBD2Service } from '../services/OBD2Service';

export class ConnectionPrompt {
    public element: HTMLElement;
    private hal: VehicleHAL;
    private obd: OBD2Service;

    constructor(hal: VehicleHAL, obd: OBD2Service) {
        this.hal = hal;
        this.obd = obd;
        this.element = document.createElement('div');
        this.element.className = 'connection-prompt-overlay';
        this.render();

        // Listen for HAL changes to update the indicator
        this.hal.system.canbusActive.subscribe(() => this.updateIndicator());
    }

    private updateIndicator() {
        const dot = this.element.querySelector('.status-indicator .dot') as HTMLElement;
        const text = this.element.querySelector('.status-indicator .text-node') as HTMLElement;
        if (dot && text) {
            dot.style.background = this.hal.isAidlActive() ? 'var(--q-success)' : 'var(--q-warning)';
            text.textContent = this.hal.isAidlActive() ? ' BINDER STREAM DETECTED' : ' WAITING FOR BINDER...';
        }
    }

    private render() {
        this.element.innerHTML = `
            <div class="connection-prompt-card glass-panel">
                <div class="prompt-header">
                    <span class="pulse-icon">⚠️</span>
                    <h2>VEHICLE OFFLINE</h2>
                </div>
                
                <p class="prompt-msg">No active data stream detected from Allwinner AIDL or ELM327 interface.</p>
                
                <div class="connection-options">
                    <div class="option-group">
                        <h3>ELM327 (Wi-Fi)</h3>
                        <div class="input-row">
                            <input type="text" id="prompt-elm-host" value="192.168.0.10" placeholder="IP Address">
                            <input type="number" id="prompt-elm-port" value="35000" placeholder="Port">
                        </div>
                        <button class="q-btn primary-btn" id="prompt-btn-wifi">CONNECT WIFI</button>
                    </div>

                    <div class="option-group">
                        <h3>ELM327 (Bluetooth)</h3>
                        <button class="q-btn" id="prompt-btn-bt">START SCAN</button>
                    </div>
                </div>

                <div class="prompt-footer">
                    <button class="q-btn text-btn" id="prompt-btn-logs">VIEW SYSTEM LOGS</button>
                    <div class="status-indicator">
                        <span class="dot"></span> <span class="text-node">WAITING FOR BINDER...</span>
                    </div>
                </div>
            </div>

            <style>
                .connection-prompt-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: radial-gradient(circle at center, rgba(0, 20, 30, 0.95) 0%, #000 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    padding: 20px;
                    font-family: 'Inter', sans-serif;
                }

                .connection-prompt-card {
                    width: 100%;
                    max-width: 500px;
                    padding: 40px;
                    text-align: center;
                    border: 1px solid rgba(0, 240, 255, 0.2);
                    box-shadow: 0 0 50px rgba(0, 240, 255, 0.1);
                }

                .prompt-header h2 {
                    color: var(--q-primary);
                    letter-spacing: 4px;
                    margin: 10px 0;
                }

                .pulse-icon {
                    font-size: 40px;
                    display: block;
                    animation: pulse 1.5s infinite;
                }

                .prompt-msg {
                    opacity: 0.7;
                    font-size: 14px;
                    margin-bottom: 30px;
                }

                .connection-options {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    margin-bottom: 30px;
                }

                .option-group h3 {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.5;
                    margin-bottom: 10px;
                    text-align: left;
                }

                .input-row {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 10px;
                }

                .input-row input {
                    background: rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: white;
                    padding: 12px;
                    border-radius: 4px;
                    font-family: var(--font-mono);
                }

                #prompt-elm-host { flex: 2; }
                #prompt-elm-port { flex: 1; }

                .q-btn.primary-btn {
                    background: var(--q-primary);
                    color: black;
                    font-weight: bold;
                    width: 100%;
                }

                .prompt-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    padding-top: 20px;
                }

                .status-indicator {
                    font-size: 10px;
                    opacity: 0.5;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .status-indicator .dot {
                    width: 6px;
                    height: 6px;
                    background: var(--q-warning);
                    border-radius: 50%;
                }

                @keyframes pulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.95); }
                    100% { opacity: 1; transform: scale(1); }
                }
            </style>
        `;

        this.bindEvents();
    }

    private bindEvents() {
        this.element.querySelector('#prompt-btn-wifi')?.addEventListener('click', () => {
            const host = (this.element.querySelector('#prompt-elm-host') as HTMLInputElement).value;
            const port = parseInt((this.element.querySelector('#prompt-elm-port') as HTMLInputElement).value);
            this.obd.connectWifi(host, port);
        });

        this.element.querySelector('#prompt-btn-bt')?.addEventListener('click', () => {
            this.obd.connectBluetooth();
        });

        this.element.querySelector('#prompt-btn-logs')?.addEventListener('click', async () => {
            const logs = await this.hal.getDebugLogs();
            this.showLogViewer(logs);
        });
    }

    private showLogViewer(logs: string[]) {
        const viewer = document.createElement('div');
        viewer.className = 'log-viewer-overlay glass-panel';
        viewer.innerHTML = `
            <div class="log-viewer-header">
                <h3>SYSTEM LOGS</h3>
                <button class="q-btn sm-btn close-logs">CLOSE</button>
            </div>
            <div class="log-content">
                ${logs.map(l => `<div class="log-line">${l}</div>`).join('')}
            </div>
            <div class="log-viewer-footer">
                <button class="q-btn sm-btn save-usb" style="margin-right: 10px; background: var(--q-warning); color: black;">SAVE TO USB</button>
                <button class="q-btn sm-btn copy-logs">COPY TO CLIPBOARD</button>
            </div>
        `;

        // Styles specific to viewer
        const style = document.createElement('style');
        style.textContent = `
            .log-viewer-overlay {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
                height: 80%;
                background: rgba(0, 10, 20, 0.98);
                border: 1px solid var(--q-primary);
                z-index: 11000;
                display: flex;
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 0 100px rgba(0,0,0,0.8);
            }
            .log-viewer-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                padding-bottom: 10px;
                margin-bottom: 10px;
            }
            .log-content {
                flex: 1;
                overflow-y: auto;
                font-family: monospace;
                font-size: 10px;
                color: #ccc;
                background: rgba(0,0,0,0.3);
                padding: 10px;
                white-space: pre-wrap; 
                text-align: left;
            }
            .log-line { border-bottom: 1px solid rgba(255,255,255,0.02); padding: 2px 0; }
            .log-viewer-footer {
                padding-top: 10px;
                display: flex;
                justify-content: flex-end;
            }
            .q-btn.sm-btn { padding: 5px 10px; font-size: 10px; }
        `;
        viewer.appendChild(style);

        viewer.querySelector('.close-logs')?.addEventListener('click', () => viewer.remove());
        viewer.querySelector('.copy-logs')?.addEventListener('click', () => {
            navigator.clipboard.writeText(logs.join('\n'));
            (viewer.querySelector('.copy-logs') as HTMLElement).textContent = 'COPIED!';
        });

        viewer.querySelector('.save-usb')?.addEventListener('click', async () => {
            const btn = viewer.querySelector('.save-usb') as HTMLElement;
            btn.textContent = 'SAVING...';
            try {
                const result = await this.hal.saveDebugLogsToUsb();
                btn.textContent = 'SAVED!';
                alert(result);
            } catch (e: any) {
                btn.textContent = 'FAILED';
                alert('Error: ' + e.message);
            }
        });

        document.body.appendChild(viewer);
    }
}
