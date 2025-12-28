import { Plugins } from '@capacitor/core';
const { TwahhPlugin } = Plugins; // Using the injected plugin

class VehicleHAL {
    constructor() {
        this.connected = false;

        // Zero/Null state - NO SIMULATION
        this.powertrain = {
            rpm: 0, speed: 0, gear: 'N', throttle: 0, load: 0,
            coolant: 0, intake: 0, oil: 0, voltage: 0,
            maf: 0, map: 0, boost: 0, afr: 0, timing: 0,
            fuelLevel: 0, hp: 0, torque: 0, trip: 0.0, kw: 0
        };

        this.body = {
            doors: { fl: false, fr: false, rl: false, rr: false, trunk: false, hood: false },
            lights: { lowBeam: false, highBeam: false, fog: false, leftSig: false, rightSig: false },
            climate: { on: false, setTemp: 0, cabinTemp: 0, fanSpeed: 0, mode: 'OFF' },
            tpms: { fl: { psi: 0, temp: 0 }, fr: { psi: 0, temp: 0 }, rl: { psi: 0, temp: 0 }, rr: { psi: 0, temp: 0 } },
            radar: { frontLeft: 0, frontCenter: 0, frontRight: 0, rearLeft: 0, rearCenter: 0, rearRight: 0 },
            outsideTemp: 0, humidity: 0, seatHeat: { l: 0, r: 0 }
        };

        this.motion = { accelX: 0, accelY: 0, heading: 0, maxLatG: 0, maxLongG: 0, driftAngle: 0 };
        this.chassis = { steeringAngle: 0, brakePressure: 0, suspension: { fl: 0, fr: 0, rl: 0, rr: 0 } };
        // Fill info with placeholder until real data
        this.info = { track: "Waiting...", artist: "--", nav: { turn: "none", dist: 0 } };
        this.onLog = null; // Callback for verbose logging
    }

    log(msg, type = "system") {
        console.log(`[${type.toUpperCase()}] ${msg}`);
        if (this.onLog) this.onLog(msg, type);
    }

    async runDiagnostics() {
        this.log("Starting System Diagnostics...", "system");
        const results = {
            capacitor: false,
            plugin: false,
            apps: false,
            events: false
        };

        // 1. Check Capacitor
        this.log("Probing for window.Capacitor...", "system");
        if (window.Capacitor) {
            this.log("Capacitor Core found.", "success");
            results.capacitor = true;
        } else {
            this.log("Capacitor Core NOT FOUND. Running in Web/Sim mode.", "error");
        }

        // 2. Check Plugin
        this.log("Probing for TwahhPlugin...", "system");
        if (window.Capacitor && window.Capacitor.Plugins.TwahhPlugin) {
            this.log("TwahhPlugin registered successfully.", "success");
            results.plugin = true;
        } else {
            this.log("TwahhPlugin NOT FOUND in Capacitor.Plugins.", "error");
        }

        // 3. Check Apps (Native API)
        if (results.plugin) {
            this.log("Testing Native API: getApps()...", "system");
            try {
                const apps = await window.Capacitor.Plugins.TwahhPlugin.getApps();
                if (apps && apps.apps) {
                    this.log(`Native API Success: Received ${apps.apps.length} apps.`, "success");
                    results.apps = true;
                } else {
                    this.log("Native API returned invalid data structure.", "error");
                }
            } catch (e) {
                this.log(`Native API Error: ${e.message}`, "error");
                console.error("Diag: getApps failed", e);
            }
        }

        // 4. Check Events (Add listener and assume ok if no crash)
        if (results.plugin) {
            this.log("Testing Event Bus: systemEvent listener...", "system");
            try {
                window.Capacitor.Plugins.TwahhPlugin.addListener('systemEvent', (info) => {
                    this.log(`BUS EVENT: ${info.action}`, "event");
                    this.handleNativeEvent(info);
                });
                this.log("Event listener attached successfully.", "success");
                results.events = true;
            } catch (e) {
                this.log(`Event Bus Error: ${e.message}`, "error");
                console.error("Diag: addListener failed", e);
            }
        }

        return results;
    }

    async connect() {
        console.log("Connecting to Real Hardware...");

        // 1. Listen for Native Events (Battery, CAN)
        if (window.Capacitor) {
            window.Capacitor.Plugins.TwahhPlugin.addListener('systemEvent', (info) => {
                this.handleNativeEvent(info);
            });
            console.log("Native Listener Attached");
        }

        // 2. Connect Bluetooth OBD2
        try {
            this.device = await navigator.bluetooth.requestDevice({
                filters: [{ services: ['000018f0-0000-1000-8000-00805f9b34fb'] }] // Standard ELM327 UUID
            });
            this.server = await this.device.gatt.connect();
            this.connected = true;
            this.startOBDLoop();
        } catch (e) {
            console.error("Bluetooth Connection Failed", e);
            alert("Bluetooth Connect Failed: " + e.message + ". Ensure you are using a HTTPS/Localhost context.");
        }
    }

    handleNativeEvent(data) {
        console.log("Native Event Received:", data.action, data);

        // 1. Generic Vehicle Info (Speed, RPM, etc)
        if (data.action === "com.xyauto.broadcast.canbus.RECEIVE") {
            if (data.RPM) this.powertrain.rpm = parseInt(data.RPM);
            if (data.Speed) this.powertrain.speed = parseInt(data.Speed);
            if (data.Voltage) this.powertrain.voltage = parseFloat(data.Voltage);
        }

        // 2. Door Status
        if (data.action === "com.xyauto.broadcast.CAN_DOOR_INFO" || data.action === "com.microntek.canbus.display") {
            if (data.LF_Door !== undefined) this.body.doors.fl = (data.LF_Door == "1");
            if (data.RF_Door !== undefined) this.body.doors.fr = (data.RF_Door == "1");
            if (data.LR_Door !== undefined) this.body.doors.rl = (data.LR_Door == "1");
            if (data.RR_Door !== undefined) this.body.doors.rr = (data.RR_Door == "1");
            if (data.Trunk !== undefined) this.body.doors.trunk = (data.Trunk == "1");
            if (data.Hood !== undefined) this.body.doors.hood = (data.Hood == "1");
        }

        // 3. Climate Info
        if (data.action === "com.xyauto.broadcast.CAN_AIR_INFO") {
            this.body.climate.on = (data.AC_Status == "1");
            this.body.climate.setTemp = parseFloat(data.Left_Temp) || 0;
            this.body.climate.fanSpeed = parseInt(data.Fan_Speed) || 0;
        }

        // 4. Battery Changed
        if (data.action === "android.intent.action.BATTERY_CHANGED") {
            // Optional logic
        }
    }

    async getApps() {
        if (window.Capacitor && window.Capacitor.Plugins.TwahhPlugin) {
            try {
                const result = await window.Capacitor.Plugins.TwahhPlugin.getApps();
                return result.apps || [];
            } catch (e) {
                console.error("Failed to get apps", e);
                return [];
            }
        }
        return [{ name: "Simulated App 1", package: "com.simlp.1" }, { name: "Simulated App 2", package: "com.simp.2" }];
    }

    async launchApp(pkg) {
        if (window.Capacitor && window.Capacitor.Plugins.TwahhPlugin) {
            await window.Capacitor.Plugins.TwahhPlugin.launchApp({ package: pkg });
        } else {
            console.log("Simulated Launch:", pkg);
        }
    }

    async startOBDLoop() {
        // Real ELM327 Polling Loop would go here
        // Simplified for this file structure:
        // 1. Write '01 0C\r' (RPM)
        // 2. Read value
        // 3. Parse and update this.powertrain.rpm
        // This requires a full AT parser library, implementing a stub:
        console.log("Starting OBD2 Polling (Real Mode)");
    }

    readState() {
        // Just return the raw state object, populated by events
        return {
            powertrain: this.powertrain,
            body: this.body,
            motion: this.motion,
            chassis: this.chassis,
            info: this.info,
            perf: { z100: "--", qtr: "--", trap: "--" }
        };
    }

    // UI Helpers still needed? Yes, for demo mode if user forces it, 
    // but default is NO SIMULATION.
    toggleDoor(door) { } // Disabled
    toggleLight(light) { } // Disabled
}
