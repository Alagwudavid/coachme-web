'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    setSidebarOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        // Load initial state from localStorage
        const saved = localStorage.getItem('sidebarOpen');
        if (saved !== null) {
            setIsSidebarOpen(saved === 'true');
        }
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => {
            const newValue = !prev;
            localStorage.setItem('sidebarOpen', String(newValue));
            return newValue;
        });
    };

    const setSidebarOpen = (open: boolean) => {
        setIsSidebarOpen(open);
        localStorage.setItem('sidebarOpen', String(open));
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, setSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}
