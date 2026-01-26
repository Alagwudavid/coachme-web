'use client';

import { Metadata } from 'next';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import { TabNav } from '@/components/ui/tab-nav';
import SideMenu from './components/sidemenu';
import CommunityNavInfo from './components/community-nav-info';
import Rightbar from './components/rightbar';
import { useState, useEffect } from 'react';
import { SidebarProvider, useSidebar } from './components/sidebar-context';

const tabs = [
    { id: 'general', label: 'General', href: '/coachme/c/general' },
    { id: 'chat', label: 'Chat', href: '/coachme/c/chat' },
    { id: 'classroom', label: 'Classroom', href: '/coachme/c/classroom' },
    { id: 'calendar', label: 'Calendar', href: '/coachme/c/calendar' },
    { id: 'members', label: 'Members', href: '/coachme/c/members' },
    { id: 'leaderboards', label: 'Leaderboards', href: '/coachme/c/leaderboard' },
];

const moreItems = [
    { id: 'challenges', label: 'Challenges', href: '/coachme/c/challenges' },
    // { id: 'shop', label: 'Shop', href: '/coachme/c/shop' },
    { id: 'faq', label: 'FAQ / Moderation', href: '/coachme/c/faq' },
    { id: 'about', label: 'About', href: '/coachme/c/about' },
];

function ClassroomLayoutContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isRightbarVisible, setIsRightbarVisible] = useState(true);
    const { isSidebarOpen } = useSidebar();

    useEffect(() => {
        // Load initial state from localStorage
        const saved = localStorage.getItem('rightbarVisible');
        if (saved !== null) {
            setIsRightbarVisible(saved === 'true');
        }

        // Listen for toggle events
        const handleToggle = (e: CustomEvent) => {
            setIsRightbarVisible(e.detail.visible);
        };

        window.addEventListener('toggleRightbar', handleToggle as EventListener);
        return () => window.removeEventListener('toggleRightbar', handleToggle as EventListener);
    }, []);

    return (
        <>
            {/* Sidebar - Global fixed position */}
            <Sidebar />

            {/* Navbar - Sticky at top */}
            <Navbar />

            {/* Main layout container */}
            <div
                className={`h-[calc(100vh-3.5rem)] flex flex-col overflow-hidden transition-all duration-300 lg:${isSidebarOpen ? 'pl-64' : 'pl-20'}`}
            >
                {/* Content area - Remaining height with 3 columns */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Main Content - Flexible width with internal scroll */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar min-w-96">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function ClassroomLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <ClassroomLayoutContent>
                {children}
            </ClassroomLayoutContent>
        </SidebarProvider>
    );
}
