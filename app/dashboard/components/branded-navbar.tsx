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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SearchBar from "./search-bar";
import appLogo from "@/public/logo.png";

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

export default function BrandedNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDiscoverOpen, setIsMobileDiscoverOpen] = useState(true);
  const pathname = usePathname();
  const discoverRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  ];

  const discoverCategories = [
    {
      icon: <TicketIcon className="w-5 h-5" />,
      label: "Popular Programs",
      href: "/coachme/discover",
    },
    {
      icon: <ServiceIcon className="w-5 h-5" />,
      label: "Popular Services",
      href: "/coachme/discover/services",
    },
    {
      icon: <CoachIcon className="w-5 h-5" />,
      label: "Popular Coach/Tutors",
      href: "/coachme/discover/tutors",
    },
    { type: "divider" },
    {
      icon: <Code className="w-4 h-4" />,
      label: "Development",
      href: "/coachme/discover/development",
    },
    {
      icon: <Palette className="w-4 h-4" />,
      label: "Design",
      href: "/coachme/discover/design",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Business",
      href: "/coachme/discover/business",
    },
    {
      icon: <Video className="w-4 h-4" />,
      label: "Marketing",
      href: "/coachme/discover/marketing",
    },
    {
      icon: <Music className="w-4 h-4" />,
      label: "Music",
      href: "/coachme/discover/music",
    },
    {
      icon: <Camera className="w-4 h-4" />,
      label: "Photography",
      href: "/coachme/discover/photography",
    },
  ];

  const instructorLinks = [
    {
      icon: <GraduationCap className="w-4 h-4" />,
      label: "Become an Instructor",
      href: "/coachme/instructor/apply",
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
    <nav className="w-full bg-background md:sticky md:top-2 md:left-0 md:z-header px-4">
      <div className="transition-all duration-300 px-4 max-w-7xl mx-auto md:rounded-2xl md:shadow-sm">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <Link href="/coachme" className="flex items-center gap-2 select-none">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center relative">
              <Image
                src={appLogo}
                alt="app logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg lg:text-xl font-bold font-mono">
              Example coach
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/coachme/me/"
              className="px-3 py-2 text-base font-medium rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/coachme/me/about"
              className="px-3 py-2 text-base font-medium rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/coachme/instructor/apply"
              className="px-3 py-2 text-base font-medium rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
            >
              Faq
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-1">
              {/* Login Button */}
              <Link
                href="/coachme/auth"
                className="flex items-center px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Book a free call
              </Link>
            </div>
          </div>
          {/* Mobile Right Section - SearchBar, Currency, Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
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
                <div className="absolute right-0 mt-2 w-screen max-w-sm bg-background border rounded-lg shadow-xl overflow-hidden z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
                  <div className="p-4 space-y-3">
                    <Link
                      href="/coachme/me/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-sm font-semibold hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/coachme/me/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-sm font-semibold hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/coachme/faq"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-sm font-semibold hover:text-primary transition-colors"
                    >
                      Faq
                    </Link>

                    <div className="border-t" />

                    {/* Login and Signup Buttons */}
                    <div className="space-y-2">
                      <Link
                        href="/coachme/auth"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Book a free call
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
