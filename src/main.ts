import { SplashScreen } from '@capacitor/splash-screen';
import './style.css';

// GLOBAL ERROR HANDLER FOR ON-DEVICE DEBUGGING - MUST BE FIRST
window.onerror = function (msg, url, line, col, error) {
    // console.error("GLOBAL ERROR TRAPPED:", msg);
    const errorBox = document.createElement('div');
    errorBox.style.position = 'fixed';
    errorBox.style.top = '0';
    errorBox.style.left = '0';
    errorBox.style.width = '100%';
    errorBox.style.height = 'auto';
    errorBox.style.maxHeight = '50%';
    errorBox.style.overflow = 'auto';
    errorBox.style.background = 'rgba(255, 0, 0, 0.95)';
    errorBox.style.color = 'white';
    errorBox.style.padding = '10px';
    errorBox.style.zIndex = '999999';
    errorBox.style.fontFamily = 'monospace';
    errorBox.style.fontSize = '12px';
    errorBox.style.whiteSpace = 'pre-wrap';
    errorBox.style.borderBottom = '2px solid white';
    errorBox.innerText = `[CRITICAL ERROR]\n${msg}\n\nLocation: ${url}:${line}:${col}\n\nStack: ${error?.stack || 'N/A'}`;

    // Ensure it's on top of everything
    if (document.body) {
        document.body.appendChild(errorBox);
    } else {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(errorBox));
    }
    return false;
};

import { VehicleHAL } from './services/VehicleHAL';
import { VoiceAssistant } from './services/VoiceAssistant';

// Initialize Services
const hal = new VehicleHAL();
(window as any).hal = hal;

import { ThemeManager } from './services/ThemeManager';
const themeManager = new ThemeManager(hal);
(window as any).themeManager = themeManager;
new VoiceAssistant();

import { LayoutManager } from './services/LayoutManager';
const layoutManager = new LayoutManager(hal);
(window as any).layoutManager = layoutManager;

import { AudioService } from './services/AudioService';
const audioService = new AudioService();
(window as any).audioService = audioService;

import { AppService } from './services/AppService';
new AppService();

import { WeatherService } from './services/WeatherService';
new WeatherService(hal);


import { MusicService } from './services/MusicService';
const musicService = new MusicService(hal);
musicService.scanLibrary();

// DiagnosticsTab removed from main startup to prevent circular dependency
import { LocationService } from './services/LocationService';
import { CanbusService } from './services/CanbusService';
import { OBD2Service } from './services/OBD2Service';

const locationService = new LocationService(hal);
const canbusService = new CanbusService(hal);
const obd2Service = new OBD2Service(hal);
(window as any).obd = obd2Service;

// new DiagnosticsTab(hal, obd2Service); // MOVED TO DASHBOARD

// Native Bridge for Hardware Intents
(window as any).TwahhNative = {
    onMessage: (action: string, data: any) => {
        if (action === 'gps') {
            locationService.handleUpdate(data.lat, data.lng, data.heading);
        } else if (action === 'canbus') {
            canbusService.handleCanMessage(data.id, data.payload);
        } else if (action === 'intent') {
            canbusService.handleNativeIntent(data);
        }
    }
};

// Listen for Hardware Keys (SWC mapped to Android KeyCodes)
window.addEventListener('keydown', (e) => {
    let code = 0;
    if (e.key === 'ArrowUp') code = 24; // Vol Up
    if (e.key === 'ArrowDown') code = 25; // Vol Down
    if (e.key === 'Enter') code = 85; // Play/Pause

    // Simulate reverse gear with 'r' key
    if (e.key.toLowerCase() === 'r') {
        hal.powertrain.gear.value = hal.powertrain.gear.value === 'R' ? 'P' : 'R';
    }

    if (code > 0) canbusService.handleCanMessage(0x201, [code === 24 ? 0x01 : code === 25 ? 0x02 : 0x00, code === 85 ? 0x01 : 0x00]);
});

// Mount Dashboard Layout
const app = document.querySelector<HTMLDivElement>('#app')!;

// Initial Boot Sequence
// Initial Boot Sequence
import { StartupShowcase } from './components/StartupShowcase';
import { Dashboard } from './components/Dashboard';

// Initial Boot Sequence (Showcase)
// BYPASS STARTUP SEQUENCE PER USER REQUEST
// const boot = new StartupShowcase(hal, obd2Service, () => {
//     // When done: Show the new Dashboard with live vehicle status
//     app.innerHTML = '';
//     new Dashboard(app, hal, obd2Service);
// });
// document.body.appendChild(boot.element);

// DIRECT DASHBOARD MOUNT (REMOVED: Now using Connectivity Guard)
// NEW: Strict Connectivity Guard
import { ConnectionPrompt } from './components/ConnectionPrompt';

let currentView: any = null;
const mountApp = () => {
    console.log('[MAIN] Starting connectivity subscriber...');
    hal.isConnected.subscribe((connected) => {
        console.log(`[MAIN] VIEW UPDATE -> ${connected ? 'DASHBOARD' : 'CONNECTION_PROMPT'} (RealData: ${hal.isConnected.value})`);
        app.innerHTML = '';

        if (connected) {
            console.log('[MAIN] Mounting Dashboard');
            currentView = new Dashboard(app, hal, obd2Service);
        } else {
            console.log('[MAIN] Mounting ConnectionPrompt');
            currentView = new ConnectionPrompt(hal, obd2Service);
            app.appendChild(currentView.element);
        }
    });
};

mountApp();

// Force Splash Screen Hide
setTimeout(async () => {
    try {
        await SplashScreen.hide();
        console.log("Splash Screen Hidden via Main");
    } catch (e) {
        console.warn("Splash Screen Hide Failed", e);
    }
}, 1000);

// Helper to bind events when Dashboard is mounted


