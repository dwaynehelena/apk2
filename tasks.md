# Fix Tasks

## Task 1: Fix Memory Leaks - Add Cleanup Methods for Intervals and Listeners

**Priority:** High
**Estimated complexity:** Medium

### Subtasks:
- [ ] **1.1** Add `destroy()` method to `VehicleHAL` class that clears the logic loop interval and canbus timeout
- [ ] **1.2** Add `destroy()` method to `Dashboard` class that clears `pollInterval` and `clockInterval`
- [ ] **1.3** Add `disconnect()` method to `OBD2Service` that clears `pollInterval` and removes event listeners
- [ ] **1.4** Store listener references in OBD2Service to enable proper removal
- [ ] **1.5** Ensure listeners are only added once (guard against duplicate registration)

### Files to modify:
- `src/services/VehicleHAL.ts`
- `src/components/Dashboard.ts`
- `src/services/OBD2Service.ts`

---

## Task 2: Fix Test Suite Import Paths and Constructor Mismatches

**Priority:** High
**Estimated complexity:** Low

### Subtasks:
- [ ] **2.1** Update `tests/VehicleHAL.test.js` to import from correct path `../src/services/VehicleHAL`
- [ ] **2.2** Convert `tests/VehicleHAL.test.js` to TypeScript for type safety
- [ ] **2.3** Fix `tests/MusicService.test.ts` to pass VehicleHAL instance to MusicService constructor
- [ ] **2.4** Update test mocks to match current VehicleHAL API (uses signals, not plain values)
- [ ] **2.5** Run test suite to verify all tests pass

### Files to modify:
- `tests/VehicleHAL.test.js` → `tests/VehicleHAL.test.ts`
- `tests/MusicService.test.ts`

---

## Task 3: Add Consistent Null-Safe Plugin Access Pattern

**Priority:** High
**Estimated complexity:** Medium

### Subtasks:
- [ ] **3.1** Create utility function `getCapacitorPlugin(name: string)` that safely retrieves plugins
- [ ] **3.2** Update `OBD2Service.ts` to use safe plugin access pattern throughout
- [ ] **3.3** Update `Dashboard.ts` to use safe plugin access pattern throughout
- [ ] **3.4** Update `MusicService.ts` to use safe plugin access pattern
- [ ] **3.5** Add TypeScript interface for TwahhPlugin methods to improve type safety
- [ ] **3.6** Add fallback behavior or user notification when plugin unavailable

### Files to modify:
- `src/services/OBD2Service.ts`
- `src/components/Dashboard.ts`
- `src/services/MusicService.ts`
- New file: `src/utils/capacitor.ts` (utility function)
