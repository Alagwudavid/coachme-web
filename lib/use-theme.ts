'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect } from 'react';

export function useTheme() {
    const { theme, setTheme, systemTheme } = useNextTheme();

    useEffect(() => {
        // Save theme preference to cookie whenever it changes
        if (theme) {
            document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
        }
    }, [theme]);

    return {
        theme,
        setTheme,
        systemTheme,
        resolvedTheme: theme === 'system' ? systemTheme : theme,
    };
}
