import { VehicleHAL } from '../services/VehicleHAL';

export class BootScreen {
    element: HTMLDivElement;
    private checks = [
        { id: 'hal', label: 'Vehicle HAL', status: 'pending' },
        { id: 'gps', label: 'Navigation Subsystem', status: 'pending' },
        { id: 'media', label: 'Audio Engine', status: 'pending' },
        { id: 'display', label: 'Super Resolution Render', status: 'pending' }
    ];

    constructor(private hal: VehicleHAL, private onComplete: () => void) {
        this.element = document.createElement('div');
        this.element.className = 'absolute inset-0 z-50 bg-bg-dark flex items-center justify-center font-sans overflow-hidden';
        this.render();
        this.startSequence();
    }

    private render() {
        this.element.innerHTML = `
            <!-- Background Glows -->
            <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/10 blur-[120px] rounded-full animate-float"></div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-magenta/10 blur-[120px] rounded-full animate-float" style="animation-delay: -3s"></div>

            <div class="relative z-10 w-full max-w-2xl px-8">
                <!-- Logo/Header -->
                <div class="flex flex-col items-center mb-16 animate-pulse">
                    <div class="w-24 h-24 rounded-4xl bg-gradient-to-tr from-neon-cyan to-neon-magenta p-1 mb-6 shadow-[0_0_40px_rgba(0,243,255,0.3)]">
                        <div class="w-full h-full bg-bg-dark rounded-[1.8rem] flex items-center justify-center text-4xl">🏎️</div>
                    </div>
                    <h1 class="text-4xl font-bold tracking-tighter text-white text-glow">PROJECT <span class="text-neon-cyan">HOLO</span></h1>
                    <p class="text-white/30 text-xs uppercase tracking-[0.5em] mt-2 font-light">Automotive Intelligence v3.2.0</p>
                </div>

                <!-- Diagnostic Cards -->
                <div class="grid grid-cols-1 gap-4">
                    ${this.checks.map((c, i) => `
                        <div id="check-${c.id}" class="glass-panel p-6 rounded-3xl flex items-center justify-between transition-all duration-700 opacity-0 translate-y-8" style="transition-delay: ${i * 150}ms">
                            <div class="flex items-center gap-4">
                                <div class="w-2 h-2 rounded-full ${c.status === 'success' ? 'bg-neon-green shadow-[0_0_10px_#00ff9d]' : 'bg-white/20'}" id="led-${c.id}"></div>
                                <span class="text-white font-medium italic">${c.label}</span>
                            </div>
                            <span class="text-[10px] font-bold tracking-widest uppercase text-white/30" id="status-${c.id}">${c.status}</span>
                        </div>
                    `).join('')}
                </div>

                <!-- Progress Bar Container -->
                <div class="mt-16 relative">
                    <div class="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div id="master-progress" class="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-1000 ease-out" style="width: 0%"></div>
                    </div>
                    <p class="text-center text-[10px] text-white/20 mt-4 uppercase tracking-widest font-bold" id="progress-text">Initializing Systems...</p>
                </div>
            </div>
        `;

        // Trigger entry animation
        setTimeout(() => {
            this.checks.forEach(c => {
                const el = this.element.querySelector(`#check-${c.id}`);
                if (el) el.classList.remove('opacity-0', 'translate-y-8');
            });
        }, 100);
    }

    private async startSequence() {
        const progressEl = this.element.querySelector('#master-progress') as HTMLElement;
        const progressText = this.element.querySelector('#progress-text') as HTMLElement;

        for (let i = 0; i < this.checks.length; i++) {
            const check = this.checks[i];
            const statusEl = this.element.querySelector(`#status-${check.id}`)!;
            const ledEl = this.element.querySelector(`#led-${check.id}`)!;

            statusEl.textContent = 'CHECKING...';
            statusEl.classList.remove('text-white/30');
            statusEl.classList.add('text-neon-cyan');

            await new Promise(r => setTimeout(r, 800 + Math.random() * 1000));

            check.status = 'success';
            statusEl.textContent = 'OK';
            statusEl.classList.replace('text-neon-cyan', 'text-neon-green');
            ledEl.classList.replace('bg-white/20', 'bg-neon-green');
            ledEl.classList.add('shadow-[0_0_10px_#00ff9d]');

            const totalProgress = ((i + 1) / this.checks.length) * 100;
            if (progressEl) progressEl.style.width = `${totalProgress}%`;
        }

        if (progressText) progressText.textContent = 'SYSTEM READY. LAUNCHING DASHBOARD...';
        await new Promise(r => setTimeout(r, 1200));

        // Final exit animation
        this.element.classList.add('transition-all', 'duration-1000', 'opacity-0', 'scale-110');
        setTimeout(() => this.onComplete(), 1000);
    }
}
