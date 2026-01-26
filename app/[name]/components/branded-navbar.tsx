"use client";

import { Search, Bell, X, ShoppingCart, User, Globe, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useParams } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";
import SearchBar from "./search-bar";
import appLogo from "@/public/logo.png";
import Tooltip from "../../../components/ui/tooltip";

export default function BrandedNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const coachSlug = params.name as string;
  const coach = getCoachBySlug(coachSlug);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
              <span className="flex text-lg lg:text-xl font-bold capitalize font-mono">
                {coach?.name || "Demo coach"}
              </span>
            </Link>
          </div>
          <SearchBar />
          {/* Desktop Right Section - SearchBar, Currency, Menu Items */}
          <div className="flex items-center justify-end gap-2">
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
                  <div className="absolute right-0 mt-2 w-screen max-w-xs bg-background border rounded-lg shadow-xl overflow-hidden z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="p-4 space-y-3">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
