/**
 * FytTypes.ts
 * Type definitions for FYT/Topway (Unisoc) Android Head Unit Integration.
 * Based on 'com.syu.canbus' and standard FYT intent protocols.
 */

// The main Android Broadcast Action used by FYT units
export const FYT_INTENT_ACTION = 'com.syu.canbus.update';

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
    CANBUS = 8, // The one we mostly care about
    AIR = 9
}

// Common CANBUS codes often found in 'update' arrays
// These are hypothetical examples based on common FYT mappings
export enum FytCanbusCodes {
    CANBUS_DOOR_INFO = 1, // Often carries bitmask for doors
    CANBUS_RPM_SPEED = 2, // Engine info
    CANBUS_TEMP_INFO = 3, // Climate info
    CANBUS_HANDBRAKE = 4,
    CANBUS_SWC_KEY = 5,
    CANBUS_FUEL_INFO = 6,
    CANBUS_BATTERY_VOLTAGE = 114, // Common FYT Voltage
    CANBUS_ODOMETER = 24, // Hypothetical common code
    CANBUS_SEATBELT = 40 // Hypothetical
}

// Interface for the data payload usually received from the native bridge
export interface FytBroadcastPayload {
    action: string;
    // FYT often passes an integer array in the intent extra "data"
    // or sometimes separate extras depending on the canbus box version.
    codes?: number[];
    type?: number; // Update type
}

// Bridge Event Name for window.addEventListener
export const FYT_BRIDGE_EVENT = 'fyt-native-event';

declare global {
    interface Window {
        // Method usually injected by Java WebView bridge if available
        // or used to simulate events in dev
        fytBridge?: {
            simulateEvent: (code: number, values: number[]) => void;
        }
    }
}
