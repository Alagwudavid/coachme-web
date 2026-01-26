'use client';

import { useSidebar } from './sidebar-context';

interface ResponsiveContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function ResponsiveContainer({ children, className = '' }: ResponsiveContainerProps) {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`transition-all duration-300 lg:${isSidebarOpen ? 'pl-64' : 'pl-20'} ${className}`}>
            {children}
        </div>
    );
}
