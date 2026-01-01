import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: './src',
    base: './', // Relative paths for Capacitor
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
});
