"use client";

import { createContext, useContext, ReactNode } from 'react';

interface TabRouteContextType {
    coachSlug: string;
}

const TabRouteContext = createContext<TabRouteContextType | undefined>(undefined);

export function TabRouteProvider({
    children,
    coachSlug
}: {
    children: ReactNode;
    coachSlug: string;
}) {
    return (
        <TabRouteContext.Provider value={{ coachSlug }}>
            {children}
        </TabRouteContext.Provider>
    );
}

export function useTabRoute() {
    const context = useContext(TabRouteContext);
    if (context === undefined) {
        throw new Error('useTabRoute must be used within a TabRouteProvider');
    }
    return context;
}
