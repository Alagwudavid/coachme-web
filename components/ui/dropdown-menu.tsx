'use client';

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface DropdownMenuProps {
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
}

interface DropdownItemProps {
    icon?: ReactNode;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export function DropdownMenu({ trigger, children, className = '' }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isPositioned, setIsPositioned] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Function to calculate position
    const calculatePosition = () => {
        if (triggerRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const gap = 8;
            const dropdownWidth = 208; // w-52 = 13rem = 208px
            const dropdownHeight = 300; // estimated height

            let top = triggerRect.top;
            let left = triggerRect.right + gap;

            // Check if dropdown overflows right edge of viewport
            if (left + dropdownWidth > viewportWidth) {
                // Position to the left of trigger instead
                left = triggerRect.left - dropdownWidth - gap;

                // If still overflows left edge, align with right edge of viewport
                if (left < 0) {
                    left = viewportWidth - dropdownWidth - gap;
                }
            }

            // Check if dropdown overflows bottom of viewport
            if (top + dropdownHeight > viewportHeight) {
                // Align with bottom of viewport
                top = Math.max(gap, viewportHeight - dropdownHeight - gap);
            }

            // Ensure dropdown doesn't overflow top
            if (top < 0) {
                top = gap;
            }

            setPosition({ top, left });
            setIsPositioned(true);
        }
    };

    // Update position when dropdown becomes visible
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            // Recalculate with actual dropdown height after render
            const triggerRect = triggerRef.current?.getBoundingClientRect();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (triggerRect) {
                const gap = 8;
                const dropdownHeight = dropdownRect.height;

                let top = triggerRect.top;

                // Check if dropdown overflows bottom of viewport
                if (top + dropdownHeight > viewportHeight) {
                    // Align with bottom of viewport
                    top = Math.max(gap, viewportHeight - dropdownHeight - gap);
                }

                // Ensure dropdown doesn't overflow top
                if (top < 0) {
                    top = gap;
                }

                // Only update if position changed significantly
                if (Math.abs(position.top - top) > 5) {
                    setPosition(prev => ({ ...prev, top }));
                }
            }
        }
    }, [isOpen]);

    // Recalculate position on window resize
    useEffect(() => {
        const handleResize = () => {
            if (isOpen && triggerRef.current) {
                calculatePosition();
            }
        };

        if (isOpen) {
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleResize, true);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize, true);
        };
    }, [isOpen]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const handleTriggerClick = () => {
        if (!isOpen) {
            // Calculate position before opening
            setIsPositioned(false);
            calculatePosition();
        } else {
            setIsPositioned(false);
        }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div ref={triggerRef} onClick={handleTriggerClick}>
                {trigger}
            </div>

            {isOpen &&
                createPortal(
                    <div
                        ref={dropdownRef}
                        className={`fixed w-52 bg-background rounded-lg shadow-lg border border-border py-2 z-[9999] transition-opacity duration-200 ${isPositioned ? 'opacity-100 animate-in fade-in slide-in-from-left-2' : 'opacity-0'} ${className}`}
                        style={{
                            top: `${position.top}px`,
                            left: `${position.left}px`,
                        }}
                    >
                        {children}
                    </div>,
                    document.body
                )}
        </>
    );
}

export function DropdownItem({ icon, children, onClick, className = '' }: DropdownItemProps) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            onClick();
        }
        // Let parent components handle their own click behavior
        // Don't stop propagation to allow DropdownMenu to close if needed
    };

    return (
        <button
            className={`w-full px-4 py-2 text-left text-base text-foreground hover:bg-muted transition-colors flex items-center gap-2 cursor-pointer ${className}`}
            onClick={handleClick}
        >
            {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
            {children}
        </button>
    );
}

export function DropdownDivider() {
    return <div className="h-px bg-border my-2"></div>;
}
