"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import Tooltip from "@/components/ui/tooltip";

interface ContributionDay {
    date: Date;
    count: number;
    isActive: boolean;
}

interface MonthData {
    month: string;
    monthIndex: number;
    days: (ContributionDay | null)[];
}

interface ContributionTrackProps {
    data?: ContributionDay[];
    joinedDate?: Date;
}

export default function ContributionTrack({ joinedDate = new Date('2022-11-01') }: ContributionTrackProps) {
    const currentYear = new Date().getFullYear();
    const joinedYear = joinedDate.getFullYear();
    const availableYears = Array.from(
        { length: currentYear - joinedYear + 1 },
        (_, i) => joinedYear + i
    ).reverse();

    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const contributionGrid = useMemo(() => {
        const today = new Date();
        const monthLabels: { month: string; weekIndex: number }[] = [];
        const weeksPerMonth = 5;
        const totalWeeks = 12 * weeksPerMonth; // 60 weeks total

        // Create month labels (12 months, each spanning 5 weeks)
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let i = 0; i < 12; i++) {
            monthLabels.push({
                month: monthNames[i],
                weekIndex: i * weeksPerMonth
            });
        }

        // Generate contribution data for the fixed 7×5×12 grid
        const weeks: (ContributionDay | null)[][] = [];
        const startDate = new Date(selectedYear, 0, 1); // Start from January 1st of selected year

        for (let weekIndex = 0; weekIndex < totalWeeks; weekIndex++) {
            const week: (ContributionDay | null)[] = [];

            for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
                const dayOffset = weekIndex * 7 + dayIndex;
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + dayOffset);

                // Check if date is in the future
                const isFuture = date > today;

                if (isFuture) {
                    week.push(null);
                } else {
                    const hasContribution = Math.random() > 0.3;
                    const count = hasContribution ? Math.floor(Math.random() * 15) + 1 : 0;

                    week.push({
                        date,
                        count,
                        isActive: hasContribution
                    });
                }
            }

            weeks.push(week);
        }

        return { weeks, monthLabels };
    }, [selectedYear]);

    const handleMouseEnter = (day: ContributionDay | null, event: React.MouseEvent) => {
        if (day) {
            setHoveredDay(day);
            setTooltipPosition({ x: event.clientX, y: event.clientY });
        }
    };

    const handleMouseLeave = () => {
        setHoveredDay(null);
    };

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="w-full bg-background rounded-2xl border p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">My Contribution / Streak</h2>
                <div className="relative">
                    <button
                        onClick={() => setShowYearDropdown(!showYearDropdown)}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                    >
                        <span>{selectedYear}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    {showYearDropdown && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setShowYearDropdown(false)}
                            />
                            <div className="absolute right-0 mt-2 w-32 bg-background rounded-lg shadow-lg border border-border overflow-hidden z-20">
                                {availableYears.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => {
                                            setSelectedYear(year);
                                            setShowYearDropdown(false);
                                        }}
                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${selectedYear === year ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto hide-scrollbar">
                <div className="inline-flex flex-col gap-2">
                    {/* Month labels */}
                    <div className="flex gap-1 mb-1 pl-12">
                        {contributionGrid.monthLabels.map((label, index) => {
                            const nextLabel = contributionGrid.monthLabels[index + 1];
                            const weekSpan = nextLabel
                                ? nextLabel.weekIndex - label.weekIndex
                                : contributionGrid.weeks.length - label.weekIndex;
                            const width = weekSpan * 14; // weeks * (12px box + 2px gap)

                            return (
                                <div
                                    key={`label-${index}`}
                                    className="text-xs text-muted-foreground font-medium"
                                    style={{ width: `${width}px`, minWidth: `${width}px` }}
                                >
                                    {label.month}
                                </div>
                            );
                        })}
                    </div>

                    {/* Contribution grid */}
                    <div className="flex gap-3">
                        {/* Day labels - Show all days Mon to Sun */}
                        <div className="flex flex-col gap-1 justify-around text-[10px] text-muted-foreground">
                            {weekDays.map((day) => (
                                <div key={day} className="h-3 flex items-center w-8">
                                    <span>{day}</span>
                                </div>
                            ))}
                        </div>

                        {/* Continuous week layout */}
                        <div className="flex gap-1">
                            {contributionGrid.weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {/* 7 days per week */}
                                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                                        const day = week[dayIndex];

                                        return (
                                            <div
                                                key={dayIndex}
                                                onMouseEnter={(e) => handleMouseEnter(day, e)}
                                                onMouseLeave={handleMouseLeave}
                                                className={`w-4 h-4 rounded transition-all ${day
                                                    ? day.isActive
                                                        ? 'bg-primary hover:ring-2 hover:ring-primary/50 cursor-pointer'
                                                        : 'bg-muted hover:ring-2 hover:ring-muted-foreground/30 cursor-pointer'
                                                    : 'bg-transparent'
                                                    }`}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                <span>Inactive</span>
                <div className="flex gap-1">
                    <div className="w-4 h-4 rounded bg-muted" />
                    <div className="w-4 h-4 rounded bg-primary" />
                </div>
                <span>Active</span>
            </div>

            {/* Custom Tooltip */}
            {hoveredDay && typeof window !== 'undefined' && (
                <div
                    className="fixed z-[9999] pointer-events-none"
                    style={{
                        top: `${tooltipPosition.y - 50}px`,
                        left: `${tooltipPosition.x}px`,
                        transform: 'translateX(-50%)',
                    }}
                >
                    <div className="bg-popover text-popover-foreground text-xs font-medium px-3 py-2 rounded-lg shadow-lg border border-border whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
                        <div className="font-semibold">
                            {hoveredDay.date.toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                        <div className="text-muted-foreground mt-0.5">
                            {hoveredDay.count} {hoveredDay.count === 1 ? 'contribution' : 'contributions'}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
