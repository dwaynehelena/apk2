import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MusicService } from '../services/MusicService';

describe('MusicService', () => {
    let music: MusicService;

    beforeEach(() => {
        // Mock global Audio
        global.Audio = class {
            addEventListener = vi.fn();
            removeEventListener = vi.fn();
            play = vi.fn().mockResolvedValue(undefined);
            pause = vi.fn();
            src = '';
            currentTime = 0;
            duration = 0;
        } as any;

        music = new MusicService();
    });

    it('should initialize with empty playlist', () => {
        expect(music.playlist.value).toHaveLength(0);
        expect(music.isPlaying.value).toBe(false);
    });

    it('should scan for tracks (mock)', async () => {
        await music.scanLibrary();
        expect(music.playlist.value.length).toBeGreaterThan(0);
        expect(music.playlist.value[0]).toHaveProperty('title');
    });

    it('should play a track', async () => {
        await music.scanLibrary();
        const track = music.playlist.value[0];

        music.playTrack(track);

        expect(music.currentTrack.value).toEqual(track);
        expect(music.isPlaying.value).toBe(true);
    });

    it('should toggle play/pause', async () => {
        await music.scanLibrary();
        music.playTrack(music.playlist.value[0]);

        music.togglePlay();
        expect(music.isPlaying.value).toBe(false);

        music.togglePlay();
        expect(music.isPlaying.value).toBe(true);
    });

    it('should advance to next track', async () => {
        await music.scanLibrary();
        const first = music.playlist.value[0];
        const second = music.playlist.value[1];

        music.playTrack(first);
        music.nextTrack();

        expect(music.currentTrack.value).toEqual(second);
    });
});
