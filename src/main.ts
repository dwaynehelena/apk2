import './style.css';
import { VehicleHAL } from './services/VehicleHAL';
import { ThemeManager } from './services/ThemeManager';
import { Vehicle3D } from './components/Vehicle3D';
import { VoiceAssistant } from './services/VoiceAssistant';
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

import { MusicService } from './services/MusicService';
import { MusicWidget } from './components/MusicWidget';
const musicService = new MusicService();
const musicWidget = new MusicWidget(musicService);
musicService.scanLibrary();

import { DiagnosticsTab } from './components/DiagnosticsTab';
const diagnosticsTab = new DiagnosticsTab(hal);

import { BootScreen } from './components/BootScreen';

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
        { id: 'music', label: 'Music', icon: '🎵' },
        { id: 'diag', label: 'Diag', icon: '⚙️' },
        { id: 'weather', label: 'Weather', icon: '🌦️' },
        { id: 'settings', label: 'Settings', icon: '🛠️' },
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
        <div class="h-full p-6 flex gap-6 font-sans">
            <!-- Left Column: Status & Climate -->
            <div class="flex flex-col gap-6 w-[28%] shrink-0">
                <!-- Status Card -->
                <div id="status-card" class="m3-card p-6 flex flex-col justify-between h-[160px] animate-float relative overflow-hidden group cursor-pointer active:scale-95 transition-transform">
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-neon-cyan/10 blur-3xl rounded-full group-hover:bg-neon-cyan/20 transition duration-700"></div>
                    <div>
                        <h2 class="text-neon-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-glow">Unit Status</h2>
                        <div class="text-2xl font-bold flex items-center gap-3 italic">
                            <span class="w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse-fast shadow-[0_0_10px_#00ff9d]"></span>
                            INTELLIGENCE ONLINE
                        </div>
                    </div>
                    <div class="flex items-baseline gap-3">
                         <span class="text-neon-magenta text-6xl font-black italic tracking-tighter" id="gear-val">N</span>
                         <span class="text-white/30 text-xs font-bold uppercase tracking-widest pl-2 border-l border-white/10 ml-2">Drive Config</span>
                    </div>
                </div>

                <!-- Climate Pill -->
                <div class="m3-card p-8 flex-1 flex flex-col justify-center items-center gap-6 relative overflow-hidden group">
                     <div class="absolute inset-0 bg-gradient-to-b from-transparent to-neon-cyan/5 opacity-50"></div>
                    <h2 class="text-neon-cyan text-[10px] font-black uppercase tracking-[0.3em] text-glow">Atmosphere</h2>
                    <div class="text-[8rem] font-bold text-white tracking-tighter leading-none text-glow italic" id="temp-val">20.0</div>
                    
                    <div class="flex gap-4 w-full">
                        <button id="btn-temp-down" class="glass-btn flex-1 py-5 rounded-4xl text-2xl hover:bg-neon-cyan/20">−</button>
                        <button id="btn-temp-up" class="glass-btn flex-1 py-5 rounded-4xl text-2xl hover:bg-neon-magenta/20">+</button>
                    </div>
                    <button id="btn-ac" class="glass-btn w-full py-4 rounded-3xl text-[10px] font-black tracking-[0.2em] uppercase text-neon-cyan border-neon-cyan/20">A/C Turbo Max</button>
                </div>
            </div>

            <!-- Center: 3D Visualizer (Transparent Context) -->
            <div class="flex-1 flex flex-col justify-between py-2 relative">
                <!-- Floating Header -->
                <div class="glass-panel mx-auto px-10 py-3 rounded-full flex gap-12 backdrop-blur-3xl border-white/10 shadow-2xl animate-float">
                    <span class="text-lg font-black italic">12:45 <span class="text-xs text-white/30 not-italic ml-1">PM</span></span>
                    <span class="text-white/10 font-thin text-2xl">|</span>
                    <span class="text-lg text-neon-yellow font-bold uppercase italic tracking-wider">24°C <span class="text-[10px] opacity-50 not-italic ml-1">EXT</span></span>
                </div>

                <!-- Speedometer (Floating) -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
                    <div class="text-[12rem] font-black italic leading-none text-white tracking-tighter opacity-10 blur-[2px] absolute inset-0 translate-y-4">0</div>
                    <div class="text-[12rem] font-black italic leading-none text-glow text-white tracking-tighter" id="speed-val">0</div>
                    <div class="text-xl tracking-[1em] text-neon-cyan uppercase font-black pl-5 mt-[-1rem]">km/h</div>
                </div>

                <!-- Bottom Controls -->
                <div class="flex justify-center gap-6 mb-4 animate-float" style="animation-delay: -2s">
                     <button id="btn-lock" class="glass-btn w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
                        <span class="text-3xl group-hover:text-neon-magenta transition-colors">🔒</span>
                     </button>
                     <button id="btn-trunk" class="glass-btn w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
                        <span class="text-3xl group-hover:text-neon-cyan transition-colors">🚘</span>
                     </button>
                     <button id="btn-lights" class="glass-btn w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
                        <span class="text-3xl group-hover:text-neon-yellow transition-colors">💡</span>
                     </button>
                </div>
            </div>

            <!-- Right Column: Nav & RPM -->
            <div class="flex flex-col gap-6 w-[28%] shrink-0">
                 <!-- Map Card -->
                <div class="m3-card p-2 rounded-5xl flex-1 relative overflow-hidden group shadow-2xl">
                    <div class="absolute inset-0 z-0 opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-auto" id="map-view"></div>
                    <div class="absolute bottom-6 left-6 z-10 glass-panel px-6 py-2 rounded-full text-[10px] font-black text-neon-cyan flex items-center gap-3 border-neon-cyan/20">
                        <span class="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]"></span> GPS GUIDANCE ACTIVE
                    </div>
                </div>
                
                <!-- RPM/Music Widget Area -->
                <div id="music-widget-container" class="h-[220px] flex flex-col"></div>
                
                <!-- RPM Gauge -->
                <div class="m3-card p-6 h-[160px] flex flex-col justify-center relative overflow-hidden group">
                    <div class="absolute -left-12 -bottom-12 w-40 h-40 bg-neon-magenta/5 blur-3xl rounded-full"></div>
                    <h2 class="text-neon-magenta text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-right text-glow">Engine Pulse</h2>
                    <div class="text-5xl font-black text-right text-white italic tracking-tighter leading-none" id="rpm-val">800</div>
                    <div class="text-right text-[10px] text-white/20 font-bold uppercase tracking-widest mt-2 pr-1">RPM <span class="opacity-50">× 1000</span></div>
                    
                    <!-- RPM Bar -->
                    <div class="w-full h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden p-[1px]">
                        <div class="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta w-1/3 animate-pulse shadow-[0_0_15px_rgba(255,0,85,0.5)]"></div>
                    </div>
                </div>
            </div>
        </div>`;

        // Re-init Dashboard Components
        new GPSMap(document.getElementById('map-view')!, hal);
        document.getElementById('music-widget-container')?.appendChild(musicWidget.element);
        bindDashboardEvents();

    } else if (currentTab === 'apps') {
        content.appendChild(appDrawer.element);
    } else if (currentTab === 'music') {
        content.appendChild(musicWidget.element);
    } else if (currentTab === 'diag') {
        content.appendChild(diagnosticsTab.element);
    } else if (currentTab === 'weather') {
        content.appendChild(weatherWidget.element);
    } else if (currentTab === 'settings') {
        const buildVer = 'v3.2.0-expressive';
        content.innerHTML = `
            <div class="p-12 flex flex-col gap-8 max-w-4xl mx-auto h-full overflow-y-auto">
                <div>
                    <h2 class="text-5xl font-bold text-white tracking-tighter italic">System <span class="text-neon-cyan">Config</span></h2>
                    <p class="text-white/30 text-[10px] uppercase tracking-[0.5em] mt-2 font-bold">Preferences & Core Calibration</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="m3-card p-8 flex flex-col gap-6 group hover:border-neon-cyan/40 transition-colors">
                        <div class="flex justify-between items-center">
                            <h3 class="text-white font-bold italic text-lg">Visual Resonance</h3>
                            <span class="text-neon-cyan text-[10px] font-black uppercase tracking-widest">Theme</span>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <button id="set-theme-cyberpunk" class="glass-btn px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest ${themeManager.currentTheme.value === 'cyberpunk' ? 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]' : 'text-white/40 border-white/5'}">Cyberpunk</button>
                            <button id="set-theme-sport" class="glass-btn px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest ${themeManager.currentTheme.value === 'sport' ? 'bg-neon-magenta/20 text-neon-magenta border-neon-magenta/30 shadow-[0_0_15px_rgba(255,0,85,0.2)]' : 'text-white/40 border-white/5'}">Sport Mode</button>
                        </div>
                    </div>

                    <div class="m3-card p-8 flex flex-col gap-6 group hover:border-neon-magenta/40 transition-colors">
                        <div class="flex justify-between items-center">
                            <h3 class="text-white font-bold italic text-lg">Holo Architecture</h3>
                            <span class="text-neon-magenta text-[10px] font-black uppercase tracking-widest">Version</span>
                        </div>
                        <div class="bg-white/5 p-6 rounded-4xl border border-white/5 shadow-inner">
                            <span class="font-black text-white italic tracking-tighter text-3xl">${buildVer}</span>
                        </div>
                    </div>
                </div>

                <div class="m3-card p-8 flex items-center justify-between border-neon-cyan/10">
                    <div class="flex items-center gap-6">
                        <div class="w-16 h-16 rounded-3xl bg-neon-cyan/10 flex items-center justify-center text-3xl">🧩</div>
                        <div>
                            <div class="text-white font-bold italic">Module Registry</div>
                            <div class="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">Check for component updates</div>
                        </div>
                    </div>
                    <button class="glass-btn px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-neon-cyan border-neon-cyan/20">Sync Nexus</button>
                </div>
            </div>
        `;

        // Re-bind theme buttons
        setTimeout(() => {
            content.querySelector('#set-theme-cyberpunk')?.addEventListener('click', () => {
                themeManager.setTheme('cyberpunk');
                tabManager.setTab('settings'); // Force re-render
            });
            content.querySelector('#set-theme-sport')?.addEventListener('click', () => {
                themeManager.setTheme('sport');
                tabManager.setTab('settings'); // Force re-render
            });
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

// Initial Boot Sequence
const boot = new BootScreen(hal, () => {
    boot.element.remove();
});
document.body.appendChild(boot.element);

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

    document.getElementById('btn-lights')?.addEventListener('click', () => {
        hal.body.lights.on.value = !hal.body.lights.on.value;
    });

    document.getElementById('btn-trunk')?.addEventListener('click', () => {
        hal.body.doors.trunk.value = !hal.body.doors.trunk.value;
    });

    document.getElementById('status-card')?.addEventListener('click', () => {
        const isDriving = hal.powertrain.speed.value > 0;
        if (!isDriving) {
            hal.powertrain.speed.value = 120;
            hal.powertrain.rpm.value = 3200;
            hal.powertrain.gear.value = 'D';
        } else {
            hal.powertrain.speed.value = 0;
            hal.powertrain.rpm.value = 800;
            hal.powertrain.gear.value = 'P';
        }
    });
};
