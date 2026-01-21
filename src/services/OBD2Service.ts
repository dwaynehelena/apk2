import { VehicleHAL } from './VehicleHAL';
import { registerPlugin } from '@capacitor/core';

interface TwahhPluginImpl {
    connectELM327(options: { mode: string, host?: string, port?: number, mac?: string }): Promise<{ connected: boolean }>;
    sendOBD(options: { cmd: string }): Promise<any>;
    addListener(eventName: string, listenerFunc: (data: any) => void): Promise<any> & { remove: () => void };
}

const TwahhPlugin = registerPlugin<TwahhPluginImpl>('TwahhPlugin');


export class OBD2Service {
    private hal: VehicleHAL;
    private lastDataTimestamp: number = 0;
    private _isConnected = false;
    private get isConnected() { return this._isConnected; }
    private set isConnected(val: boolean) {
        this._isConnected = val;
        this.hal.system.obdConnected.value = val;
        if (val) this.hal.notifyCanbusActivity(); // Also trigger activity
    }
    private pollInterval: any;
    private nativeFallbackMode = false; // True when using AIDL instead of ELM327

    constructor(hal: VehicleHAL) {
        this.hal = hal;
        // Check if native AIDL is available and start using it as fallback
        this.initNativeFallback();
        // Try to auto-connect to ELM327 WiFi (common case for dedicated dongles)
        this.autoConnect();
    }

    private autoConnect() {
        setTimeout(async () => {
            if (!this.isConnected) {
                console.log('[OBD2] Auto-connecting to default WiFi ELM327...');
                await this.connectWifi("192.168.0.10", 35000);
            }
        }, 3000); // 3s delay to allow Native AIDL to be discovered first
    }

    /**
     * Initialize native CANbus fallback mode.
     * If AIDL data is available, use it instead of requiring ELM327.
     */
    private initNativeFallback() {
        setInterval(() => {
            // Check if AIDL is active (data received in last 3 seconds)
            const wasInFallback = this.nativeFallbackMode;
            const aidlActive = this.hal.isAidlActive();

            if (aidlActive) {
                if (!wasInFallback) {
                    console.log('[OBD2] Native CANbus data stream DETECTED');
                }
                this.nativeFallbackMode = true;
                this.syncFromNativeCANbus();
            } else if (!aidlActive && this.nativeFallbackMode) {
                // AIDL connection lost
                console.warn('[OBD2] Native CANbus fallback mode DEACTIVATED (AIDL inactive)');
                this.nativeFallbackMode = false;
            }
        }, 1000); // Check every second
    }

    /**
     * Sync data from native CANbus (AIDL) to OBD2 compatible format.
     * This allows the UI to work without ELM327 when native data is available.
     */
    private syncFromNativeCANbus() {
        // Update last data timestamp to indicate active connection
        this.lastDataTimestamp = Date.now();

        // HAL already has the data, we just need to ensure it's fresh
        // The voltage, speed, and other data are already being updated by
        // VehicleHAL's handleSnifferUpdate method
    }

    /**
     * Check if we're using native CANbus fallback instead of ELM327.
     */
    isUsingNativeFallback(): boolean {
        return this.nativeFallbackMode;
    }

    /**
     * Connects to ELM327 via Wi-Fi (IP/Port).
     */
    async connectWifi(ip: string = "192.168.0.10", port: number = 35000): Promise<boolean> {
        console.log(`[OBD2] Connecting to ${ip}:${port}...`);

        try {
            // Setup Listeners
            TwahhPlugin.addListener('obdData', (res: any) => this.handleData(res.data));
            TwahhPlugin.addListener('obdStatus', (res: any) => {
                console.log('[OBD2] Status Change:', res.status);
                this.isConnected = res.status === 'connected';
                if (!this.isConnected) clearInterval(this.pollInterval);
            });

            const res = await TwahhPlugin.connectELM327({ mode: 'wifi', host: ip, port: port });
            if (res.connected) {
                this.isConnected = true;
                await this.initELM();
                this.startPolling();
                return true;
            }
        } catch (e) {
            console.error('[OBD2] Connection failed', e);
        }
        return false;
    }

    /**
     * Connects to ELM327 via Bluetooth (Pairing).
     */
    async connectBluetooth(mac: string = ""): Promise<boolean> {
        console.log(`[OBD2] Connecting via Bluetooth...`);

        try {
            // Setup Listeners (idempotent if already added, but safe to re-add)
            TwahhPlugin.addListener('obdData', (res: any) => this.handleData(res.data));
            TwahhPlugin.addListener('obdStatus', (res: any) => {
                console.log('[OBD2] Status:', res.status);
                this.isConnected = res.status === 'connected';
                if (!this.isConnected) clearInterval(this.pollInterval);
            });

            const res = await TwahhPlugin.connectELM327({ mode: 'bluetooth', mac: mac });
            if (res.connected) {
                this.isConnected = true;
                await this.initELM();
                this.startPolling();
                return true;
            }
        } catch (e) {
            console.error('[OBD2] BT Connection failed', e);
        }
        return false;
    }

    private async send(cmd: string) {
        await TwahhPlugin.sendOBD({ cmd });
    }

    private async initELM() {
        await this.send("AT Z");   // Reset
        await new Promise(r => setTimeout(r, 1000));
        await this.send("AT E0");  // Echo Off
        await this.send("AT SP0"); // Auto Proto
        await this.send("01 00");  // Warmup
    }

    private startPolling() {
        this.pollInterval = setInterval(async () => {
            if (!this.isConnected) return;
            // Standard PIDs
            await this.send("01 0C"); // RPM
            await this.send("01 0D"); // Speed
            await this.send("01 05"); // Coolant
            await this.send("01 04"); // Load
            await this.send("01 11"); // Throttle
            await this.send("01 0F"); // Intake Air Temp
            await this.send("01 42"); // Battery Voltage

            // Mopar Specific (Jeep Wrangler JK 2012+)
            // Group 1: Standard / Powertrain (Header 07E0)
            await this.send("AT SH 07E0");
            await this.send("22 02 2A"); // Oil Pressure
            await this.send("22 01 21"); // Oil Temp

            // Group 2: Transmission (Header 07E1)
            await this.send("AT SH 07E1");
            await this.send("21 30");    // Trans Temp

            // Group 3: TPMS (Header 07E0)
            await this.send("AT SH 07E0");
            await this.send("22 A0 20"); // TPMS FL
            await this.send("22 A0 21"); // TPMS FR
            await this.send("22 A0 22"); // TPMS RL
            await this.send("22 A0 23"); // TPMS RR

            // Reset to default functional header if needed for standard PIDs
            await this.send("AT SH 7DF");
        }, 500); // 2Hz polling loop for high-density Mopar data
    }

    private handleData(raw: string) {
        // Basic ELM327 Response Parser
        // Format: "41 0C 0B E8" -> RPM
        const clean = raw.replace(/>/g, '').trim();
        if (!clean) return;

        const parts = clean.split(' ');
        if (parts.length < 3) return;

        const mode = parts[0]; // 41 = Response to 01
        const pid = parts[1];

        if (mode === '41') {
            this.lastDataTimestamp = Date.now();
            if (pid === '0C') { // RPM
                const A = parseInt(parts[2], 16);
                const B = parseInt(parts[3], 16);
                if (!isNaN(A) && !isNaN(B)) {
                    const rpm = ((A * 256) + B) / 4;
                    this.hal.updateRPM(rpm);
                }
            }
            else if (pid === '0D') { // Speed
                const speed = parseInt(parts[2], 16);
                if (!isNaN(speed)) this.hal.powertrain.speed.value = speed;
            }
            else if (pid === '05') { // Coolant
                const temp = parseInt(parts[2], 16) - 40;
                if (!isNaN(temp)) this.hal.powertrain.coolant.value = temp;
            }
            else if (pid === '04') { // Engine Load
                const val = parseInt(parts[2], 16);
                if (!isNaN(val)) {
                    const load = (val * 100) / 255;
                    this.hal.powertrain.load.value = Math.round(load);
                }
            }
            else if (pid === '11') { // Throttle Position
                const val = parseInt(parts[2], 16);
                if (!isNaN(val)) {
                    const throttle = (val * 100) / 255;
                    this.hal.powertrain.throttle.value = Math.round(throttle);
                }
            }
            else if (pid === '0F') { // Intake Air Temp
                const temp = parseInt(parts[2], 16) - 40;
                if (!isNaN(temp)) this.hal.powertrain.intakeTemp.value = temp;
            }
            else if (pid === '42') { // Control Module Voltage (Battery)
                const A = parseInt(parts[2], 16);
                const B = parseInt(parts[3], 16);
                if (!isNaN(A) && !isNaN(B)) {
                    const voltage = ((A * 256) + B) / 1000;
                    this.hal.updateVoltage(voltage);
                }
            }
        }
        else if (mode === '61') { // Response to Mode 21 (Mopar)
            this.lastDataTimestamp = Date.now();
            if (pid === '02' || pid === '30') { // Mopar Trans Temp (Mode 21)
                if (parts.length >= 4) {
                    const A = parseInt(parts[2], 16);
                    const B = parseInt(parts[3], 16);
                    if (!isNaN(A) && !isNaN(B)) {
                        const tempC = (A * 256 + B) / 4 - 40;
                        this.hal.powertrain.transTemp.value = Math.round(tempC);
                    }
                }
            }
        }
        else if (mode === '62') { // Response to Mode 22 (Mopar/Extended)
            this.lastDataTimestamp = Date.now();
            const fullPid = parts[1] + (parts[2] || '');

            if (fullPid === '022A') { // Oil Pressure
                const A = parseInt(parts[3], 16);
                if (!isNaN(A)) {
                    const psi = (A * 150) / 255 - 1;
                    this.hal.powertrain.oilPressure.value = Math.round(Math.max(0, psi));
                }
            }
            else if (fullPid === '0121') { // Oil Temp
                const A = parseInt(parts[3], 16);
                if (!isNaN(A)) {
                    const tempC = A - 40; // Mopar 22 0121 is usually offset by 40
                    this.hal.powertrain.oilTemp.value = tempC;
                }
            }
            else if (fullPid.startsWith('A0')) { // TPMS
                const A = parseInt(parts[3], 16);
                const B = parseInt(parts[4], 16);
                if (!isNaN(A) && !isNaN(B)) {
                    // Formula: (((256*A)+B)/3+22/3)*0.145
                    const psi = (((256 * A) + B) / 3 + 7.33) * 0.145;
                    const val = Math.round(psi);
                    if (fullPid === 'A020') this.hal.body.tpms.fl.value = val;
                    if (fullPid === 'A021') this.hal.body.tpms.fr.value = val;
                    if (fullPid === 'A022') this.hal.body.tpms.rl.value = val;
                    if (fullPid === 'A023') this.hal.body.tpms.rr.value = val;
                }
            }
        }
        else if (mode === '43' || mode === '47') {
            // DTC Response: 43 [A1] [B1] [A2] [B2] ...
            // parts[0] is mode. parts[1...] are bytes.
            const bytes = parts.slice(1).map(h => parseInt(h, 16));
            const codes: string[] = [];

            for (let i = 0; i < bytes.length; i += 2) {
                if (i + 1 >= bytes.length) break;
                if (bytes[i] === 0 && bytes[i + 1] === 0) continue; // Padding

                const code = this.parseDTC(bytes[i], bytes[i + 1]);
                codes.push(code);
            }

            // Append unique
            const current = this.hal.diagnostics.dtcs.value;
            const next = Array.from(new Set([...current, ...codes]));
            this.hal.diagnostics.dtcs.value = next;
        }
    }

    // Scan for DTCs - supports native AIDL, ELM327, and demo/test modes
    async scanForFaults(): Promise<void> {
        this.hal.diagnostics.isScanning.value = true;
        this.hal.diagnostics.dtcs.value = [];

        try {
            if (this.isConnected) {
                // ELM327 mode: send actual OBD commands
                await this.send("03");
                await new Promise(r => setTimeout(r, 2000));
                await this.send("07");
                await new Promise(r => setTimeout(r, 2000));
            } else if (this.nativeFallbackMode) {
                // Native AIDL mode: simulate scan since we can't query DTCs via AIDL
                console.log('[OBD2] Using native CANbus fallback - DTC scan limited');
                await new Promise(r => setTimeout(r, 500));

                // Check for voltage-based warnings
                const voltage = this.hal.powertrain.batteryVoltage.value;
                if (voltage < 11.5) {
                    this.hal.diagnostics.dtcs.value = ['U0001: Low Battery Voltage (Native Mode)'];
                } else if (voltage > 15.0) {
                    this.hal.diagnostics.dtcs.value = ['U0002: High Battery Voltage (Native Mode)'];
                }

                // Check for temperature warnings
                const coolant = this.hal.powertrain.coolant.value;
                if (coolant > 110) {
                    this.hal.diagnostics.dtcs.value.push('P0217: Engine Coolant Over Temperature');
                }
            } else {
                // No connection - do nothing
                console.log('[OBD2] No connection for DTC scan');
            }
        } catch (e) {
            console.error('[OBD2] Scan failed', e);
        } finally {
            this.hal.diagnostics.isScanning.value = false;
        }
    }

    private parseDTC(high: number, low: number): string {
        const typeMap = ['P', 'C', 'B', 'U'];
        const type = typeMap[(high >> 6) & 0x03]; // Bits 7-6
        const second = (high >> 4) & 0x03;        // Bits 5-4
        const third = (high & 0x0F).toString(16); // Bits 3-0
        const fourth = ((low >> 4) & 0x0F).toString(16);
        const fifth = (low & 0x0F).toString(16);

        return `${type}${second}${third}${fourth}${fifth}`.toUpperCase();
    }

    clearFaults(): void {
        this.hal.diagnostics.dtcs.value = [];
    }

    updateLiveTelemetry(telemetry: { voltage?: number; intakeTemp?: number }): void {
        // Update HAL with provided telemetry values (for testing/manual updates)
        if (telemetry.voltage !== undefined) {
            this.hal.diagnostics.voltage.value = telemetry.voltage;
        }
        if (telemetry.intakeTemp !== undefined) {
            this.hal.diagnostics.intakeTemp.value = telemetry.intakeTemp;
        }
    }

    hasActiveData(): boolean {
        // Consider data active if either ELM327 is connected OR native AIDL is active
        const elm327Active = (Date.now() - this.lastDataTimestamp) < 5000;
        const nativeActive = this.nativeFallbackMode && this.hal.isAidlActive();
        return elm327Active || nativeActive;
    }

    isWifiConnected(): boolean {
        return this.isConnected;
    }

    /**
     * Get connection status string for UI display.
     */
    getConnectionStatus(): string {
        if (this.isConnected) {
            return 'ELM327 Connected';
        } else {
            return 'Disconnected';
        }
    }
}
