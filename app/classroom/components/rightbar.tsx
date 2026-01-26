"use client";

import Image from "next/image";
import Link from "next/link";

interface Badge {
    id: string;
    name: string;
    month: string;
    icon: string;
    color: string;
}

interface RightbarProps {
    badges?: Badge[];
}
const CourseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M20 15c0 1.864 0 2.796-.304 3.53a4 4 0 0 1-2.165 2.165C16.796 21 15.864 21 14 21h-3c-3.772 0-5.658 0-6.83-1.172C3 18.657 3 16.771 3 13V7a4 4 0 0 1 4-4"></path><path d="m10 8.5l.434 3.969a.94.94 0 0 0 .552.753c.686.295 1.971.778 3.014.778s2.328-.483 3.014-.778a.94.94 0 0 0 .553-.753L18 8.5m2.5-1v3.77M14 4L7 7l7 3l7-3z"></path></g></svg>
);
export default function Rightbar({ badges = [] }: RightbarProps) {
    const defaultBadges: Badge[] = [
        {
            id: "1",
            name: "Duo's Frozen Winter",
            month: "January 2025",
            icon: "❄️",
            color: "bg-blue-500"
        },
        {
            id: "2",
            name: "Junior's Cookie Craze",
            month: "December 2024",
            icon: "🍪",
            color: "bg-pink-500"
        },
        {
            id: "3",
            name: "Eddy's Wood Carving Craft",
            month: "December 2023",
            icon: "🪵",
            color: "bg-orange-500"
        },
        {
            id: "4",
            name: "Junior's Love Letter",
            month: "February 2023",
            icon: "💚",
            color: "bg-green-500"
        },
        {
            id: "5",
            name: "Duo's New Year's Party",
            month: "January 2023",
            icon: "🎉",
            color: "bg-blue-400"
        }
    ];

    const displayBadges = badges.length > 0 ? badges : defaultBadges;

    return (
        <div className="hidden xl:block xl:sticky xl:right-0 xl:top-0 xl:h-full xl:w-96 bg-background">
            <div className="p-6">
                <div className="rounded-full overflow-hidden w-52 h-52 mx-auto mb-6 border-4 border-primary">
                    <Image
                        src="/assets/user-1.png"
                        alt="User profile image"
                        width={220}
                        height={220}
                        className='rounded-full'
                    />
                </div>

                {/* Stats Section */}
                <div className="flex justify-around mb-4 border rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-green-500">
                        <CourseIcon className="size-6" />
                        <span className="font-bold text-xl">24</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                            <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-500 font-bold text-xl">6</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 21H9v-8.4a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6zm5.4 0H15v-2.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6M9 21v-4.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v4.3a.6.6 0 0 0 .6.6zm1.806-15.887l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.176.568l-1.47 1.5l.347 2.118c.044.272-.228.48-.462.351l-1.818-1l-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.175-.568z"></path></svg>
                        <span className="font-bold text-xl">709th</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="M24 42L4 18.5L9.695 6h28.61L44 18.5z"></path><path d="m32 18l-8 9l-8-9"></path></g></svg>
                        <span className="font-bold text-xl">7</span>
                    </div>
                </div>
                <div className="space-y-4 mb-4">
                    <h2 className="text-foreground font-bold text-lg">About Me</h2>
                    I help business owners & productivity enthusiasts master AI automation to save 100+ hours monthly.
                </div>

                <div className="w-full h-px bg-border mb-4"></div>

                {/* Monthly Badges Section */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-foreground font-bold text-lg">Monthly Badges</h2>
                        <Link
                            href="#"
                            className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                        >
                            VIEW ALL
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {displayBadges.map((badge) => (
                            <div
                                key={badge.id}
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                            >
                                <div className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center text-2xl shrink-0`}>
                                    {badge.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-foreground font-semibold text-sm">
                                        {badge.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        {badge.month}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
