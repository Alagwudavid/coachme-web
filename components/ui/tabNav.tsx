'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TabNavItem {
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    image?: string;
    isActivated?: boolean;
}

export interface TabNavProps {
    tabs: TabNavItem[];
    moreItems?: TabNavItem[];
    className?: string;
}

export function TabNav({ tabs, moreItems, className }: TabNavProps) {
    const pathname = usePathname();
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const moreButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const isMoreItemActive = moreItems?.some(item => pathname === item.href);

    // Update indicator position based on active tab
    useEffect(() => {
        const activeIndex = tabs.findIndex(tab => tab.href === pathname);
        if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
            const activeTab = tabRefs.current[activeIndex];
            if (activeTab) {
                const navElement = activeTab.parentElement;
                if (navElement) {
                    const navRect = navElement.getBoundingClientRect();
                    const tabRect = activeTab.getBoundingClientRect();
                    setIndicatorStyle({
                        left: tabRect.left - navRect.left,
                        width: tabRect.width
                    });
                }
            }
        }
    }, [pathname, tabs]);

    // Calculate dropdown position
    const calculatePosition = () => {
        if (moreButtonRef.current) {
            const buttonRect = moreButtonRef.current.getBoundingClientRect();
            setPosition({
                top: buttonRect.bottom + 4,
                left: buttonRect.left
            });
        }
    };

    // Handle clicks outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                moreButtonRef.current &&
                !moreButtonRef.current.contains(event.target as Node)
            ) {
                setShowMoreMenu(false);
            }
        };

        if (showMoreMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMoreMenu]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowMoreMenu(false);
            }
        };

        if (showMoreMenu) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [showMoreMenu]);

    const handleMoreClick = () => {
        if (!showMoreMenu) {
            calculatePosition();
        }
        setShowMoreMenu(!showMoreMenu);
    };

    return (
        <div className={cn('sticky top-0 bg-background z-50', className)}>
            <div className="">
                <nav className="-mb-px flex space-x-4 overflow-x-auto hide-scrollbar relative" aria-label="Tabs">
                    {tabs.map((tab, index) => {
                        const isActive = pathname === tab.href || tab.isActivated;
                        return (
                            <Link
                                key={tab.id}
                                ref={(el) => {
                                    tabRefs.current[index] = el;
                                }}
                                href={tab.href  || "#"}
                                className={cn(
                                    'whitespace-nowrap py-3 text-base transition-colors flex items-center gap-2 relative',
                                    isActive
                                        ? 'text-foreground font-semibold border-primary border-b-3'
                                        : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                {tab.icon && <span>{tab.icon}</span>}
                                {tab.label}
                            </Link>
                        );
                    })}

                    {/* Animated Indicator */}
                    <span
                        className="absolute bottom-0 h-1 rounded-lg bg-primary transition-all duration-300 ease-out"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`
                        }}
                    />

                    {/* More Button */}
                    {moreItems && moreItems.length > 0 && (
                        <>
                            <button
                                ref={moreButtonRef}
                                type="button"
                                onClick={handleMoreClick}
                                className={cn(
                                    'whitespace-nowrap py-3 px-2 font-bold text-base transition-colors flex items-center gap-1',
                                    isMoreItemActive || showMoreMenu
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                More
                                <ChevronDown className={cn('w-4 h-4 transition-transform', showMoreMenu && 'rotate-180')} />
                            </button>

                            {/* Dropdown Menu Portal */}
                            {showMoreMenu && createPortal(
                                <div
                                    ref={dropdownRef}
                                    className="fixed w-48 bg-background rounded-lg shadow-xl z-[9999] py-1"
                                    style={{
                                        top: `${position.top}px`,
                                        left: `${position.left}px`,
                                    }}
                                >
                                    {moreItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                onClick={() => setShowMoreMenu(false)}
                                                className={cn(
                                                    'block px-4 py-3 text-sm hover:bg-muted transition-colors',
                                                    isActive ? 'bg-primary/10 text-primary border' : 'text-foreground'
                                                )}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.label}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>,
                                document.body
                            )}
                        </>
                    )}
                </nav>
            </div>
        </div>
    );
}
