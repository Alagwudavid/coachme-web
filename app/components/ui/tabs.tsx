'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
}

export interface TabsProps {
    tabs: TabItem[];
    defaultTab?: string;
    onTabChange?: (tabId: string) => void;
    className?: string;
}

export function Tabs({ tabs, defaultTab, onTabChange, className }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        onTabChange?.(tabId);
    };

    return (
        <div className={cn('w-full sticky top-14 z-10 bg-background', className)}>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 overflow-x-auto hide-scrollbar" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={cn(
                                'whitespace-nowrap py-4 pb-2 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2',
                                activeTab === tab.id
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                            )}
                        >
                            {tab.icon && <span className="w-5 h-5">{tab.icon}</span>}
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export interface TabPanelsProps {
    activeTab: string;
    children: React.ReactNode;
}

export function TabPanel({
    value,
    activeTab,
    children
}: {
    value: string;
    activeTab: string;
    children: React.ReactNode
}) {
    if (value !== activeTab) return null;
    return <div className="py-6">{children}</div>;
}
