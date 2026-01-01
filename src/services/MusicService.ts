import { signal } from '@preact/signals-core';

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

    constructor() {
        this.audio.addEventListener('timeupdate', () => {
            this.currentTime.value = this.audio.currentTime;
        });
        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });
        this.audio.addEventListener('loadedmetadata', () => {
            this.duration.value = this.audio.duration;
        });
    }

    async scanLibrary() {
        // Mock Data for now
        // In real app: window.TwahhPlugin.scanMedia()
        this.playlist.value = [
            { id: '1', title: 'Nightcall', artist: 'Kavinsky', url: '', duration: 258 },
            { id: '2', title: 'Midnight City', artist: 'M83', url: '', duration: 243 },
            { id: '3', title: 'Resonance', artist: 'Home', url: '', duration: 212 },
        ];
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
