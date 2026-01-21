import { signal, effect } from '@preact/signals-core';
import { VehicleHAL } from './VehicleHAL'; // Import

export interface Track {
    id: string;
    title: string;
    artist: string;
    url: string; // File path or blob URL
    duration: number; // Seconds
}

export class MusicService {
    playlist = signal<Track[]>([]);
    currentTrack = signal<Track | null>(null);
    isPlaying = signal(false);
    currentTime = signal(0);
    duration = signal(0);

    // Mock Audio Element (In real app, we'd use cleaner audio context or native bridge)
    private audio = new Audio();

    constructor(private hal: VehicleHAL) {
        this.audio.addEventListener('timeupdate', () => {
            this.currentTime.value = this.audio.currentTime;
        });
        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });
        this.audio.addEventListener('loadedmetadata', () => {
            this.duration.value = this.audio.duration;
        });

        // Mode Switching
        // Mode Switching - Removed Demo Mode
        // Only relying on real HAL data now

        // Real Mode: Sync from HAL
        // Sync from HAL
        effect(() => {
            this.isPlaying.value = this.hal.media.isPlaying.value;

            // Construct track info from HAL string (e.g. "FM 88.5" or "Artist - Title")
            const raw = this.hal.media.nowPlaying.value;
            if (raw) {
                // Simple heuristic: if it contains " - ", split it. Else assume it's a station name.
                const parts = raw.split(' - ');
                this.currentTrack.value = {
                    id: 'system',
                    title: parts[1] || raw,
                    artist: parts[1] ? parts[0] : 'System Audio',
                    url: '',
                    duration: 0
                };
            }
        });
    }

    // Mock Library Removed

    // Retained for compatibility, but now alias to loadMockLibrary or specific scans
    async scanLibrary() {
        if ((window as any).Capacitor?.isNative) {
            try {
                const { TwahhPlugin } = (window as any).Capacitor.Plugins;
                const res = await TwahhPlugin.getAudioFiles();
                if (res.songs && res.songs.length > 0) {
                    this.playlist.value = res.songs;
                } else {
                    console.warn('[Music] No songs found on device.');
                }
            } catch (e) {
                console.error('[Music] Scan failed', e);
            }
        }
    }

    playTrack(track: Track) {
        this.currentTrack.value = track;
        // this.audio.src = track.url; // Disabled for mock to prevent errors
        // this.audio.play().catch(() => {}); 
        this.isPlaying.value = true;
    }

    togglePlay() {
        if (!this.currentTrack.value && this.playlist.value.length > 0) {
            this.playTrack(this.playlist.value[0]);
            return;
        }

        this.isPlaying.value = !this.isPlaying.value;
        if (this.isPlaying.value) {
            // this.audio.play().catch(() => {});
        } else {
            // this.audio.pause();
        }
    }

    nextTrack() {
        const current = this.currentTrack.value;
        if (!current) return;

        const idx = this.playlist.value.indexOf(current);
        if (idx >= 0 && idx < this.playlist.value.length - 1) {
            this.playTrack(this.playlist.value[idx + 1]);
        } else {
            // Loop to start
            this.playTrack(this.playlist.value[0]);
        }
    }

    prevTrack() {
        const current = this.currentTrack.value;
        if (!current) return;

        const idx = this.playlist.value.indexOf(current);
        if (idx > 0) {
            this.playTrack(this.playlist.value[idx - 1]);
        }
    }
}
