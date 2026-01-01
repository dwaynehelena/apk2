import { MusicService } from '../services/MusicService';
import { effect } from '@preact/signals-core';

export class MusicWidget {
    element: HTMLDivElement;

    constructor(private music: MusicService) {
        this.element = document.createElement('div');
        this.element.className = 'glass-panel p-6 rounded-5xl flex-1 flex flex-col justify-between overflow-hidden relative group animate-float shadow-[0_20px_50px_rgba(0,0,0,0.5)]';

        effect(() => {
            const track = this.music.currentTrack.value;
            const isPlaying = this.music.isPlaying.value;
            const progress = this.music.duration.value > 0
                ? (this.music.currentTime.value / this.music.duration.value) * 100
                : 0;

            this.element.innerHTML = `
                <div class="absolute -right-12 -top-12 w-32 h-32 bg-neon-cyan/10 blur-3xl rounded-full group-hover:bg-neon-cyan/20 transition duration-700"></div>
                
                <h2 class="text-neon-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-4">Media Core</h2>
                
                <div class="flex items-center gap-6 flex-1">
                    <div class="w-20 h-20 rounded-4xl bg-gradient-to-br from-white/10 to-white/5 p-0.5 shadow-2xl relative overflow-hidden">
                        <div class="absolute inset-0 bg-neon-cyan/5 animate-pulse"></div>
                        <div class="w-full h-full bg-bg-dark rounded-[1.8rem] flex items-center justify-center text-4xl">
                            ${track ? '🎵' : '💿'}
                        </div>
                    </div>
                    <div class="flex-1 overflow-hidden">
                        <div class="text-xl font-bold truncate text-white tracking-tight">${track ? track.title : 'No Media Active'}</div>
                        <div class="text-sm text-neon-cyan/60 truncate font-medium uppercase tracking-wider mt-1">${track ? track.artist : 'Waiting for Input'}</div>
                    </div>
                </div>

                <!-- Controls -->
                <div class="flex justify-between items-center mt-6 bg-white/5 p-2 rounded-full border border-white/5">
                    <button id="music-prev" class="p-3 hover:text-neon-cyan transition-all hover:scale-110 active:scale-90">
                        <span class="text-xl">⏮️</span>
                    </button>
                    <button id="music-play" class="w-14 h-14 bg-gradient-to-r from-neon-cyan to-neon-cyan/80 rounded-full text-bg-dark hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
                        <span class="text-2xl translate-x-0.5">${isPlaying ? '⏸︎' : '▶'}</span>
                    </button>
                    <button id="music-next" class="p-3 hover:text-neon-cyan transition-all hover:scale-110 active:scale-90">
                        <span class="text-xl">⏭️</span>
                    </button>
                </div>

                <!-- Progress Bar -->
                <div class="mt-6 px-1">
                    <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-neon-cyan via-white to-neon-magenta shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all duration-300" style="width: ${progress}%"></div>
                    </div>
                </div>
            `;

            // Attach listeners
            this.element.querySelector('#music-prev')?.addEventListener('click', (e) => {
                e.stopPropagation();
                this.music.prevTrack();
            });
            this.element.querySelector('#music-play')?.addEventListener('click', (e) => {
                e.stopPropagation();
                this.music.togglePlay();
            });
            this.element.querySelector('#music-next')?.addEventListener('click', (e) => {
                e.stopPropagation();
                this.music.nextTrack();
            });
        });
    }
}
