'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Notification {
    id: number;
    type: 'mention' | 'activity';
    user: {
        name: string;
        avatar: string;
    };
    action: string;
    content?: string;
    time: string;
    read: boolean;
}

const notifications: Notification[] = [
    {
        id: 1,
        type: 'mention',
        user: {
            name: 'Sarah Johnson',
            avatar: '/assets/user-1.png'
        },
        action: 'mentioned you in',
        content: 'Digital Marketing Course',
        time: '2h ago',
        read: false
    },
    {
        id: 2,
        type: 'activity',
        user: {
            name: 'Mike Chen',
            avatar: '/assets/user-2.png'
        },
        action: 'liked your comment on',
        content: 'Web Development Fundamentals',
        time: '3h ago',
        read: false
    },
    {
        id: 3,
        type: 'mention',
        user: {
            name: 'Emma Wilson',
            avatar: '/assets/user-3.png'
        },
        action: 'replied to your post in',
        content: 'Community Discussion',
        time: '5h ago',
        read: true
    },
    {
        id: 4,
        type: 'activity',
        user: {
            name: 'David Lee',
            avatar: '/assets/user-4.png'
        },
        action: 'started following you',
        time: '1d ago',
        read: true
    },
    {
        id: 5,
        type: 'activity',
        user: {
            name: 'Lisa Brown',
            avatar: '/assets/user-5.png'
        },
        action: 'joined your community',
        content: 'Teachers Community',
        time: '2d ago',
        read: true
    },
];

export default function NotificationPage() {
    const [activeTab, setActiveTab] = useState<'mentions' | 'all'>('mentions');

    const filteredNotifications = activeTab === 'mentions'
        ? notifications.filter(n => n.type === 'mention')
        : notifications;

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-6">Notifications</h1>

                {/* Tabs */}
                <div className="flex border-b border-border">
                    <button
                        onClick={() => setActiveTab('mentions')}
                        className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'mentions'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        Mentions
                    </button>
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'all'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        All activity
                    </button>
                </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-2">
                {filteredNotifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer ${!notification.read ? 'bg-muted/30' : ''
                            }`}
                    >
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <Image
                                src={notification.user.avatar}
                                alt={notification.user.name}
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">{notification.user.name}</span>
                                    {' '}
                                    <span className="text-muted-foreground">{notification.action}</span>
                                    {notification.content && (
                                        <>
                                            {' '}
                                            <span className="font-medium">{notification.content}</span>
                                        </>
                                    )}
                                </p>
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                    {notification.time}
                                </span>
                            </div>
                            {!notification.read && (
                                <div className="mt-1">
                                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredNotifications.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-muted-foreground"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No notifications yet</h3>
                    <p className="text-sm text-muted-foreground">
                        When you get notifications, they'll show up here
                    </p>
                </div>
            )}
        </div>
    );
}
