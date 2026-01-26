'use client';

import { House, ListTodo, Archive, Flag, Video, Users, Plus, MoreHorizontal, Grid3x3, Settings2, ChevronRight, ChevronUp, ShieldQuestionIcon, Languages, Moon, Sun, Monitor, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Tooltip from '@/components/ui/tooltip';
import { DropdownMenu, DropdownItem, DropdownDivider } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/lib/use-theme';
import { useSidebar } from './sidebar-context';

interface SidebarProps {
    className?: string;
}
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
const DiscoverIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="CurrentColor" strokeWidth="1.5" /><path d="M13.024 14.5601C10.7142 15.484 9.5593 15.946 8.89964 15.4977C8.74324 15.3914 8.60834 15.2565 8.50206 15.1001C8.0538 14.4405 8.51575 13.2856 9.43967 10.9758C9.63673 10.4831 9.73527 10.2368 9.90474 10.0435C9.94792 9.99429 9.99429 9.94792 10.0435 9.90474C10.2368 9.73527 10.4831 9.63673 10.9758 9.43966C13.2856 8.51575 14.4405 8.0538 15.1001 8.50206C15.2565 8.60834 15.3914 8.74324 15.4977 8.89964C15.946 9.5593 15.484 10.7142 14.5601 13.024C14.363 13.5166 14.2645 13.763 14.095 13.9562C14.0518 14.0055 14.0055 14.0518 13.9562 14.095C13.763 14.2645 13.5166 14.363 13.024 14.5601Z" stroke="CurrentColor" strokeWidth="1.5" /></svg>
);
const EventsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"></path></svg>
);
const LearnIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></path><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></path><path strokeLinecap="round" d="M8 7h8m-8 3.5h5"></path></g></svg>
);
const TasksIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}><path d="M29.368 3.08c.897.28 3.777 1.422 7.937 5.479c3.92 3.823 5.187 6.538 5.559 7.57C42.947 18.37 43 20.98 43 24c0 8.065-.375 13.204-.717 16.214c-.25 2.202-1.903 3.848-4.103 4.105c-2.815.329-7.413.681-14.18.681s-11.365-.352-14.18-.68c-2.2-.258-3.853-1.904-4.103-4.106C5.375 37.204 5 32.064 5 24s.375-13.204.717-16.214C5.967 5.584 7.62 3.938 9.82 3.68C12.635 3.353 17.233 3 24 3c1.97 0 3.756.03 5.368.08M13 37h22m-22-7h22"></path><path d="M13 22.868c2.572-3.93 4.717-5.656 5.896-6.38c.557-.343 1.23-.119 1.52.468c.663 1.345 1.29 3.193 1.737 4.66c.264.86 1.52 1.045 2.073.335C26.452 19.095 29.5 16.5 29.5 16.5m4.067 1.82c.44-2.324.457-4.363.42-5.443a.89.89 0 0 0-.864-.865a25.5 25.5 0 0 0-5.444.42c-.754.143-1.004 1.062-.46 1.605l4.744 4.745c.543.543 1.461.293 1.604-.461"></path></g></svg>
);
const CourseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v11.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM9 9.25v5.5a1 1 0 0 0 1.482.876l5-2.75a1 1 0 0 0 0-1.752l-5-2.75A1 1 0 0 0 9 9.251"></path></svg>
);
const LibraryIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5} d="M2.75 8.623v7.379a4 4 0 0 0 4 4h10.5a4 4 0 0 0 4-4v-5.69a4 4 0 0 0-4-4H12M2.75 8.624V6.998a3 3 0 0 1 3-3h2.9a2.5 2.5 0 0 1 1.768.732L12 6.313m-9.25 2.31h5.904a2.5 2.5 0 0 0 1.768-.732L12 6.313"></path></svg>;
}
const CertificateIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.5 22c-4.007 0-6.01 0-7.255-1.465C3 19.072 3 16.714 3 12s0-7.071 1.245-8.536S7.493 2 11.5 2s6.01 0 7.255 1.464c1.002 1.18 1.198 2.937 1.236 6.036M8 8h7m-7 5h3"></path><path d="M19.61 18.105A3.375 3.375 0 0 0 17.625 12h-.251a3.375 3.375 0 0 0-1.984 6.105m4.218 0a3.36 3.36 0 0 1-1.984.645h-.25a3.36 3.36 0 0 1-1.984-.645m4.218 0l.583 1.835c.222.7.334 1.05.303 1.268c-.063.454-.433.79-.87.792c-.21 0-.524-.164-1.153-.494c-.27-.142-.404-.212-.542-.254a1.5 1.5 0 0 0-.86 0c-.138.042-.273.112-.542.254c-.629.33-.943.495-1.153.494c-.437-.002-.807-.338-.87-.792c-.03-.218.08-.568.303-1.268l.583-1.835"></path></g></svg>;
}
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h8m-8-5h14m-8-5h8" /></svg>;
}
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5} d="M15.29 20.663h3.017a2.194 2.194 0 0 0 2.193-2.194v-6.454a3.3 3.3 0 0 0-1.13-2.48l-5.93-5.166a2.194 2.194 0 0 0-2.88 0L4.63 9.534a3.3 3.3 0 0 0-1.13 2.481v6.454c0 1.212.982 2.194 2.194 2.194h3.29m6.306 0v-6.581c0-.908-.736-1.645-1.645-1.645H10.63c-.909 0-1.645.737-1.645 1.645v6.581m6.306 0H8.984"></path></svg>;
}
const PinIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m15.99 4.95l.53-.53zm3.082 3.086l-.531.53zM8.738 19.429l-.53.53zm-4.116-4.12l.53-.53zm12.945-.315l-.264-.702zm-1.917.72l.264.703zM8.332 8.383l-.704-.258zm.695-1.896l.704.258zm-3.182 4.188l.2.723zm1.457-.539l-.439-.609zm.374-.345l.57.487zm6.575 6.59l.491.568zm-.87 1.821l-.724-.199zm.536-1.454l-.61-.438zM2.718 12.755l-.75.005zm.212-.803l-.65-.374zm8.375 9.391l.001-.75zm.788-.208l-.371-.652zm-.396-19.099l.162.732zM1.47 21.47a.75.75 0 0 0 1.062 1.06zm5.715-3.598a.75.75 0 0 0-1.061-1.06zM15.459 5.48l3.082 3.086l1.061-1.06L16.52 4.42zM9.269 18.9l-4.117-4.12l-1.06 1.06l4.116 4.12zm8.034-4.607l-1.917.72l.528 1.405l1.917-.72zM9.036 8.64l.695-1.896l-1.409-.516l-.694 1.896zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.877-1.218c-.172.125-.397.198-1.217.424zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637zm.112 2.62q.281-.203.507-.467l-1.142-.973a1.4 1.4 0 0 1-.242.222zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531zM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.219-.875c-.317.443-.454.983-.65 1.693zm-.344-2.586q-.256.22-.453.495l1.22.875q.093-.132.215-.236zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444c-.286-.359-.315-.514-.316-.583l-1.5.009c.004.582.293 1.07.642 1.508c.35.44.861.95 1.481 1.57zm.494-4.828c-.846.234-1.542.424-2.063.634c-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35s1.022-.337 1.903-.58zm-2.178 2.8a.84.84 0 0 1 .112-.424l-1.3-.748a2.34 2.34 0 0 0-.312 1.182zm4.74 7.21c.624.624 1.137 1.139 1.578 1.49c.441.352.932.642 1.518.643l.002-1.5c-.07 0-.225-.029-.585-.316c-.36-.286-.802-.727-1.452-1.378zm4.45-1.958c-.245.888-.412 1.49-.583 1.917c-.172.428-.293.53-.353.564l.743 1.303c.509-.29.792-.786 1.002-1.309c.21-.524.402-1.225.637-2.077zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.84.84 0 0 1-.416.11zm7.237-13.527c1.064 1.064 1.8 1.803 2.25 2.413c.444.598.495.917.441 1.167l1.466.317c.19-.878-.16-1.647-.701-2.377c-.534-.72-1.366-1.551-2.395-2.58zm-.71 7.13c1.361-.511 2.463-.923 3.246-1.358c.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88c-.663.369-1.638.737-3.046 1.266zM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414c-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.171.443c.613.455 1.358 1.197 2.429 2.27zM9.73 6.744c.522-1.423.886-2.41 1.251-3.08c.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642c-.431.792-.837 1.906-1.342 3.282zM2.53 22.53l4.654-4.658l-1.061-1.06l-4.654 4.658z"></path></svg>;
}
const SettingIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={2}><path d="M3.082 13.945c-.529-.95-.793-1.426-.793-1.945s.264-.994.793-1.944L4.43 7.63l1.426-2.381c.559-.933.838-1.4 1.287-1.66c.45-.259.993-.267 2.08-.285L12 3.26l2.775.044c1.088.018 1.631.026 2.08.286s.73.726 1.288 1.659L19.57 7.63l1.35 2.426c.528.95.792 1.425.792 1.944s-.264.994-.793 1.944L19.57 16.37l-1.426 2.381c-.559.933-.838 1.4-1.287 1.66c-.45.259-.993.267-2.08.285L12 20.74l-2.775-.044c-1.088-.018-1.631-.026-2.08-.286s-.73-.726-1.288-1.659L4.43 16.37z"></path><circle cx={12} cy={12} r={3}></circle></g></svg>;
}
const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>;
}
const AffiliateIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Zm14-8c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></path><path strokeLinecap="round" d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></path></g></svg>;
}

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.464 16.828C2 15.657 2 14.771 2 11s0-5.657 1.464-6.828C4.93 3 7.286 3 12 3s7.071 0 8.535 1.172S22 7.229 22 11s0 4.657-1.465 5.828C19.072 18 16.714 18 12 18c-2.51 0-3.8 1.738-6 3v-3.212c-1.094-.163-1.899-.45-2.536-.96"></path></svg>;
}

const ActivityIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 1.25A7.75 7.75 0 0 0 4.25 9v.704a3.53 3.53 0 0 1-.593 1.958L2.51 13.385c-1.334 2-.316 4.718 2.003 5.35q1.133.309 2.284.523l.002.005C7.567 21.315 9.622 22.75 12 22.75s4.433-1.435 5.202-3.487l.002-.005a29 29 0 0 0 2.284-.523c2.319-.632 3.337-3.35 2.003-5.35l-1.148-1.723a3.53 3.53 0 0 1-.593-1.958V9A7.75 7.75 0 0 0 12 1.25m3.376 18.287a28.5 28.5 0 0 1-6.753 0c.711 1.021 1.948 1.713 3.377 1.713s2.665-.692 3.376-1.713M5.75 9a6.25 6.25 0 1 1 12.5 0v.704c0 .993.294 1.964.845 2.79l1.148 1.723a2.02 2.02 0 0 1-1.15 3.071a26.96 26.96 0 0 1-14.187 0a2.02 2.02 0 0 1-1.15-3.07l1.15-1.724a5.03 5.03 0 0 0 .844-2.79z" clipRule="evenodd" /></svg>;
}

const AppsIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect width="6.5" height="6.5" x="3.75" y="3.75" rx="2" /><path d="M15.586 3.818a2 2 0 0 1 2.828 0l1.768 1.768a2 2 0 0 1 0 2.828l-1.768 1.768a2 2 0 0 1-2.828 0l-1.768-1.768a2 2 0 0 1 0-2.828z" /><rect width="6.5" height="6.5" x="3.75" y="13.75" rx="1.5" /><rect width="6.5" height="6.5" x="13.75" y="13.75" rx="2" /></g></svg>;
}

const DashboardIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1}><rect width={18.5} height={18.5} x={2.75} y={2.75} strokeWidth={1.5} rx={6}></rect><path strokeLinecap="round" strokeWidth={1.6} d="M7.672 16.222v-5.099m4.451 5.099V7.778m4.205 8.444V9.82"></path></g></svg>;
}

// Desktop sidebar navigation items
const navigationItems = [
    { icon: HomeIcon, label: 'Home', href: '/coachme/home' },
    { icon: ActivityIcon, label: 'Activity', href: '/coachme/discover' },
    // { icon: CourseIcon, label: 'Courses', href: '/coachme/courses' },
    { icon: EventsIcon, label: 'Events', href: '/coachme/calendar' },
    { icon: LearnIcon, label: 'Enrolled', href: '/coachme/me/enrolled' },
    { icon: LibraryIcon, label: 'Library', href: '/coachme/me/library' },
    { icon: TasksIcon, label: 'Todo', href: '/coachme/me/dashboard' },
    { icon: null, label: 'Profile', href: '/coachme/profile', isProfile: true },
];

// Bottom nav items for mobile (5 buttons)
const mobileNavItems = [
    { icon: HomeIcon, label: 'Home', href: '/coachme/home' },
    { icon: DiscoverIcon, label: 'Discover', href: '/coachme/discover' },
    // { icon: CommunitiesIcon, label: 'Communities', href: '/coachme/community' },
    { icon: null, label: 'Profile', href: '/coachme/profile', isProfile: true },
];

// Items that go in the "More" menu on mobile
const moreMenuItems = [
    { icon: DashboardIcon, label: 'Dashboard', href: '/coachme/me/dashboard' },
    { icon: AppsIcon, label: 'Apps & tools', href: '/coachme/#apps' },
    { icon: LibraryIcon, label: 'Library', href: '/coachme/me/library' },
    { icon: AffiliateIcon, label: 'Affiliate', href: '/coachme/me/archive' },
    { icon: Languages, label: 'Language', href: '/coachme/#apps' },
];

const communities = [
    { id: 1, name: 'Teachers Community', image: '/assets/academy-1.png', color: 'bg-indigo-500', notifications: 0 },
    { id: 2, name: 'Microsoft & Excel Academy', image: '/assets/academy-2.png', color: 'bg-gray-400', notifications: 0 },
    { id: 3, name: 'Creative Hub', image: '/assets/academy-3.png', color: 'bg-gradient-to-br from-red-400 to-yellow-400', notifications: 0 },
    { id: 4, name: 'GYM Bros', image: '/assets/academy-4.png', color: 'bg-gray-900', notifications: 14 },
];

export default function Sidebar({ className = '' }: SidebarProps) {
    const pathname = usePathname();
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [showMobileThemeMenu, setShowMobileThemeMenu] = useState(false);
    const { theme, setTheme } = useTheme();
    const { isSidebarOpen, setSidebarOpen } = useSidebar();

    return (
        <>
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-sidebar-overlay transition-opacity duration-300"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`flex fixed left-0 top-0 pt-14 h-full transition-all duration-300 bg-background flex-col items-center py-2 overflow-y-auto overflow-x-clip hide-scrollbar border-r ${className} 
                z-sidebar lg:${isSidebarOpen ? 'w-64' : 'w-20'}
                ${isSidebarOpen ? 'z-[101] w-64 shadow-2xl' : '-translate-x-full lg:translate-x-0 w-64 z-[101]'}
            `}>
                <div className="flex flex-col items-center justify-between w-full min-h-page pt-2">
                    {/* Navigation Icons */}
                    <div className="flex flex-col gap-1 mb-4 w-full px-3">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            const handleClick = () => {
                                // Close sidebar on mobile when clicking a link
                                if (window.innerWidth < 1024) {
                                    setSidebarOpen(false);
                                }
                            };
                            const linkContent = (
                                <Link
                                    href={item.href}
                                    onClick={handleClick}
                                    className={`relative flex items-center gap-3 ${item.isProfile ? 'rounded-full overflow-hidden' : 'rounded-xl'} transition-all hover:bg-muted ${isActive ? 'bg-primary text-white hover:text-muted-foreground' : 'text-foreground'
                                        } ${isSidebarOpen ? 'w-full px-4 py-3 justify-start' : 'w-12 h-12 justify-center mx-auto'}`}
                                >
                                    {item.isProfile ? (
                                        <Image
                                            src="/assets/user-1.png"
                                            alt="User profile image"
                                            width={40}
                                            height={40}
                                            className='rounded-full flex-shrink-0'
                                        />
                                    ) : Icon ? (
                                        <Icon className="w-6 h-6 flex-shrink-0" />
                                    ) : null}
                                    {isSidebarOpen && (
                                        <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                                    )}
                                </Link>
                            );
                            return (
                                <div key={item.href}>
                                    {isSidebarOpen ? linkContent : (
                                        <Tooltip label={item.label}>
                                            {linkContent}
                                        </Tooltip>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    {/* More Options */}
                    <div className="w-full px-3">
                        <DropdownMenu
                            trigger={
                                isSidebarOpen ? (
                                    <button className="flex items-center gap-3 rounded-xl bg-muted text-foreground transition-all mb-6 cursor-pointer hover:bg-muted/80 w-full px-4 py-3 justify-start">
                                        <MenuIcon className="w-7 h-7 flex-shrink-0" />
                                        <span className="text-sm font-medium">Menu</span>
                                    </button>
                                ) : (
                                    <Tooltip label="Menu">
                                        <button className="flex items-center gap-3 rounded-xl bg-muted text-foreground transition-all mb-6 cursor-pointer hover:bg-muted/80 w-12 h-12 justify-center mx-auto">
                                            <MenuIcon className="w-7 h-7 flex-shrink-0" />
                                        </button>
                                    </Tooltip>
                                )
                            }
                        >
                            <DropdownItem icon={<AppsIcon className="!w-5 !h-5" />}>
                                Apps & toolkit
                            </DropdownItem>
                            <DropdownItem icon={<LibraryIcon className="!w-5 !h-5" />}>
                                Library
                            </DropdownItem>
                            <DropdownItem icon={<AffiliateIcon className="!w-5 !h-5" />}>
                                Affiliate
                            </DropdownItem>
                            <DropdownItem icon={<Languages className="!w-5 !h-5" />}>
                                Language
                            </DropdownItem>
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowThemeMenu(!showThemeMenu);
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                                >
                                    <Moon className="!w-5 !h-5" />
                                    <span>Theme</span>
                                    <ChevronRight className="!w-4 !h-4 ml-auto" />
                                </button>
                                {showThemeMenu && (
                                    <div
                                        className="absolute left-full top-0 ml-1 w-48 bg-background rounded-xl shadow-lg border overflow-hidden z-50"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="py-2">
                                            <button
                                                onClick={() => {
                                                    setTheme('light');
                                                    setShowThemeMenu(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                                            >
                                                <Sun className="!w-5 !h-5" />
                                                <span>Light</span>
                                                {theme === 'light' && <Check className="!w-4 !h-4 ml-auto" />}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setTheme('dark');
                                                    setShowThemeMenu(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                                            >
                                                <Moon className="!w-5 !h-5" />
                                                <span>Dark</span>
                                                {theme === 'dark' && <Check className="!w-4 !h-4 ml-auto" />}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setTheme('system');
                                                    setShowThemeMenu(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                                            >
                                                <Monitor className="!w-5 !h-5" />
                                                <span>System</span>
                                                {theme === 'system' && <Check className="!w-4 !h-4 ml-auto" />}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <DropdownDivider />
                            <DropdownItem icon={<SettingIcon className="!w-5 !h-5" />}>
                                Account setting
                            </DropdownItem>
                            <DropdownItem icon={<ShieldQuestionIcon className="!w-5 !h-5" />}>
                                <Link href={"/coachme/me/tasks"} >Help center</Link>
                            </DropdownItem>
                            <DropdownItem icon={<LogoutIcon className="!w-5 !h-5" />}>
                                <Link href={"/coachme/auth"}>
                                    Logout
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </div>
                </div>
            </aside>
        </>
    );
}
