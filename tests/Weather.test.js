
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { App } from '../www/app.js';
import { VehicleHAL } from '../www/hal.js';

// Mock VehicleHAL
vi.mock('../www/hal.js', () => {
    const MockHAL = vi.fn();
    MockHAL.prototype.connect = vi.fn();
    MockHAL.prototype.runDiagnostics = vi.fn().mockResolvedValue({});
    MockHAL.prototype.readState = vi.fn().mockReturnValue({
        powertrain: { rpm: 0 },
        body: { doors: {}, lights: {}, tpms: {}, climate: { outsideTemp: 22, humidity: 45 } },
        motion: {}, chassis: { suspension: {} }, info: { nav: {} }, perf: {}
    });
    return { VehicleHAL: MockHAL };
});

describe('Weather Widget', () => {
    let app;

    beforeEach(() => {
        global.VehicleHAL = VehicleHAL;
        global.requestAnimationFrame = vi.fn();

        // Setup DOM for Weather Tab
        document.body.innerHTML = `
            <div id="tab-dashboard"></div><div id="tab-vehicle"></div><div id="tab-telemetry"></div><div id="tab-apps"></div>
            <div id="tab-weather" class="hidden-tab">
                <div id="weather-temp"></div>
                <div id="weather-humidity"></div>
                <div id="weather-cond"></div>
            </div>
            
            <button data-tab="dashboard"></button>
            <button data-tab="vehicle"></button>
            <button data-tab="telemetry"></button>
            <button data-tab="apps"></button>
            <button data-tab="weather"></button> <!-- New Tab Button -->

            <div id="appGrid"></div>
            <span id="mediaTrack"></span><span id="mediaArtist"></span><span id="navDist"></span><span id="outTemp"></span><span id="humidity"></span>
            
            <span id="val_rpm"></span><path id="rpmPath"></path><span id="val_speed"></span><span id="val_gear"></span>
            <div id="val_coolant"></div><div id="val_oil"></div><div id="val_boost"></div><div id="val_afr"></div><div id="val_kw"></div><div id="val_trap"></div>
            
            <div id="door-fl"></div><div id="door-fr"></div><div id="door-rl"></div><div id="door-rr"></div><div id="door-hood"></div><div id="door-trunk"></div>
            <div id="lights-head"></div><div id="carAlert"></div><div id="seatL"></div><div id="seatR"></div>
            <div id="tpms-fl"></div><div id="tpms-fr"></div><div id="tpms-rl"></div><div id="tpms-rr"></div>
            
            <canvas id="gMeter"></canvas><div id="gValX"></div>
            <div id="susp-fl"></div><div id="susp-fr"></div><div id="susp-rl"></div><div id="susp-rr"></div>
            <div id="steeringWheel"></div><div id="steerVal"></div><div id="val_brake"></div><div id="val_drift"></div><div id="val_latg"></div><div id="val_longg"></div><div id="val_z100"></div><div id="val_qtr"></div>
            
             <div id="diag-events"><span class="status"></span></div>
             <div id="diag-capacitor"><span class="status"></span></div>
             <div id="diag-plugin"><span class="status"></span></div>
             <div id="diag-apps"><span class="status"></span></div>
             <div id="debug-log"></div>
             <div id="verbose-console"></div>

            <button id="btnConnect"></button>
            <button id="btnTheme"></button>
            <button id="btnProceed"></button>
            <div id="diag-error"></div>
             
             <button data-tab="dashboard"></button>
            <button data-tab="vehicle"></button>
            <button data-tab="telemetry"></button>
            <button data-tab="apps"></button>
            <button data-tab="weather" id="btnWeather"></button>

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

        app = new App();
    });

    it('should switch to weather tab', () => {
        app.switchTab('weather');
        const tab = document.getElementById('tab-weather');
        expect(tab.classList.contains('active-tab')).toBe(true);
        expect(tab.classList.contains('hidden-tab')).toBe(false);
    });

    it('should render weather data from HAL state', () => {
        // App loop reads mock state automatically in real app, but here we call render directly or simulate loop
        const mockData = {
            body: {
                outsideTemp: 24,
                humidity: 60
            }
        };

        // We need to implement renderWeather(data) in App
        app.renderWeather(mockData.body);

        expect(document.getElementById('weather-temp').textContent).toContain('24');
        expect(document.getElementById('weather-humidity').textContent).toContain('60');
    });
});
