
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
        body: { doors: {}, lights: {}, tpms: {}, climate: {} },
        motion: {}, chassis: { suspension: {} }, info: { nav: {} }, perf: {}
    });
    return { VehicleHAL: MockHAL };
});

describe('Theme Engine', () => {
    let app;

    beforeEach(() => {
        global.VehicleHAL = VehicleHAL;
        global.requestAnimationFrame = vi.fn();

        // Mock document.documentElement.style
        document.documentElement.style.setProperty = vi.fn();

        // Setup minimal DOM
        document.body.innerHTML = `
            <div id="tab-dashboard"></div><div id="tab-vehicle"></div><div id="tab-telemetry"></div><div id="tab-apps"></div><div id="appGrid"></div>
            <button data-tab="dashboard"></button><button data-tab="vehicle"></button><button data-tab="telemetry"></button><button data-tab="apps"></button>
            <span id="mediaTrack"></span><span id="mediaArtist"></span><span id="navDist"></span><span id="outTemp"></span><span id="humidity"></span>
            
            <span id="val_rpm"></span><path id="rpmPath"></path><span id="val_speed"></span><span id="val_gear"></span>
            <div id="val_coolant"></div><div id="val_oil"></div><div id="val_boost"></div><div id="val_afr"></div><div id="val_kw"></div><div id="val_trap"></div>
            
            <div id="door-fl"></div><div id="door-fr"></div><div id="door-rl"></div><div id="door-rr"></div><div id="door-hood"></div><div id="door-trunk"></div>
            <div id="lights-head"></div><div id="carAlert"></div><div id="seatL"></div><div id="seatR"></div>
            <div id="tpms-fl"></div><div id="tpms-fr"></div><div id="tpms-rl"></div><div id="tpms-rr"></div>
            
            <canvas id="gMeter"></canvas><div id="gValX"></div>
            <div id="susp-fl"></div><div id="susp-fr"></div><div id="susp-rl"></div><div id="susp-rr"></div>
            <div id="steeringWheel"></div><div id="steerVal"></div><div id="val_brake"></div><div id="val_drift"></div><div id="val_latg"></div><div id="val_longg"></div><div id="val_z100"></div><div id="val_qtr"></div>
            
            <div id="btnProceed"></div><div id="diag-error"></div>
             <div id="diag-capacitor"><span class="status"></span></div>
             <div id="diag-plugin"><span class="status"></span></div>
             <div id="diag-apps"><span class="status"></span></div>
             <div id="diag-events"><span class="status"></span></div>
            <button id="btnConnect"></button><button id="btnTheme"></button><div id="verbose-console"></div>
            <button id="btnProceed"></button>
            <button data-tab="weather" id="btnWeather"></button>
        `;

        app = new App();
    });

    it('should set Cyberpunk theme correctly', () => {
        app.setTheme('cyberpunk');
        expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--neon-cyan', '#00f3ff');
        expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--neon-magenta', '#ff0055');
    });

    it('should set Sport theme correctly', () => {
        app.setTheme('sport');
        expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--neon-cyan', '#ff3300'); // Example sport color
        expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--neon-magenta', '#ffffff');
    });

    it('should default to Cyberpunk if theme not found', () => {
        app.setTheme('unknown_theme');
        // Should fall back to cyberpunk values
        expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--neon-cyan', '#00f3ff');
    });

    it('should toggle theme on button click', () => {
        // Initial state is cyberpunk (from init)

        // Click 1 -> Switch to Sport
        document.getElementById('btnTheme').click();
        expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--neon-cyan', '#ff3300');

        // Click 2 -> Switch back to Cyberpunk
        document.getElementById('btnTheme').click();
        expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--neon-cyan', '#00f3ff');
    });
});
