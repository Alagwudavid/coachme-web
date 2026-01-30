"use client";

import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Copyright,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import appLogo from "@/public/icon.png";
import privacyChoiceImage from "@/public/privacy-choices-icon.png";
import playStoreDownloadImage from "@/public/play-store-mobile-text-label.png";
import appStoreDownloadImage from "@/public/app-store-mobile-text-label.png";
import { useRef, useState } from "react";
import { PreferenceModal } from "./PreferenceModal";

export default function Footer() {
  const [isPreferenceFilterOpen, setIsPreferenceFilterOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const preferenceFilterRef = useRef<HTMLDivElement>(null);

  return (
    <footer className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Copyright and Links */}
          <div className="flex flex-wrap items-center gap-4 text-base text-foreground">
            <Link
              href="/terms"
              className="hover:text-foreground/70 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground/70 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal"
              className="hover:text-foreground/70 transition-colors"
            >
              Legal
            </Link>
            <Link
              href="/cookies"
              className="hover:text-foreground/70 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/cookie-preferences"
              className="hover:text-foreground/70 transition-colors"
            >
              Manage Cookie Preferences
            </Link>
          </div>
          {/* Country/Language Selector */}
          <div className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/80 transition-colors">
            <button onClick={() => setIsPreferenceFilterOpen(true)} className="flex items-center p-2 text-sm font-medium text-foreground rounded-lg border hover:bg-muted/80 transition-colors cursor-pointer">
              <Globe className="w-5 h-5" />
            </button>
            <span>NGN</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6 flex items-center justify-between border-t">
        {/* Left Side - Powered by brand */}
        <div className="flex items-center gap-2 text-foreground">
          {/* Logo */}
          <Link href="/coachme" className="select-none">
            <div className="w-6 h-6 rounded overflow-hidden bg-muted flex items-center justify-center relative">
              <Image
                src={appLogo}
                alt="app logo"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <span className="text-lg lg:text-xl font-bold font-mono">
            CoachMe, LLC.
          </span>
          <span className="flex items-center font-semibold text-muted-foreground gap-1">
            <Copyright className="w-4 h-4" />
            2025 - {currentYear}.
          </span>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              ></path>
            </svg>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.334 3.5a.75.75 0 0 0-.338 1.154l5.614 7.45l-5.915 6.345l-.044.051H6.03l4.83-5.179l3.712 4.928a.75.75 0 0 0 .337.251h4.422a.75.75 0 0 0 .336-1.154l-5.614-7.45L20.017 4.5h-2.05l-4.83 5.18l-3.714-4.928a.75.75 0 0 0-.337-.252zm10.88 13.548L6.431 5.952H8.45l9.114 12.095z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <PreferenceModal
        isOpen={isPreferenceFilterOpen}
        onClose={() => setIsPreferenceFilterOpen(false)}
        onSave={(preferences) => {
          console.log("Preferences saved:", preferences);
        }}
      />
    </footer>
  );
}
