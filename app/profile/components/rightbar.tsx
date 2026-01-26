"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Crown, Medal, Home, Globe, Pin, MapPin, LinkIcon, Calendar } from "lucide-react";

interface User {
    id: string;
    name: string;
    username: string;
    avatar: string;
    bio?: string;
}

interface RightbarProps {
    following?: User[];
    followers?: User[];
    showOnMobile?: boolean;
}

export default function Rightbar({ following = [], followers = [], showOnMobile = false }: RightbarProps) {
    const [activeTab, setActiveTab] = useState<'following' | 'followers'>('following');

    const defaultFollowing: User[] = [
        {
            id: "1",
            name: "Sarah Johnson",
            username: "@sarahjohnson",
            avatar: "/assets/user-1.png",
            bio: "AI enthusiast"
        },
        {
            id: "2",
            name: "Mike Chen",
            username: "@mikechen",
            avatar: "/assets/user-2.png",
            bio: "Developer"
        },
        {
            id: "3",
            name: "Emma Wilson",
            username: "@emmawilson",
            avatar: "/assets/user-3.png",
            bio: "Designer"
        },
        {
            id: "4",
            name: "David Lee",
            username: "@davidlee",
            avatar: "/assets/user-4.png",
            bio: "Product Manager"
        },
        {
            id: "5",
            name: "Lisa Brown",
            username: "@lisabrown",
            avatar: "/assets/user-5.png",
            bio: "Marketing Lead"
        }
    ];

    const defaultFollowers: User[] = [
        {
            id: "6",
            name: "John Smith",
            username: "@johnsmith",
            avatar: "/assets/user-1.png",
            bio: "Tech Writer"
        },
        {
            id: "7",
            name: "Amy Chen",
            username: "@amychen",
            avatar: "/assets/user-2.png",
            bio: "Data Scientist"
        },
        {
            id: "8",
            name: "Tom Wilson",
            username: "@tomwilson",
            avatar: "/assets/user-3.png",
            bio: "Software Engineer"
        },
        {
            id: "9",
            name: "Kate Martinez",
            username: "@katemartinez",
            avatar: "/assets/user-4.png",
            bio: "UX Designer"
        },
        {
            id: "10",
            name: "Alex Johnson",
            username: "@alexjohnson",
            avatar: "/assets/user-5.png",
            bio: "Content Creator"
        }
    ];

    const displayFollowing = following.length > 0 ? following : defaultFollowing;
    const displayFollowers = followers.length > 0 ? followers : defaultFollowers;
    const displayUsers = activeTab === 'following' ? displayFollowing : displayFollowers;

    return (
        <div className={`${showOnMobile ? 'block' : 'hidden xl:block'} xl:sticky xl:right-0 xl:top-0 xl:h-full xl:w-96`}>
            <div className="space-y-4 py-6">
            <div className="space-y-4 p-4 rounded-2xl border bg-background">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-2 border-4 border-primary">
                    <Image
                        src="/assets/user-1.png"
                        alt="User profile image"
                        width={160}
                        height={160}
                        className='rounded-full'
                    />
                </div>
                <div className="flex flex-col">
                    {/* User Metadata */}
                    <div className="space-y-1 mb-2">
                        <h1 className="text-2xl font-bold text-foreground">
                            Jane Doe
                        </h1>
                        <p className="text-foreground text-base">
                            @_jane_doe
                        </p>
                        <div className="mb-2">
                            I help business owners & productivity enthusiasts master AI automation to save 100+ hours monthly.
                        </div>
                    </div>
                    <div className="space-y-1 mb-2 border-t pt-2 mt-2">
                        <div className="flex items-center gap-2 text-base text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>Joined Sep 25, 2023</span>
                        </div>
                        <div className="flex items-center gap-2 text-base text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>Lagos</span>
                        </div>
                        <div className="flex items-center gap-2 text-base text-muted-foreground">
                            <LinkIcon className="w-4 h-4" />
                            <span>wynx.dev</span>
                        </div>
                    </div>
                    {/*  Section */}
                    <div className="flex items-center justify-between border-t pt-2 mt-2">
                        <div className="text-start flex-1">
                            <div className="text-lg font-bold text-foreground">222k</div>
                            <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                        {/* <div className="w-px h-8 bg-border"></div> */}
                        <div className="text-start flex-1">
                            <div className="text-lg font-bold text-foreground">525</div>
                            <div className="text-sm text-muted-foreground">Followers</div>
                        </div>
                        {/* <div className="w-px h-8 bg-border"></div> */}
                        <div className="text-start flex-1">
                            <div className="text-lg font-bold text-foreground">12</div>
                            <div className="text-sm text-muted-foreground">Contributions</div>
                        </div>
                    </div>
                </div>
            </div>

                {/* <div className="w-full h-px bg-border mb-4"></div> */}

                {/* Following/Followers Section */}
                <div className="border rounded-2xl overflow-hidden">
                    {/* Tab Buttons */}
                    <div className="flex gap-2 border-b">
                        <button
                            onClick={() => setActiveTab('following')}
                            className={`flex-1 p-4 text-sm font-semibold uppercase transition-colors relative ${activeTab === 'following'
                                ? 'text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Following
                            {activeTab === 'following' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('followers')}
                            className={`flex-1 p-4 text-sm font-semibold uppercase transition-colors relative ${activeTab === 'followers'
                                ? 'text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Followers
                            {activeTab === 'followers' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                            )}
                        </button>
                    </div>

                    <div className="space-y-2 max-h-[400px] overflow-y-auto hide-scrollbar">
                        {displayUsers.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center gap-3 p-3 hover:bg-muted transition-colors cursor-pointer"
                            >
                                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden relative flex-shrink-0">
                                    <Image
                                        src={user.avatar}
                                        alt={user.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-foreground font-semibold text-sm truncate">
                                        {user.name}
                                    </h3>
                                    {/* <p className="text-muted-foreground text-xs truncate">
                                        {user.username}
                                    </p> */}
                                    {user.bio && (
                                        <p className="text-muted-foreground text-xs truncate">
                                            {user.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
