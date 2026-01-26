import { Copyright } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import appLogo from "@/public/icon.png";

export default function BrandedFooter() {
  return (
    <footer className="w-full bg-background">
      <div className="max-w-5xl w-fit mx-auto px-6 py-4 flex items-center md:flex-row md:justify-between flex-wrap flex-col justify-center gap-6 relative">
        {/* Left Side - Powered by brand */}
        <div className="w-fit flex items-center gap-2 text-sm text-foreground bg-muted rounded-lg lg:fixed lg:bottom-5 lg:left-5">
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
        <div className="w-fit flex items-center flex-wrap gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Copyright className="w-4 h-4" />
            2025. Instructor Academy. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
