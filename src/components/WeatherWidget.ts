import { WeatherService } from '../services/WeatherService';
import { effect } from '@preact/signals-core';

export class WeatherWidget {
    element: HTMLDivElement;

    constructor(private weather: WeatherService) {
        this.element = document.createElement('div');
        this.element.className = 'flex flex-col h-full p-8 gap-8 items-center justify-center';

        effect(() => {
            const w = this.weather.current.value;
            this.element.innerHTML = `
                <div class="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-3xl rounded-full"></div>
                <div class="relative z-10 text-center mb-12 animate-float">
                    <div class="text-[10rem] leading-none mb-4 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">☀️</div>
                    <div class="text-[12rem] font-bold text-white tracking-tighter leading-none text-glow">${w.temp}<span class="text-4xl align-top ml-2 opacity-50">°</span></div>
                    <div class="text-3xl text-neon-cyan font-black uppercase tracking-[0.5em] mt-4">${w.condition}</div>
                    <div class="text-white/30 font-bold mt-4 uppercase tracking-widest text-xs">📍 ${w.location}</div>
                </div>

                <div class="grid grid-cols-5 gap-6 w-full max-w-4xl px-4 relative z-10">
                    ${w.forecast.map((f, i) => `
                        <div class="m3-card p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-500 bg-white/5" style="transition-delay: ${i * 50}ms">
                            <span class="text-white/40 text-[10px] font-black uppercase tracking-widest">${f.day}</span>
                            <span class="text-4xl drop-shadow-md">${f.icon}</span>
                            <span class="text-2xl font-bold text-white">${f.temp}°</span>
                            <div class="w-8 h-1 bg-neon-cyan/20 rounded-full mt-2"></div>
                        </div>
                    `).join('')}
                </div>
            `;
        });
    }
}
