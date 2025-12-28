class OBD2Sim {
    constructor() {
        this.connected = false;

        // Physics State
        this.state = {
            rpm: 800,
            speed: 0,
            throttle: 0,
            load: 15,
            coolant: 85,
            intake: 30,
            oil: 90,
            voltage: 14.1,
            maf: 5,
            map: 30,
            boost: -10,
            afr: 14.7,
            timing: 10,
            fuelLevel: 85,
            fuelRate: 1.2,
            gear: 'N',
            trip: 0.0,
            avgEco: 25.5,
            hp: 0,
            torque: 0
        };

        // Timers
        this.timers = {
            zeroTo100: null,
            timerActive: false,
            startTime: 0
        };
    }

    connect() {
        this.connected = true;
    }

    // Main update loop called by App
    readLiveMetrics() {
        if (!this.connected) return this.state;

        this.physicsTick();
        this.calcDerivedMetrics();
        return { ...this.state }; // Return copy
    }

    physicsTick() {
        // Random "Driver" Inputs
        const noise = Math.random();

        if (noise > 0.98) this.targetThrottle = 100; // Floor it occasionally
        else if (noise < 0.05) this.targetThrottle = 0; // Coast
        else this.targetThrottle = Math.max(0, Math.min(100, this.state.throttle + (Math.random() - 0.5) * 10));

        // Smooth throttle lag
        this.state.throttle += (this.targetThrottle - this.state.throttle) * 0.1;

        // RPM Logic
        if (this.state.gear === 'N' || this.state.gear === 'P') {
            const targetRPM = 800 + (this.state.throttle * 50); // Free revving
            this.state.rpm += (targetRPM - this.state.rpm) * 0.2;
        } else {
            // RPM tied to speed in gear
            // Simplified ratios
            const ratios = { 1: 150, 2: 80, 3: 55, 4: 40, 5: 30, 6: 22 };
            this.state.rpm = this.state.speed * ratios[this.state.gear];
            if (this.state.rpm < 800) this.state.rpm = 800; // Clutch in idle
        }

        // Speed Logic
        if (this.state.throttle > 0) {
            // Acceleration
            const power = (this.state.rpm / 7000) * this.state.throttle * 0.5;
            this.state.speed += power * 0.5;
        } else {
            // Drag
            this.state.speed *= 0.99;
        }

        // Gearbox Logic (Auto)
        if (this.state.throttle > 10 && this.state.gear === 'N') this.state.gear = 1;
        if (typeof this.state.gear === 'number') {
            if (this.state.rpm > 6000 && this.state.gear < 6) {
                this.state.gear++; // Upshift
                this.state.rpm *= 0.7; // RPM drop
            }
            if (this.state.rpm < 2000 && this.state.gear > 1) this.state.gear--; // Downshift
        }
        if (this.state.speed < 1 && this.state.throttle === 0) this.state.gear = 'N';

        // Limiters
        if (this.state.speed > 240) this.state.speed = 240;
        if (this.state.rpm > 7500) this.state.rpm = 7200 + Math.random() * 100; // Redline bounce

        // Thermals
        this.state.coolant = 85 + (this.state.load * 0.2) + (Math.random());
        this.state.intake = 30 + (this.state.speed * -0.05);

        // Air/Fuel & Boost
        if (this.state.throttle > 50) {
            this.state.map = 100 + (this.state.throttle * 1.5); // Boost
            this.state.boost = ((this.state.map - 100) * 0.145).toFixed(1); // PSI
            this.state.afr = 12.5; // Rich for power
        } else {
            this.state.map = 30 + (this.state.throttle * 0.7); // Vacuum
            this.state.boost = ((this.state.map - 100) * 0.145).toFixed(1);
            this.state.afr = 14.7; // Stoich
        }

        // Fuel
        this.state.fuelRate = (this.state.rpm * this.state.map) / 5000;
        this.state.fuelLevel -= 0.0001;
        this.state.load = (this.state.map / 255) * 100;
    }

    calcDerivedMetrics() {
        // HP = Torque * RPM / 5252 (Rough calc)
        // Let's simulate torque curve
        const peakTorque = 400; // Nm
        const torqueCurve = Math.sin((this.state.rpm / 7000) * Math.PI);
        this.state.torque = (peakTorque * torqueCurve).toFixed(0);
        this.state.hp = ((this.state.torque * this.state.rpm) / 5252).toFixed(0);

        // 0-100 Timer
        if (this.state.speed < 2 && !this.timers.timerActive) {
            // Ready
            this.timers.ready = true;
        }
        if (this.timers.ready && this.state.speed > 2) {
            // GO
            this.timers.ready = false;
            this.timers.timerActive = true;
            this.timers.startTime = Date.now();
            this.timers.zeroTo100 = "GO";
        }
        if (this.timers.timerActive) {
            const elapsed = (Date.now() - this.timers.startTime) / 1000;
            if (this.state.speed >= 100) {
                this.timers.timerActive = false;
                this.timers.zeroTo100 = elapsed.toFixed(2) + "s";
            } else {
                this.timers.zeroTo100 = elapsed.toFixed(1);
            }
        }

        // Trip
        this.state.trip += (this.state.speed / 3600) / 10; // Add dist
    }

    async getFactoryCodes() {
        await new Promise(r => setTimeout(r, 1500));
        return [
            { code: "P0101", desc: "Mass or Volume Air Flow Circuit Range/Performance" },
            { code: "P0300", desc: "Random/Multiple Cylinder Misfire Detected" },
            { code: "B0028", desc: "Right Side Airbag Deployment Control" }
        ];
    }
}
