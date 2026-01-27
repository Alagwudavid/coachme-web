'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
    maxWidth?: string;
    placeholder?: string;
    showShortcut?: boolean;
    onSearch?: (query: string) => void;
    className?: string;
}

export default function SearchBar({
    maxWidth = 'max-w-xl',
    placeholder = 'Search',
    showShortcut = true,
    onSearch,
    className = '',
}: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch?.(value);
    };

    return (
        <div className={`flex-1 ${maxWidth} ${className}`}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
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
