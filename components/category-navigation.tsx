'use client'

import React, { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { courseCategories } from '@/data/course-categories'

interface CategoryNavigationProps {
    onCategoryChange?: (categoryName: string) => void
}

export default function CategoryNavigation({ onCategoryChange }: CategoryNavigationProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        checkScrollability()
        window.addEventListener('resize', checkScrollability)
        return () => window.removeEventListener('resize', checkScrollability)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            const newScrollLeft =
                direction === 'left'
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            })
        }
    }

    const [activeCategory, setActiveCategory] = useState('All')

    const handleCategoryChange = (categoryName: string) => {
        setActiveCategory(categoryName)
        if (onCategoryChange) {
            onCategoryChange(categoryName)
        }
    }

    return (
        <div className="w-full mb-4">
            <div className="relative">
                {/* Left Control */}
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${canScrollLeft ? 'hover:bg-gray-50 text-black hover:text-primary' : 'opacity-0 hidden'}`}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                {/* Right Control */}
                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${canScrollRight ? 'hover:bg-gray-50 text-black hover:text-primary' : 'opacity-0 hidden'}`}
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollability}
                    className="overflow-x-auto scrollbar-custom hide-scrollbar"
                >
                    <div className="flex gap-2 min-w-max">
                        {courseCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryChange(category.name)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors cursor-pointer min-w-fit font-medium ${activeCategory === category.name ?
                                    'bg-foreground text-background'
                                    : 'bg-muted text-foreground hover:bg-muted/70'}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
