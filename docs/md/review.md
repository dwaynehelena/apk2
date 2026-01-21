# Code Review: src/ and tests/

## Issue 1: Memory Leak - Uncleared Intervals and Event Listeners

**Severity:** High
**Files affected:**
- `src/services/VehicleHAL.ts:312-362` (startLogicLoop)
- `src/components/Dashboard.ts:144-174` (startPolling)
- `src/services/OBD2Service.ts:98-113` (startPolling)

**Problem:**
Multiple `setInterval` calls are created without any cleanup mechanism. The intervals are stored in instance variables but never cleared on component destruction or service disposal. Additionally, event listeners added via `TwahhPlugin.addListener()` in OBD2Service (lines 30-35, 62-67) are registered multiple times if `connectWifi` or `connectBluetooth` is called more than once, causing duplicate event handlers.

**Impact:**
- Memory leaks in long-running sessions
- Duplicate event handlers firing multiple times
- Potential performance degradation over time
- Battery drain on mobile devices

**Evidence:**
```typescript
// VehicleHAL.ts:312 - No cleanup method
startLogicLoop() {
    setInterval(() => { ... }, 100);  // Never cleared
}

// Dashboard.ts:144 - Interval stored but never cleared
this.pollInterval = window.setInterval(async () => { ... }, 500);
// No destroy() or cleanup method exists

// OBD2Service.ts:30 - Listeners added on every connect call
TwahhPlugin.addListener('obdData', (res: any) => this.handleData(res.data));
```

---

## Issue 2: Test Suite Import Path Mismatch and Missing HAL Dependency

**Severity:** High
**Files affected:**
- `tests/VehicleHAL.test.js:3` - imports from `../www/hal.js`
- `tests/MusicService.test.ts:2` - imports from `../src/services/MusicService`
- `tests/MusicService.test.ts:9` - MusicService constructor requires VehicleHAL but not provided

**Problem:**
1. The test file `tests/VehicleHAL.test.js` imports from `../www/hal.js` which doesn't exist - the actual VehicleHAL is at `src/services/VehicleHAL.ts`. This causes tests to fail or test against non-existent code.

2. The test file `tests/MusicService.test.ts` instantiates `MusicService` without passing the required `VehicleHAL` dependency:
```typescript
// MusicService constructor requires hal parameter
constructor(private hal: VehicleHAL) { ... }

// But test does:
music = new MusicService();  // Missing required argument
```

**Impact:**
- Tests are broken or testing wrong implementation
- CI/CD pipeline likely failing
- False confidence in code coverage
- Constructor mismatch will cause TypeScript compilation errors

---

## Issue 3: Unsafe Type Casting and Missing Null Checks on Native Plugin Access

**Severity:** High
**Files affected:**
- `src/services/OBD2Service.ts:26-27, 58-59, 86`
- `src/components/Dashboard.ts:99-101, 113-114, 135-136, 156-157, 739, 800-801`
- `src/main.ts:78-88`

**Problem:**
Throughout the codebase, Capacitor plugins are accessed via unsafe type casts `(window as any).Capacitor.Plugins.TwahhPlugin` without consistent null checks. Some locations check if the plugin exists, others don't. When the native plugin is unavailable (web mode, plugin not registered), this causes runtime crashes.

**Evidence:**
```typescript
// OBD2Service.ts:86 - No null check before access
const { TwahhPlugin } = (window as any).Capacitor.Plugins;
await TwahhPlugin.sendOBD({ cmd });  // Crashes if TwahhPlugin undefined

// Dashboard.ts:739 - Accessed without optional chaining
(window as any).Capacitor.Plugins.TwahhPlugin.toggleRawSniffing({ ... });

// Contrast with safer pattern used elsewhere:
const { TwahhPlugin } = (window as any).Capacitor?.Plugins || {};
if (TwahhPlugin) { ... }
```

**Impact:**
- Application crashes in web browser mode
- Inconsistent behavior across platforms
- Poor developer experience during web-based development
- Potential data loss if crash occurs during operation
