import { VehicleHAL } from './VehicleHAL';

export class OBD2Service {
    private hal: VehicleHAL;
    private lastDataTimestamp: number = 0;
    private demoFaults = [
        'P0300: Random or Multiple Cylinder Misfire Detected',
        'P0171: System Too Lean (Bank 1)',
        'P0420: Catalyst System Efficiency Below Threshold',
        'B1202: Fuel Sender Circuit Open'
    ];

    private isConnected = false;
    private pollInterval: any;

    constructor(hal: VehicleHAL) {
        this.hal = hal;
    }

    /**
     * Connects to ELM327 via Wi-Fi (IP/Port).
     */
    async connectWifi(ip: string = "192.168.0.10", port: number = 35000): Promise<boolean> {
        console.log(`[OBD2] Connecting to ${ip}:${port}...`);

        if ((window as any).Capacitor?.isNative) {
            const { TwahhPlugin } = (window as any).Capacitor.Plugins;

            // Setup Listeners
            TwahhPlugin.addListener('obdData', (res: any) => this.handleData(res.data));
            TwahhPlugin.addListener('obdStatus', (res: any) => {
                console.log('[OBD2] Status:', res.status);
                this.isConnected = res.status === 'connected';
                if (!this.isConnected) clearInterval(this.pollInterval);
            });

            try {
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
        }
        return false;
    }

    /**
     * Connects to ELM327 via Bluetooth (Pairing).
     */
    async connectBluetooth(mac: string = ""): Promise<boolean> {
        console.log(`[OBD2] Connecting via Bluetooth...`);

        if ((window as any).Capacitor?.isNative) {
            const { TwahhPlugin } = (window as any).Capacitor.Plugins;

            // Setup Listeners (idempotent if already added, but safe to re-add)
            TwahhPlugin.addListener('obdData', (res: any) => this.handleData(res.data));
            TwahhPlugin.addListener('obdStatus', (res: any) => {
                console.log('[OBD2] Status:', res.status);
                this.isConnected = res.status === 'connected';
                if (!this.isConnected) clearInterval(this.pollInterval);
            });

            try {
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
        }
        return false;
    }

    private async send(cmd: string) {
        if (!this.isConnected) return;
        const { TwahhPlugin } = (window as any).Capacitor.Plugins;
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

            // Mopar Specific (Jeep Wrangler JK / Dodge / Chrysler)
            // Transmission Temperature is often 21 02 or 21 30
            await this.send("21 02");
        }, 250); // 4Hz polling loop (reduced slightly to avoid congestion)
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
            if (pid === '02') { // Mopar Trans Temp
                if (parts.length >= 4) {
                    const A = parseInt(parts[2], 16);
                    const B = parseInt(parts[3], 16);
                    if (!isNaN(A) && !isNaN(B)) {
                        const temp = (A * 256 + B) / 4 - 40;
                        if (temp > -40 && temp < 200) {
                            this.hal.powertrain.transTemp.value = Math.round(temp);
                        }
                    }
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

    // Scan for DTCs - supports both native and demo/test modes
    async scanForFaults(): Promise<void> {
        this.hal.diagnostics.isScanning.value = true;
        this.hal.diagnostics.dtcs.value = [];

        try {
            if (this.isConnected) {
                // Native mode: send actual OBD commands
                await this.send("03");
                await new Promise(r => setTimeout(r, 2000));
                await this.send("07");
                await new Promise(r => setTimeout(r, 2000));
            } else {
                // Demo/test mode: simulate scan with mock data
                await new Promise(r => setTimeout(r, 100));
                if (Math.random() < 0.6) {
                    const randomFault = this.demoFaults[Math.floor(Math.random() * this.demoFaults.length)];
                    this.hal.diagnostics.dtcs.value = [randomFault];
                }
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
        return (Date.now() - this.lastDataTimestamp) < 5000; // Active if data within last 5s
    }

    isWifiConnected(): boolean {
        return this.isConnected;
    }
}
