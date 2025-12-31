class App {
    constructor() {
        this.hal = new VehicleHAL();

        // Cache UI Elements for Performance
        this.el = {
            // -- Tabs --
            btnDash: document.querySelector('button[data-tab="dashboard"]'),
            btnVeh: document.querySelector('button[data-tab="vehicle"]'),
            btnTel: document.querySelector('button[data-tab="telemetry"]'),
            btnApps: document.querySelector('button[data-tab="apps"]'),

            tabDash: document.getElementById('tab-dashboard'),
            tabVeh: document.getElementById('tab-vehicle'),
            tabTel: document.getElementById('tab-telemetry'),
            tabApps: document.getElementById('tab-apps'),

            appGrid: document.getElementById('appGrid'),

            // -- Info Bar --
            mediaTrack: document.getElementById('mediaTrack'),
            mediaArtist: document.getElementById('mediaArtist'),
            navDist: document.getElementById('navDist'),
            outTemp: document.getElementById('outTemp'),
            humidity: document.getElementById('humidity'),

            // -- Powertrain --
            rpm: document.getElementById('val_rpm'),
            rpmPath: document.getElementById('rpmPath'),
            speed: document.getElementById('val_speed'),
            gear: document.getElementById('val_gear'),
            coolant: document.getElementById('val_coolant'),
            oil: document.getElementById('val_oil'),
            boost: document.getElementById('val_boost'),
            afr: document.getElementById('val_afr'),
            kw: document.getElementById('val_kw'),
            trap: document.getElementById('val_trap'),

            // -- Body --
            doorFL: document.getElementById('door-fl'),
            doorFR: document.getElementById('door-fr'),
            doorRL: document.getElementById('door-rl'),
            doorRR: document.getElementById('door-rr'),
            hood: document.getElementById('door-hood'),
            trunk: document.getElementById('door-trunk'),
            lights: document.getElementById('lights-head'),
            carAlert: document.getElementById('carAlert'),
            seatL: document.getElementById('seatL'),
            seatR: document.getElementById('seatR'),

            // -- TPMS --
            tpmsFL: document.getElementById('tpms-fl'),
            tpmsFR: document.getElementById('tpms-fr'),
            tpmsRL: document.getElementById('tpms-rl'),
            tpmsRR: document.getElementById('tpms-rr'),

            // -- G-Meter --
            gCanvas: document.getElementById('gMeter'),
            gValX: document.getElementById('gValX'),

            // -- Telemetry --
            suspFL: document.getElementById('susp-fl'),
            suspFR: document.getElementById('susp-fr'),
            suspRL: document.getElementById('susp-rl'),
            suspRR: document.getElementById('susp-rr'),
            wheel: document.getElementById('steeringWheel'),
            steerVal: document.getElementById('steerVal'),
            brake: document.getElementById('val_brake'),
            drift: document.getElementById('val_drift'),
            latG: document.getElementById('val_latg'),
            longG: document.getElementById('val_longg'),
            z100: document.getElementById('val_z100'),
            qtr: document.getElementById('val_qtr')
        };

        this.gCtx = this.el.gCanvas.getContext('2d');
        this.init();
    }

    async init() {
        // Tab Logic
        this.el.btnDash.addEventListener('click', () => this.switchTab('dashboard'));
        this.el.btnVeh.addEventListener('click', () => this.switchTab('vehicle'));
        this.el.btnTel.addEventListener('click', () => this.switchTab('telemetry'));
        this.el.btnApps.addEventListener('click', () => this.switchTab('apps'));

        document.getElementById('btnConnect').addEventListener('click', () => {
            this.hal.connect();
            document.getElementById('btnConnect').textContent = "SYSTEM ONLINE";
        });

        // Diagnostic Flow
        this.hal.onLog = (msg, type) => this.addLogEntry(msg, type);
        const diagResults = await this.hal.runDiagnostics();
        this.updateDiagnosticUI(diagResults);

        // 60FPS Render Loop
        requestAnimationFrame(() => this.loop());
    }

    addLogEntry(msg, type) {
        const consoleEl = document.getElementById('verbose-console');
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;

        const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        entry.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${msg}`;

        consoleEl.appendChild(entry);
        consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    updateDiagnosticUI(results) {
        const setStatus = (id, success) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.add(success ? 'success' : 'error');
            el.querySelector('.status').textContent = success ? 'SUCCESS' : 'FAILED';
        };

        setStatus('diag-capacitor', results.capacitor);
        setStatus('diag-plugin', results.plugin);
        setStatus('diag-apps', results.apps);
        setStatus('diag-events', results.events);

        const allOk = Object.values(results).every(v => v);
        const btnProceed = document.getElementById('btnProceed');
        const errDesc = document.getElementById('diag-error');

        if (allOk) {
            btnProceed.classList.remove('hidden');
            btnProceed.textContent = "PROCEED TO DASHBOARD";
        } else if (!results.capacitor) {
            // No Capacitor found - likely Browser/Sim mode
            btnProceed.classList.remove('hidden');
            btnProceed.textContent = "PROCEED (SIMULATION MODE)";
        } else {
            // Capacitor exists but some checks failed - Critical Native Error
            errDesc.classList.remove('hidden');
            btnProceed.classList.remove('hidden');
            btnProceed.classList.add('warning');
            btnProceed.textContent = "FORCE PROCEED (UNSTABLE)";
        }

        btnProceed.onclick = () => {
            document.getElementById('diagnostic-screen').classList.add('hidden');
        };
    }

    switchTab(tabName) {
        // Hide all
        this.el.tabDash.classList.add('hidden-tab'); this.el.tabDash.classList.remove('active-tab');
        this.el.tabVeh.classList.add('hidden-tab'); this.el.tabVeh.classList.remove('active-tab');
        this.el.tabTel.classList.add('hidden-tab'); this.el.tabTel.classList.remove('active-tab');

        this.el.btnDash.classList.remove('active');
        this.el.btnVeh.classList.remove('active');
        this.el.btnTel.classList.remove('active');

        // Show One
        if (tabName === 'dashboard') {
            this.el.tabDash.classList.add('active-tab'); this.el.tabDash.classList.remove('hidden-tab');
            this.el.btnDash.classList.add('active');
        } else if (tabName === 'vehicle') {
            this.el.tabVeh.classList.add('active-tab'); this.el.tabVeh.classList.remove('hidden-tab');
            this.el.btnVeh.classList.add('active');
        } else if (tabName === 'telemetry') {
            this.el.tabTel.classList.add('active-tab'); this.el.tabTel.classList.remove('hidden-tab');
            this.el.btnTel.classList.add('active');
        } else if (tabName === 'apps') {
            this.el.tabApps.classList.add('active-tab'); this.el.tabApps.classList.remove('hidden-tab');
            this.el.btnApps.classList.add('active');
            this.loadApps();
        }
    }

    async loadApps() {
        this.el.appGrid.innerHTML = '<div class="loading-apps">SCANNING SYSTEM...</div>';
        const apps = await this.hal.getApps();
        this.el.appGrid.innerHTML = '';

        apps.forEach(app => {
            const card = document.createElement('div');
            card.className = 'app-icon-card';
            card.innerHTML = `
                <div class="icon-box">
                    <span>${app.name[0].toUpperCase()}</span>
                </div>
                <div class="app-name">${app.name}</div>
            `;
            card.onclick = () => this.hal.launchApp(app.package);
            this.el.appGrid.appendChild(card);
        });
    }

    loop() {
        const data = this.hal.readState();
        this.renderInfo(data);
        this.renderPowertrain(data.powertrain);
        this.renderBody(data.body);
        this.renderMotion(data.motion);
        this.renderChassis(data.chassis);
        this.renderPerf(data.perf);

        requestAnimationFrame(() => this.loop());
    }

    renderInfo(data) {
        this.el.mediaTrack.textContent = data.info.track;
        this.el.mediaArtist.textContent = data.info.artist;
        this.el.navDist.textContent = Math.round(data.info.nav.dist) + "m";
        this.el.outTemp.textContent = data.body.outsideTemp + "°C";
        this.el.humidity.textContent = data.body.humidity + "%";
    }

    renderPowertrain(pt) {
        this.el.rpm.textContent = Math.round(pt.rpm);
        this.el.speed.textContent = Math.round(pt.speed);
        this.el.gear.textContent = pt.gear;
        this.el.coolant.textContent = Math.round(pt.coolant);
        this.el.oil.textContent = Math.round(pt.oil);
        this.el.boost.textContent = pt.boost;
        this.el.afr.textContent = pt.afr.toFixed(1);
        this.el.kw.textContent = pt.kw;
        this.el.trap.textContent = Math.round(pt.speed); // Reuse

        // RPM Arc
        const rpmPct = Math.min(1, pt.rpm / 8000);
        const offset = 283 - (283 * rpmPct);
        this.el.rpmPath.style.strokeDashoffset = offset;
        if (rpmPct > 0.8) this.el.rpmPath.style.stroke = '#ff0055';
        else this.el.rpmPath.style.stroke = '#00f3ff';
    }

    renderBody(body) {
        this.toggleDoor(this.el.doorFL, body.doors.fl);
        this.toggleDoor(this.el.doorFR, body.doors.fr);
        this.toggleDoor(this.el.doorRL, body.doors.rl);
        this.toggleDoor(this.el.doorRR, body.doors.rr);
        this.toggleDoor(this.el.hood, body.doors.hood);
        this.toggleDoor(this.el.trunk, body.doors.trunk);

        if (Object.values(body.doors).some(v => v)) {
            this.el.carAlert.textContent = "DOOR OPEN";
            this.el.carAlert.style.color = "#ff0055";
        } else {
            this.el.carAlert.textContent = "SYSTEM NORMAL";
            this.el.carAlert.style.color = "#00f3ff";
        }

        if (body.lights.lowBeam) this.el.lights.classList.add('on');
        else this.el.lights.classList.remove('on');

        this.el.tpmsFL.textContent = body.tpms.fl.psi;
        this.el.tpmsFR.textContent = body.tpms.fr.psi;
        this.el.tpmsRL.textContent = body.tpms.rl.psi;
        this.el.tpmsRR.textContent = body.tpms.rr.psi;
    }

    toggleDoor(el, isOpen) {
        if (isOpen) el.classList.add('open');
        else el.classList.remove('open');
    }

    renderMotion(motion) {
        // G-Meter
        const ctx = this.gCtx;
        const w = 150; const h = 150;
        ctx.fillStyle = "#000"; ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = "#333"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(w / 2, h / 2, w / 3, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();

        const x = (w / 2) + (motion.accelX * 30);
        const y = (h / 2) - (motion.accelY * 30);
        ctx.fillStyle = "#ff0055"; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();

        this.el.gValX.textContent = Math.abs(motion.accelX).toFixed(1);

        // Perf side stats
        this.el.drift.textContent = motion.driftAngle;
        this.el.latG.textContent = motion.maxLatG.toFixed(2);
        this.el.longG.textContent = motion.maxLongG.toFixed(2);
    }

    renderChassis(ch) {
        // Suspension
        this.el.suspFL.style.height = ch.suspension.fl + '%';
        this.el.suspFR.style.height = ch.suspension.fr + '%';
        this.el.suspRL.style.height = ch.suspension.rl + '%';
        this.el.suspRR.style.height = ch.suspension.rr + '%';

        // Steering
        this.el.wheel.style.transform = `rotate(${ch.steeringAngle}deg)`;
        this.el.steerVal.textContent = Math.round(ch.steeringAngle);

        this.el.brake.textContent = Math.round(ch.brakePressure);
    }

    renderPerf(perf) {
        if (perf.z100) this.el.z100.textContent = perf.z100;
        if (perf.qtr) this.el.qtr.textContent = perf.qtr;
        if (perf.trap) this.el.trap.textContent = perf.trap;
    }
}

window.app = new App();
