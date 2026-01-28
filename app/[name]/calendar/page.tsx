'use client';

import { ChevronDown, ChevronLeft, ChevronRight, Filter, Plus, Tags, BookOpen, Calendar as CalendarIcon, Clock, X, Edit, Trash2, Search, Settings, RefreshCw, List } from 'lucide-react';
import { useState } from 'react';

interface CalendarEvent {
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    date: Date;
    color: string;
    bgColor: string;
    type: string;
    attendees?: string[];
    approvedBy?: string[];
    waitingResponse?: string[];
    meetingLink?: string;
}

const mockEvents: CalendarEvent[] = [
    {
        id: '1',
        title: "New Year's Eve at Friends House",
        startTime: '10:00',
        endTime: '14:00',
        date: new Date(2028, 2, 1), // March 1, 2028 (month is 0-indexed)
        color: 'text-green-800',
        bgColor: 'bg-green-400',
        type: 'Event',
    },
    {
        id: '2',
        title: 'Eat with Senpai',
        startTime: '11:00',
        endTime: '13:00',
        date: new Date(2028, 2, 2),
        color: 'text-green-800',
        bgColor: 'bg-green-400',
        type: 'Event',
    },
    {
        id: '3',
        title: 'Graduation Day',
        startTime: '09:00',
        endTime: '17:00',
        date: new Date(2028, 2, 3),
        color: 'text-purple-800',
        bgColor: 'bg-purple-500',
        type: 'Event',
    },
    {
        id: '4',
        title: "Friend's Wedding",
        startTime: '14:00',
        endTime: '22:00',
        date: new Date(2028, 2, 5),
        color: 'text-yellow-800',
        bgColor: 'bg-yellow-400',
        type: 'Event',
    },
    {
        id: '5',
        title: 'Job Hunting Time',
        startTime: '09:00',
        endTime: '17:00',
        date: new Date(2028, 2, 6),
        color: 'text-blue-800',
        bgColor: 'bg-blue-500',
        type: 'Task',
    },
    {
        id: '6',
        title: 'Job Interview For SaaS Company',
        startTime: '10:00',
        endTime: '12:00',
        date: new Date(2028, 2, 14),
        color: 'text-orange-800',
        bgColor: 'bg-orange-400',
        type: 'Meeting',
    },
    {
        id: '7',
        title: 'Sleep',
        startTime: '22:00',
        endTime: '06:00',
        date: new Date(2028, 2, 15),
        color: 'text-purple-800',
        bgColor: 'bg-purple-500',
        type: 'Personal',
    },
    {
        id: '8',
        title: 'Jogging to prepare for marathon',
        startTime: '06:00',
        endTime: '08:00',
        date: new Date(2028, 2, 17),
        color: 'text-green-800',
        bgColor: 'bg-green-400',
        type: 'Exercise',
    },
    {
        id: '9',
        title: 'I have no idea',
        startTime: '14:00',
        endTime: '16:00',
        date: new Date(2028, 2, 18),
        color: 'text-purple-800',
        bgColor: 'bg-purple-500',
        type: 'Event',
    },
    {
        id: '10',
        title: 'Eat',
        startTime: '12:00',
        endTime: '13:00',
        date: new Date(2028, 2, 22),
        color: 'text-purple-800',
        bgColor: 'bg-purple-500',
        type: 'Personal',
    },
    {
        id: '11',
        title: 'Sleep',
        startTime: '22:00',
        endTime: '06:00',
        date: new Date(2028, 2, 22),
        color: 'text-purple-300',
        bgColor: 'bg-purple-300',
        type: 'Personal',
    },
    {
        id: '12',
        title: 'Play',
        startTime: '15:00',
        endTime: '18:00',
        date: new Date(2028, 2, 22),
        color: 'text-orange-800',
        bgColor: 'bg-orange-400',
        type: 'Leisure',
    },
    {
        id: '13',
        title: 'Gaming with friends',
        startTime: '19:00',
        endTime: '23:00',
        date: new Date(2028, 2, 30),
        color: 'text-purple-800',
        bgColor: 'bg-purple-500',
        type: 'Social',
    },
    {
        id: '14',
        title: 'Gacha Games Event',
        startTime: '08:00',
        endTime: '12:00',
        date: new Date(2028, 2, 31),
        color: 'text-green-800',
        bgColor: 'bg-green-400',
        type: 'Gaming',
    },
    {
        id: '15',
        title: 'Eat with senpai',
        startTime: '12:00',
        endTime: '14:00',
        date: new Date(2028, 2, 31),
        color: 'text-orange-800',
        bgColor: 'bg-orange-400',
        type: 'Social',
    },
    // Day view events for Sept 2, 2028
    {
        id: '16',
        title: 'Writing Event',
        startTime: '07:00',
        endTime: '08:00',
        date: new Date(2028, 8, 2),
        color: 'text-purple-800',
        bgColor: 'bg-purple-500',
        type: 'Work',
    },
    {
        id: '17',
        title: 'Enjoy Coffee',
        startTime: '10:00',
        endTime: '10:30',
        date: new Date(2028, 8, 2),
        color: 'text-orange-800',
        bgColor: 'bg-orange-400',
        type: 'Break',
    },
    {
        id: '18',
        title: 'Climb Mt. Fuji',
        startTime: '11:00',
        endTime: '12:00',
        date: new Date(2028, 8, 2),
        color: 'text-orange-800',
        bgColor: 'bg-orange-400',
        type: 'Exercise',
    },
    {
        id: '19',
        title: 'Learn Computer Science',
        startTime: '13:00',
        endTime: '14:00',
        date: new Date(2028, 8, 2),
        color: 'text-green-800',
        bgColor: 'bg-green-400',
        type: 'Education',
    },
    {
        id: '20',
        title: 'Write SaaS Webapp',
        startTime: '17:00',
        endTime: '18:00',
        date: new Date(2028, 8, 2),
        color: 'text-pink-800',
        bgColor: 'bg-pink-400',
        type: 'Work',
    },
];

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

type ViewMode = 'month' | 'week' | 'day';
type DisplayMode = 'calendar' | 'events';

function CalendarPage() {
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date(2028, 2, 1)); // March 2028
    const [viewMode, setViewMode] = useState<ViewMode>('month');
    const [displayMode, setDisplayMode] = useState<DisplayMode>('calendar');

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek, firstDay, lastDay };
    };

    const getEventsForDate = (date: Date) => {
        return mockEvents.filter(event =>
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getFullYear() === date.getFullYear()
        );
    };

    const getEventPosition = (startTime: string) => {
        const [hour, minute] = startTime.split(':').map(Number);
        const totalMinutes = hour * 60 + minute;
        return (totalMinutes / 60) * 60; // 60px per hour
    };

    const getEventHeight = (startTime: string, endTime: string) => {
        const parseTime = (time: string) => {
            const [hour, minute] = time.split(':').map(Number);
            return hour * 60 + minute;
        };
        const duration = parseTime(endTime) - parseTime(startTime);
        return Math.max((duration / 60) * 60, 40); // 60px per hour, minimum 40px
    };

    const formatMonthYear = (date: Date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const formatDateForDay = (date: Date) => {
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    const navigateMonth = (direction: 'prev' | 'next') => {
        const newDate = new Date(currentDate);
        if (direction === 'prev') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setMonth(newDate.getMonth() + 1);
        }
        setCurrentDate(newDate);
    };

    const navigateDay = (direction: 'prev' | 'next') => {
        const newDate = new Date(currentDate);
        if (direction === 'prev') {
            newDate.setDate(newDate.getDate() - 1);
        } else {
            newDate.setDate(newDate.getDate() + 1);
        }
        setCurrentDate(newDate);
    };

    const renderMonthView = () => {
        const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
        const days = [];
        const weeks = [];

        // Add empty cells for days before the month starts
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(
                <div key={`empty-${i}`} className="min-h-24 lg:min-h-32 bg-accent border border-border"></div>
            );
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const events = getEventsForDate(date);
            const isToday = date.toDateString() === new Date().toDateString();

            days.push(
                <div
                    key={day}
                    className="min-h-24 lg:min-h-32 bg-card border border-border p-2 hover:bg-accent transition-colors cursor-pointer overflow-hidden"
                    onClick={() => {
                        setCurrentDate(date);
                        setViewMode('day');
                    }}
                >
                    <div className={`text-sm lg:text-base font-semibold mb-1 ${isToday ? 'text-primary' : 'text-foreground'}`}>
                        {day}
                    </div>
                    <div className="space-y-1">
                        {events.slice(0, 3).map((event) => (
                            <div
                                key={event.id}
                                className={`${event.bgColor} ${event.color} px-2 py-1 rounded text-xs font-medium truncate`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedEvent(event);
                                }}
                            >
                                {event.title}
                            </div>
                        ))}
                        {events.length > 3 && (
                            <div className="text-xs text-muted-foreground px-2">
                                +{events.length - 3} more
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return days;
    };

    const getWeekDays = (date: Date) => {
        const week = [];
        const curr = new Date(date);
        const first = curr.getDate() - curr.getDay(); // First day is Sunday

        for (let i = 0; i < 7; i++) {
            const day = new Date(curr.setDate(first + i));
            week.push(new Date(day));
        }
        return week;
    };

    const navigateWeek = (direction: 'prev' | 'next') => {
        const newDate = new Date(currentDate);
        if (direction === 'prev') {
            newDate.setDate(newDate.getDate() - 7);
        } else {
            newDate.setDate(newDate.getDate() + 7);
        }
        setCurrentDate(newDate);
    };

    const renderWeekView = () => {
        const weekDays = getWeekDays(currentDate);
        const timeSlots = Array.from({ length: 24 }, (_, i) => i);

        return (
            <div className="bg-card rounded-xl border border-border overflow-x-auto">
                {/* Day headers */}
                <div className="grid grid-cols-8 border-b border-border min-w-[800px]">
                    <div className="p-3 lg:p-4 bg-accent"></div>
                    {weekDays.map((day, index) => {
                        const isToday = day.toDateString() === new Date().toDateString();
                        return (
                            <div key={index} className="p-3 lg:p-4 text-center border-l border-border bg-accent">
                                <div className={`text-xs lg:text-sm font-medium ${isToday ? 'text-primary' : 'text-muted-foreground'}`}>
                                    {day.toLocaleDateString('en-US', { weekday: 'short' })}
                                </div>
                                <div className={`text-lg lg:text-xl font-bold mt-1 ${isToday ? 'text-primary' : 'text-foreground'}`}>
                                    {day.getDate()}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Time slots with events */}
                <div className="grid grid-cols-8 relative min-w-[800px]">
                    {/* Time labels */}
                    <div className="bg-accent">
                        {timeSlots.map((hour) => (
                            <div
                                key={hour}
                                className="h-16 lg:h-20 border-b border-border p-2 text-xs text-muted-foreground"
                            >
                                {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                            </div>
                        ))}
                    </div>

                    {/* Day columns */}
                    {weekDays.map((day, dayIndex) => (
                        <div key={dayIndex} className="border-l border-border relative">
                            {timeSlots.map((hour) => (
                                <div
                                    key={`${dayIndex}-${hour}`}
                                    className="h-16 lg:h-20 border-b border-border hover:bg-accent cursor-pointer"
                                ></div>
                            ))}

                            {/* Events for this day */}
                            <div className="absolute inset-0 pointer-events-none">
                                {getEventsForDate(day).map((event) => {
                                    const top = getEventPosition(event.startTime);
                                    const height = getEventHeight(event.startTime, event.endTime);

                                    return (
                                        <div
                                            key={event.id}
                                            className={`absolute left-1 right-1 ${event.bgColor} ${event.color} rounded-lg p-2 cursor-pointer pointer-events-auto hover:shadow-lg transition-shadow`}
                                            style={{
                                                top: `${top}px`,
                                                height: `${height}px`,
                                            }}
                                            onClick={() => setSelectedEvent(event)}
                                        >
                                            <p className="text-xs font-semibold line-clamp-1">{event.title}</p>
                                            <p className="text-xs opacity-80">{event.startTime} - {event.endTime}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderDayView = () => {
        const hours = Array.from({ length: 24 }, (_, i) => i);
        const events = getEventsForDate(currentDate);

        return (
            <div className="bg-card rounded-lg border border-border overflow-hidden">
                {/* Time zone label */}
                <div className="px-4 py-2 bg-accent border-b border-border text-xs text-muted-foreground">
                    GMT-5
                </div>

                {/* Time slots */}
                <div className="relative">
                    {hours.map((hour) => (
                        <div key={hour} className="flex border-b border-border">
                            <div className="w-16 lg:w-20 flex-shrink-0 p-2 text-xs text-muted-foreground bg-accent">
                                {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                            </div>
                            <div className="flex-1 h-16 relative"></div>
                        </div>
                    ))}

                    {/* Events overlay */}
                    <div className="absolute inset-0 left-16 lg:left-20 pointer-events-none">
                        {events.map((event) => {
                            const top = getEventPosition(event.startTime);
                            const height = getEventHeight(event.startTime, event.endTime);

                            return (
                                <div
                                    key={event.id}
                                    className={`absolute left-2 right-2 ${event.bgColor} ${event.color} rounded-lg p-3 cursor-pointer pointer-events-auto hover:shadow-lg transition-all`}
                                    style={{
                                        top: `${top}px`,
                                        height: `${height}px`,
                                    }}
                                    onClick={() => setSelectedEvent(event)}
                                >
                                    <p className="font-semibold text-sm truncate">{event.title}</p>
                                    <p className="text-xs mt-1">
                                        {event.startTime} - {event.endTime}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-7xl mx-auto p-3 lg:p-6">
                {/* Header with controls */}
                <div className="mb-4 lg:mb-6 flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4">
                    {/* Left side - View mode toggle + icons */}
                    <div className="flex items-center gap-2">                        {/* Calendar/Events Toggle */}
                        <div className="flex items-center gap-0 bg-card rounded-lg border border-border overflow-hidden">
                            <button
                                onClick={() => setViewMode('day')}
                                className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors ${viewMode === 'day'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent'
                                    }`}
                            >
                                Day
                            </button>
                            <button
                                onClick={() => setViewMode('week')}
                                className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors ${viewMode === 'week'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent'
                                    }`}
                            >
                                Week
                            </button>
                            <button
                                onClick={() => setViewMode('month')}
                                className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors ${viewMode === 'month'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent'
                                    }`}
                            >
                                Month
                            </button>
                        </div>
                        <button className="p-2 bg-card border border-border rounded-lg hover:bg-accent">
                            {/* <GoogleIcon /> */}
                            <RefreshCw className="w-5 h-5 text-muted-foreground" />
                        </button>
                        <button className="p-2 bg-card border border-border rounded-lg hover:bg-accent">
                            <Settings className="w-5 h-5 text-muted-foreground" />
                        </button>
                    </div>

                    {/* Center - Date display */}
                    <div className="flex-1 flex items-center justify-center">
                        <h1 className="text-lg lg:text-xl font-semibold text-foreground">
                            {viewMode === 'month' ? formatMonthYear(currentDate) : formatDateForDay(currentDate)}
                        </h1>
                    </div>

                    {/* Right side - Today + Navigation */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentDate(new Date())}
                            className={`px-4 py-1.5 border rounded-lg transition-colors ${currentDate.toDateString() === new Date().toDateString()
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-card border-border hover:bg-accent'
                                }`}
                        >
                            <span className={`text-sm font-medium ${currentDate.toDateString() === new Date().toDateString()
                                ? 'text-primary-foreground'
                                : 'text-foreground'
                                }`}>Today</span>
                        </button>
                        <button
                            onClick={() => {
                                if (viewMode === 'day') navigateDay('prev');
                                else if (viewMode === 'week') navigateWeek('prev');
                                else navigateMonth('prev');
                            }}
                            className="p-2 bg-card border border-border rounded-lg hover:bg-accent"
                        >
                            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                        </button>
                        <button
                            onClick={() => {
                                if (viewMode === 'day') navigateDay('next');
                                else if (viewMode === 'week') navigateWeek('next');
                                else navigateMonth('next');
                            }}
                            className="p-2 bg-card border border-border rounded-lg hover:bg-accent"
                        >
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </button>
                        <div className="flex items-center gap-0 bg-card rounded-lg border border-border overflow-hidden mr-2">
                            <button
                                onClick={() => setDisplayMode('calendar')}
                                className={`p-2 transition-colors ${displayMode === 'calendar'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent'
                                    }`}
                                title="Calendar view"
                            >
                                <CalendarIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setDisplayMode('events')}
                                className={`p-2 transition-colors ${displayMode === 'events'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent'
                                    }`}
                                title="Events list"
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Calendar Grid - Month View */}
                {viewMode === 'month' && (
                    <div className="bg-card rounded-xl border border-border overflow-hidden">
                        {/* Desktop day headers */}
                        <div className="hidden lg:grid grid-cols-7 border-b border-border">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="p-3 text-center bg-accent border-r border-border last:border-r-0">
                                    <span className="text-sm font-semibold text-foreground">{day}</span>
                                </div>
                            ))}
                        </div>

                        {/* Mobile day headers */}
                        <div className="grid lg:hidden grid-cols-7 border-b border-border">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                <div key={`${day}-${index}`} className="p-2 text-center bg-accent border-r border-border last:border-r-0">
                                    <span className="text-xs font-semibold text-foreground">{day}</span>
                                </div>
                            ))}
                        </div>

                        {/* Calendar days */}
                        <div className="grid grid-cols-7">
                            {renderMonthView()}
                        </div>
                    </div>
                )}

                {/* Day View */}
                {viewMode === 'day' && (
                    <div className="bg-card rounded-xl overflow-hidden">
                        {renderDayView()}
                    </div>
                )}

                {/* Week View */}
                {viewMode === 'week' && renderWeekView()}

                {/* Events List View */}
                {displayMode === 'events' && (
                    <div className="bg-card rounded-xl border border-border overflow-hidden">
                        <div className="p-4 lg:p-6">
                            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Events</h1>
                            <div className="space-y-3">
                                {mockEvents
                                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                                    .map((event) => {
                                        const isToday = event.date.toDateString() === new Date().toDateString();
                                        const monthShort = event.date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();

                                        return (
                                            <div
                                                key={event.id}
                                                className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer bg-card"
                                                onClick={() => setSelectedEvent(event)}
                                            >
                                                {/* Date box - styled like the reference image */}
                                                <div className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-xl flex flex-col items-center justify-center ${isToday ? 'bg-primary/10' : 'bg-accent'
                                                    } border border-border`}>
                                                    <div className={`text-[10px] lg:text-xs font-semibold ${isToday ? 'text-primary' : 'text-muted-foreground'
                                                        }`}>
                                                        {monthShort}
                                                    </div>
                                                    <div className={`text-xl lg:text-2xl font-bold leading-none my-1 ${isToday ? 'text-primary' : 'text-foreground'
                                                        }`}>
                                                        {event.date.getDate()}
                                                    </div>
                                                    <div className={`text-[10px] lg:text-xs font-medium ${isToday ? 'text-primary' : 'text-muted-foreground'
                                                        }`}>
                                                        {event.startTime}
                                                    </div>
                                                </div>

                                                {/* Event details */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="text-base lg:text-lg font-bold text-foreground truncate">{event.title}</h3>
                                                    </div>
                                                    <p className="text-xs lg:text-sm text-muted-foreground mb-1 line-clamp-1">
                                                        {event.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
                                                        <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                                                        <span>{event.startTime} - {event.endTime}</span>
                                                        <span className="hidden sm:inline">•</span>
                                                        <span className="hidden sm:inline">{event.type}</span>
                                                    </div>
                                                </div>

                                                {/* Right side - ID badge and profile icon */}
                                                <div className="flex-shrink-0 flex flex-col items-end gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs font-mono text-muted-foreground bg-accent px-2 py-1 rounded border border-border">
                                                            #{event.id.padStart(4, '0')}
                                                        </span>
                                                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs lg:text-sm shadow-md">
                                                            {event.title.substring(0, 2).toUpperCase()}
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="hidden lg:flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent rounded-lg border border-border transition-colors"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            // View recording logic
                                                        }}
                                                    >
                                                        <span>View Recording</span>
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Event Detail Floating Card */}
            {selectedEvent && (
                <>
                    <div
                        className="fixed inset-0 bg-black/20 z-40"
                        onClick={() => setSelectedEvent(null)}
                    />
                    <div className="fixed bottom-6 right-6 w-full max-w-sm lg:max-w-md bg-card border border-border rounded-2xl shadow-2xl z-50 p-4 lg:p-6 min-h-page overflow-y-auto mx-6 lg:mx-0">
                        <div className="w-full h-40 rounded-2xl bg-muted mb-4"></div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <div className={`w-8 h-8 flex-shrink-0 ${selectedEvent.bgColor} rounded-lg`}></div>
                                <h3 className="font-semibold text-foreground text-sm lg:text-base truncate">{selectedEvent.title}</h3>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                                    <Edit className="w-4 h-4 text-muted-foreground" />
                                </button>
                                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                                    <Trash2 className="w-4 h-4 text-muted-foreground" />
                                </button>
                                <button
                                    className="p-2 hover:bg-accent rounded-lg transition-colors"
                                    onClick={() => setSelectedEvent(null)}
                                >
                                    <X className="w-4 h-4 text-muted-foreground" />
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    {selectedEvent.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                </p>
                                <h2 className="text-xl font-bold text-foreground mt-1">{selectedEvent.title}</h2>
                                <p className="text-sm text-muted-foreground">{selectedEvent.type}</p>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span>{selectedEvent.startTime} - {selectedEvent.endTime}</span>
                            </div>

                            {selectedEvent.approvedBy && (
                                <div>
                                    <p className="text-sm font-medium text-foreground mb-2">Approved by:</p>
                                    <div className="flex items-center gap-2">
                                        {selectedEvent.approvedBy.map((person, index) => (
                                            <div key={index} className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-xs font-semibold">
                                                {person.substring(0, 2)}
                                            </div>
                                        ))}
                                        {selectedEvent.attendees && (
                                            <>
                                                {selectedEvent.attendees.slice(0, 3).map((person, index) => (
                                                    <div key={index} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                                                        {person.substring(0, 2)}
                                                    </div>
                                                ))}
                                                <button className="text-sm text-blue-600 hover:underline ml-2">Share link</button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {selectedEvent.waitingResponse && (
                                <div>
                                    <p className="text-sm font-medium text-foreground mb-2">Waiting for a response:</p>
                                    <div className="flex items-center gap-2">
                                        {selectedEvent.waitingResponse.slice(0, 2).map((person, index) => (
                                            <div key={index} className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-xs">
                                                {person.substring(0, 2)}
                                            </div>
                                        ))}
                                        <span className="text-sm text-muted-foreground">{selectedEvent.waitingResponse[2]}</span>
                                    </div>
                                </div>
                            )}

                            {selectedEvent.meetingLink && (
                                <button className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
                                    Join to Meeting
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )
            }
        </div >
    );
}

export default CalendarPage;
