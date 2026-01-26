"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, Crown, Medal, Home, Globe, Star, ChevronDown, MessageCircleMore, Mic, Hash, CalendarDays, ShieldQuestion, Plus, Settings2, ShoppingBag, Users, EllipsisVertical } from "lucide-react";

interface LeaderboardUser {
    id: string;
    name: string;
    username: string;
    points: number;
    rank: number;
    avatar: string;
}

interface SideMenuProps {
    leaderboard?: LeaderboardUser[];
    showOnMobile?: boolean;
}

const ClassroomIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 8.25A3.25 3.25 0 0 1 5.25 5h6.5A3.25 3.25 0 0 1 15 8.25v7.5a3.25 3.25 0 0 1-2.455 3.152A6.501 6.501 0 0 0 2 11.811zm17.257 9.438L16 15.44V8.562l3.257-2.249c1.161-.802 2.745.03 2.745 1.44v8.495c0 1.41-1.584 2.242-2.745 1.44M6.501 22.002A5.501 5.501 0 1 0 1.69 19.17l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666c.79.439 1.7.688 2.667.688m-2-6A.5.5 0 1 1 4.5 15h4a.5.5 0 1 1 0 1zm2 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"></path></svg>;
}
const CourseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v11.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM9 9.25v5.5a1 1 0 0 0 1.482.876l5-2.75a1 1 0 0 0 0-1.752l-5-2.75A1 1 0 0 0 9 9.251"></path></svg>
);
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 19h-.25q-3.55 0-6.025-2.475T3 10.5t2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825t1.824 2.7T20 10.5q0 3.35-1.888 6.225t-4.762 4.5q-.25.125-.5.138t-.45-.113t-.35-.325t-.175-.475zm-.275-3.025q.425 0 .725-.3t.3-.725t-.3-.725t-.725-.3t-.725.3t-.3.725t.3.725t.725.3M9.3 8.375q.275.125.55.013t.45-.363q.225-.3.525-.463T11.5 7.4q.6 0 .975.337t.375.863q0 .325-.187.65t-.663.8q-.625.55-.925 1.038t-.3.987q0 .3.213.513t.512.212t.5-.225t.3-.525q.125-.425.45-.775t.6-.625q.525-.525.788-1.05t.262-1.05q0-1.15-.788-1.85T11.5 6q-.8 0-1.475.388t-1.1 1.062q-.15.275-.038.538t.413.387"></path></svg>
);
const RulesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5 22v-8m0 0V4m0 10l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 0V2"></path></svg>
);
export default function SideMenu({ leaderboard = [], showOnMobile = false }: SideMenuProps) {
    const [isCommunityOpen, setIsCommunityOpen] = useState(true);
    const [isLearningOpen, setIsLearningOpen] = useState(true);
    const [isResourcesOpen, setIsResourcesOpen] = useState(true);
    const [showCommunityMenu, setShowCommunityMenu] = useState(false);
    const pathname = usePathname();

    const defaultLeaderboard: LeaderboardUser[] = [
        {
            id: "1",
            name: "Sarah Johnson",
            username: "@sarahjohnson",
            points: 2450,
            rank: 1,
            avatar: "/assets/user-1.png"
        },
        {
            id: "2",
            name: "Mike Chen",
            username: "@mikechen",
            points: 2180,
            rank: 2,
            avatar: "/assets/user-2.png"
        },
        {
            id: "3",
            name: "Emma Wilson",
            username: "@emmawilson",
            points: 1920,
            rank: 3,
            avatar: "/assets/user-3.png"
        },
        {
            id: "4",
            name: "David Lee",
            username: "@davidlee",
            points: 1750,
            rank: 4,
            avatar: "/assets/user-4.png"
        },
        {
            id: "5",
            name: "Lisa Brown",
            username: "@lisabrown",
            points: 1680,
            rank: 5,
            avatar: "/assets/user-5.png"
        }
    ];

    const displayLeaderboard = leaderboard.length > 0 ? leaderboard : defaultLeaderboard;

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1:
                return <Crown className="w-5 h-5 text-yellow-500" />;
            case 2:
                return <Medal className="w-5 h-5 text-gray-400" />;
            case 3:
                return <Medal className="w-5 h-5 text-orange-600" />;
            default:
                return <span className="text-sm font-semibold text-muted-foreground">#{rank}</span>;
        }
    };

    return (
        <div className="h-full w-full bg-background border-r overflow-y-auto custom-scrollbar">
            <div className="space-y-2">
                <div className="relative">
                    <div className="sticky z-10 left-0 top-0">
                        <div className="w-full p-1 flex items-center justify-between gap-3 hover:backdrop-blur-xs transition-colors">
                            <div className="flex rounded-lg overflow-hidden">
                                <img
                                    src={"/assets/user-1.png"}
                                    alt="User profile image"
                                    className="w-10 h-10 rounded-lg object-cover"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="font-bold text-white line-clamp-1 text-shadow-md">
                                    Classroom
                                </h1>
                                {/* Community Metadata */}
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center gap-1 text-xs text-amber-500">
                                        <Star className="w-4 h-4 fill-amber-500 text-shadow-md" />
                                        <span className="text-shadow-md">4.32 (644)</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-green-500">
                                        <span className="w-1 h-1 bg-green-500 rounded-full p-1 text-shadow-md"></span>
                                        <span className=" text-shadow-md">1,002 online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div
                                    onClick={() => setShowCommunityMenu(!showCommunityMenu)}
                                    className="w-10 h-10 rounded-lg hover:bg-muted/30 text-white flex items-center justify-center cursor-pointer"
                                >
                                    <ChevronDown className="size-6" />
                                </div>
                                {showCommunityMenu && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setShowCommunityMenu(false)}
                                        />
                                        <div className="absolute right-0 top-full mt-1 w-56 bg-background rounded-lg shadow-lg border overflow-hidden z-50">
                                            <div className="py-1">
                                                <Link href={"/app/app/classroom/about"} className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors text-left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                                    <span>About Classroom</span>
                                                </Link>
                                                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors text-left text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5 22v-8m0 0V4m0 10l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 0V2"></path></svg>
                                                    <span>Report</span>
                                                </button>
                                                <div className="h-px bg-border my-1" />
                                                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors text-left text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                                                    <span>Leave</span>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-radial to-black/50 from-white/10" />
                    <div className="bg-muted flex overflow-hidden aspect-[3/1.5] -mt-12">
                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                            <Image
                                src={"/assets/user-2.jpg"}
                                alt="Classroom Banner Image"
                                width={720}
                                height={240}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-b pb-4 px-4">
                    <h1 className="text-foreground mb-1">
                        Rate this classroom
                    </h1>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <div className="flex rounded-full w-6 h-6 overflow-hidden mr-2">
                            <img
                                src={"/assets/user-1.png"}
                                alt="User profile image"
                                className="w-6 h-6 rounded-full object-cover"
                            />
                        </div>
                        <Star className="w-5 h-5 text-amber-500" />
                        <Star className="w-5 h-5 text-amber-500" />
                        <Star className="w-5 h-5 text-amber-500" />
                        <Star className="w-5 h-5 text-amber-500" />
                        <Star className="w-5 h-5 text-amber-500" />
                    </div>
                </div>
                {/* <div className="w-full h-px bg-border mb-4"></div> */}
                <div className="px-4 py-2 flex flex-col space-y-1">
                    <div
                        onClick={() => setIsCommunityOpen(!isCommunityOpen)}
                        className="flex items-center justify-between gap-3 mt-2 cursor-pointer">
                        <h1 className="flex items-center text-sm text-muted-foreground">
                            <ChevronDown className={`size-5 transition-transform ${isCommunityOpen ? '' : '-rotate-90'}`} />
                            Classroom
                        </h1>
                    </div>
                    {isCommunityOpen && (
                        <>
                            <Link
                                href="/app/app/classroom"
                                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-sm cursor-pointer p-1 ${pathname === '/app/app/classroom' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
                            >
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${pathname === '/app/app/classroom' ? 'bg-primary-foreground/20' : 'bg-muted'} text-muted-foreground`}>
                                    <Hash className={`size-5 ${pathname === '/app/app/classroom' ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                                </div>
                                <span>General</span>
                            </Link>
                            <div className="rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-sm cursor-pointer p-1">
                                <div className="w-7 h-7 rounded-lg bg-muted text-muted-foreground flex items-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 26 26"><path fill="currentColor" d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2s1.218-.9 1.218-2s-.418-2-1.218-2"></path></svg>
                                </div>
                                <span>Chat</span>
                            </div>
                        </>
                    )}

                    <div
                        onClick={() => setIsLearningOpen(!isLearningOpen)}
                        className="flex items-center justify-between gap-3 mt-2 cursor-pointer">
                        <h1 className="flex items-center text-sm text-muted-foreground">
                            <ChevronDown className={`size-5 transition-transform ${isLearningOpen ? '' : '-rotate-90'}`} />
                            Learning
                        </h1>
                    </div>
                    {isLearningOpen && (
                        <>
                            <Link
                                href="/app/app/classroom/courses"
                                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-sm cursor-pointer p-1 ${pathname === '/app/app/classroom/courses' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
                            >
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${pathname === '/app/app/classroom/courses' ? 'bg-primary-foreground/20' : 'bg-muted'} text-muted-foreground`}>
                                    <ClassroomIcon className={`size-5 ${pathname === '/app/app/classroom/courses' ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                                </div>
                                <span>Courses</span>
                            </Link>
                            <Link
                                href="/app/app/classroom/calendar"
                                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-sm cursor-pointer p-1 ${pathname === '/app/app/classroom/calendar' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
                            >
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${pathname === '/app/app/classroom/calendar' ? 'bg-primary-foreground/20' : 'bg-muted'} text-muted-foreground`}>
                                    <CalendarDays className={`size-5 ${pathname === '/app/app/classroom/calendar' ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                                </div>
                                <span>Calendar</span>
                            </Link>
                        </>
                    )}

                    <div
                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        className="flex items-center justify-between gap-3 mt-2 cursor-pointer">
                        <h1 className="flex items-center text-sm text-muted-foreground">
                            <ChevronDown className={`size-5 transition-transform ${isResourcesOpen ? '' : '-rotate-90'}`} />
                            Resources
                        </h1>
                    </div>
                    {isResourcesOpen && (
                        <>
                            <Link
                                href="/app/app/classroom/members"
                                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-sm cursor-pointer p-1 ${pathname === '/app/app/classroom/members' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
                            >
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${pathname === '/app/app/classroom/members' ? 'bg-primary-foreground/20' : 'bg-muted'} text-muted-foreground`}>
                                    <Users className={`size-5 ${pathname === '/app/app/classroom/members' ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                                </div>
                                <span>Members</span>
                            </Link>
                            <Link
                                href="/app/app/classroom/leaderboard"
                                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-sm cursor-pointer p-1 ${pathname === '/app/app/classroom/leaderboard' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
                            >
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${pathname === '/app/app/classroom/leaderboard' ? 'bg-primary-foreground/20' : 'bg-muted'} text-muted-foreground`}>
                                    <svg className={`size-5 ${pathname === '/app/app/classroom/leaderboard' ? 'text-primary-foreground' : 'text-muted-foreground'}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 21H9v-8.4a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6zm5.4 0H15v-2.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6M9 21v-4.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v4.3a.6.6 0 0 0 .6.6zm1.806-15.887l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.176.568l-1.47 1.5l.347 2.118c.044.272-.228.48-.462.351l-1.818-1l-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.175-.568z"></path></svg>
                                </div>
                                <span>Leaderboard</span>
                            </Link>
                            <Link
                                href="/app/app/classroom/about"
                                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-sm cursor-pointer p-1 ${pathname === '/app/app/classroom/about' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
                            >
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${pathname === '/app/app/classroom/about' ? 'bg-primary-foreground/20' : 'bg-muted'} text-muted-foreground`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`size-5 ${pathname === '/app/app/classroom/about' ? 'text-primary-foreground' : 'text-muted-foreground'}`} width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg>
                                </div>
                                <span>About</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
