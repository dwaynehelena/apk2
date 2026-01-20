/**
 * FytTypes.ts
 * Type definitions for FYT/Topway (Allwinner/Unisoc) Android Head Unit Integration.
 * Based on 'com.syu.canbus', 'com.tw.carinfoservice', and standard FYT intent protocols.
 *
 * Compatible with:
 * - Allwinner T3/T5/T7 platforms
 * - FYT/Topway/XYAUTO head units
 * - Various canbus boxes (Raise, Hiworld, etc.)
 */

// The main Android Broadcast Actions used by FYT/Allwinner units
export const FYT_INTENT_ACTION = 'com.syu.canbus.update';
export const TW_CARINFO_ACTION = 'com.tw.carinfoservice.action.UPDATE';
export const SYU_MS_ACTION = 'com.syu.ms.action.UPDATE';

// Broadcast actions for specific events
export const FYT_BROADCAST_ACTIONS = {
    CANBUS_UPDATE: 'com.syu.canbus.update',
    BACKLIGHT_ON: 'com.syu.ms.action.BACKLIGHT_ON',
    BACKLIGHT_OFF: 'com.syu.ms.action.BACKLIGHT_OFF',
    ACC_ON: 'com.syu.ms.action.ACC_ON',
    ACC_OFF: 'com.syu.ms.action.ACC_OFF',
    REVERSE_ON: 'com.syu.ms.action.REVERSE_ON',
    REVERSE_OFF: 'com.syu.ms.action.REVERSE_OFF',
    PARKING_ON: 'com.syu.ms.action.PARKING_ON',
    PARKING_OFF: 'com.syu.ms.action.PARKING_OFF',
    MEDIA_CHANGE: 'com.syu.ms.action.MEDIA_CHANGE',
    VOLUME_CHANGE: 'com.syu.ms.action.VOLUME_CHANGE',
    SWC_KEY: 'com.syu.ms.action.SWC_KEY'
} as const;

// Standard FYT Module Codes (Domain IDs)
export enum FytModule {
    MAIN = 0,
    RADIO = 1,
    BT = 2,
    DVD = 3,
    AUX = 4,
    TV = 5,
    IPOD = 6,
    CDC = 7,
    CANBUS = 8,
    AIR = 9,
    SETTINGS = 10,
    MCU = 11
}

// Complete CANBUS codes for FYT/Allwinner platforms
// These map to the 'type' byte in broadcast arrays
export enum FytCanbusCodes {
    // Basic Vehicle Data
    CANBUS_DOOR_INFO = 0x01,      // Door status bitmask
    CANBUS_RPM_SPEED = 0x02,      // Combined RPM/Speed packet
    CANBUS_TEMP_INFO = 0x03,      // Climate temperatures
    CANBUS_HANDBRAKE = 0x04,      // Parking brake status
    CANBUS_SWC_KEY = 0x05,        // Steering wheel control key
    CANBUS_FUEL_INFO = 0x06,      // Fuel level

    // Extended Vehicle Data (0x10-0x1F)
    CANBUS_SPEED = 0x11,          // Speed only (km/h)
    CANBUS_RPM = 0x12,            // RPM only (value << 8)
    CANBUS_COOLANT_TEMP = 0x13,   // Engine coolant temperature
    CANBUS_OIL_TEMP = 0x14,       // Engine oil temperature
    CANBUS_VOLTAGE = 0x15,        // Battery voltage (value / 10.0)
    CANBUS_OUTSIDE_TEMP = 0x16,   // Outside temperature (value - 40)
    CANBUS_FUEL_CONSUMPTION = 0x17, // Instant fuel consumption
    CANBUS_ODOMETER = 0x18,       // Odometer reading
    CANBUS_TRANS_TEMP = 0x19,     // Transmission temperature
    CANBUS_OIL_PRESSURE = 0x1A,   // Oil pressure
    CANBUS_TURBO_BOOST = 0x1B,    // Turbo boost pressure

    // Body Electronics (0x20-0x2F)
    CANBUS_LIGHTS = 0x20,         // Light status bitmask
    CANBUS_SEATBELT = 0x21,       // Seatbelt status
    CANBUS_TURN_SIGNAL = 0x22,    // Turn signal status
    CANBUS_WIPER = 0x23,          // Wiper status
    CANBUS_WINDOW = 0x24,         // Window position
    CANBUS_MIRROR = 0x25,         // Mirror status
    CANBUS_SUNROOF = 0x26,        // Sunroof status

    // Climate Control (0x30-0x3F)
    CANBUS_AC_STATUS = 0x30,      // AC on/off
    CANBUS_AC_TEMP_L = 0x31,      // Left zone temperature
    CANBUS_AC_TEMP_R = 0x32,      // Right zone temperature
    CANBUS_FAN_SPEED = 0x33,      // Fan speed level
    CANBUS_VENT_MODE = 0x34,      // Vent direction mode
    CANBUS_DEFROST = 0x35,        // Defrost status
    CANBUS_HEATED_SEATS = 0x36,   // Heated seat status
    CANBUS_COOLED_SEATS = 0x37,   // Cooled seat status

    // Drivetrain (0x40-0x4F)
    CANBUS_GEAR = 0x40,           // Current gear (P/R/N/D/1/2/3...)
    CANBUS_4WD_MODE = 0x41,       // 4WD mode (2H/4H/4L)
    CANBUS_DIFF_LOCK = 0x42,      // Differential lock status
    CANBUS_TRANSFER_CASE = 0x43,  // Transfer case mode
    CANBUS_TRACTION_CTRL = 0x44,  // Traction control status
    CANBUS_STABILITY_CTRL = 0x45, // Stability control status

    // Safety Systems (0x50-0x5F)
    CANBUS_TPMS = 0x50,           // Tire pressure monitoring
    CANBUS_ABS_STATUS = 0x51,     // ABS status
    CANBUS_AIRBAG = 0x52,         // Airbag status
    CANBUS_COLLISION_WARN = 0x53, // Collision warning
    CANBUS_LANE_ASSIST = 0x54,    // Lane assist status
    CANBUS_BLIND_SPOT = 0x55,     // Blind spot monitoring

    // Common FYT-specific codes
    CANBUS_BATTERY_VOLTAGE = 0x72, // Alternative voltage code (114 decimal)
    CANBUS_SYU_SPEED = 0x73,       // SYU-specific speed
    CANBUS_SYU_RPM = 0x74,         // SYU-specific RPM
}

// Light status bitmask values
export enum FytLightMask {
    HEADLIGHTS = 0x01,
    HIGH_BEAM = 0x02,
    FOG_FRONT = 0x04,
    FOG_REAR = 0x08,
    PARKING = 0x10,
    HAZARDS = 0x20,
    TURN_LEFT = 0x40,
    TURN_RIGHT = 0x80
}

// Door status bitmask values
export enum FytDoorMask {
    DOOR_FL = 0x01,
    DOOR_FR = 0x02,
    DOOR_RL = 0x04,
    DOOR_RR = 0x08,
    HOOD = 0x10,
    TRUNK = 0x20,
    FUEL_DOOR = 0x40
}

// Gear position values
export enum FytGearPosition {
    PARK = 0x00,
    REVERSE = 0x01,
    NEUTRAL = 0x02,
    DRIVE = 0x03,
    SPORT = 0x04,
    LOW = 0x05,
    MANUAL_1 = 0x11,
    MANUAL_2 = 0x12,
    MANUAL_3 = 0x13,
    MANUAL_4 = 0x14,
    MANUAL_5 = 0x15,
    MANUAL_6 = 0x16
}

// 4WD Mode values
export enum Fyt4WDMode {
    TWO_HIGH = 0x00,
    FOUR_HIGH = 0x01,
    FOUR_LOW = 0x02,
    AUTO = 0x03
}

// Steering Wheel Control key codes
export enum FytSWCKey {
    VOLUME_UP = 0x01,
    VOLUME_DOWN = 0x02,
    MUTE = 0x03,
    NEXT = 0x04,
    PREV = 0x05,
    PLAY_PAUSE = 0x06,
    SOURCE = 0x07,
    MODE = 0x08,
    PHONE = 0x09,
    VOICE = 0x0A,
    MENU = 0x0B,
    BACK = 0x0C,
    UP = 0x0D,
    DOWN = 0x0E,
    LEFT = 0x0F,
    RIGHT = 0x10,
    ENTER = 0x11
}

// Interface for the data payload usually received from the native bridge
export interface FytBroadcastPayload {
    action: string;
    // FYT often passes an integer array in the intent extra "data"
    codes?: number[];
    type?: number;
    // Alternative data formats
    value?: number;
    values?: number[];
    // String extras
    extra?: string;
}

// AIDL data structure from com.tw.carinfoservice
export interface TwCarInfoData {
    transactionCode: number;
    data: Uint8Array;
    // Parsed values
    speed?: number;
    rpm?: number;
    voltage?: number;
    coolantTemp?: number;
    oilTemp?: number;
    fuelLevel?: number;
}

// Complete vehicle state snapshot
export interface FytVehicleSnapshot {
    timestamp: number;
    speed: number;
    rpm: number;
    voltage: number;
    coolantTemp: number;
    oilTemp: number;
    transTemp: number;
    outsideTemp: number;
    fuelLevel: number;
    odometer: number;
    gear: string;
    doors: {
        fl: boolean;
        fr: boolean;
        rl: boolean;
        rr: boolean;
        hood: boolean;
        trunk: boolean;
    };
    lights: {
        headlights: boolean;
        highBeam: boolean;
        hazards: boolean;
        turnLeft: boolean;
        turnRight: boolean;
    };
    climate: {
        acOn: boolean;
        tempL: number;
        tempR: number;
        fanSpeed: number;
    };
    safety: {
        parkingBrake: boolean;
        seatbeltDriver: boolean;
        seatbeltPassenger: boolean;
    };
}

// Bridge Event Name for window.addEventListener
export const FYT_BRIDGE_EVENT = 'fyt-native-event';

// Allwinner-specific AIDL transaction codes
export enum AllwinnerAidlTx {
    TX_SPEED = 3,
    TX_VOLTAGE = 4,
    TX_RPM = 5,
    TX_COOLANT = 6,
    TX_FUEL = 7,
    TX_ODOMETER = 8,
    TX_DOOR_STATUS = 9,
    TX_LIGHT_STATUS = 10,
    TX_CLIMATE = 11,
    TX_GEAR = 12
}

// Helper to parse AIDL Float32 from bytes (Little Endian)
export function parseAidlFloat32(bytes: number[], offset: number = 0): number {
    if (bytes.length < offset + 4) return 0;
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setUint8(0, bytes[offset]);
    view.setUint8(1, bytes[offset + 1]);
    view.setUint8(2, bytes[offset + 2]);
    view.setUint8(3, bytes[offset + 3]);
    return view.getFloat32(0, true);
}

// Helper to parse AIDL Int32 from bytes (Little Endian)
export function parseAidlInt32(bytes: number[], offset: number = 0): number {
    if (bytes.length < offset + 4) return 0;
    return bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24);
}

// Helper to parse AIDL Int16 from bytes (Little Endian)
export function parseAidlInt16(bytes: number[], offset: number = 0): number {
    if (bytes.length < offset + 2) return 0;
    return bytes[offset] | (bytes[offset + 1] << 8);
}

declare global {
    interface Window {
        // Method usually injected by Java WebView bridge if available
        fytBridge?: {
            simulateEvent: (code: number, values: number[]) => void;
            getVehicleData: () => FytVehicleSnapshot | null;
        };
        // TW CarInfo AIDL bridge
        twCarInfo?: {
            getSpeed: () => number;
            getRpm: () => number;
            getVoltage: () => number;
        };
    }
}
