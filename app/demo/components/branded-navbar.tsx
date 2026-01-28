"use client";

import {
  Search,
  Bell,
  X,
  ShoppingCart,
  User,
  Globe,
  Menu,
  ChevronDown,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useParams } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";
import SearchBar from "./search-bar";
import appLogo from "../public/logo.png";
import Tooltip from "../../../components/ui/tooltip";

export default function BrandedNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const coachSlug = params.name as string;
  const coach = getCoachBySlug(coachSlug);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-background w-full z-header px-4">
      {/* Top Section - Logo, Search, Cart, Login */}
      <div className="transition-all duration-300 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 h-18">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href={`/${coachSlug}/home`}
              className="flex items-center gap-2 select-none"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center relative">
                <Image
                  src={coach?.image || appLogo}
                  alt="app logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="hidden sm:flex text-lg lg:text-xl font-bold capitalize font-mono">
                {coach?.name || "Demo coach"}
              </span>
            </Link>
          </div>
          <SearchBar className="hidden lg:flex" />
          {/* Desktop Right Section - SearchBar, Currency, Menu Items */}
          <div className="flex items-center justify-end gap-2">
            <div className="flex items-center gap-4">
              <Tooltip label="Inbox" position="bottom">
                <button className="flex items-center p-2 text-base font-medium text-foreground rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9h8m-8 4h6m4-9a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"></path></svg>
                </button>
              </Tooltip>
              <Tooltip label="Notifications" position="bottom">
                <button className="flex items-center p-2 text-base font-medium text-foreground rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 1.25A7.75 7.75 0 0 0 4.25 9v.704a3.53 3.53 0 0 1-.593 1.958L2.51 13.385c-1.334 2-.316 4.718 2.003 5.35q1.133.309 2.284.523l.002.005C7.567 21.315 9.622 22.75 12 22.75s4.433-1.435 5.202-3.487l.002-.005a29 29 0 0 0 2.284-.523c2.319-.632 3.337-3.35 2.003-5.35l-1.148-1.723a3.53 3.53 0 0 1-.593-1.958V9A7.75 7.75 0 0 0 12 1.25m3.376 18.287a28.5 28.5 0 0 1-6.753 0c.711 1.021 1.948 1.713 3.377 1.713s2.665-.692 3.376-1.713M5.75 9a6.25 6.25 0 1 1 12.5 0v.704c0 .993.294 1.964.845 2.79l1.148 1.723a2.02 2.02 0 0 1-1.15 3.071a26.96 26.96 0 0 1-14.187 0a2.02 2.02 0 0 1-1.15-3.07l1.15-1.724a5.03 5.03 0 0 0 .844-2.79z" clipRule="evenodd"></path></svg>
                </button>
              </Tooltip>
              {/* Profile Dropdown */}
              <div ref={profileRef} className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center p-2 text-base font-medium bg-muted text-muted-foreground rounded-full hover:bg-muted/90 transition-colors cursor-pointer"
                >
                  <User className="w-6 h-6" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-background rounded-3xl border shadow-lg overflow-hidden" style={{zIndex: 60}}>
                    <div className="p-4">
                      {/* Profile Header */}
                      <div className="flex flex-row items-center gap-3 mb-6">
                        <div className="w-15 h-15 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-10 h-10 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-lg">Demo user</h3>
                          <span className="font-semibold text-muted-foreground text-sm">
                            example@email.com
                          </span>
                        </div>
                      </div>

                      {/* Analytics Section */}
                      <div className="bg-muted/50 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">Analytics</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Last 90 days
                          </span>
                        </div>
                        <div className="h-20 flex items-end justify-between gap-1">
                          {[20, 35, 45, 30, 50, 55, 40, 60, 45, 35, 25].map(
                            (height, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-purple-500 to-pink-400 rounded-t"
                                style={{ height: `${height}%` }}
                              />
                            ),
                          )}
                        </div>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-1 mt-3 text-sm font-medium hover:text-primary transition-colors"
                        >
                          View All
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </Link>
                      </div>

                      {/* Menu Items */}
                      <div className="">
                        <Link
                          href="/dashboard/setting"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <Briefcase className="w-5 h-5" />
                          <span>Dashboard</span>
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
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
                              <path d="M20 15c0 1.864 0 2.796-.304 3.53a4 4 0 0 1-2.165 2.165C16.796 21 15.864 21 14 21h-3c-3.772 0-5.658 0-6.83-1.172C3 18.657 3 16.771 3 13V7a4 4 0 0 1 4-4"></path>
                              <path d="m10 8.5l.434 3.969a.94.94 0 0 0 .552.753c.686.295 1.971.778 3.014.778s2.328-.483 3.014-.778a.94.94 0 0 0 .553-.753L18 8.5m2.5-1v3.77M14 4L7 7l7 3l7-3z"></path>
                            </g>
                          </svg>
                          <span>My learning</span>
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"></path></svg>
                          <span>Cart</span>
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"
                            ></path>
                          </svg>
                          <span>Wishlist</span>
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <ellipse cx={18} cy={10} rx={4} ry={8}></ellipse>
                              <path d="M18 2C14.897 2 8.465 4.378 4.771 5.854C3.079 6.53 2 8.178 2 10s1.08 3.47 2.771 4.146C8.465 15.622 14.897 18 18 18"></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m11 22l-1.943-1.07A5.93 5.93 0 0 1 6.045 15"
                              ></path>
                            </g>
                          </svg>
                          <span>Subscriptions</span>
                        </Link>
                        <Link
                          href="/dashboard/setting"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <Settings className="w-5 h-5" />
                          <span>Settings</span>
                        </Link>
                      </div>

                      <div className="border-t mt-4 pt-4">
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            // Add sign out logic here
                          }}
                          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg hover:bg-muted transition-colors text-left"
                        >
                          <LogOut className="w-5 h-5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Menu Button */}
              <div ref={mobileMenuRef} className="lg:hidden flex relative">
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
                  <div className="absolute right-0 mt-2 w-80 bg-background rounded-3xl border shadow-lg overflow-hidden" style={{zIndex: 60}}>
                    <div className="max-sm:p-3 p-4 space-y-4">
                      {/* Searchbar Section */}
                      <div>
                        <SearchBar />
                      </div>
                      {/* Navigation Links */}
                      <div className="space-y-1">
                        <Link
                          href={`/${coachSlug}/home`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-1 py-2 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                        >
                          Home
                        </Link>
                        <Link
                          href={`/${coachSlug}/classroom`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-1 py-2 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                        >
                          Classroom
                        </Link>
                        <Link
                          href={`/${coachSlug}/membership`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-1 py-2 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                        >
                          Membership
                        </Link>
                        <Link
                          href={`/${coachSlug}/calendar`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-1 py-2 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                        >
                          Calendar
                        </Link>
                        <Link
                          href={`/${coachSlug}/community`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-1 py-2 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                        >
                          Community
                        </Link>
                        <Link
                          href={`/${coachSlug}/about`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-1 py-2 cursor-pointer text-base font-medium hover:text-primary transition-colors"
                        >
                          About
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
