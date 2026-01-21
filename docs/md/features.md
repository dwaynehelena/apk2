# TW Platform System Settings Reference

## Overview
The Allwinner A133 (HiWorld/Topway) head unit exposes **154 system settings** via `content://settings/system`. These can be queried and monitored for vehicle status and configuration.

---

## Discovered Car-Related Settings (17)

| Setting Name | Sample Value | Description |
|--------------|--------------|-------------|
| `DOOR` | `0` | Main door status (0=closed, 1=open) |
| `SYSTEM_DOOR` | `1` | System door flag |
| `SYSTEM_DOOR2` | `0` | Secondary door flag |
| `TWCameraBrake` | `0` | Reverse camera trigger (0=off, 1=active) |
| `CAR_TYPE` | `0` | Vehicle profile/type ID |
| `MCUID` | `844` | MCU identifier (hardware-specific) |
| `MCUOHTER` | `` | MCU other data |
| `MCU_LOCK` | `null` | MCU lock state |
| `TEMP_MODE` | `0` | Temperature unit (0=Celsius, 1=Fahrenheit) |
| `SHOW_TEMPERATURE` | `1` | Show temperature on display (0=hide, 1=show) |
| `TEMP_CONVERT` | `0` | Temperature conversion setting |
| `color_temp` | `0` | Display color temperature |
| `pointer_speed` | `0` | Touch pointer speed/sensitivity |
| `notification_light_pulse` | `1` | LED notification pulse (0=off, 1=on) |
| `gearhead:driving_mode_settings_enabled` | `0` | Driving mode settings flag |
| `CarChooseUpdateNewTime` | `250701` | Last car config update timestamp |
| `hicar_screen_size` | `null` | HiCar screen configuration |

---

## Detected CANbus Apps

| Package | Function |
|---------|----------|
| `com.tw.carinfoservice` | **Primary CANbus handler** |
| `com.tw.car` | Base car module |
| `com.tw.carchoose` | Car profile selection |
| `com.tw.carapps` | Car apps launcher |
| `com.dofun.carassistant.car` | Car assistant |
| `com.dofun.carsetting` | Car settings |
| `cn.cardoor.zt360` | 360 degree view |
| `cn.cardoor.d3dview` | 3D view module |
| `com.wow.carlauncher.driver.sys.lanseobd` | OBD module |
| `com.wow.carlauncher.driver.ls.jj` | Driver module |

---

## Communication Protocol

### What Works
- ✅ `content://settings/system` - Full read access to 154 settings
- ✅ Real-time polling via `ContentResolver.query()`

### What Doesn't Work
- ❌ `BroadcastReceiver` - No public CANbus broadcasts
- ❌ `content://com.tw.carinfoservice` - Returns null (AIDL required)
- ❌ `content://com.tw.car` - Returns null

---

## API Methods

### `TwahhPlugin.getAllCarSettings()`
Returns current values for 15 tracked car settings as JSON.

### `TwahhPlugin.dumpSystemSettings()`
Returns all 154 system settings with car-related filtering.

### `TwahhPlugin.startWatchingCarSettings()`
Starts 250ms polling and emits `carSettingChanged` events.

---

## Full Settings Categories (Estimated)

Based on naming patterns, the 154 settings likely include:

| Category | Example Keys | Count (est.) |
|----------|--------------|--------------|
| Display | `WALLPAPER_*`, `brightness`, `color_*` | ~20 |
| Sound | `volume_*`, `sound_*` | ~15 |
| System | `android.*`, `settings_*` | ~40 |
| Network | `wifi_*`, `bluetooth_*` | ~20 |
| Car/MCU | `DOOR`, `MCU*`, `TW*`, `CAR_*` | ~17 |
| User | `user_*`, `screen_*` | ~25 |
| Other | misc settings | ~17 |

---

## How to Get Full Dump

Run the app and check `twahh_boot_log.txt` - all 154 settings are now logged with `[SETTING]` prefix:

```
[SETTING] DOOR = 0
[SETTING] MCUID = 844
[SETTING] volume_system = 8
...
```

---

## Notes

- Settings stored in SQLite database on device
- MCU ID 844 is specific to this hardware revision
- Door settings may not update in real-time on all units
- `CarChooseUpdateNewTime = 250701` format appears to be YYMMDD
