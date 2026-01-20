
import { VehicleHAL } from '../services/VehicleHAL';
import { OBD2Service } from '../services/OBD2Service';

interface CarSettings {
  DOOR: string;
  SYSTEM_DOOR: string;
  SYSTEM_DOOR2: string;
  TWCameraBrake: string;
  CAR_TYPE: string;
  MCUID: string;
  TEMP_MODE: string;
  SHOW_TEMPERATURE: string;
  TEMP_CONVERT: string;
  color_temp: string;
  notification_light_pulse: string;
  CarChooseUpdateNewTime: string;
  REVERSE_STATUS_FOR_PROTOCOL: string;
  doorDriverOpen?: boolean;
  doorPassOpen?: boolean;
  doorRearLeftOpen?: boolean;
  doorRearRightOpen?: boolean;
  doorTailgateOpen?: boolean;
  lightsFrontOn?: boolean;
  lightsRearOn?: boolean;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: number;
}

interface AppInfo {
  name: string;
  package: string;
  icon?: string;
}

type TabId = 'home' | 'apps' | 'music' | 'nav' | 'perf' | 'offroad' | 'settings' | 'diag';

export class Dashboard {
  private element: HTMLElement;
  private settings: CarSettings | null = null;
  private pollInterval: number | null = null;
  private clockInterval: number | null = null;
  private activeTab: TabId = 'home';
  private tempSetpoint: number = 22;
  private acOn: boolean = false;
  private volume: number = 15;
  private isPlaying: boolean = false;
  private brightness: number = 80;

  // Music state
  private tracks: Track[] = [];
  private currentTrackIndex: number = -1;
  private audio: HTMLAudioElement = new Audio();
  private currentTime: number = 0;

  // Apps state
  private installedApps: AppInfo[] = [];

  private hal: VehicleHAL;
  private obd: OBD2Service;

  constructor(container: HTMLElement, hal: VehicleHAL, obd: OBD2Service) {
    this.element = container;
    this.hal = hal;
    this.obd = obd;
    this.initAudio();
    this.render();
    this.startPolling();
    this.startClock();
    this.bindEvents();
    this.loadApps();
    this.loadMusic();
    this.setupSignals();
    // Initial binding for the default 'home' tab
    this.bindTabEvents('home');
  }

  private initAudio() {
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
      this.updateMusicProgress();
    });
    this.audio.addEventListener('ended', () => {
      this.nextTrack();
    });
    this.audio.addEventListener('loadedmetadata', () => {
      this.updateMusicDisplay();
    });
  }

  private async loadApps() {
    try {
      const { TwahhPlugin } = (window as any).Capacitor?.Plugins || {};
      if (TwahhPlugin) {
        const res = await TwahhPlugin.getApps();
        this.installedApps = res.apps || [];
        console.log(`Loaded ${this.installedApps.length} apps`);
        if (this.activeTab === 'apps') this.switchTab('apps');
      }
    } catch (e) {
      console.error('Failed to load apps:', e);
    }
  }

  private async loadMusic() {
    try {
      const { TwahhPlugin } = (window as any).Capacitor?.Plugins || {};
      if (TwahhPlugin) {
        const res = await TwahhPlugin.getAudioFiles();
        if (res.songs && res.songs.length > 0) {
          this.tracks = res.songs;
          console.log(`Loaded ${this.tracks.length} tracks`);
        } else {
          this.tracks = [
            { id: '1', title: 'No Music Found', artist: 'Add MP3s to device', url: '', duration: 0 }
          ];
        }
      }
    } catch (e) {
      console.error('Failed to load music:', e);
      this.tracks = [
        { id: '1', title: 'Music Scan Failed', artist: 'Check permissions', url: '', duration: 0 }
      ];
    }
  }

  private async fetchSettings(): Promise<CarSettings | null> {
    try {
      const { TwahhPlugin } = (window as any).Capacitor?.Plugins || {};
      if (!TwahhPlugin) return null;
      return await TwahhPlugin.getAllCarSettings();
    } catch (e) {
      console.error('Failed to fetch car settings:', e);
      return null;
    }
  }

  private startPolling() {
    this.pollInterval = window.setInterval(async () => {
      const newSettings = await this.fetchSettings();
      if (newSettings) {
        this.settings = newSettings;
        this.updateDisplay();
      }
    }, 500);

    // Log Polling
    window.setInterval(async () => {
      try {
        const { TwahhPlugin } = (window as any).Capacitor?.Plugins || {};
        if (TwahhPlugin) {
          const res = await TwahhPlugin.getPluginLogs();
          if (res.logs && res.logs.length > 0) {
            this.updateHomeLog(res.logs);
          }
        }
      } catch (e) {
        console.error("Log fetch failed", e);
      }
    }, 2000);

    this.fetchSettings().then(s => {
      if (s) {
        this.settings = s;
        this.updateDisplay();
      }
    });
  }

  private setupSignals() {
    // Subscribe to HAL signals for reactive UI updates
    this.hal.powertrain.rpm.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-rpm');
      if (el) el.textContent = Math.round(v).toString();
    });
    this.hal.powertrain.speed.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-speed');
      if (el) el.textContent = Math.round(v).toString();
    });
    this.hal.powertrain.coolant.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-coolant');
      if (el) el.textContent = Math.round(v).toString();
    });
    this.hal.powertrain.load.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-load');
      if (el) el.textContent = v + '%';
    });
    this.hal.powertrain.throttle.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-throttle');
      if (el) el.textContent = v + '%';
    });
    this.hal.powertrain.transTemp.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-trans');
      if (el) el.textContent = Math.round(v).toString();
    });
    this.hal.powertrain.batteryVoltage.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-volt');
      if (el) el.textContent = v.toFixed(1);
      const minEl = this.element.querySelector('#obd-volt-min');
      const maxEl = this.element.querySelector('#obd-volt-max');
      if (minEl) minEl.textContent = this.hal.diagnostics.minVoltage.value.toFixed(1);
      if (maxEl) maxEl.textContent = this.hal.diagnostics.maxVoltage.value.toFixed(1);
    });
    this.hal.powertrain.fuelEco.subscribe((v: number) => {
      const el = this.element.querySelector('#obd-eco');
      if (el) el.textContent = v > 0 ? v + 'L/100' : '--';
    });
    this.hal.motion.trip.distance.subscribe((v: number) => {
      const el = this.element.querySelector('#trip-dist');
      if (el) el.textContent = v.toFixed(1) + 'km';
    });
    this.hal.motion.perf.timer0100.subscribe((v: number) => {
      const el = this.element.querySelector('#perf-0100');
      if (el) el.textContent = v > 0 ? v.toFixed(1) + 's' : 'READY';
      if (this.hal.motion.perf.isTimerRunning.value) el?.classList.add('text-accent');
      else el?.classList.remove('text-accent');
    });
    this.hal.motion.location.heading.subscribe((v: number) => {
      const el = this.element.querySelector('#heading-val');
      if (el) el.textContent = this.getHeadingString(v);
    });
    this.hal.diagnostics.dtcs.subscribe((codes: string[]) => {
      const countEl = this.element.querySelector('#obd-dtc-count');
      const pillEl = this.element.querySelector('#dtc-count-pill');
      if (countEl) countEl.textContent = codes.length.toString();
      if (pillEl) {
        if (codes.length > 0) {
          pillEl.textContent = "FAULT";
          pillEl.style.background = "var(--q-accent)";
        } else {
          pillEl.textContent = "OK";
          pillEl.style.background = "var(--q-success)";
        }
      }
    });

    this.hal.nightMode.subscribe((isNight: boolean) => {
      if (isNight) this.element.classList.add('night-mode');
      else this.element.classList.remove('night-mode');
    });

    this.hal.powertrain.load.subscribe((v: number) => {
      const bar = this.element.querySelector('#load-bar') as HTMLElement;
      if (bar) bar.style.height = v + '%';
    });

    this.hal.powertrain.throttle.subscribe((v: number) => {
      const bar = this.element.querySelector('#throttle-bar') as HTMLElement;
      if (bar) bar.style.height = v + '%';
    });

    this.hal.motion.accel.x.subscribe(() => this.updateGForce());
    this.hal.motion.accel.y.subscribe(() => this.updateGForce());
  }

  private updateGForce() {
    const dot = this.element.querySelector('#g-dot') as HTMLElement;
    if (dot) {
      const x = (this.hal.motion.accel.x.value || 0) * 20; // Scale 1G to 20px
      const y = (this.hal.motion.accel.y.value || 0) * 20;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  private startClock() {
    this.updateClock();
    this.clockInterval = window.setInterval(() => this.updateClock(), 1000);
  }

  private updateHomeLog(logs: string[]) {
    const logContainer = this.element.querySelector('#home-log');
    if (logContainer) {
      // Show last 5 lines formatted for small widget
      const recent = logs.slice(-5).map(l => `> ${l}`).join('<br>');
      logContainer.innerHTML = recent;
    }
  }

  private getHeadingString(heading: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(((heading %= 360) < 0 ? heading + 360 : heading) / 45) % 8;
    return directions[index];
  }

  private render() {
    this.element.innerHTML = `
        <div class="quantum-layout">
            <!-- SIDEBAR NAVIGATION -->
            <nav class="quantum-sidebar">
                <button class="nav-btn ${this.activeTab === 'home' ? 'active' : ''}" data-tab="home">
                    <div class="icon">🏠</div>
                    <span>Home</span>
                </button>
                <button class="nav-btn ${this.activeTab === 'apps' ? 'active' : ''}" data-tab="apps">
                    <div class="icon">📱</div>
                    <span>Apps</span>
                </button>
                <button class="nav-btn ${this.activeTab === 'music' ? 'active' : ''}" data-tab="music">
                    <div class="icon">🎵</div>
                    <span>Music</span>
                </button>
                <button class="nav-btn ${this.activeTab === 'nav' ? 'active' : ''}" data-tab="nav">
                    <div class="icon">🗺️</div>
                    <span>Maps</span>
                </button>
                <button class="nav-btn ${this.activeTab === 'settings' ? 'active' : ''}" data-tab="settings">
                    <div class="icon">⚙️</div>
                    <span>Config</span>
                </button>
                <button class="nav-btn ${this.activeTab === 'perf' ? 'active' : ''}" data-tab="perf">
                    <div class="icon">⚡</div>
                    <span>Perf</span>
                </button>
                <button class="nav-btn ${this.activeTab === 'offroad' ? 'active' : ''}" data-tab="offroad">
                    <div class="icon">🏔️</div>
                    <span>4x4</span>
                </button>
                <button class="nav-btn ${this.activeTab === 'diag' ? 'active' : ''}" data-tab="diag">
                    <div class="icon">⚡</div>
                    <span>Diag</span>
                </button>
            </nav>

            <main class="quantum-main">
                <!-- TOP HEADER -->
                <header class="quantum-header">
                    <div style="font-size: 20px; font-weight: bold; letter-spacing: 2px; color: var(--q-primary);">
                        QUANTUM <span style="font-weight: 300; opacity: 0.7;">OS</span>
                    </div>
                    
                    <div style="display: flex; gap: 20px;">
                        <span id="heading-val" style="font-family: var(--font-mono); font-size: 24px; color: var(--q-primary);">N</span>
                        <span id="clock" style="font-family: var(--font-mono); font-size: 24px;">--:--</span>
                    </div>

                    <div style="display: flex; gap: 10px;">
                        <div class="glass-panel" style="padding: 5px 10px; font-size: 10px; display: flex; align-items: center; gap: 5px;">
                            <span>GPS</span> <div style="width: 6px; height: 6px; background: var(--q-success); border-radius: 50%;"></div>
                        </div>
                        <div class="glass-panel" style="padding: 5px 10px; font-size: 10px; display: flex; align-items: center; gap: 5px;">
                            <span>BT</span> <div style="width: 6px; height: 6px; background: var(--q-warning); border-radius: 50%;"></div>
                        </div>
                    </div>
                </header>

                <!-- MAIN CONTENT AREA -->
                <div class="quantum-content" id="main-content">
                    ${this.renderHomeTab()}
                </div>
            </main>
        </div>
    `;
  }

  private renderHomeTab(): string {
    return `
        <div class="dashboard-grid">
            <!-- Large Status Hero (2x2) -->
            <div class="quantum-card col-span-2 row-span-2" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div class="card-title">
                    <span>Vehicle Status</span>
                    <span style="font-size: 10px; opacity: 0.5;">LIVE TELEMETRY</span>
                </div>
                
                    <!-- Load/Throttle Bars -->
                    <div style="position: absolute; left: 10px; bottom: 40px; height: 80px; width: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;">
                        <div id="load-bar" style="position: absolute; bottom: 0; width: 100%; height: 0%; background: var(--q-primary); border-radius: 3px; transition: height 0.2s;"></div>
                        <div style="position: absolute; top: -12px; font-size: 8px; width: 40px;">LOAD</div>
                    </div>
                    <div style="position: absolute; right: 10px; bottom: 40px; height: 80px; width: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;">
                        <div id="throttle-bar" style="position: absolute; bottom: 0; width: 100%; height: 0%; background: var(--q-accent); border-radius: 3px; transition: height 0.2s;"></div>
                        <div style="position: absolute; top: -12px; font-size: 8px; width: 40px; right: 0; text-align: right;">THR</div>
                    </div>

                    <!-- G-Force Meter -->
                    <div style="position: absolute; top: 10px; right: 10px; width: 50px; height: 50px; border: 1px solid rgba(0,240,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 2px; height: 100%; background: rgba(255,255,255,0.1); position: absolute;"></div>
                        <div style="height: 2px; width: 100%; background: rgba(255,255,255,0.1); position: absolute;"></div>
                        <div id="g-dot" style="width: 6px; height: 6px; background: var(--q-primary); border-radius: 50%; box-shadow: 0 0 10px var(--q-primary); transition: transform 0.1s;"></div>
                        <div style="position: absolute; bottom: -12px; font-size: 7px; opacity: 0.5;">G-FORCE</div>
                    </div>

                    <!-- Placeholder for Car Model -->
                    <div style="width: 300px; height: 150px; background: rgba(0, 240, 255, 0.05); border: 1px dashed var(--q-primary); display: flex; align-items: center; justify-content: center; border-radius: 10px;">
                        <span style="opacity: 0.5; letter-spacing: 2px;">VEHICLE RENDER NULL</span>
                    </div>
                    
                    <!-- Stats Overlay -->
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; display: flex; justify-content: space-between; padding: 0 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 10px; opacity: 0.7;">TRIP</div>
                            <div id="trip-dist" class="text-glow text-xl text-primary">0.0km</div>
                        </div>
                         <div style="text-align: center;">
                            <div style="font-size: 10px; opacity: 0.7;">ECO</div>
                            <div id="obd-eco" class="text-glow text-xl">--</div>
                        </div>
                         <div style="text-align: center;">
                            <div style="font-size: 10px; opacity: 0.7;">0-100</div>
                            <div id="perf-0100" class="text-glow text-xl">READY</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Terminal/Logs -->
            <div class="quantum-card">
                <div class="card-title">System Log</div>
                <div style="font-family: var(--font-mono); font-size: 10px; opacity: 0.7; height: 100px; overflow: hidden;" id="home-log">
                    > SYSTEM_INIT...<br>
                    > MOUNTING_DRIVES...<br>
                    > PROTOCOL_UNK...<br>
                    > WAITING_FOR_CAN...
                </div>
            </div>

            <!-- Media Mini -->
            <div class="quantum-card">
                <div class="card-title">Media</div>
                <div style="text-align: center;">
                    <div style="font-size: 14px; margin-bottom: 5px;" class="text-primary truncate" id="track-name">${this.tracks[0]?.title || 'IDLE'}</div>
                    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
                        <button class="q-btn" id="btn-prev" style="padding: 5px 10px;">I&lt;</button>
                        <button class="q-btn" id="btn-play" style="padding: 5px 15px;">${this.isPlaying ? '||' : '>'}</button>
                        <button class="q-btn" id="btn-next" style="padding: 5px 10px;">&gt;I</button>
                    </div>
                </div>
            </div>
            
            <!-- Performance & Diag Gauges -->
            <div class="quantum-card">
                <div class="card-title">
                    <span>Health</span>
                    <span id="dtc-count-pill" style="font-size: 8px; background: var(--q-success); color: black; padding: 2px 6px; border-radius: 10px;">OK</span>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; text-align: center;">
                     <div>
                        <div style="font-size: 10px; opacity: 0.6;">RPM</div>
                        <div id="obd-rpm" class="text-lg text-primary text-glow">--</div>
                    </div>
                    <div>
                        <div style="font-size: 10px; opacity: 0.6;">SPEED</div>
                        <div id="obd-speed" class="text-lg text-primary text-glow">--</div>
                    </div>
                     <div>
                        <div style="font-size: 10px; opacity: 0.6;">DTCs</div>
                        <div id="obd-dtc-count" class="text-lg text-warn">0</div>
                    </div>
                    <div>
                        <div style="font-size: 10px; opacity: 0.6;">VOLT (BATT)</div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <div id="obd-volt" class="text-lg text-primary">--</div>
                            <div style="font-size: 8px; opacity: 0.5;">MIN: <span id="obd-volt-min">--</span> MAX: <span id="obd-volt-max">--</span></div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 10px; font-size: 10px; color: var(--q-success); text-align: center;">
                    SERVICE IN: <span id="service-countdown">${this.hal.diagnostics.serviceDueKm.value}</span> KM
                </div>
            </div>
        </div>
    `;
  }

  private renderAppsTab(): string {
    const getAppIcon = (pkg: string): string => {
      const l = pkg.toLowerCase();
      if (l.includes('map') || l.includes('navigation')) return '🗺️';
      if (l.includes('music') || l.includes('audio')) return '🎵';
      if (l.includes('radio') || l.includes('fm')) return '📻';
      if (l.includes('phone') || l.includes('dialer')) return '📞';
      return '📱';
    };

    const apps = this.installedApps.length > 0
      ? this.installedApps.map(a => ({
        icon: getAppIcon(a.package),
        name: a.name.length > 12 ? a.name.substring(0, 12) + '…' : a.name,
        pkg: a.package
      }))
      : [
        { icon: '🚗', name: 'Vehicle', pkg: 'com.tw.car' },
        { icon: '🎶', name: 'Media', pkg: 'com.android.music' },
        { icon: '🗺️', name: 'Navigation', pkg: 'com.android.maps' },
      ];

    return `
        <div style="padding: 20px;">
            <div class="card-title" style="margin-bottom: 20px;">INSTALLED PACKAGES <span style="font-size: 10px; opacity: 0.5;">COUNT: ${this.installedApps.length}</span></div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 15px;">
                ${apps.map(a => `
                    <button class="quantum-card" style="display: flex; flex-direction: column; align-items: center; gap: 10px; cursor: pointer; transition: transform 0.2s;" data-pkg="${a.pkg}">
                        <span style="font-size: 32px;">${a.icon}</span>
                        <span style="font-size: 10px; font-weight: bold; text-align: center;">${a.name}</span>
                    </button>
                `).join('')}
            </div>
            
             <div style="margin-top: 30px;">
                <button class="q-btn" id="btn-refresh-apps">RESCAN DISK</button>
            </div>
        </div>
    `;
  }

  private renderMusicTab(): string {
    const currentTrack = this.currentTrackIndex >= 0 ? this.tracks[this.currentTrackIndex] : null;

    return `
        <div style="display: flex; height: 100%; gap: 20px;">
            <!-- Now Playing -->
            <div class="quantum-card" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                 <div style="width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 70%); border: 1px solid rgba(0,240,255,0.3); display: flex; align-items: center; justify-content: center; animation: pulse 2s infinite;">
                    <span style="font-size: 60px;">🎵</span>
                 </div>
                 
                 <div style="text-align: center;">
                    <h2 class="text-primary text-glow" style="margin: 0; font-size: 24px;">${currentTrack?.title || 'NO MEDIA'}</h2>
                    <p style="opacity: 0.6; margin: 5px 0 0 0;">${currentTrack?.artist || 'WAITING...'}</p>
                 </div>
                 
                 <div style="display: flex; align-items: center; gap: 20px; margin-top: 20px;">
                    <button class="q-btn" id="prev-lg">PREV</button>
                    <button class="q-btn" id="play-lg" style="width: 80px; background: var(--q-primary); color: black;">${this.isPlaying ? 'PAUSE' : 'PLAY'}</button>
                    <button class="q-btn" id="next-lg">NEXT</button>
                 </div>
            </div>
            
            <!-- Playlist -->
             <div class="quantum-card" style="width: 300px; overflow-y: auto;">
                <div class="card-title">PLAYLIST</div>
                ${this.tracks.map((t, i) => `
                    <div class="playlist-item ${i === this.currentTrackIndex ? 'active' : ''}" data-idx="${i}" style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px; cursor: pointer; ${i === this.currentTrackIndex ? 'color: var(--q-primary); background: rgba(0,240,255,0.05);' : ''}">
                        ${i + 1}. ${t.title}
                    </div>
                `).join('')}
             </div>
        </div>
     `;
  }

  private renderNavTab(): string {
    return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 20px;">
            <div class="quantum-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; height: 300px;">
                <span style="font-size: 60px;">🗺️</span>
                <button class="q-btn" id="btn-launch-maps" style="width: 200px;">LAUNCH GMAPS</button>
            </div>
            <div class="quantum-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; height: 300px;">
                 <span style="font-size: 60px;">🛣️</span>
                <button class="q-btn" id="btn-launch-waze" style="width: 200px;">LAUNCH WAZE</button>
            </div>
             <div class="quantum-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; height: 300px;">
                 <span style="font-size: 60px;">📻</span>
                <button class="q-btn" id="btn-launch-radio" style="width: 200px;">RADIO TUNER</button>
            </div>
             <div class="quantum-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; height: 300px;">
                 <span style="font-size: 60px;">📶</span>
                <button class="q-btn" id="btn-launch-bt" style="width: 200px;">BLUETOOTH</button>
            </div>
        </div>
    `;
  }

  private renderSettingsTab(): string {
    return `
        <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <div class="quantum-card" style="margin-bottom: 20px;">
                <div class="card-title">ELM327 Connection</div>
                <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                    <input type="text" id="elm-host" value="192.168.0.10" style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 10px; flex: 2;">
                    <input type="number" id="elm-port" value="35000" style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 10px; flex: 1;">
                </div>
                <button class="q-btn" id="btn-elm-connect" style="width: 100%;">CONNECT VIA WIFI</button>
            </div>
            
            <div class="quantum-card">
                <div class="card-title">System Sniffing</div>
                 <div style="display: flex; gap: 20px;">
                    <button class="q-btn" id="btn-sniff-elm" style="flex: 1;">DUMP ELM TRAFFIC</button>
                    <button class="q-btn" id="btn-sniff-hiworld" style="flex: 1;">DUMP CAN TRAFFIC</button>
                 </div>
            </div>
        </div>
    `;
  }

  private renderDiagTab(): string {
    return `
        <div style="height: 100%; display: flex; flex-direction: column; padding: 20px;">
             <!-- Placeholder for dedicated Diag Component -->
             <div id="diag-container" style="flex: 1;"></div>
        </div>
    `;
  }

  private updateDisplay() {
    if (!this.settings) return;
    // Update logic here if needed for visual toggles
  }

  private updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

    const clockEl = this.element.querySelector('#clock');
    const dateEl = this.element.querySelector('#date');
    if (clockEl) clockEl.textContent = timeStr;
    if (dateEl) dateEl.textContent = dateStr;
  }

  // --- EVENT HANDLERS & NAVIGATION ---

  private bindEvents() {
    // Robust Nav Button delegation
    this.element.querySelector('.quantum-sidebar')?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.nav-btn') as HTMLElement;
      if (btn) {
        const tab = btn.dataset.tab as TabId;
        if (tab) {
          console.log(`[Dashboard] Navigating to: ${tab}`);
          // Native feedback
          const { TwahhPlugin } = (window as any).Capacitor?.Plugins || {};
          if (TwahhPlugin) {
            TwahhPlugin.speakNow({ text: `Switching to ${tab}` });
            TwahhPlugin.addNativeLog({ msg: `[JS] User clicked ${tab} tab` });
          }
          this.switchTab(tab);
        }
      }
    });

    // Binders for specific tab elements are complicated because re-render wipes them.
    // We should bind after render or use delegation.
    // For simplicity in this vanilla JS app, we re-bind on tab switch.
  }

  private switchTab(tab: TabId) {
    this.activeTab = tab;

    // Update Nav UI
    this.element.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', (btn as HTMLElement).dataset.tab === tab);
    });

    // Render Content
    const contentHost = this.element.querySelector('#main-content');
    if (contentHost) {
      switch (tab) {
        case 'home': contentHost.innerHTML = this.renderHomeTab(); break;
        case 'apps': contentHost.innerHTML = this.renderAppsTab(); break;
        case 'music': contentHost.innerHTML = this.renderMusicTab(); break;
        case 'nav': contentHost.innerHTML = this.renderNavTab(); break;
        case 'settings': contentHost.innerHTML = this.renderSettingsTab(); break;
        case 'perf':
          contentHost.innerHTML = '<div id="perf-container" style="height:100%"></div>';
          import('./PerformanceTab').then(({ PerformanceTab }) => {
            const host = this.element.querySelector('#perf-container');
            if (host) host.appendChild(new PerformanceTab(this.hal).element);
          });
          break;
        case 'offroad':
          contentHost.innerHTML = '<div id="offroad-container" style="height:100%"></div>';
          import('./OffroadTab').then(({ OffroadTab }) => {
            const host = this.element.querySelector('#offroad-container');
            if (host) host.appendChild(new OffroadTab(this.hal).element);
          });
          break;
        case 'diag':
          contentHost.innerHTML = this.renderDiagTab();
          // Initialize Diag Component
          import('./DiagnosticsTab').then(({ DiagnosticsTab }) => {
            const host = this.element.querySelector('#diag-container');
            if (host) {
              const diag = new DiagnosticsTab(this.hal, this.obd);
              host.appendChild(diag.element);
            }
          });
          break;
      }
      this.bindTabEvents(tab);
    }
  }

  private bindTabEvents(tab: TabId) {
    if (tab === 'home') {
      this.element.querySelector('#btn-play')?.addEventListener('click', () => this.togglePlay());
      this.element.querySelector('#btn-next')?.addEventListener('click', () => this.nextTrack());
      this.element.querySelector('#btn-prev')?.addEventListener('click', () => this.prevTrack());

      this.element.querySelector('#dtc-count-pill')?.addEventListener('click', () => {
        const codes = this.hal.diagnostics.dtcs.value;
        if (codes.length > 0) {
          alert(`Detected Codes:\n${codes.join('\n')}`);
        } else {
          alert("Vehicle Systems Healthy - No DTCs");
        }
      });
    }
    if (tab === 'apps') {
      this.element.querySelector('#btn-refresh-apps')?.addEventListener('click', () => this.loadApps());
      this.element.querySelectorAll('[data-pkg]').forEach(btn => {
        btn.addEventListener('click', () => {
          const pkg = (btn as HTMLElement).dataset.pkg;
          if (pkg) this.launchApp(pkg);
        });
      });
    }
    if (tab === 'music') {
      this.element.querySelector('#play-lg')?.addEventListener('click', () => this.togglePlay());
      this.element.querySelector('#next-lg')?.addEventListener('click', () => this.nextTrack());
      this.element.querySelector('#prev-lg')?.addEventListener('click', () => this.prevTrack());
      this.element.querySelectorAll('.playlist-item').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt((item as HTMLElement).dataset.idx || '0');
          this.playTrack(idx);
        });
      });
    }
    if (tab === 'nav') {
      this.element.querySelector('#btn-launch-maps')?.addEventListener('click', () => this.launchApp('com.google.android.apps.maps'));
      this.element.querySelector('#btn-launch-waze')?.addEventListener('click', () => this.launchApp('com.waze'));
    }
    if (tab === 'settings') {
      this.element.querySelector('#btn-elm-connect')?.addEventListener('click', () => {
        const host = (this.element.querySelector('#elm-host') as HTMLInputElement).value;
        const port = parseInt((this.element.querySelector('#elm-port') as HTMLInputElement).value);
        this.obd.connectWifi(host || '192.168.0.10', port || 35000);
      });
      this.element.querySelector('#btn-sniff-elm')?.addEventListener('click', () => {
        (window as any).Capacitor.Plugins.TwahhPlugin.toggleRawSniffing({ target: 'elm327', enable: true });
      });
    }
  }

  // --- MUSIC CONTROL ---
  private togglePlay() {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      if (this.currentTrackIndex === -1 && this.tracks.length > 0) {
        this.playTrack(0);
      } else {
        this.audio.play();
        this.isPlaying = true;
      }
    }
    this.updateMusicDisplay();
  }

  private nextTrack() {
    let next = this.currentTrackIndex + 1;
    if (next >= this.tracks.length) next = 0;
    this.playTrack(next);
  }

  private prevTrack() {
    let prev = this.currentTrackIndex - 1;
    if (prev < 0) prev = this.tracks.length - 1;
    this.playTrack(prev);
  }

  private playTrack(index: number) {
    if (this.tracks[index]) {
      this.currentTrackIndex = index;
      this.audio.src = this.tracks[index].url;
      this.audio.play();
      this.isPlaying = true;
      this.updateMusicDisplay();

      if (this.activeTab === 'music' || this.activeTab === 'home') {
        this.switchTab(this.activeTab); // Re-render to show active state
      }
    }
  }

  private updateMusicDisplay() {
    // Simple re-render of active tab if it's music or home
    if (this.activeTab === 'music' || this.activeTab === 'home') {
      this.switchTab(this.activeTab);
    }
  }

  private updateMusicProgress() {
    // TODO: Update progress bar
  }

  // --- APP LAUNCHER ---
  private launchApp(pkg: string) {
    console.log('Launching', pkg);
    const { TwahhPlugin } = (window as any).Capacitor.Plugins;
    if (TwahhPlugin) {
      TwahhPlugin.launchApp({ packageName: pkg });
    }
  }
}
