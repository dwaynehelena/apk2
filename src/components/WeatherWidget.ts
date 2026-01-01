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
                <div class="text-center">
                    <div class="text-6xl mb-4">☀️</div>
                    <div class="text-8xl font-bold text-white mb-2">${w.temp}°</div>
                    <div class="text-2xl text-neon-cyan uppercase tracking-widest">${w.condition}</div>
                    <div class="text-white/50 mt-2">📍 ${w.location}</div>
                </div>

                <div class="flex gap-4 w-full justify-center">
                    ${w.forecast.map(f => `
                        <div class="glass-panel p-4 rounded-xl flex flex-col items-center w-24">
                            <span class="text-white/50 text-xs mb-2">${f.day}</span>
                            <span class="text-2xl mb-2">${f.icon}</span>
                            <span class="font-bold">${f.temp}°</span>
                        </div>
                    `).join('')}
                </div>
            `;
        });
    }
}
