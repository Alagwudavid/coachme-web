'use client';

import { useState } from 'react';
import { Search, SquarePen, MoreHorizontal, Phone, Video, Info, X } from 'lucide-react';
import Image from 'next/image';

interface Conversation {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unread?: number;
    verified?: boolean;
}

const conversations: Conversation[] = [
    {
        id: 1,
        name: 'Team Mate',
        avatar: '/assets/user-1.png',
        lastMessage: "What's up Alagwu David, welcome to Wh...",
        timestamp: '5/19',
        verified: true,
    },
];

function ChatPage() {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'unread' | 'requests'>('unread');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex h-screen max-h-screen overflow-hidden">
            {/* Left Sidebar - Conversations List */}
            <div className="w-full lg:w-96 border-r border-border bg-background flex flex-col">
                {/* Search Header */}
                <div className="p-4 border-b border-border">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                            <SquarePen className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 px-4 my-2">
                    <button
                        onClick={() => setActiveTab('unread')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'unread'
                                ? 'bg-foreground text-background'
                                : 'bg-transparent text-foreground hover:bg-muted'
                            }`}
                    >
                        Unread
                    </button>
                    <button
                        onClick={() => setActiveTab('requests')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'requests'
                                ? 'bg-foreground text-background'
                                : 'bg-transparent text-foreground hover:bg-muted'
                            }`}
                    >
                        Requests
                    </button>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((conv) => (
                        <button
                            key={conv.id}
                            onClick={() => setSelectedChat(conv.id)}
                            className={`w-full flex items-center gap-3 p-4 hover:bg-muted transition-colors ${selectedChat === conv.id ? 'bg-muted' : ''
                                }`}
                        >
                            <div className="relative flex-shrink-0">
                                <Image
                                    src={conv.avatar}
                                    alt={conv.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                {conv.unread && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                                        {conv.unread}
                                    </span>
                                )}
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <h3 className="font-semibold text-foreground truncate">{conv.name}</h3>
                                    {conv.verified && (
                                        <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                            </div>
                            <div className="flex-shrink-0 text-xs text-muted-foreground">
                                <X className='size-6' />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-background">
                {selectedChat ? (
                    <>
                        {/* Chat Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/user-1.png"
                                    alt="User"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <h2 className="font-semibold text-foreground">Team Mate</h2>
                                    <p className="text-xs text-muted-foreground">Active now</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                    <Phone className="w-5 h-5 text-foreground" />
                                </button>
                                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                    <Video className="w-5 h-5 text-foreground" />
                                </button>
                                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                    <Info className="w-5 h-5 text-foreground" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="max-w-3xl mx-auto space-y-4">
                                {/* Add messages here */}
                                <p className="text-center text-muted-foreground text-sm">No messages yet</p>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t border-border">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                                <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                                    Send
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Empty State */
                    <div className="flex-1 flex items-center justify-center p-8">
                        <div className="max-w-md text-center">
                            <div className="mb-6 inline-block p-8 bg-muted/50 rounded-3xl">
                                <svg
                                    className="w-32 h-32 mx-auto"
                                    viewBox="0 0 200 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Left Eye */}
                                    <ellipse cx="65" cy="60" rx="30" ry="45" fill="white" />
                                    <circle cx="65" cy="65" r="18" fill="black" />
                                    <circle cx="70" cy="60" r="8" fill="white" />

                                    {/* Right Eye */}
                                    <ellipse cx="135" cy="60" rx="30" ry="45" fill="white" />
                                    <circle cx="135" cy="65" r="18" fill="black" />
                                    <circle cx="140" cy="60" r="8" fill="white" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold mb-3 text-foreground">Select a message</h2>
                            <p className="text-muted-foreground mb-2">
                                Choose from your existing conversations, start a new one,
                            </p>
                            <p className="text-muted-foreground">or just keep swimming.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatPage;