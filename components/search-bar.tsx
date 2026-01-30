'use client';

import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
    maxWidth?: string;
    placeholder?: string;
    showShortcut?: boolean;
    onSearch?: (query: string) => void;
}

export default function SearchBar({
    maxWidth = 'max-w-xl',
    placeholder = 'Search for products, services, creators',
    showShortcut = true,
    onSearch
}: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch?.(value);
    };

    return (
        <div className={`flex-1 ${maxWidth}`}>
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11 2q.396 0 .783.036a6 6 0 0 0-.699 1.966L11 4c-3.867 0-7 3.132-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.976l.15-.15A6.98 6.98 0 0 0 18 11l-.003-.085a6 6 0 0 0 1.966-.7a8.96 8.96 0 0 1-1.932 6.401l4.283 4.283l-1.415 1.414l-4.282-4.282A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9m5.53-.681a.507.507 0 0 1 .94 0l.254.611a4.37 4.37 0 0 0 2.25 2.326l.718.32a.53.53 0 0 1 0 .963l-.76.338a4.36 4.36 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.246-.565a4.36 4.36 0 0 0-2.22-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.37 4.37 0 0 0 2.251-2.326z"></path></svg>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={handleChange}
                    className="w-full bg-muted text-foreground pl-10 md:pr-24 py-2 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
                />
                {showShortcut && (
                    <div className="hidden md:flex absolute right-3 top-1/2 transform -translate-y-1/2 items-center gap-1">
                        <kbd className="px-2 py-1 text-xs font-semibold text-foreground bg-background rounded-lg">
                            Ctrl
                        </kbd>
                        <span className="text-muted-foreground text-xs">+</span>
                        <kbd className="px-2 py-1 text-xs font-semibold text-foreground bg-background rounded-lg">
                            K
                        </kbd>
                    </div>
                )}
            </div>
        </div>
    );
}
