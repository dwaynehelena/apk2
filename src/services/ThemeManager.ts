import { signal, effect } from '@preact/signals-core';

export type Theme = 'cyberpunk' | 'sport' | 'eco';

export class ThemeManager {
    currentTheme = signal<Theme>('cyberpunk');

    constructor() {
        // Apply theme when signal changes
        effect(() => {
            this.applyTheme(this.currentTheme.value);
        });
    }

    setTheme(theme: Theme) {
        this.currentTheme.value = theme;
    }

    private applyTheme(theme: Theme) {
        const root = document.documentElement;
        if (theme === 'cyberpunk') {
            root.style.setProperty('--neon-cyan', '#00f3ff');
            root.style.setProperty('--neon-magenta', '#ff0055');
            root.style.setProperty('--bg-dark', '#050505');
        } else if (theme === 'sport') {
            root.style.setProperty('--neon-cyan', '#ff3300');
            root.style.setProperty('--neon-magenta', '#ffffff');
            root.style.setProperty('--bg-dark', '#100000');
        }
    }
}
