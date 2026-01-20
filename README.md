# Twaah Model-RM (Radio Mod)

**Version**: v3.7.0-platinum
**Platform**: Android Head Units (FYT/Topway/UIS7862)
**Stack**: TypeScript, Vite, Cylinder3D, Capacitor (Custom Native Bridge)

## 🚀 Mission
Can we replace the clunky, dated interface of Chinese Android head units with a **premium, 60FPS, Cyberpunk-inspired dashboard** that feels like it belongs in a generic Sci-Fi vehicle?
**Status**: [MISSION ACCOMPLISHED]

---

## ✨ Key Features (The "Platinum" Standard)

### 1. The Interface (Web Layer)
*   **Aesthetic**: "Cybermorphic" Design. Dark glass, neon accents (Gold/Red), and smooth CSS transitions.
*   **3D Vehicle**: Real-time rotating 3D model (Jeep chassis) reacting to door opens/gear shifts.
*   **Performance**: Optimized for the UIS7862 chipset, maintaining 60fps on dashboard interactions.

### 2. Native Integrations (The Bridge)
We bypassed the limitations of standard web apps by injecting a custom Java plugin (`TwahhPlugin`) into the APK build process.

*   **Deep MCU Control**: Direct injection of `com.syu.ms.action.EXTERNAL_COMMAND` allows the app to control hardware sources (FM Radio, Bluetooth) and specific FYT settings without root.
*   **OBD2 Diagnostics**:
    *   **Real-Time**: RPM, Speed, Coolant via raw TCP socket to ELM327 Wi-Fi.
    *   **Scanning**: Implemented SAE J1979 Mode 03 (Stored) & Mode 07 (Pending) DTC scanning and parsing.
*   **CANBUS Decoding**:
    *   **Steering Wheel**: Mapped Vol+/-, Next/Prev to UI actions.
    *   **Transmission**: Gear state (Reverse/Park) triggers UI changes (e.g., Camera overlay logic).
*   **Media & Apps**:
    *   **Music Scanner**: Native `MediaStore` query finds local MP3s for the 3D Visualizer.
    *   **App Grid**: `PackageManager` integration lists valid launchable apps, filtering out system noise.

---

## 🛠️ Development Journey

### Phase 1: The Mockup (v3.0 - v3.4)
*   **Challenge**: Developing a car UI without the car.
*   **Solution**: Created a robust "Demo Mode" and Browser Emulator environment.
*   **Outcome**: Built the entire UI, animation system, and state management (Preact Signals) using mock data providers.

### Phase 2: The Bridge (v3.5 - v3.6)
*   **Challenge**: The Web App was isolated from the Hardware.
*   **Solution**: Reverse-engineered the FYT `MainServer` broadcasts and `TwahhPlugin.java`.
*   **Success**: Implemented "Hybrid" mode where the app auto-detects Native vs. Browser and switches strategies.

### Phase 3: The Deep Dive (v3.7 Platinum)
*   **Challenge**: Controlling "Source Switching" (Radio vs BT) is usually locked behind private APIs.
*   **Solution**: Discovered and implemented the `EXTERNAL_COMMAND` Intent Injection method.
*   **Result**: Full bidirectional control of the Head Unit hardware from a Web Technology stack.

---

## 📦 Installation
1.  **Download**: Get the latest `.apk` from the releases folder (e.g., `TwahhModelRM-v3.7.0-platinum.apk`).
2.  **Transfer**: Copy to a USB drive formatted as FAT32.
3.  **Install**: Plug into the Head Unit, open File Manager, and install.
4.  **Permissions**: Grant File/Media permissions when prompted.
5.  **Enjoy**: The proprietary launcher is now replaced with Twaah Model-RM.

## 🤝 Credits
*   **Deepmind Advanced Coding Team**: Architecture & Logic.
*   **Dwayne**: Test Pilot & Hardware Verification.
*   **FYT/XYAUTO Community**: Documentation on 7862 Broadcasts.
