import { VehicleHAL } from '../services/VehicleHAL';
import { effect } from '@preact/signals-core';

export class DiagnosticsTab {
    element: HTMLDivElement;

    constructor(private hal: VehicleHAL) {
        this.element = document.createElement('div');
        this.element.className = 'p-6 flex flex-col gap-6 h-full font-sans overflow-y-auto';

        effect(() => {
            const diag = this.hal.diagnostics;
            const dtcs = diag.dtcs.value;
            const isScanning = diag.isScanning.value;

            this.element.innerHTML = `
                <div class="flex justify-between items-center mb-8">
                    <div>
                        <h2 class="text-3xl font-bold text-white tracking-tighter italic">Vitals <span class="text-neon-cyan">& Diagnostics</span></h2>
                        <p class="text-white/30 text-[10px] uppercase tracking-[0.4em] mt-1 font-bold">OBD-II Real-time Telemetry</p>
                    </div>
                    <div class="flex gap-3">
                        <button id="btn-scan" class="glass-btn px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest ${isScanning ? 'opacity-50 cursor-not-allowed' : 'text-neon-cyan'} border-neon-cyan/20">
                            ${isScanning ? '<span class="animate-pulse">Analyzing...</span>' : 'Initiate Full Scan'}
                        </button>
                        <button id="btn-clear" class="glass-btn px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-white/40 border-white/5 hover:text-white">
                            Purge Logs
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Live Stats -->
                    <div class="m3-card p-8 flex flex-col gap-6 relative group overflow-hidden">
                        <div class="absolute -right-16 -bottom-16 w-48 h-48 bg-neon-green/5 blur-3xl rounded-full group-hover:bg-neon-green/10 transition duration-700"></div>
                        <h3 class="text-neon-green text-[10px] font-black uppercase tracking-[0.3em]">Telemetry Flux</h3>
                        
                        <div class="space-y-4">
                            <div class="flex justify-between items-center bg-white/5 p-6 rounded-4xl border border-white/5 hover:border-neon-green/30 transition shadow-inner">
                                <span class="text-white/50 text-sm font-medium italic">Battery Potential</span>
                                <span class="text-4xl font-bold text-neon-green text-glow">${diag.voltage.value}<span class="text-sm ml-1 opacity-50">V</span></span>
                            </div>
                            <div class="flex justify-between items-center bg-white/5 p-6 rounded-4xl border border-white/5 hover:border-neon-yellow/30 transition shadow-inner">
                                <span class="text-white/50 text-sm font-medium italic">Thermal Intake</span>
                                <span class="text-4xl font-bold text-neon-yellow text-glow">${diag.intakeTemp.value}<span class="text-sm ml-1 opacity-50">°C</span></span>
                            </div>
                        </div>
                    </div>

                    <!-- DTC List -->
                    <div class="m3-card p-8 flex flex-col gap-6 relative group overflow-hidden h-[340px]">
                        <div class="absolute -right-16 -top-16 w-48 h-48 bg-neon-magenta/5 blur-3xl rounded-full group-hover:bg-neon-magenta/10 transition duration-700"></div>
                        <h3 class="text-neon-magenta text-[10px] font-black uppercase tracking-[0.3em]">Signal Anomalies</h3>
                        
                        <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            ${dtcs.length === 0
                    ? `
                                <div class="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <div class="text-6xl mb-4">🛡️</div>
                                    <div class="text-neon-green text-xs font-black uppercase tracking-widest">Shields Nominal</div>
                                </div>`
                    : dtcs.map(code => `
                                    <div class="flex items-center gap-4 text-neon-magenta mb-4 bg-neon-magenta/5 p-5 rounded-4xl border border-neon-magenta/20 animate-float">
                                        <div class="w-10 h-10 rounded-2xl bg-neon-magenta/10 flex items-center justify-center text-xl">⚠️</div>
                                        <div>
                                            <div class="font-black text-sm tracking-widest">${code.split(' ')[0]}</div>
                                            <div class="text-[10px] opacity-60 uppercase font-bold mt-1">${code.split(' ').slice(1).join(' ')}</div>
                                        </div>
                                    </div>
                                `).join('')
                }
                        </div>
                    </div>
                </div>

                <!-- Monitor Readiness -->
                <div class="m3-card p-8 mt-2">
                     <h3 class="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Subsystem Readiness</h3>
                     <div class="grid grid-cols-4 gap-6">
                        ${['MIL', 'EVAP', 'O2S', 'CAT'].map(sys => `
                            <div class="flex flex-col items-center gap-3">
                                <div class="w-16 h-1.5 rounded-full bg-white/5 relative overflow-hidden">
                                     <div class="absolute inset-y-0 left-0 w-full bg-neon-green shadow-[0_0_10px_rgba(0,255,157,0.5)]"></div>
                                </div>
                                <span class="text-[10px] text-white/40 font-black tracking-widest">${sys}</span>
                            </div>
                        `).join('')}
                     </div>
                </div>
            `;

            this.element.querySelector('#btn-scan')?.addEventListener('click', () => this.hal.scanDTCs());
            this.element.querySelector('#btn-clear')?.addEventListener('click', () => this.hal.clearDTCs());
        });
    }
}
