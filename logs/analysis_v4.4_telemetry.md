# V4.4 Telemetry Log Analysis
**Date:** 2026-01-21
**Build:** 697de16 (telemetry mapping)
**Device:** Allwinner A133 (ceres-b6)

---

## Executive Summary

| Component | Status | Notes |
|-----------|--------|-------|
| ELM327 WiFi | **PASS** | Already connected at boot |
| CANbus App Discovery | **PASS** | Found 10 apps |
| AIDL Service Binding | **PASS** | Bound to 3 services |
| Sniffer Response | **PASS** | Status properly returned (d26847f fix working) |
| Battery Voltage | **PASS** | TX=4 = 12.30V (engine off) |
| AIDL Data Persistence | **PARTIAL** | ~9 seconds before deactivation |

---

## BREAKTHROUGH: Full Transaction Code Mapping

The sniffer captured **TX=1 through TX=25** with raw hex data!

### Decoded Transaction Codes

| TX | Size | Hex Data | Decoded Value | Purpose |
|----|------|----------|---------------|---------|
| 1 | 244 | `FC FF FF FF 73 00...` | UTF-16 Error | "Attempt to invoke interface..." |
| 2 | 244 | `FC FF FF FF 73 00...` | UTF-16 Error | Same error message |
| 3 | 4 | `00 00 00 00` | Int: 0 | Status code |
| **4** | 8 | `00 00 00 00 CD CC 44 41` | **Float: 12.30V** | **Battery Voltage** |
| 5 | 8 | `00 00 00 00 FF FF FF FF` | Int: -1 | Engine running flag (off) |
| 6 | 8 | `00 00 00 00 FF FF FF FF` | Int: -1 | Invalid/unused |
| 7 | 20 | `00 00 00 00 03 00 00 00 FF FF...` | Struct | Door/status (3 = count?) |
| 8 | 20 | `00 00 00 00 03 00 00 00 FF FF...` | Struct | Climate/status |
| 9 | 8 | `00 00 00 00 00 00 80 BF` | **Float: -1.0** | Interior temp (invalid) |
| 10 | 8 | `00 00 00 00 00 00 80 BF` | Float: -1.0 | Exterior temp (invalid) |
| 11-17 | 8 | `00 00 00 00 FF FF FF FF` | Int: -1 | Various (unused) |
| 18 | 16 | `00 00 00 00 02 00 00 00...` | Struct | Unknown (2 = mode?) |
| 19 | 8 | `00 00 00 00 FF FF FF FF` | Int: -1 | Unknown |
| 20-22 | 20 | `00 00 00 00 03 00 00 00 00 00 80 BF...` | Struct | Multi-value (3 items, -1.0 default) |
| 23-24 | 8 | `00 00 00 00 00 00 80 BF` | Float: -1.0 | Temperature-related? |
| 25 | 8 | `00 00 00 00 FF FF FF FF` | Int: -1 | Unknown |

---

## Hex Decoding Notes

### TX=4: Battery Voltage (Confirmed Working)
```
Raw: 00 00 00 00 CD CC 44 41
         ^^^^^^^^^^^^^ Float32 little-endian
Decode: 0x4144CCCD = 12.3 (IEEE 754 float)
```

**12.30V = Engine OFF (battery resting voltage)**
- Previous reading: 13.7V = Engine ON (alternator charging)

### TX=5: Engine Running Flag
```
Raw: 00 00 00 00 FF FF FF FF
                 ^^^^^^^^^^^ -1 = OFF/Invalid
```
When engine is running, this should change to 0x00000001 (1 = ON).

### TX=9/10: Temperature Values
```
Raw: 00 00 00 00 00 00 80 BF
                 ^^^^^^^^^^^ Float32 = -1.0 (invalid reading)
```
The value -1.0 likely means "sensor not available" or "not connected".

---

## Timeline Analysis

```
23:47:31.615  AIDL TX enumeration starts (TX=1)
23:47:32.330  TX=4 Voltage=12.30V captured
23:47:32.431  TX=25 received (last transaction)
23:47:33.885  Native CANbus fallback ACTIVATED
23:47:42.581  CANbus fallback DEACTIVATED (AIDL inactive) <-- 8.7s later
```

**Issue:** AIDL data is only sent once at boot (single burst), then stops.
The 10-second timeout helped, but the real issue is that AIDL doesn't stream continuously.

---

## Serial TTY Discovery

The sniffer found these serial ports:
- `/dev/ttyS0` - Probed
- `/dev/ttyS1` - Probed
- `/dev/ttyS2` - Probed
- `/dev/ttyS3` - Probed
- `/dev/ttyS4` - Probed
- `/dev/ttyS7` - Listed

Note: `su` access denied - device is not rooted.

---

## Settings Observed (Reverse Camera)

```
REVERSE_STATUS_FOR_PROTOCOL: 0 -> 1  (reverse engaged)
REVERSE_STATUS_FOR_PROTOCOL: 1 -> 0  (reverse disengaged)
```
This toggles when the vehicle goes into reverse gear!

---

## Recommendations

### Priority 1: Implement Continuous AIDL Polling

The AIDL service only sends data once at boot. To get continuous updates:

```typescript
// In VehicleHAL.ts - add periodic AIDL re-query
private startAidlPolling() {
    setInterval(async () => {
        if (this.aidlService && !this.isAidlActive()) {
            // Re-probe AIDL service for fresh data
            await TwahhPlugin.probeAidlService();
        }
    }, 5000); // Every 5 seconds
}
```

### Priority 2: Map TX=5 (Engine Running)

```typescript
// TX=5: Engine running flag
if (tx === 5 && bytes.length >= 8) {
    const flag = (bytes[4] << 24) | (bytes[5] << 16) | (bytes[6] << 8) | bytes[7];
    const engineRunning = flag === 1;
    this.hal.powertrain.engineRunning.value = engineRunning;
    console.log(`[VehicleHAL] TX=5: Engine=${engineRunning ? 'ON' : 'OFF'}`);
}
```

### Priority 3: Investigate Temperature Sensors

TX=9 and TX=10 return -1.0 (invalid). This could mean:
- Sensors not connected to this head unit
- Different transaction codes for this vehicle
- Need to probe while engine is running

---

## What Worked vs Previous Tests

| Feature | v4.2.1 | v4.4 |
|---------|--------|------|
| Sniffer crash | **FAIL** | **PASS** |
| AIDL discovery | **PASS** | **PASS** |
| Voltage captured | 13.7V (engine on?) | 12.3V (engine off) |
| Data persistence | 3 seconds | 9 seconds |
| Full TX scan | TX=4 only | TX=1 to TX=25 |
| Unique log files | No | **Yes** |
| USB priority | No | **Yes** |

---

## Next Test Checklist

- [ ] **Start engine** - Does TX=4 voltage rise to 13.5-14.2V?
- [ ] **Start engine** - Does TX=5 change from -1 to 1?
- [ ] **Check temperatures** - Do TX=9/10 show real values with engine running?
- [ ] **Reverse gear** - Confirm REVERSE_STATUS_FOR_PROTOCOL toggles
- [ ] **Test periodic AIDL polling** - If implemented, does data refresh?

---

## Raw Sniffer Log Files

- Boot log: `twahh_boot_20260121_234830.txt`
- Sniffer dump: `twahh_sniffer_20260121_234731.txt`
- Diagnostic logs: `twahh_boot_20260121_235105.txt`, `twahh_boot_20260121_235113.txt`

---

*Analysis generated by Claude Code on 2026-01-21*
*V4.4 Telemetry Build Analysis*
