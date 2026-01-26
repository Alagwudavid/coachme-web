"use client";

import { useState } from "react";
import Image from "next/image";
import Rightbar from "./components/rightbar";
import ContributionTrack from "./components/contribution-track";
import { CloudLightning, MapPin } from "lucide-react";

const CourseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M20 15c0 1.864 0 2.796-.304 3.53a4 4 0 0 1-2.165 2.165C16.796 21 15.864 21 14 21h-3c-3.772 0-5.658 0-6.83-1.172C3 18.657 3 16.771 3 13V7a4 4 0 0 1 4-4"></path><path d="m10 8.5l.434 3.969a.94.94 0 0 0 .552.753c.686.295 1.971.778 3.014.778s2.328-.483 3.014-.778a.94.94 0 0 0 .553-.753L18 8.5m2.5-1v3.77M14 4L7 7l7 3l7-3z"></path></g></svg>
);

function ProfilePage() {
    const [activeTab, setActiveTab] = useState<"contribution" | "classes" | "quiz" | "communities">("contribution");

    return (
        <div className="">
            <div className="min-h-page container flex">
                <main className="max-w-3xl mx-auto p-4 xl:p-6 lg:p-8 flex-1 flex flex-col space-y-6">
                    <div className="flex xl:hidden py-4 px-6 flex-col space-y-4 bg-background rounded-2xl border">
                        {/* Profile Banner */}
                        <div className="flex items-center gap-4">
                            {/* Profile Metadata */}
                            <div className="rounded-full overflow-hidden w-20 h-20 mb-2 mx-3 border-4 border-primary">
                                <Image
                                    src="/assets/user-1.png"
                                    alt="User profile image"
                                    width={80}
                                    height={80}
                                    className='rounded-full'
                                />
                            </div>
                            <div className="flex-1 flex flex-col space-y-1">
                                <h1 className="text-xl font-bold text-foreground">
                                    Jane Doe
                                </h1>
                                <p className="text-foreground text-sm">
                                    @_jane_doe
                                </p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    {/* <Home className="w-4 h-4" /> */}
                                    <span>Joined Sep 25, 2023</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4" />
                                    <span>Lagos</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            I help business owners & productivity enthusiasts master AI automation to save 100+ hours monthly.
                        </div>
                        {/* Stats Section */}
                        <div className="flex items-center justify-between mb-4">
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

                    <ContributionTrack joinedDate={new Date('2022-11-15')} />


                    {/* Stats Section */}
                    <div className="flex flex-col mb-4">
                        <h1 className="text-2xl font-bold text-foreground mb-4">
                            Statistics
                        </h1>
                        <div className="w-full grid grid-cols-2 gap-4">
                            <div className="w-full flex items-center gap-4 border rounded-2xl p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-red-500">
                                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
                                </svg>
                                <div className="text-start flex-1">
                                    <div className="text-lg font-bold text-foreground">23</div>
                                    <div className="text-sm text-muted-foreground">Streak</div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-4 text-green-500 border rounded-2xl p-4">
                                <CloudLightning className="size-8" />
                                <div className="text-start flex-1">
                                    <div className="text-lg font-bold text-foreground">222,120</div>
                                    <div className="text-sm text-muted-foreground">Total XP</div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-4 text-purple-500 border rounded-2xl p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 21H9v-8.4a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6zm5.4 0H15v-2.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6M9 21v-4.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v4.3a.6.6 0 0 0 .6.6zm1.806-15.887l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.176.568l-1.47 1.5l.347 2.118c.044.272-.228.48-.462.351l-1.818-1l-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.175-.568z"></path></svg>
                                <div className="text-start flex-1">
                                    <div className="text-lg font-bold text-foreground">110th</div>
                                    <div className="text-sm text-muted-foreground">Weekly leaderboard</div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-4 text-foreground border rounded-2xl p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="M24 42L4 18.5L9.695 6h28.61L44 18.5z"></path><path d="m32 18l-8 9l-8-9"></path></g></svg>
                                <div className="text-start flex-1">
                                    <div className="text-lg font-bold text-foreground">7 - Striker</div>
                                    <div className="text-sm text-muted-foreground">Current Level</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2 mt-2 border-b w-full">
                            <button
                                onClick={() => setActiveTab("contribution")}
                                className={`p-2 text-base transition-colors cursor-pointer ${activeTab === "contribution"
                                    ? "border-b-2 border-primary text-primary font-bold"
                                    : "bg-background text-foreground hover:text-primary"
                                    }`}
                            >
                                Contribution
                            </button>
                            {/* <button
                                onClick={() => setActiveTab("classes")}
                                className={`p-2 text-base transition-colors cursor-pointer ${activeTab === "classes"
                                    ? "border-b-2 border-primary text-primary font-bold"
                                    : "bg-background text-foreground hover:text-primary"
                                    }`}
                            >
                                5 Classes
                            </button> */}
                            {/* <button
                                onClick={() => setActiveTab("quiz")}
                                className={`p-2 text-base transition-colors cursor-pointer ${activeTab === "quiz"
                                    ? "border-b-2 border-primary text-primary font-bold"
                                    : "bg-background text-foreground hover:text-primary"
                                    }`}
                            >
                                5 Quiz
                            </button> */}
                            <button
                                onClick={() => setActiveTab("communities")}
                                className={`p-2 text-base transition-colors cursor-pointer ${activeTab === "communities"
                                    ? "border-b-2 border-primary text-primary font-bold"
                                    : "bg-background text-foreground hover:text-primary"
                                    }`}
                            >
                                5 Communities
                            </button>
                        </div>
                    </div>
                </main>
                <Rightbar />
            </div>
        </div>
    );
}
export default ProfilePage;
