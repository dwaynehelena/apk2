import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MusicService, Track } from '../services/MusicService';
import { effect } from '@preact/signals-core';

describe('MusicService', () => {
    let music: MusicService;
    let hal: any;

    beforeEach(() => {
        // Mock HAL
        hal = {
            system: { demoMode: { value: false } },
            media: { isPlaying: { value: false }, nowPlaying: { value: '' } }
        };

        // Mock Capacitor
        (window as any).Capacitor = {
            isNative: true,
            Plugins: {
                TwahhPlugin: {
                    getAudioFiles: vi.fn().mockResolvedValue({
                        songs: [
                            { id: '1', title: 'Test Song 1', artist: 'Artist 1', url: 'file://1.mp3', duration: 100 },
                            { id: '2', title: 'Test Song 2', artist: 'Artist 2', url: 'file://2.mp3', duration: 200 }
                        ]
                    })
                }
            }
        };

        music = new MusicService(hal);
    });

    it('should initialize with empty playlist', () => {
        expect(music.playlist.value).toHaveLength(0);
        expect(music.isPlaying.value).toBe(false);
    });

    it('should scan for tracks (via mock native plugin)', async () => {
        await music.scanLibrary();
        expect(music.playlist.value.length).toBeGreaterThan(0);
        expect(music.playlist.value[0].title).toBe('Test Song 1');
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
