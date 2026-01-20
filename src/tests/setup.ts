/**
 * Vitest Setup File
 * Mocks Capacitor native plugins for web/test environment
 */
import { vi } from 'vitest';

// Mock @capacitor/core registerPlugin to prevent "not implemented on web" errors
vi.mock('@capacitor/core', () => {
    return {
        registerPlugin: vi.fn(() => {
            // Return a mock plugin that has addListener as a no-op
            return {
                addListener: vi.fn(() => ({ remove: vi.fn() })),
                removeAllListeners: vi.fn(),
            };
        }),
        Capacitor: {
            isNativePlatform: vi.fn(() => false),
            getPlatform: vi.fn(() => 'web'),
        },
    };
});

// Global test setup
beforeAll(() => {
    // Suppress console.log/warn during tests unless debugging
    if (!process.env.DEBUG_TESTS) {
        vi.spyOn(console, 'log').mockImplementation(() => {});
        vi.spyOn(console, 'warn').mockImplementation(() => {});
    }
});

afterAll(() => {
    vi.restoreAllMocks();
});
