"use client";

import {
  Search,
  Bell,
  X,
  ShoppingCart,
  Plus,
  Flame,
  Inbox,
  User,
  LogOut,
  SquarePen,
  Bolt,
  Crown,
  Info,
  Puzzle,
  Users,
  ChevronDown,
  Menu,
  BookOpen,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Video,
  Code,
  Palette,
  Music,
  Camera,
  Building,
  Heart,
  Briefcase,
  UserCircle,
  Settings,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SearchBar from "./search-bar";
import appLogo from "@/public/icon.png";
import Tooltip from "@/components/ui/tooltip";

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
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
const TicketIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.008 19.003L14.014 17a1.001 1.001 0 0 1 2.005 0v1.977c0 .481 0 .722.154.87c.155.147.39.137.863.117c1.863-.079 3.008-.33 3.814-1.136c.81-.806 1.061-1.951 1.14-3.817c.015-.37.023-.556-.046-.679c-.07-.123-.345-.277-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.308.828-.463.897-.586s.061-.308.045-.679c-.078-1.866-.33-3.01-1.139-3.817c-.877-.876-2.155-1.097-4.322-1.153a.497.497 0 0 0-.51.497V7a1.001 1.001 0 0 1-2.005 0l-.007-2.501a.5.5 0 0 0-.5-.499H9.994c-3.78 0-5.67 0-6.845 1.172c-.81.806-1.061 1.951-1.14 3.817c-.015.37-.023.556.046.679c.07.123.345.278.897.586a1.999 1.999 0 0 1 0 3.492c-.552.309-.828.463-.897.586s-.061.308-.045.678c.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h3.01c.472 0 .707 0 .854-.146s.148-.38.149-.851M16.018 13v-2a1.001 1.001 0 0 0-2.005 0v2a1.002 1.002 0 0 0 2.006 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
const ProductIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 7h6m-3 3v-6"
      ></path>
    </svg>
  );
};
const ServiceIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15M8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44s-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.2 3.2 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28m-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701"
      ></path>
    </svg>
  );
};
const CoachIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M15 2.458A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.458-3"></path>
        <path d="M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-9.5 9.5l.56-.98A5 5 0 0 1 10.402 16h3.196a5 5 0 0 1 4.341 2.52l.56.98m.475-17.479c.006-.028.046-.028.052 0a3.79 3.79 0 0 0 2.953 2.953c.028.006.028.046 0 .052a3.79 3.79 0 0 0-2.953 2.953c-.006.028-.046.028-.052 0a3.79 3.79 0 0 0-2.953-2.953c-.028-.006-.028-.046 0-.052a3.79 3.79 0 0 0 2.953-2.953"></path>
      </g>
    </svg>
  );
};

const DevIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
        <path
          strokeLinecap="round"
          d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"
        ></path>
      </g>
    </svg>
  );
};
const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8.25 0C1.87 0-.86 7.38.24 9.92c.82 1.89 2.62.08 3.34 1c1.88 2.46-2.11 3.81.09 4.68C6.26 16.66 16 16 16 7.07C16 4.38 14.66 0 8.25 0M4.47 9A1.5 1.5 0 1 1 6 7.5A1.5 1.5 0 0 1 4.5 9h-.032zM6 3.5A1.5 1.5 0 1 1 7.5 5h-.032A1.5 1.5 0 0 1 6 3.5M8.47 14A1.5 1.5 0 1 1 10 12.5A1.5 1.5 0 0 1 8.5 14h-.032zm4-3A1.5 1.5 0 1 1 14 9.5a1.5 1.5 0 0 1-1.5 1.5h-.032zm0-5A1.5 1.5 0 1 1 14 4.5A1.5 1.5 0 0 1 12.5 6h-.032z"
      ></path>
    </svg>
  );
};
const MarketingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx={18} cy={10} rx={4} ry={8}></ellipse>
        <path d="M18 2C14.897 2 8.465 4.378 4.771 5.854C3.079 6.53 2 8.178 2 10s1.08 3.47 2.771 4.146C8.465 15.622 14.897 18 18 18"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11 22l-1.943-1.07A5.93 5.93 0 0 1 6.045 15"
        ></path>
      </g>
    </svg>
  );
};

const MusicIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 6a4 4 0 0 0-4.608-3.953l-7 1.077A4 4 0 0 0 7 7.078v8.763a3.5 3.5 0 1 0 2 3.163V7.078A2 2 0 0 1 10.696 5.1l7-1.077A2 2 0 0 1 20 6.001v6.84a3.5 3.5 0 1 0 2 3.163zm-2 10.004a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-13 3a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const PhotographyIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx={12} cy={13} r={3}></circle>
        <path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"></path>
        <path strokeLinecap="round" d="M19 10h-1"></path>
      </g>
    </svg>
  );
};

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDiscoverClickedOpen, setIsDiscoverClickedOpen] = useState(false);
  const [isAboutClickedOpen, setIsAboutClickedOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDiscoverOpen, setIsMobileDiscoverOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const pathname = usePathname();
  const discoverRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const discoverCategories = {
    leftColumn: [
      {
        icon: <ProductIcon className="w-5 h-5" />,
        label: "Products",
        href: "/coachme/discover/products",
      },
      {
        icon: <TicketIcon className="w-5 h-5" />,
        label: "Events",
        href: "/coachme/discover/events",
      },
      {
        icon: <ServiceIcon className="w-5 h-5" />,
        label: "Services",
        href: "/coachme/discover/services",
      },
      {
        icon: <CoachIcon className="w-5 h-5" />,
        label: "Creators",
        href: "/coachme/discover/creator",
      },
    ],
    rightColumn: [
      {
        icon: <DevIcon className="w-5 h-5" />,
        label: "Development",
        href: "/coachme/discover/development",
      },
      {
        icon: <DesignIcon className="w-5 h-5" />,
        label: "Design",
        href: "/coachme/discover/design",
      },
      {
        icon: <Briefcase className="w-5 h-5" />,
        label: "Business",
        href: "/coachme/discover/business",
      },
      {
        icon: <MarketingIcon className="w-5 h-5" />,
        label: "Marketing",
        href: "/coachme/discover/marketing",
      },
      {
        icon: <MusicIcon className="w-5 h-5" />,
        label: "Music",
        href: "/coachme/discover/music",
      },
      {
        icon: <PhotographyIcon className="w-5 h-5" />,
        label: "Photography",
        href: "/coachme/discover/photography",
      },
    ],
  };

  const instructorLinks = [
    {
      icon: <GraduationCap className="w-4 h-4" />,
      label: "Become an Instructor",
      href: "/coachme/creator/join",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      label: "Teaching Resources",
      href: "/coachme/instructor/resources",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Instructor Community",
      href: "/coachme/instructor/community",
    },
    {
      icon: <Building className="w-4 h-4" />,
      label: "For Organizations",
      href: "/coachme/instructor/organizations",
    },
  ];

  const aboutLinks = {
    leftColumn: [
      { label: "How Coachme works", href: "/coachme/how-it-works" },
      { label: "Pricing", href: "/coachme/pricing" },
      { label: "Help Centre", href: "/coachme/help" },
      { label: "Documentation", href: "/coachme/docs" },
    ],
    rightColumn: [
      { label: "About Coachme", href: "/coachme#about-us" },
      { label: "Blog", href: "/coachme/press" },
      { label: "Careers", href: "/coachme/careers" },
    ],
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        discoverRef.current &&
        !discoverRef.current.contains(event.target as Node)
      ) {
        setIsDiscoverOpen(false);
      }
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <Link href="/coachme" className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-muted flex items-center justify-center relative">
              <Image
                src={appLogo}
                alt="app logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg lg:text-xl font-bold font-mono">
              coachme
            </span>
          </Link>
          <div className="w-full flex-1 lg: px-4">
            <div className="hidden lg:flex items-center gap-2">
              {/* Discover Dropdown */}
              <div ref={discoverRef} className="relative">
                <button
                  onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-2xl hover:bg-muted/70 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                >
                  Discover
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isDiscoverOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isDiscoverOpen && (
                  <div className="absolute left-0 mt-2 w-[500px] bg-background rounded-2xl border shadow-lg overflow-hidden z-50">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4 text-base text-muted-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 14 14"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M3.173 0c-.508 0-1 .046-1.462.098A1.84 1.84 0 0 0 .09 1.723A14 14 0 0 0 0 3.174c0 .504.043.992.092 1.452a1.84 1.84 0 0 0 1.62 1.625c.462.051.954.098 1.462.098q.172 0 .34-.007a5 5 0 0 1 1.115-1.72A5 5 0 0 1 6.342 3.51q.006-.166.006-.336a14 14 0 0 0-.093-1.451A1.84 1.84 0 0 0 4.634.098A13 13 0 0 0 3.174 0m0 7.62q-.087.564-.086 1.15c0 1.563.446 3.051 1.54 4.146q.381.38.82.658a1.8 1.8 0 0 1-.812.297c-.462.051-.954.098-1.462.098s-1-.047-1.462-.098a1.84 1.84 0 0 1-1.62-1.625c-.05-.46-.092-.948-.092-1.452s.043-.992.092-1.451a1.84 1.84 0 0 1 1.62-1.625c.462-.051.954-.098 1.462-.098m10.702-2.994a1.8 1.8 0 0 1-.296.815a5 5 0 0 0-.658-.819c-1.095-1.094-2.582-1.54-4.147-1.54q-.588 0-1.155.087c0-.502.043-.988.092-1.446A1.84 1.84 0 0 1 9.331.098C9.793.046 10.285 0 10.793 0s1 .046 1.462.098a1.84 1.84 0 0 1 1.62 1.625c.049.46.092.948.092 1.451s-.043.992-.092 1.452M6.395 6.39c-.499.5-.808 1.274-.808 2.38c0 1.104.31 1.879.808 2.378c.5.5 1.275.808 2.38.808s1.88-.309 2.378-.808c.5-.5.808-1.274.808-2.379s-.308-1.88-.808-2.379c-.499-.5-1.274-.808-2.379-.808s-1.88.309-2.379.808m-.883-.884c.796-.797 1.928-1.174 3.262-1.174s2.467.377 3.263 1.174c.797.797 1.174 1.928 1.174 3.263c0 1.087-.25 2.038-.772 2.785l1.38 1.379a.625.625 0 1 1-.885.884l-1.38-1.38c-.745.52-1.695.77-2.78.77c-1.334 0-2.466-.378-3.262-1.175c-.797-.797-1.175-1.928-1.175-3.263s.378-2.466 1.175-3.263"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="font-medium">
                          Browse popular category
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          {discoverCategories.leftColumn.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsDiscoverOpen(false)}
                              className="flex items-center gap-3 py-1.5 hover:text-primary transition-colors"
                            >
                              {item.icon}
                              <span className="text-sm">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {discoverCategories.rightColumn.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsDiscoverOpen(false)}
                              className="flex items-center gap-3 py-1.5 hover:text-primary transition-colors"
                            >
                              {item.icon}
                              <span className="text-sm">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* About Dropdown */}
              <div ref={aboutRef} className="relative">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-2xl hover:bg-muted/70 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                >
                  About
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isAboutOpen && (
                  <div className="absolute left-0 mt-2 w-[500px] bg-background rounded-2xl border shadow-lg overflow-hidden z-50">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4 text-base text-muted-foreground">
                        <Info className="w-6 h-6" />
                        <span className="font-medium">
                          How it works, pricing and more
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          {aboutLinks.leftColumn.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsAboutOpen(false)}
                              className="block py-1.5 text-base hover:text-primary transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {aboutLinks.rightColumn.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsAboutOpen(false)}
                              className="block py-1.5 text-base hover:text-primary transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <SearchBar />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Tooltip label="Language & Currency" position="bottom">
              <button className="flex items-center p-2 text-base font-medium text-foreground rounded-lg border hover:bg-muted/80 transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </button>
            </Tooltip>
            <Tooltip label="Shopping Cart" position="bottom">
              <button className="flex items-center p-2 text-base font-medium text-foreground rounded-full hover:bg-muted/80 transition-colors cursor-pointer">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </Tooltip>
            {/* Login Button */}
            <Tooltip label="Login / Register" position="bottom">
              <Link
                href="/coachme/auth"
                className="flex items-center p-2 text-base font-medium bg-muted text-muted-foreground rounded-full hover:bg-muted/90 transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
            </Tooltip>
          </div>
          {/* Mobile Right Section - SearchBar, Currency, Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Tooltip label="Language & Currency" position="bottom">
                <button className="max-sm:hidden flex items-center p-2 text-base font-medium text-foreground rounded-lg border hover:bg-muted/80 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </button>
              </Tooltip>
              <Tooltip label="Shopping Cart" position="bottom">
                <button className="flex items-center p-2 text-base font-medium text-foreground rounded-full hover:bg-muted/80 transition-colors cursor-pointer">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </Tooltip>
              <Tooltip label="Wishlist" position="bottom">
                <button className="flex items-center p-2 text-base font-medium text-foreground rounded-full hover:bg-muted/80 transition-colors cursor-pointer">
                  <Heart className="w-5 h-5" />
                </button>
              </Tooltip>
              {/* Login Button */}
              <Link
                href="/coachme/auth"
                className="flex items-center p-2 text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
            </div>
            {/* Menu Button */}
            <div ref={mobileMenuRef} className="relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Mobile Menu Dropdown */}
              {isMobileMenuOpen && (
                <div className="absolute -right-1/2 md:right-0 mt-2 w-screen max-w-sm bg-background border max-sm:rounded rounded-lg shadow-xl overflow-hidden z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
                  <div className="max-sm:p-2 p-4 space-y-3">
                    {/* Discover Section */}
                    <div>
                      <button
                        onClick={() =>
                          setIsMobileDiscoverOpen(!isMobileDiscoverOpen)
                        }
                        className="w-full text-base font-semibold text-muted-foreground mb-2 flex items-center justify-between hover:text-primary transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          Discover
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isMobileDiscoverOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isMobileDiscoverOpen && (
                        <div className="space-y-3 pl-4">
                          <div className="space-y-1">
                            {discoverCategories.leftColumn.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsDiscoverOpen(false)}
                                className="flex items-center gap-3 py-1.5 hover:text-primary transition-colors"
                              >
                                {item.icon}
                                <span className="text-sm">{item.label}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-1">
                            {discoverCategories.rightColumn.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsDiscoverOpen(false)}
                                className="flex items-center gap-3 py-1.5 hover:text-primary transition-colors"
                              >
                                {item.icon}
                                <span className="text-sm">{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t" />

                    {/* Become a coach Button */}
                    <Link
                      href="/coachme/creator/join"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-base font-semibold hover:text-primary transition-colors"
                    >
                      Become a coach
                    </Link>

                    {/* About Section */}
                    <div>
                      <button
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        className="w-full text-base font-semibold text-muted-foreground mb-2 flex items-center justify-between hover:text-primary transition-colors"
                      >
                        <span className="flex items-center gap-2">About</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isMobileAboutOpen && (
                        <div className="space-y-3 pl-4">
                          <div className="space-y-1">
                            {aboutLinks.leftColumn.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-1.5 text-base hover:text-primary transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-1">
                            {aboutLinks.rightColumn.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-1.5 text-base hover:text-primary transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t" />

                    {/* Login and Signup Buttons */}
                    <div className="space-y-2">
                      <Link
                        href="/coachme/auth"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-base font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
