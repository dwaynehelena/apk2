
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { App } from '../www/app.js';
import { VehicleHAL } from '../www/hal.js';

// Stub VehicleHAL to avoid dependency on its internal logic
vi.mock('../www/hal.js', () => {
    const MockHAL = vi.fn();
    MockHAL.prototype.connect = vi.fn();
    MockHAL.prototype.runDiagnostics = vi.fn().mockResolvedValue({});
    MockHAL.prototype.readState = vi.fn().mockReturnValue({
        powertrain: { rpm: 0, speed: 0, gear: 'N', coolant: 0, oil: 0, boost: 0, afr: 0, kw: 0 },
        body: {
            doors: { fl: false, fr: false, rl: false, rr: false, trunk: false, hood: false },
            lights: { lowBeam: false, highBeam: false, leftSig: false, rightSig: false },
            tpms: { fl: { psi: 0 }, fr: { psi: 0 }, rl: { psi: 0 }, rr: { psi: 0 } },
            climate: { on: false, tempL: 0, tempR: 0, fan: 0, ac: false, recirc: false }
        },
        motion: { accelX: 0, accelY: 0, driftAngle: 0, maxLatG: 0, maxLongG: 0 },
        chassis: { steeringAngle: 0, brakePressure: 0, suspension: { fl: 50, fr: 50, rl: 50, rr: 50 } },
        info: { track: "", artist: "", nav: { dist: 0 } },
        perf: {}
    });
    MockHAL.prototype.onLog = null;
    return { VehicleHAL: MockHAL };
});

describe('App UI Rendering', () => {
    let app;

    beforeEach(() => {
        // Expose VehicleHAL to global scope for app.js
        global.VehicleHAL = VehicleHAL;

        // Setup JSDOM
        document.body.innerHTML = `
            <div id="tab-dashboard"></div><div id="tab-vehicle"></div><div id="tab-telemetry"></div><div id="tab-apps"></div><div id="appGrid"></div>
            <button data-tab="dashboard"></button><button data-tab="vehicle"></button><button data-tab="telemetry"></button><button data-tab="apps"></button>
            <span id="mediaTrack"></span><span id="mediaArtist"></span><span id="navDist"></span><span id="outTemp"></span><span id="humidity"></span>
            
            <!-- Powertrain -->
            <span id="val_rpm"></span><path id="rpmPath" style="stroke-dashoffset: 0; stroke: #000;"></path>
            <span id="val_speed"></span><span id="val_gear"></span>
            <div id="val_coolant"></div><div id="val_oil"></div><div id="val_boost"></div><div id="val_afr"></div><div id="val_kw"></div><div id="val_trap"></div>
            
            <!-- Body -->
            <div id="door-fl"></div><div id="door-fr"></div><div id="door-rl"></div><div id="door-rr"></div><div id="door-hood"></div><div id="door-trunk"></div>
            <div id="lights-head"></div>
            <div id="carAlert"></div><div id="seatL"></div><div id="seatR"></div>
            <div id="tpms-fl"></div><div id="tpms-fr"></div><div id="tpms-rl"></div><div id="tpms-rr"></div>
            <div class="signal-left" id="sig-l"></div><div class="signal-right" id="sig-r"></div>
            
            <!-- Climate (New) -->
            <div id="temp-l"></div><div id="temp-r"></div>
            <div id="fan-level"></div>
            <div id="icon-ac"></div><div id="icon-recirc"></div>

            <!-- Motion/Chassis -->
            <canvas id="gMeter"></canvas><div id="gValX"></div>
            <div id="susp-fl"></div><div id="susp-fr"></div><div id="susp-rl"></div><div id="susp-rr"></div>
            <div id="steeringWheel"></div><div id="steerVal"></div><div id="val_brake"></div><div id="val_drift"></div><div id="val_latg"></div><div id="val_longg"></div><div id="val_z100"></div><div id="val_qtr"></div>
            
            <div id="steeringWheel"></div><div id="steerVal"></div><div id="val_brake"></div><div id="val_drift"></div><div id="val_latg"></div><div id="val_longg"></div><div id="val_z100"></div><div id="val_qtr"></div>
            
            <div id="diag-events"><span class="status"></span></div>
            <div id="diag-capacitor"><span class="status"></span></div>
            <div id="diag-plugin"><span class="status"></span></div>
            <div id="diag-apps"><span class="status"></span></div>
            <div id="verbose-console"></div>

            <button id="btnProceed"></button>
            <div id="diag-error"></div>
            <button id="btnConnect"></button>
            <button id="btnTheme"></button>
            <button data-tab="weather" id="btnWeather"></button>

            <button data-tab="dashboard"></button>
            <button data-tab="vehicle"></button>
            <button data-tab="telemetry"></button>
            <button data-tab="apps"></button>

             <div id="tab-dashboard"></div>
            <div id="tab-vehicle"></div>
            <div id="tab-telemetry"></div>
            <div id="tab-apps"></div>
            <div id="tab-weather">
                <div id="weather-temp"></div>
                <div id="weather-humidity"></div>
                <div id="weather-cond"></div>
                <div id="weather-icon"></div>
            </div>
        `;

        global.requestAnimationFrame = vi.fn();
        app = new App();
    });

    it('should update RPM gauge correctly', () => {
        const pt = { rpm: 4000, speed: 100, gear: 'D', coolant: 90, oil: 100, boost: 15, afr: 14.7, kw: 200 };
        app.renderPowertrain(pt);
        const expectedOffset = 283 - (283 * (4000 / 8000));
        expect(document.getElementById('val_rpm').textContent).toBe('4000');
        expect(document.getElementById('val_speed').textContent).toBe('100');
        expect(document.getElementById('rpmPath').style.strokeDashoffset).toBe(String(expectedOffset));
    });

    it('should change RPM gauge color at redline', () => {
        const pt = { rpm: 7500, speed: 100, gear: 'D', coolant: 90, oil: 100, boost: 15, afr: 14.7, kw: 200 };
        app.renderPowertrain(pt);
        expect(document.getElementById('rpmPath').style.stroke).toBe('#ff0055');
    });

    it('should show normal color below redline', () => {
        const pt = { rpm: 3000, speed: 100, gear: 'D', coolant: 90, oil: 100, boost: 15, afr: 14.7, kw: 200 };
        app.renderPowertrain(pt);
        expect(document.getElementById('rpmPath').style.stroke).toBe('#00f3ff');
    });

    it('should toggle Left Turn Signal', () => {
        const body = {
            doors: { fl: false, fr: false, rl: false, rr: false, trunk: false, hood: false },
            lights: { leftSig: true, rightSig: false, lowBeam: false, highBeam: false },
            tpms: { fl: { psi: 0 }, fr: { psi: 0 }, rl: { psi: 0 }, rr: { psi: 0 } },
            climate: { on: false, tempL: 0, tempR: 0, fan: 0, ac: false, recirc: false }
        };
        app.renderBody(body);
        expect(document.getElementById('sig-l').classList.contains('blink-on')).toBe(true);
        expect(document.getElementById('sig-r').classList.contains('blink-on')).toBe(false);
    });

    it('should toggle Right Turn Signal', () => {
        const body = {
            doors: {},
            lights: { leftSig: false, rightSig: true },
            tpms: { fl: {}, fr: {}, rl: {}, rr: {} },
            climate: { on: false, tempL: 0, tempR: 0, fan: 0, ac: false, recirc: false }
        };
        app.renderBody(body);
        expect(document.getElementById('sig-l').classList.contains('blink-on')).toBe(false);
        expect(document.getElementById('sig-r').classList.contains('blink-on')).toBe(true);
    });

    it('should update Door UI correctly', () => {
        const body = {
            doors: { fl: true, fr: false, rl: false, rr: true, trunk: false, hood: false },
            lights: { leftSig: false, rightSig: false, lowBeam: false, highBeam: false },
            tpms: { fl: { psi: 0 }, fr: { psi: 0 }, rl: { psi: 0 }, rr: { psi: 0 } },
            climate: { on: false, tempL: 0, tempR: 0, fan: 0, ac: false, recirc: false }
        };
        app.renderBody(body);

        expect(document.getElementById('door-fl').classList.contains('open')).toBe(true);
        expect(document.getElementById('door-fr').classList.contains('open')).toBe(false);
        expect(document.getElementById('door-rr').classList.contains('open')).toBe(true);
    });

    it('should update Dual Zone Climate UI', () => {
        const body = {
            doors: { fl: false, fr: false, rl: false, rr: false, trunk: false, hood: false },
            lights: { leftSig: false, rightSig: false, lowBeam: false, highBeam: false },
            tpms: { fl: { psi: 0 }, fr: { psi: 0 }, rl: { psi: 0 }, rr: { psi: 0 } },
            climate: { on: true, tempL: 22.5, tempR: 'LO', fan: 3, ac: true, recirc: false }
        };

        // This relies on renderBody calling renderClimate internally, or updated renderBody
        app.renderBody(body);

        expect(document.getElementById('temp-l').textContent).toBe('22.5°C');
        expect(document.getElementById('temp-r').textContent).toBe('LO');
        expect(document.getElementById('fan-level').textContent).toBe('|||'); // Level 3 = 3 bars
        expect(document.getElementById('icon-ac').classList.contains('active')).toBe(true);
        expect(document.getElementById('icon-recirc').classList.contains('active')).toBe(false);
    });

    it('should render App Grid', async () => {
        // Mock getApps response
        const mockApps = [
            { name: 'Spotify', package: 'com.spotify' },
            { name: 'Maps', package: 'com.maps' }
        ];

        // Mock hal.getApps on the instance
        app.hal.getApps = vi.fn().mockResolvedValue(mockApps);

        await app.loadApps();

        const grid = document.getElementById('appGrid');
        expect(grid.children.length).toBe(2);
        expect(grid.innerHTML).toContain('Spotify');
        expect(grid.innerHTML).toContain('Maps');
    });
});
