'use client';

import { Calendar as CalendarIcon, Clock, Video, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    type: 'event' | 'session';
    status: 'upcoming' | 'completed';
    location: string;
}

const mockEvents: Event[] = [
    {
        id: '1',
        title: 'Live Career Development Workshop',
        date: '2026-01-20',
        time: '3:00 PM - 5:00 PM',
        type: 'event',
        status: 'upcoming',
        location: 'Online (Zoom)'
    },
    {
        id: '2',
        title: 'Personal Career Coaching Session',
        date: '2026-01-25',
        time: '2:00 PM - 3:00 PM',
        type: 'session',
        status: 'upcoming',
        location: 'Video Call'
    },
    {
        id: '3',
        title: 'Leadership Skills Masterclass',
        date: '2026-01-15',
        time: '10:00 AM - 12:00 PM',
        type: 'event',
        status: 'completed',
        location: 'Online (Zoom)'
    },
];

function CalendarPage() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0)); // January 2026

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const upcomingEvents = mockEvents.filter(e => e.status === 'upcoming').sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Calendar</h2>
                <p className="text-muted-foreground">Manage your events and coaching sessions</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="lg:col-span-2">
                    <div className="bg-card border border-border rounded-xl p-6">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-foreground">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </h3>
                            <div className="flex gap-2">
                                <button
                                    onClick={handlePrevMonth}
                                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleNextMonth}
                                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-2">
                                    {day}
                                </div>
                            ))}

                            {/* Empty cells for days before month starts */}
                            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                                <div key={`empty-${index}`} className="aspect-square"></div>
                            ))}

                            {/* Days of the month */}
                            {Array.from({ length: daysInMonth }).map((_, index) => {
                                const day = index + 1;
                                const dateString = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                                const hasEvent = mockEvents.some(e => e.date === dateString);
                                const isToday = day === 13 && currentMonth.getMonth() === 0; // Jan 13

                                return (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDate(dateString)}
                                        className={`aspect-square rounded-lg flex items-center justify-center relative transition-colors ${isToday
                                                ? 'bg-primary text-primary-foreground font-bold'
                                                : hasEvent
                                                    ? 'bg-primary/10 hover:bg-primary/20 font-semibold'
                                                    : 'hover:bg-muted'
                                            }`}
                                    >
                                        {day}
                                        {hasEvent && !isToday && (
                                            <div className="absolute bottom-1 w-1 h-1 bg-primary rounded-full"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Upcoming Events Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-lg font-bold text-foreground mb-4">Upcoming Events</h3>

                        {upcomingEvents.length === 0 ? (
                            <div className="text-center py-8">
                                <CalendarIcon className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                                <p className="text-muted-foreground text-sm">No upcoming events</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <Link
                                        key={event.id}
                                        href={event.type === 'event' ? `/coachme/me/event/${event.id}` : `/coachme/me/session/${event.id}`}
                                        className="block bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                                    >
                                        <div className="flex items-start gap-3 mb-2">
                                            <div className={`p-2 rounded-lg ${event.type === 'event'
                                                    ? 'bg-blue-500/10 text-blue-500'
                                                    : 'bg-green-500/10 text-green-500'
                                                }`}>
                                                {event.type === 'event' ? (
                                                    <CalendarIcon className="w-4 h-4" />
                                                ) : (
                                                    <Video className="w-4 h-4" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-foreground text-sm mb-1">
                                                    {event.title}
                                                </h4>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <Clock className="w-3 h-3" />
                                                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {event.time}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <MapPin className="w-3 h-3" />
                                                        {event.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarPage;
