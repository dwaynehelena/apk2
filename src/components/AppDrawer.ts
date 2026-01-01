import { AppService } from '../services/AppService';
import { effect } from '@preact/signals-core';

export class AppDrawer {
    element: HTMLDivElement;

    constructor(private appService: AppService) {
        this.element = document.createElement('div');
        this.element.className = 'grid grid-cols-4 gap-4 p-4 h-full overflow-y-auto content-start';

        effect(() => {
            if (this.appService.isLoading.value) {
                this.element.innerHTML = '<div class="col-span-4 text-center text-neon-cyan animate-pulse">Loading Apps...</div>';
                return;
            }

            this.element.innerHTML = '';
            this.appService.apps.value.forEach(app => {
                const btn = document.createElement('button');
                btn.className = 'glass-btn flex flex-col items-center justify-center p-4 rounded-xl hover:bg-white/10 transition';
                btn.innerHTML = `
                    <div class="w-12 h-12 bg-white/20 rounded-full mb-2 flex items-center justify-center text-2xl">📱</div>
                    <span class="text-xs text-center truncate w-full">${app.name}</span>
                `;
                btn.onclick = () => this.appService.launchApp(app.package);
                this.element.appendChild(btn);
            });
        });
    }
}
