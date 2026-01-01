import { signal } from '@preact/signals-core';

export type TabId = 'dashboard' | 'apps' | 'weather' | 'settings';

export class TabManager {
    activeTab = signal<TabId>('dashboard');

    setTab(tab: TabId) {
        this.activeTab.value = tab;
    }
}
