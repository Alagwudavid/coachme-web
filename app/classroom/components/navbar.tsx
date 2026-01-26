'use client';

import { Search, Bell, X, ShoppingCart, Plus, Flame, Inbox, User, LogOut, SquarePen, Bolt, Crown, Info, Puzzle, Users, ChevronsUpDown, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import SearchBar from './search-bar';
import { useSidebar } from './sidebar-context';

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg"
        width={24} height={24}
        viewBox="0 0 0.49 0.43"
        xmlSpace="preserve"
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            //   imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
        }}
        {...props}
    >
        <g>
            <path
                d="M0.29 0.3c-0.05,0.02 -0.14,0.09 -0.2,0.05 -0.04,-0.04 -0.02,-0.14 0,-0.19 0.08,-0.15 0.23,-0.13 0.2,0.14zm0.19 -0.18c0.01,-0.02 0.01,-0.02 0.01,-0.04l-0.07 0.01 -0.01 0.03c-0.01,0.06 -0.05,0.1 -0.06,0.12 0,-0.05 0,-0.1 -0.02,-0.15 -0.05,-0.14 -0.24,-0.11 -0.3,0.04 -0.04,0.08 -0.05,0.21 0.02,0.27 0.09,0.08 0.19,-0.01 0.26,-0.03 0.06,0.06 0.1,0.08 0.18,0l-0.04 -0.04c-0.04,0.01 -0.05,0.04 -0.08,0.01 -0.02,-0.04 0.08,-0.1 0.11,-0.22z"
                fill="black"
            />
        </g>
    </svg>
);
const VaultIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v.354q.32.09.604.252a.75.75 0 0 1 1.04 1.04q.161.283.252.604H15a.75.75 0 0 1 0 1.5h-.354q-.09.32-.252.604a.75.75 0 0 1-1.04 1.04a2.7 2.7 0 0 1-.604.252V15a.75.75 0 0 1-1.5 0v-.354a2.7 2.7 0 0 1-.604-.252a.75.75 0 0 1-1.04-1.04a2.7 2.7 0 0 1-.252-.604H9a.75.75 0 0 1 0-1.5h.354q.09-.32.252-.604a.75.75 0 0 1 1.04-1.04q.283-.161.604-.252V9a.75.75 0 0 1 .75-.75m-.884 4.634a1.246 1.246 0 0 0 1.768 0a1.25 1.25 0 1 0-1.768 0"></path><path fill="currentColor" d="M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0M12 7.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5"></path><path fill="currentColor" d="M14.633 2.25H9.367c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.275.54-.398 1.13-.457 1.823A1.5 1.5 0 0 0 1.5 8v1.5a1.5 1.5 0 0 0 .75 1.3v2.4a1.5 1.5 0 0 0-.75 1.3V16c0 .58.33 1.083.81 1.333c.06.694.183 1.284.458 1.824a4.75 4.75 0 0 0 2.076 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057M3.81 17.262c.415-.266.69-.732.69-1.262v-1.5a1.5 1.5 0 0 0-.75-1.3v-2.4a1.5 1.5 0 0 0 .75-1.3V8c0-.53-.275-.996-.69-1.262c.053-.565.147-.925.294-1.213a3.25 3.25 0 0 1 1.42-1.42c.305-.156.69-.252 1.31-.303c.63-.051 1.434-.052 2.566-.052h5.2c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.051.63.052 1.434.052 2.566v5.2c0 1.133 0 1.937-.052 2.566c-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 0 1-1.42 1.42c-.305.155-.69.251-1.31.302c-.63.051-1.434.052-2.566.052H9.4c-1.132 0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.147-.289-.241-.649-.294-1.214"></path></svg>;
}
const WhiteBoardIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M13 15c-2.292 6-8.708 0-11 6m13.5-6h1.501c2.357 0 3.536 0 4.268-.732s.732-1.911.732-4.268V8c0-2.357 0-3.536-.732-4.268S19.36 3 17.001 3h-4c-2.357 0-3.535 0-4.267.732c-.62.62-.716 1.561-.73 3.268"></path><circle cx={7.5} cy={12.5} r={2.5}></circle><path d="M12 7h6m0 4h-3"></path></g></svg>;
}
const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><path strokeWidth={2} d="M12.005 10.5h.008m3.987 0h.009m-8 0h.009"></path><path strokeWidth={1.5} d="M2 10.5c0-.77.013-1.523.04-2.25c.083-2.373.125-3.56 1.09-4.533c.965-.972 2.186-1.024 4.626-1.129A100 100 0 0 1 12 2.5c1.48 0 2.905.03 4.244.088c2.44.105 3.66.157 4.626 1.13c.965.972 1.007 2.159 1.09 4.532a64 64 0 0 1 0 4.5c-.083 2.373-.125 3.56-1.09 4.533c-.965.972-2.186 1.024-4.626 1.129q-1.102.047-2.275.07c-.74.014-1.111.02-1.437.145s-.6.358-1.148.828l-2.179 1.87A.73.73 0 0 1 8 20.77v-2.348l-.244-.01c-2.44-.105-3.66-.157-4.626-1.13c-.965-.972-1.007-2.159-1.09-4.532A64 64 0 0 1 2 10.5"></path></g></svg>
);
const ProfileCardIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M21.5 16.052V7.948a4.14 4.14 0 0 0-1.236-2.945a4.25 4.25 0 0 0-2.985-1.22H6.72a4.25 4.25 0 0 0-2.985 1.22A4.14 4.14 0 0 0 2.5 7.948v8.104c0 1.105.445 2.164 1.236 2.945a4.25 4.25 0 0 0 2.985 1.22H17.28c1.12 0 2.193-.44 2.985-1.22a4.14 4.14 0 0 0 1.236-2.945"></path><path d="M8.552 12.14a2.054 2.054 0 1 0 0-4.108a2.054 2.054 0 0 0 0 4.108m3.081 3.828c0-.812-.324-1.59-.902-2.165a3.09 3.09 0 0 0-4.358 0a3.05 3.05 0 0 0-.902 2.165m9.097-7.049h3.594M14.568 12h1.54m-1.54 3.081h3.594"></path></g></svg>;
}
const ExpandIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M13.97 8.53a.75.75 0 1 0 1.06-1.06l-1.948-1.95a5 5 0 0 0-.268-.254a1.3 1.3 0 0 0-.428-.249a1.25 1.25 0 0 0-.772 0a1.3 1.3 0 0 0-.428.249a5 5 0 0 0-.268.254L8.97 7.47a.75.75 0 0 0 1.06 1.06L12 6.56zm-3.94 6.94a.75.75 0 1 0-1.06 1.06l1.948 1.949c.087.086.18.18.268.255c.1.084.239.186.428.248c.25.081.521.081.772 0a1.3 1.3 0 0 0 .428-.248c.088-.075.181-.169.268-.255l1.948-1.949a.75.75 0 1 0-1.06-1.06L12 17.44z"></path></svg>;
}
export default function Navbar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
    const pathname = usePathname();
    const { toggleSidebar, isSidebarOpen } = useSidebar();

    const [currentClass, setCurrentClass] = useState({
        id: '1',
        name: 'Advanced Web Development',
        image: '/assets/class-1.jpg'
    });

    const enrolledClasses = [
        { id: '1', name: 'Advanced Web Development', image: '/assets/class-1.jpg' },
        { id: '2', name: 'Data Structures & Algorithms', image: '/assets/class-2.jpg' },
        { id: '3', name: 'Machine Learning Basics', image: '/assets/class-3.jpg' },
        { id: '4', name: 'UI/UX Design Principles', image: '/assets/class-4.jpg' },
    ];

    const handleImageError = (classId: string) => {
        setImageErrors(prev => ({ ...prev, [classId]: true }));
    };

    return (
        <nav className="sticky top-0 left-0 right-0 px-2 z-header bg-background border-b transition-all duration-300">
            <div className="max-w-full mx-auto px-4">
                <div className="flex items-center justify-between gap-4 h-14">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleSidebar}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                            aria-label="Toggle sidebar"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg overflow-hidden bg-muted flex items-center justify-center relative">
                                    <Image
                                        src={"./icon.jpg"}
                                        alt={"app logo"}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-lg lg:text-2xl font-bold font-mono">classroom</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
                            className="flex items-center gap-2 p-1 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold relative">
                                {!imageErrors[currentClass.id] ? (
                                    <Image
                                        src={currentClass.image}
                                        alt={currentClass.name}
                                        fill
                                        className="object-cover"
                                        onError={() => handleImageError(currentClass.id)}
                                    />
                                ) : (
                                    currentClass.name.charAt(0)
                                )}
                            </div>
                            <span className="hidden lg:flex text-sm lg:text-base font-semibold max-w-[200px] truncate">
                                {currentClass.name}
                            </span>
                            <div className="w-10 h-10 rounded-full overflow-hidden hover:bg-muted flex items-center justify-center text-muted-foreground font-bold relative transition-colors cursor-pointer">
                                <ChevronsUpDown className={`w-4 h-4 transition-transform`} />
                            </div>
                        </button>

                        {isClassDropdownOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setIsClassDropdownOpen(false)}
                                />
                                <div className="absolute top-full left-0 mt-2 w-72 bg-background border rounded-lg shadow-lg z-20 overflow-hidden">
                                    <Link href="/app/app/classroom/discover" className="w-full flex items-center gap-3 p-3 hover:bg-muted transition-colors">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-primary flex items-center justify-center text-white font-bold flex-shrink-0 relative">
                                            <Plus className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <p className="text-sm font-medium line-clamp-2">Join new class</p>
                                        </div>
                                    </Link>
                                    <div className="p-2 border-y bg-muted/50">
                                        <p className="text-xs font-medium text-muted-foreground px-2">Your Enrolled Classes</p>
                                    </div>
                                    <div className="max-h-[400px] overflow-y-auto">
                                        {enrolledClasses.map((classItem) => (
                                            <button
                                                key={classItem.id}
                                                onClick={() => {
                                                    setCurrentClass(classItem);
                                                    setIsClassDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center gap-3 p-3 hover:bg-muted transition-colors ${currentClass.id === classItem.id ? 'bg-muted' : ''
                                                    }`}
                                            >
                                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0 relative">
                                                    {!imageErrors[classItem.id] ? (
                                                        <Image
                                                            src={classItem.image}
                                                            alt={classItem.name}
                                                            fill
                                                            className="object-cover"
                                                            onError={() => handleImageError(classItem.id)}
                                                        />
                                                    ) : (
                                                        classItem.name.charAt(0)
                                                    )}
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <p className="text-sm font-medium line-clamp-2">{classItem.name}</p>
                                                </div>
                                                {currentClass.id === classItem.id && (
                                                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div></div>
                </div>
            </div>
        </nav>
    );
}
