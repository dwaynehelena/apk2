import './style.css';
import { VehicleHAL } from './services/VehicleHAL';
import { ThemeManager } from './services/ThemeManager';
import { Vehicle3D } from './components/Vehicle3D';
import { VoiceAssistant } from './services/VoiceAssistant';
import { TelemetryGraph } from './components/TelemetryGraph';
import { effect } from '@preact/signals-core';

// Initialize Services
const hal = new VehicleHAL();
(window as any).hal = hal;

const themeManager = new ThemeManager();
const voice = new VoiceAssistant();

import { AppService } from './services/AppService';
import { AppDrawer } from './components/AppDrawer';
const appService = new AppService();
const appDrawer = new AppDrawer(appService);

import { TabManager, TabId } from './services/TabManager';
const tabManager = new TabManager();

import { WeatherService } from './services/WeatherService';
const weatherService = new WeatherService();

import { WeatherWidget } from './components/WeatherWidget';
const weatherWidget = new WeatherWidget(weatherService);

// Listen for Hardware Keys (SWC mapped to Android KeyCodes)
window.addEventListener('keydown', (e) => {
    // Determine code (mock mapping for dev)
    let code = 0;
    if (e.key === 'ArrowUp') code = 24; // Vol Up
    if (e.key === 'ArrowDown') code = 25; // Vol Down
    if (e.key === 'Enter') code = 85; // Play/Pause

    if (code > 0) hal.handleSWC(code);
});

// Mount Dashboard Layout
const app = document.querySelector<HTMLDivElement>('#app')!;

const renderTabs = () => {
    const tabs: { id: TabId, label: string, icon: string }[] = [
        { id: 'dashboard', label: 'Dash', icon: '🏎️' },
        { id: 'apps', label: 'Apps', icon: '📱' },
        { id: 'weather', label: 'Weather', icon: '🌦️' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
    ];

    return tabs.map(t => `
        <button data-tab="${t.id}" class="flex-1 py-4 flex flex-col items-center gap-1 ${tabManager.activeTab.value === t.id ? 'text-neon-cyan bg-white/5' : 'text-gray-400 hover:text-white'} transition">
            <span class="text-2xl">${t.icon}</span>
            <span class="text-xs uppercase tracking-wider">${t.label}</span>
        </button>
    `).join('');
};

// Main Render Loop (Reactive)
effect(() => {
    const currentTab = tabManager.activeTab.value;

    app.innerHTML = `
      <div class="relative w-screen h-screen overflow-hidden bg-bg-dark text-white select-none flex flex-col">
        
        <!-- Background 3D View (Always visible but z-indexed) -->
        <div id="scene-3d" class="absolute inset-0 z-0 opacity-80 pointer-events-none"></div>

        <!-- Main Content Area -->
        <div class="relative z-10 flex-1 overflow-hidden" id="main-content">
            <!-- Content injected via JS below -->
        </div>

        <!-- Bottom Tab Bar -->
        <div class="relative z-20 glass-panel border-t border-white/10 flex justify-between shrink-0" id="tab-bar">
            ${renderTabs()}
        </div>
      </div>
    `;

    // Re-attach Tab Listeners
    document.querySelectorAll('[data-tab]').forEach(el => {
        el.addEventListener('click', () => tabManager.setTab(el.getAttribute('data-tab') as TabId));
    });

    // Render Active View
    const content = document.getElementById('main-content')!;
    content.innerHTML = '';

    if (currentTab === 'dashboard') {
        content.innerHTML = `
        <div class="grid grid-cols-12 h-full p-4 gap-4">
            <!-- Left Panel: Stats -->
            <div class="col-span-3 flex flex-col gap-4">
                <div class="glass-panel p-4 rounded-xl">
                    <h2 class="text-neon-cyan text-sm uppercase tracking-wider mb-2">Powertrain</h2>
                    <div class="flex justify-between items-end">
                        <span class="text-4xl font-mono text-white" id="rpm-val">0</span>
                        <span class="text-gray-400 text-xs mb-1">RPM</span>
                    </div>
                     <div class="flex justify-between items-end">
                        <span class="text-6xl font-bold italic text-neon-magenta" id="speed-val">0</span>
                        <span class="text-gray-400 text-xs mb-1">KM/H</span>
                    </div>
                </div>

                 <div class="glass-panel p-4 rounded-xl">
                    <h2 class="text-neon-green text-sm uppercase tracking-wider mb-2">Climate</h2>
                    <div class="flex justify-between items-center">
                        <button id="btn-ac" class="p-2 border border-white/20 rounded hover:bg-white/10 transition">AC</button>
                        <span class="text-2xl" id="temp-val">20.0°C</span>
                        <div class="flex flex-col gap-1">
                            <button id="btn-temp-up" class="w-8 h-8 bg-white/10 rounded">▲</button>
                            <button id="btn-temp-down" class="w-8 h-8 bg-white/10 rounded">▼</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Center Panel: Visualization Area -->
            <div class="col-span-6 flex flex-col justify-between">
                <!-- Top Bar -->
                <div class="flex justify-center">
                     <div class="glass-panel px-6 py-2 rounded-b-xl flex gap-8">
                        <span class="text-neon-cyan" id="gear-val">N</span>
                        <span>12:00</span>
                        <span>24°C</span>
                     </div>
                </div>
                
                <!-- Bottom Bar: Controls -->
                 <div class="flex justify-center mb-8 gap-4">
                    <button id="btn-lock" class="glass-btn px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:text-neon-magenta transition">Lock</button>
                    <button id="btn-trunk" class="glass-btn px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:text-neon-cyan transition">Trunk</button>
                    <button id="btn-lights" class="glass-btn px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:text-neon-yellow transition">Lights</button>
                 </div>
            </div>

            <!-- Right Panel: Telemetry/Nav -->
            <div class="col-span-3 flex flex-col gap-4">
                 <div class="glass-panel p-4 rounded-xl h-48 relative overflow-hidden" id="map-container">
                    <div class="absolute inset-0 z-0" id="map-view"></div>
                    <div class="absolute top-2 left-2 z-10 text-xs text-neon-cyan bg-black/50 px-2 rounded">GPS: ONLINE</div>
                </div>
                 <div class="glass-panel p-4 rounded-xl flex-1">
                    <h2 class="text-white/50 text-sm uppercase tracking-wider mb-2">Log</h2>
                    <div id="log-container" class="font-mono text-xs text-green-400 overflow-y-auto h-full">
                        <div>[SYS] System Online...</div>
                        <div id="voice-status" class="text-neon-magenta mt-2">Voice: Initializing...</div>
                    </div>
                </div>
            </div>
        </div>`;

        // Re-init Dashboard Components
        new GPSMap(document.getElementById('map-view')!, hal);
        bindDashboardEvents();

    } else if (currentTab === 'apps') {
        content.appendChild(appDrawer.element);
    } else if (currentTab === 'weather') {
        content.appendChild(weatherWidget.element);
    } else if (currentTab === 'settings') {
        // Simple Settings Inline
        content.innerHTML = `
            <div class="p-8 flex flex-col gap-4 max-w-2xl mx-auto">
                <h2 class="text-2xl text-neon-cyan mb-4">Settings</h2>
                
                <div class="glass-panel p-6 rounded-xl flex justify-between items-center">
                    <span>Theme</span>
                    <div class="flex gap-2">
                        <button class="px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded" onclick="themeManager.setTheme('cyberpunk')">Cyberpunk</button>
                        <button class="px-4 py-2 bg-white/10 rounded hover:bg-white/20" onclick="themeManager.setTheme('sport')">Sport</button>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-xl flex justify-between items-center">
                    <span>Build Version</span>
                    <span class="font-mono text-white/50">v3.0.0</span>
                </div>
            </div>
        `;
        // Re-bind theme buttons (hacky inline onclicks might need proper binding if CSP strict)
        // For now relying on global themeManager if exposed, or we attach listeners.
        // Let's attach listeners properly to avoid inline JS issues.
        setTimeout(() => {
            const buttons = content.querySelectorAll('button');
            if (buttons[0]) buttons[0].onclick = () => themeManager.setTheme('cyberpunk');
            if (buttons[1]) buttons[1].onclick = () => themeManager.setTheme('sport');
        }, 0);

    } else {
        content.innerHTML = `<div class="flex items-center justify-center h-full text-white/20 text-4xl">Coming Soon: ${currentTab}</div>`;
    }
});

// Initialize 3D Scene (Persistent)
const sceneContainer = document.getElementById('scene-3d')!;
new Vehicle3D(sceneContainer, hal); // Note: Initial render might fail if #scene-3d is recreated. 
// Actually, scene-3d is OUTSIDE the active tab content area, so it stays persistent! perfect.

// Initialize Map
import { GPSMap } from './components/GPSMap';

// Initialize Camera System
import { CameraSystem } from './services/CameraSystem';
new CameraSystem(hal);

// Helper to bind events when Dashboard is mounted
const bindDashboardEvents = () => {
    // Reactive Bindings (The Magic)
    const bindText = (id: string, sig: any) => {
        const el = document.getElementById(id);
        if (el) effect(() => el!.textContent = sig.value.toString());
    };

    bindText('rpm-val', hal.powertrain.rpm);
    bindText('speed-val', hal.powertrain.speed);
    bindText('gear-val', hal.powertrain.gear);
    bindText('temp-val', hal.body.climate.tempL);

    // Voice Status Binding
    const voiceStatus = document.getElementById('voice-status');
    if (voiceStatus) {
        effect(() => {
            voiceStatus.textContent = voice.isListening.value ? "Voice: Listening..." : "Voice: Standby";
            if (voice.lastCommand.value) {
                voiceStatus.textContent = `Voice: "${voice.lastCommand.value}"`;
            }
        });
    }

    // Event Listeners (User Interaction)
    document.getElementById('btn-lock')?.addEventListener('click', () => hal.toggleDoor('fl'));

    document.getElementById('btn-temp-up')?.addEventListener('click', () => {
        hal.setClimateTemp('left', hal.body.climate.tempL.value + 0.5);
    });
    document.getElementById('btn-temp-down')?.addEventListener('click', () => {
        hal.setClimateTemp('left', hal.body.climate.tempL.value - 0.5);
    });
};
