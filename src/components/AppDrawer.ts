import { AppService } from '../services/AppService';
import { effect } from '@preact/signals-core';

export class AppDrawer {
    element: HTMLDivElement;

    constructor(private appService: AppService) {
        this.element = document.createElement('div');
        this.element.className = 'grid grid-cols-4 gap-4 p-4 h-full overflow-y-auto content-start';

        effect(() => {
            const apps = this.appService.apps.value;
            this.element.innerHTML = `
                <div class="absolute -left-20 top-0 w-96 h-96 bg-neon-magenta/5 blur-[120px] rounded-full"></div>
                <div class="max-w-6xl mx-auto w-full relative z-10">
                    <div class="flex justify-between items-end mb-12">
                         <div>
                            <h2 class="text-5xl font-bold text-white tracking-tighter italic">Application <span class="text-neon-magenta">Nexus</span></h2>
                            <p class="text-white/30 text-[10px] uppercase tracking-[0.5em] mt-2 font-bold">Native & Cloud Services</p>
                         </div>
                         <div class="glass-panel px-6 py-2 rounded-full border-white/10 text-[10px] font-black text-white/50 uppercase tracking-widest">
                            ${apps.length} Units Available
                         </div>
                    </div>

                    <div class="grid grid-cols-4 md:grid-cols-6 gap-8">
                        ${apps.map((app: any, i: number) => `
                            <button class="flex flex-col items-center gap-4 group transition-all duration-500 animate-float" style="animation-delay: -${i * 0.7}s" data-package="${app.package}">
                                <div class="w-24 h-24 rounded-4xl bg-gradient-to-tr from-white/10 to-white/5 p-0.5 group-hover:from-neon-magenta group-hover:to-neon-cyan group-hover:shadow-[0_0_30px_rgba(255,0,85,0.3)] transition-all duration-500">
                                    <div class="w-full h-full bg-bg-dark rounded-[1.8rem] flex items-center justify-center text-4xl group-hover:scale-95 transition-transform duration-500">
                                        ${app.icon || '📱'}
                                    </div>
                                </div>
                                <span class="text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-500">${app.name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;

            // Attach event listeners after innerHTML is set
            this.element.querySelectorAll('button[data-package]').forEach((button: any) => {
                const appPackage = button.getAttribute('data-package');
                if (appPackage) {
                    button.onclick = () => this.appService.launchApp(appPackage);
                }
            });
        });
    }
}
