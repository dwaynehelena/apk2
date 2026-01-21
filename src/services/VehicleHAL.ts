import { signal, computed } from '@preact/signals-core';
import { registerPlugin } from '@capacitor/core';
import { FytCanbusCodes, FytBroadcastPayload, FYT_BRIDGE_EVENT } from './FytTypes';

/**
 * Data model for FYT platform car sensors.
 * This class includes standard conversions from the raw MCU/CANbus values.
 */
export interface CarSensorData {
    rawSpeed: number;    // Raw value from com.syu.ms
    rawRpm: number;      // Raw value from com.syu.ms
    voltage: number;  // Battery voltage
    fuelLevel: number;   // 0-100 percentage
    isHandbrakeOn: boolean;
    isHeadlightsOn: boolean;
    outsideTemp: number;
    doorStatus: DoorStatus;
}

export interface DoorStatus {
    driver: boolean;
    passenger: boolean;
    rearLeft: boolean;
    rearRight: boolean;
    trunk: boolean;
}

export class VehicleHAL {
    // Powertrain Signals
    powertrain = {
        rpm: signal(0),
        speed: signal(0),
        gear: signal('N'),
        boost: signal(0),
        oil: signal(90),
        coolant: signal(85),
        fuelLevel: signal(75), // %
        batteryVoltage: signal(12.6), // Volts
        load: signal(0), // %
        throttle: signal(0), // %
        intakeTemp: signal(0), // C
        oilTemp: signal(0), // C
        transTemp: signal(0), // C
        fuelEco: signal(0)    // L/100km
    };

    // Body Signals
    body = {
        doors: {
            fl: signal(false),
            fr: signal(false),
            rl: signal(false),
            rr: signal(false),
            hood: signal(false),
            trunk: signal(false)
        },
        locked: signal(false),
        seatbelt: {
            driver: signal(true), // true = buckled
            passenger: signal(true)
        },
        parkingBrake: signal(false), // true = engaged
        climate: {
            tempL: signal(20.0),
            tempR: signal(20.0),
            fanSpeed: signal(2), // 0-7
            ac: signal(false)
        },
        lights: {
            on: signal(false), // Headlights
            highBeam: signal(false),
            hazards: signal(false)
        },
        outdoorTemp: signal(20) // Celsius
    };

    // Motion Signals (GPS/Accel)
    // Motion Signals (GPS/Accel)
    motion = {
        location: {
            lat: signal(0),
            lng: signal(0),
            heading: signal(0),
            elevation: signal(0),
            odometer: signal(123456) // km
        },
        accel: {
            x: signal(0),
            y: signal(0),
            z: signal(9.81)
        },
        // NEW: Off-road Orientation
        orientation: {
            pitch: signal(0), // degrees (-up/+down)
            roll: signal(0),  // degrees (-left/+right)
            compass: signal('N')
        },
        // NEW: Max recorded G-Forces
        gForce: {
            current: signal(0),
            maxLat: signal(0),
            maxLong: signal(0)
        },
        trip: {
            distance: signal(0), // km
            duration: signal(0), // seconds
            avgSpeed: signal(0)
        },
        perf: {
            timer0100: signal(0), // seconds
            isTimerRunning: signal(false),
            best0100: signal(0)
        }
    };

    // Media/SWC Signals
    media = {
        volume: signal(15), // 0-30
        nowPlaying: signal('FM 88.5'),
        isPlaying: signal(false)
    };

    // Diagnostics/OBD2 Signals
    diagnostics = {
        dtcs: signal<string[]>([]),
        voltage: signal(14.2),
        minVoltage: signal(14.2),
        maxVoltage: signal(14.2),
        intakeTemp: signal(35),
        isScanning: signal(false),
        serviceDueKm: signal(5000)
    };

    // System State
    system = {
        demoMode: signal(false), // Defaults to FALSE for production
        canbusActive: signal(false) // True if receiving data
    };

    // Computed Advanced Logic
    safetyLock = computed(() => {
        // "Safety Lock": If speedKmh > 5 and isHandbrakeOn == false
        return this.powertrain.speed.value > 5 && !this.body.parkingBrake.value;
    });

    private lastAidlUpdate: number = 0;

    isAidlActive(): boolean {
        return (Date.now() - this.lastAidlUpdate) < 3000;
    }

    nightMode = computed(() => {
        // "Night Shift": Triggered by headlights
        return this.body.lights.on.value;
    });

    private fytAdapter: FytAdapter;
    private canbusTimeout: any;

    constructor() {
        this.fytAdapter = new FytAdapter(this);

        // Start listening to native events
        this.initFytBridge();

        // Fallback to mock loop ONLY if dev/demo mode or no bridge
        // Start logic loop for timers/trips
        this.startLogicLoop();

        // Fallback to mock loop ONLY if dev/demo mode or no bridge
        // DISABLED FOR PRODUCTION: User requires Strict Native Mode
        // this.startMockLoop();
    }

    // Called by Adapter when valid data arrives
    notifyCanbusActivity() {
        this.system.canbusActive.value = true;
        clearTimeout(this.canbusTimeout);
        this.canbusTimeout = setTimeout(() => {
            this.system.canbusActive.value = false;
        }, 3000); // 3 seconds timeout
    }

    private initFytBridge() {
        console.log('[VehicleHAL] Initializing FYT Bridge...');

        // 1. Listen for the custom event (Legacy / WebView bridge)
        window.addEventListener(FYT_BRIDGE_EVENT, (event: any) => {
            const detail = event.detail as FytBroadcastPayload;
            if (detail && detail.codes) {
                this.fytAdapter.handleUpdate(detail.codes);
            }
        });

        // 2. Listen for Capacitor Plugin events (Native Bridge via builder.py)
        try {
            const TwahhPlugin = registerPlugin<any>('TwahhPlugin');
            TwahhPlugin.addListener('systemEvent', (data: any) => {
                // console.log('[VehicleHAL] RX:', JSON.stringify(data));
                // builder.py/TwahhPlugin.java maps intent extras to JSON keys
                // We check for "codes" which we handle specifically
                if (data.codes && Array.isArray(data.codes)) {
                    this.fytAdapter.handleUpdate(data.codes);
                    this.lastAidlUpdate = Date.now();
                }
            });

            TwahhPlugin.addListener('canbusDump', (data: any) => {
                if (data.type === 'aidl_real' || data.type === 'aidl_success') {
                    this.lastAidlUpdate = Date.now();
                    this.fytAdapter.handleSnifferUpdate(data);
                }
            });
            console.log('[VehicleHAL] Native TwahhPlugin registered.');
        } catch (e) {
            console.warn('[VehicleHAL] TwahhPlugin not available (Web Mode?)', e);
        }

        // Fallback/Legacy Access for Head Unit
        if ((window as any).Capacitor?.Plugins?.TwahhPlugin) {
            try {
                (window as any).Capacitor.Plugins.TwahhPlugin.addListener('systemEvent', (data: any) => {
                    if (data.codes && Array.isArray(data.codes)) {
                        this.fytAdapter.handleUpdate(data.codes);
                    }
                });
                console.log('[VehicleHAL] Legacy TwahhPlugin listener attached.');
            } catch (e) {
                console.warn('[VehicleHAL] Failed to attach legacy listener', e);
            }
        }

        // Check availability of direct bridge
        if (window.fytBridge) {
            console.log('[VehicleHAL] Native FYT Bridge found.');
        }
    }


    readState() {
        // Return structure compatible with tests/legacy views
        return {
            powertrain: this.powertrain,
            body: this.body,
            motion: this.motion,
            media: this.media
        }
    }



    toggleDoor(door: keyof typeof this.body.doors) {
        this.body.doors[door].value = !this.body.doors[door].value;
    }

    updateLocation(lat: number, lng: number, heading: number) {
        this.motion.location.lat.value = lat;
        this.motion.location.lng.value = lng;
        this.motion.location.heading.value = heading;
    }

    handleSWC(keyCode: number) {
        // Mock SWC logic
        switch (keyCode) {
            case 24: // KEYCODE_VOLUME_UP
                this.media.volume.value = Math.min(30, this.media.volume.value + 1);
                break;
            case 25: // KEYCODE_VOLUME_DOWN
                this.media.volume.value = Math.max(0, this.media.volume.value - 1);
                break;
            case 85: // KEYCODE_MEDIA_PLAY_PAUSE
                this.media.isPlaying.value = !this.media.isPlaying.value;
                break;
        }
    }

    setClimateTemp(side: 'left' | 'right', temp: number) {
        if (side === 'left') this.body.climate.tempL.value = temp;
        else this.body.climate.tempR.value = temp;
    }

    async scanDTCs() {
        this.diagnostics.isScanning.value = true;
        await new Promise(r => setTimeout(r, 1500));
        const demoCodes = ['P0300 (Random Misfire)', 'P0171 (System Too Lean)', 'B1202 (Fuel Sender Open)'];
        this.diagnostics.dtcs.value = Math.random() > 0.4 ? [demoCodes[Math.floor(Math.random() * 3)]] : [];
        this.diagnostics.isScanning.value = false;
    }

    clearDTCs() {
        this.diagnostics.dtcs.value = [];
    }

    // Powertrain Update Methods
    updateRPM(rpm: number, isNative: boolean = false) {
        if (!isNative && this.isAidlActive()) return; // Prioritize AIDL
        this.powertrain.rpm.value = Math.round(rpm);
    }

    updateVoltage(v: number, isNative: boolean = false) {
        if (!isNative && this.isAidlActive()) return; // Prioritize AIDL

        this.powertrain.batteryVoltage.value = Number(v.toFixed(2));
        if (v < this.diagnostics.minVoltage.value) this.diagnostics.minVoltage.value = v;
        if (v > this.diagnostics.maxVoltage.value) this.diagnostics.maxVoltage.value = v;
    }

    // Logic Update Loop (runs at 10Hz)
    private lastUpdateTime = Date.now();
    private perfStartTime = 0;

    startLogicLoop() {
        setInterval(() => {
            const now = Date.now();
            const deltaMs = now - this.lastUpdateTime;
            const deltaSec = deltaMs / 1000;
            this.lastUpdateTime = now;

            const speed = this.powertrain.speed.value;

            // 1. Trip Distance integration
            if (speed > 0) {
                const distKm = (speed * deltaSec) / 3600;
                this.motion.trip.distance.value += distKm;
                this.motion.trip.duration.value += deltaSec;
            }

            // 2. 0-100 Performance Timer
            if (speed > 1 && !this.motion.perf.isTimerRunning.value && this.motion.perf.timer0100.value === 0) {
                this.motion.perf.isTimerRunning.value = true;
                this.perfStartTime = now;
            } else if (this.motion.perf.isTimerRunning.value) {
                if (speed >= 100) {
                    this.motion.perf.isTimerRunning.value = false;
                    const elapsed = (now - this.perfStartTime) / 1000;
                    this.motion.perf.timer0100.value = elapsed;
                    if (this.motion.perf.best0100.value === 0 || elapsed < this.motion.perf.best0100.value) {
                        this.motion.perf.best0100.value = elapsed;
                    }
                } else if (speed < 1 && (now - this.perfStartTime) > 2000) {
                    // Reset if stopped for too long while trying
                    this.motion.perf.isTimerRunning.value = false;
                    this.motion.perf.timer0100.value = 0;
                } else {
                    this.motion.perf.timer0100.value = (now - this.perfStartTime) / 1000;
                }
            } else if (speed < 1) {
                // Ready for next run if stopped
                this.motion.perf.timer0100.value = 0;
            }

            // 3. Fuel Economy (Mock logic based on load)
            const load = this.powertrain.load.value;
            const rpm = this.powertrain.rpm.value;
            if (speed > 10) {
                const estL100 = (load * 0.15) + (rpm / 1000) * 2; // Very crude JK Wrangler style estimate
                this.powertrain.fuelEco.value = Number(estL100.toFixed(1));
            } else {
                this.powertrain.fuelEco.value = 0;
            }
        }, 100);
    }
}

/**
 * Adapter to translate raw FYT arrays into VehicleHAL signals.
 * Implements HEX parsing logic for 0x11, 0x12, 0x15, 0x16 commands.
 */
class FytAdapter {
    private hal: VehicleHAL;

    constructor(hal: VehicleHAL) {
        this.hal = hal;
    }

    handleUpdate(codes: number[]) {
        if (!codes || codes.length < 2) return;

        // Notify HAL of activity
        this.hal.notifyCanbusActivity();

        const type = codes[0];
        // codes[1...] are payload

        switch (type) {
            case FytCanbusCodes.CANBUS_RPM_SPEED:
                // Legacy / Standard handling
                if (codes.length >= 4) {
                    const speed = codes[1]; // usually km/h
                    const rpm = (codes[2] << 8) | codes[3];
                    this.hal.powertrain.speed.value = speed;
                    this.hal.powertrain.rpm.value = rpm;
                }
                break;

            // New HEX Logic Parsing
            case 0x11: // Speed
                // value = byte[0]
                if (codes.length >= 2) this.hal.powertrain.speed.value = codes[1];
                break;

            case 0x12: // RPM
                // value = (byte[0] << 8) | byte[1] (Assuming 2 byte payload for reliability, though spec said byte[0]<<8)
                // Let's assume standard big-endian 2 byte
                if (codes.length >= 3) {
                    this.hal.powertrain.rpm.value = (codes[1] << 8) | codes[2];
                } else if (codes.length === 2) {
                    // Spec suggested byte[0] << 8, but that implies only hundreds?
                    // Let's stick to standard HL byte pair from existing implementation if available
                    this.hal.powertrain.rpm.value = codes[1] * 100; // Crude approximation if only 1 byte
                }
                break;

            case 0x15: // Voltage
                // value = byte[0] / 10.0f
                if (codes.length >= 2) this.hal.updateVoltage(codes[1] / 10.0);
                break;

            case 0x16: // Temp
                // value = byte[0] - 40
                if (codes.length >= 2) this.hal.body.outdoorTemp.value = codes[1] - 40;
                break;

            case FytCanbusCodes.CANBUS_DOOR_INFO:
                const mask = codes[1];
                this.hal.body.doors.fl.value = !!(mask & 0x01);
                this.hal.body.doors.fr.value = !!(mask & 0x02);
                this.hal.body.doors.rl.value = !!(mask & 0x04);
                this.hal.body.doors.rr.value = !!(mask & 0x08);
                this.hal.body.doors.hood.value = !!(mask & 0x10);
                this.hal.body.doors.trunk.value = !!(mask & 0x20);
                break;

            case FytCanbusCodes.CANBUS_TEMP_INFO:
                if (codes.length >= 3) {
                    this.hal.body.climate.tempL.value = codes[1];
                    this.hal.body.climate.tempR.value = codes[2];
                    if (codes.length > 3) this.hal.body.outdoorTemp.value = codes[3];
                }
                break;

            case FytCanbusCodes.CANBUS_HANDBRAKE:
                // [type, status (0/1)]
                this.hal.body.parkingBrake.value = !!codes[1];
                break;

            // Backlight / Night Mode check (Often sent as 0x14 or similar in some protocols, 
            // but user spec mentions 'com.syu.ms.action.BACKLIGHT_ON'. 
            // If we receive the broadcast via codes, we handle it here. 
            // If it's a separate Action string, TwahhPlugin handles it via 'systemEvent' action field.
        }
    }

    /**
     * Handles data from the AIDL/Binder sniffer.
     * Maps transaction codes from com.tw.carinfoservice.CarServiceAidl to vehicle data.
     *
     * Transaction Code Reference (discovered from logs):
     * TX=1,2: Error responses (UTF-16 "Attempt to invoke interface")
     * TX=3: Speed (Float32, km/h)
     * TX=4: Voltage (Float32, V)
     * TX=5: Unknown (8 bytes, all zeros)
     * TX=6: Invalid marker (0xFFFFFFFF)
     * TX=7,8: Door/Climate status? (20 bytes, complex structure)
     * TX=9,10: Float -1.0 (uninitialized sensor?)
     * TX=11-17: Invalid markers (0xFFFFFFFF)
     * TX=18: Gear/Mode? (16 bytes)
     * TX=19: Invalid marker
     * TX=20: Complex structure (20 bytes)
     */
    handleSnifferUpdate(data: any) {
        const { desc, tx, hex } = data;
        if (!hex) return;

        const bytes = hex.split(' ').filter((b: string) => b.length > 0).map((b: string) => parseInt(b, 16));

        // Debug logging
        const debugMode = false; // Set to true for verbose logging
        if (debugMode) {
            console.log(`[VehicleHAL] RX: DESC=${desc} TX=${tx} LEN=${bytes.length}`);
        }

        // Mapping based on twahh_canbus_dump.txt analysis
        if (desc === 'com.tw.carinfoservice.CarServiceAidl') {
            // TX=4: Voltage (Float32 at offset 4)
            if (tx === 4 && bytes.length >= 8) {
                // HEX: 00 00 00 00 [66 66 5E 41] -> 13.9V
                const buffer = new ArrayBuffer(4);
                const view = new DataView(buffer);
                view.setUint8(0, bytes[4]);
                view.setUint8(1, bytes[5]);
                view.setUint8(2, bytes[6]);
                view.setUint8(3, bytes[7]);
                const voltage = view.getFloat32(0, true);
                if (voltage > 5 && voltage < 18) {
                    this.hal.updateVoltage(voltage, true);
                    console.log(`[VehicleHAL] TX=4: Voltage=${voltage.toFixed(2)}V`);
                } else if (debugMode) {
                    console.warn(`[VehicleHAL] TX=4: Invalid voltage=${voltage}`);
                }
            }

            // TX=3: Speed (Float32)
            if (tx === 3 && (bytes.length === 4 || bytes.length >= 8)) {
                // Can be 4 bytes (Float32 direct) or 8 bytes (at offset 4)
                const offset = bytes.length >= 8 ? 4 : 0;
                const buffer = new ArrayBuffer(4);
                const view = new DataView(buffer);
                view.setUint8(0, bytes[offset]);
                view.setUint8(1, bytes[offset + 1]);
                view.setUint8(2, bytes[offset + 2]);
                view.setUint8(3, bytes[offset + 3]);
                const speed = view.getFloat32(0, true);
                if (speed >= 0 && speed < 300) {
                    this.hal.powertrain.speed.value = Math.round(speed);
                    if (speed > 0) {
                        console.log(`[VehicleHAL] TX=3: Speed=${Math.round(speed)} km/h`);
                    }
                } else if (debugMode) {
                    console.warn(`[VehicleHAL] TX=3: Invalid speed=${speed}`);
                }
            }

            // TX=7,8: Door/Climate Status (20 bytes)
            // Pattern: [status][type 03][FF FF FF FF][00 00 00 00][00 00 00 00]
            if ((tx === 7 || tx === 8) && bytes.length >= 20) {
                const status = bytes[0];
                const type = bytes[4]; // Usually 0x03

                // Check if this is door status (bit flags)
                if (type === 0x03) {
                    // Parse door bits if available
                    // This is speculative - needs real-world testing
                    const doorBits = bytes[8];
                    if (doorBits !== 0xFF) {
                        this.hal.body.doors.fl.value = !!(doorBits & 0x01);
                        this.hal.body.doors.fr.value = !!(doorBits & 0x02);
                        this.hal.body.doors.rl.value = !!(doorBits & 0x04);
                        this.hal.body.doors.rr.value = !!(doorBits & 0x08);
                    }
                }
            }

            // TX=9,10: Float values (often -1.0 = uninitialized)
            if ((tx === 9 || tx === 10) && bytes.length >= 8) {
                const buffer = new ArrayBuffer(4);
                const view = new DataView(buffer);
                view.setUint8(0, bytes[4]);
                view.setUint8(1, bytes[5]);
                view.setUint8(2, bytes[6]);
                view.setUint8(3, bytes[7]);
                const floatVal = view.getFloat32(0, true);

                // Only use if not -1.0 (uninitialized marker)
                if (floatVal > -0.9 && floatVal < -1.1) {
                    // This is the uninitialized marker, ignore
                } else if (floatVal >= 0) {
                    // Could be coolant temp, oil temp, etc.
                    // TX=9 -> Coolant? TX=10 -> Oil?
                    if (tx === 9 && floatVal > 0 && floatVal < 150) {
                        this.hal.powertrain.coolant.value = Math.round(floatVal);
                    } else if (tx === 10 && floatVal > 0 && floatVal < 150) {
                        this.hal.powertrain.oilTemp.value = Math.round(floatVal);
                    }
                }
            }

            // TX=18: Gear/Mode Status (16 bytes)
            // Pattern: [status][02 00 00 00][00 00 00 00][00 00 00 00]
            if (tx === 18 && bytes.length >= 16) {
                const status = bytes[0];
                const mode = bytes[4]; // Usually 0x02

                // Try to extract gear if mode indicates gear data
                if (mode === 0x02) {
                    const gearByte = bytes[8];
                    if (gearByte !== 0x00 && gearByte !== 0xFF) {
                        // Map gear byte to gear string
                        const gearMap: { [key: number]: string } = {
                            0x00: 'P',
                            0x01: 'R',
                            0x02: 'N',
                            0x03: 'D',
                            0x04: '1',
                            0x05: '2',
                            0x06: '3',
                            0x07: '4',
                            0x08: '5',
                            0x09: '6'
                        };
                        if (gearMap[gearByte]) {
                            this.hal.powertrain.gear.value = gearMap[gearByte];
                        }
                    }
                }
            }

            // TX=20: Complex Structure (20 bytes)
            // Pattern: [status][03 00 00 00][00 00 80 BF][00 00 00 00][00 00 00 00]
            // Byte 8-11 appear to be Float32 -1.0
            if (tx === 20 && bytes.length >= 20) {
                // This might contain parking brake, lights, or other body status
                const status = bytes[0];
                const type = bytes[4]; // Usually 0x03

                // Extract Float32 at offset 8
                const buffer = new ArrayBuffer(4);
                const view = new DataView(buffer);
                view.setUint8(0, bytes[8]);
                view.setUint8(1, bytes[9]);
                view.setUint8(2, bytes[10]);
                view.setUint8(3, bytes[11]);
                const floatVal = view.getFloat32(0, true);

                // If not -1.0, this might be useful data
                if (floatVal > 0) {
                    // Could be outdoor temp, fuel level, etc.
                    // Needs real-world testing to confirm
                }
            }

            // TX=5: All zeros - might be RPM when engine off
            if (tx === 5 && bytes.length >= 8) {
                // Check if all bytes are zero
                const allZeros = bytes.slice(4, 8).every((b: number) => b === 0);
                if (allZeros) {
                    // Engine is definitely off
                    this.hal.powertrain.rpm.value = 0;
                }
            }
        }
    }
}
