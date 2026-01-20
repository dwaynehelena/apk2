export class FactoryCodesHelp {
    element: HTMLElement;

    constructor(onBack: () => void) {
        this.element = document.createElement('div');
        this.element.className = 'p-8 h-full overflow-y-auto animate-fade-in bg-jeep-dark';
        this.render(onBack);
    }

    render(onBack: () => void) {
        // Dynamic Greeting for Developer Code
        const now = new Date();
        const hour = now.getHours().toString().padStart(2, '0');
        const devCode = `7890${hour}`;

        this.element.innerHTML = `
            <div class="max-w-4xl mx-auto pb-12">
                <!-- Header with Back Button -->
                <div class="flex items-center gap-6 mb-8 border-b border-jeep-border pb-4">
                    <button id="btn-back-help" class="glass-btn w-12 h-12 rounded-lg border border-jeep-border flex items-center justify-center text-xl hover:bg-white/10 text-jeep-silver">←</button>
                    <div>
                        <h2 class="text-4xl font-black text-white uppercase tracking-widest">Factory <span class="text-jeep-red">Codes</span></h2>
                        <p class="text-jeep-silver text-[10px] uppercase tracking-[0.3em] font-bold">System Unlocked // Twaah/FYT</p>
                    </div>
                </div>

                <!-- 1. Master Codes Table -->
                <div class="glass-panel p-8 mb-8 border-jeep-red/20 relative overflow-hidden group">
                     <div class="absolute -right-20 -top-20 w-64 h-64 bg-jeep-red/5 blur-3xl rounded-full group-hover:bg-jeep-red/10 transition duration-700"></div>
                     
                     <div class="flex justify-between items-end mb-6">
                        <h3 class="text-white font-bold uppercase tracking-wider text-xl">Master Access Codes</h3>
                        <span class="text-jeep-red text-[10px] font-black uppercase tracking-widest bg-jeep-red/10 px-3 py-1 rounded border border-jeep-red/30">FYT Platform</span>
                     </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="border-b border-white/10 text-jeep-silver/50 text-[10px] uppercase tracking-widest">
                                    <th class="py-3 px-4">Menu Type</th>
                                    <th class="py-3 px-4">Primary Code</th>
                                    <th class="py-3 px-4">Alternatives</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm font-bold text-jeep-silver">
                                <tr class="border-b border-white/5 hover:bg-white/5 transition">
                                    <td class="py-4 px-4 text-white">Factory Settings</td>
                                    <td class="py-4 px-4 text-jeep-red font-black tracking-wider text-xl">3368</td>
                                    <td class="py-4 px-4 text-white/30">8888, 1617, 16176699</td>
                                </tr>
                                <tr class="border-b border-white/5 hover:bg-white/5 transition">
                                    <td class="py-4 px-4 text-white">Developer Options</td>
                                    <td class="py-4 px-4 text-white font-black tracking-wider">7890 + HH</td>
                                    <td class="py-4 px-4 text-white/30">123456, 000000</td>
                                </tr>
                                <tr class="border-b border-white/5 hover:bg-white/5 transition">
                                    <td class="py-4 px-4 text-white">UI / Style Change</td>
                                    <td class="py-4 px-4 text-white font-black tracking-wider">111333</td>
                                    <td class="py-4 px-4 text-white/30">8086</td>
                                </tr>
                                <tr class="border-b border-white/5 hover:bg-white/5 transition">
                                    <td class="py-4 px-4 text-white">Boot Logo</td>
                                    <td class="py-4 px-4 text-white font-mono">5678</td>
                                    <td class="py-4 px-4 text-white/30">8888, 888</td>
                                </tr>
                                <tr class="hover:bg-white/5 transition">
                                    <td class="py-4 px-4 text-white">System Reset</td>
                                    <td class="py-4 px-4 text-red-500 font-black tracking-wider">1234</td>
                                    <td class="py-4 px-4 text-white/30">7890, 225588</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 2. The Dynamic Formula -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div class="glass-panel p-6 rounded-lg border-l-4 border-jeep-grey relative overflow-hidden">
                        <h4 class="text-jeep-silver text-xs font-black uppercase tracking-widest mb-2">Current Developer Code</h4>
                        <div class="text-5xl font-black text-white tracking-tighter mb-1">${devCode}</div>
                        <p class="text-white/30 text-xs">Based on current hour (${hour}:00)</p>
                    </div>
                    <div class="glass-panel p-6 rounded-lg">
                         <h4 class="text-white text-xs font-black uppercase tracking-widest mb-3">Why Dynamic?</h4>
                         <p class="text-jeep-silver text-sm leading-relaxed font-medium">
                            The <span class="text-white font-bold">7890+HH</span> formula is a security measure by FYT to prevent accidental access to critical Android Developer Options. Access is required for advanced tools.
                         </p>
                    </div>
                </div>

                <!-- 3. Reasoning & Risk -->
                <div class="mb-8">
                     <h3 class="text-white font-bold uppercase tracking-wider text-xl mb-4 pl-4 border-l-4 border-jeep-red">Protocol & Risk</h3>
                     <div class="bg-white/5 rounded-lg p-6 text-sm text-jeep-silver leading-relaxed shadow-inner border border-white/5">
                        <p class="mb-4">
                            <span class="text-white font-bold">3368 is the Master Code.</span> It unlocks CANbus protocol changes. Essential for steering wheel controls (SWC) and factory amp integration.
                        </p>
                        <div class="text-red-300 bg-red-900/20 p-4 rounded border border-red-500/20 flex gap-4 items-start">
                             <div class="text-2xl">⚠️</div>
                             <div>
                                <strong class="text-red-400 uppercase text-xs tracking-widest block mb-1">Critical Warning</strong>
                                Incorrect settings (Panel Type/Resolution) can blacklist the screen. <strong>Proceed with caution.</strong>
                             </div>
                        </div>
                     </div>
                </div>

                <!-- 4. Action Plan -->
                <div class="glass-panel p-8 border-jeep-grey/50">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-white font-bold uppercase tracking-wider text-xl">Setup Checklist</h3>
                        <button class="glass-btn px-4 py-2 rounded text-[10px] font-black uppercase tracking-widest text-jeep-silver border-jeep-silver/20 hover:text-white">Start</button>
                    </div>
                    
                    <ul class="space-y-4">
                        <li class="flex gap-4 items-start">
                            <div class="w-6 h-6 rounded bg-jeep-red/20 text-jeep-red flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-jeep-red/30">1</div>
                            <div>
                                <h5 class="text-white font-bold text-sm uppercase">Verify Time</h5>
                                <p class="text-white/30 text-xs mt-1">Ensure system clock is accurate for dynamic code generation.</p>
                            </div>
                        </li>
                        <li class="flex gap-4 items-start">
                            <div class="w-6 h-6 rounded bg-jeep-red/20 text-jeep-red flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-jeep-red/30">2</div>
                            <div>
                                <h5 class="text-white font-bold text-sm uppercase">Enter 3368</h5>
                                <p class="text-white/30 text-xs mt-1">Go to <span class="bg-white/10 px-1 rounded text-white font-mono">Car > Factory Settings</span>.</p>
                            </div>
                        </li>
                        <li class="flex gap-4 items-start">
                            <div class="w-6 h-6 rounded bg-jeep-red/20 text-jeep-red flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-jeep-red/30">3</div>
                            <div>
                                <h5 class="text-white font-bold text-sm uppercase">Select Protocol</h5>
                                <p class="text-white/30 text-xs mt-1">Verify "CANBUS" tab matches your physical decoder box (Hiworld/SimpleSoft).</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="h-12"></div>
            </div>
        `;

        this.element.querySelector('#btn-back-help')?.addEventListener('click', onBack);
    }
}
