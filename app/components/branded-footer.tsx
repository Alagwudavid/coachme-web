import { Copyright } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import appLogo from "@/public/icon.png";

export default function BrandedFooter() {
  return (
    <footer className="w-full bg-background">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        {/* Left Side - Powered by brand */}
        <div className="flex items-center gap-2 text-sm text-foreground bg-muted rounded-lg">
          <span className="flex items-center p-2 pr-0">Powered by</span>
          {/* Logo */}
          <Link
            href="/coachme"
            className="flex items-center gap-2 select-none p-2 pl-0"
          >
            <div className="w-5 h-5 rounded overflow-hidden bg-muted flex items-center justify-center relative">
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
        </div>
        {/* Center Side - Copyright and Links */}
        <div className="flex items-center flex-wrap gap-6 text-sm text-foreground">
          <span className="flex items-center gap-1">
            <Copyright className="w-4 h-4" />
            2025. Instructor Academy. All Rights Reserved
          </span>
        </div>

        {/* Right Side - Status Dots */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <button className="text-foreground transition-colors">
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
