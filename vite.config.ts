import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: './src',
    base: './', // Relative paths for Capacitor
    publicDir: '../public',
    build: {
        outDir: '../www',
        emptyOutDir: true,
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'],
        include: ['tests/**/*.test.{ts,js}', 'src/tests/**/*.test.{ts,js}'],
    },
});
