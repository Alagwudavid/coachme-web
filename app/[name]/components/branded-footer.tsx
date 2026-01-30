"use client";

import { Copyright } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";
import appLogo from "@/public/icon.png";

export default function BrandedFooter() {
  const params = useParams();
  const coachSlug = params.name as string;
  const coach = getCoachBySlug(coachSlug);
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-muted/70 p-4 sm:px-6 py-16 space-y-8 border-t">
      {/* Social Icons */}
      <div className="max-w-5xl w-fit mx-auto flex gap-2 items-center justify-start flex-wrap">
        <a
          href="#"
          className="w-10 h-10 hover:text-muted-foreground  text-primary flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeWidth={1.5}
                d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d="M7.008 7h-.009"
              ></path>
              <path
                strokeWidth={1.5}
                d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
              ></path>
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 hover:text-muted-foreground  flex items-center justify-center transition-colors"
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
              d="M7.125 3.75h9.75c.813 0 1.468 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47q.01.12.016.247a.75.75 0 0 1 .014.336c.013.41.013.879.013 1.417v5.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.532.043-1.187.043-2 .043h-9.75c-.813 0-1.468 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.32-.924-.365-1.47c-.044-.531-.044-1.187-.044-2V9.268c0-.538 0-1.007.013-1.417a.75.75 0 0 1 .014-.336q.007-.128.017-.246c.044-.547.139-1.027.365-1.471a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.532-.043 1.187-.043 2-.043M20.85 7.341c-.038-.423-.105-.672-.202-.862a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038H7.157c-.852 0-1.446 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.096.19-.164.439-.202.862l6.604 4.403c1.01.674 1.363.895 1.722.981a2.25 2.25 0 0 0 1.048 0c.36-.086.711-.307 1.723-.981z"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 hover:text-muted-foreground  flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
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
              <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"></path>
              <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"></path>
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 hover:text-muted-foreground  text-blue-500 flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"></path>
              <path
                strokeLinecap="round"
                d="M16.927 8.026h-2.945a1.9 1.9 0 0 0-1.9 1.886l-.086 11.515m-1.914-7.425h4.803"
              ></path>
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 hover:text-muted-foreground  text-pink-500 flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path
                strokeDasharray={66}
                d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="66;0"
                ></animate>
              </path>
              <path
                strokeDasharray={28}
                strokeDashoffset={28}
                d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.6s"
                  to={0}
                ></animate>
              </path>
            </g>
            <circle cx={17} cy={7} r={1.5} fill="currentColor" opacity={0}>
              <animate
                fill="freeze"
                attributeName="opacity"
                begin="1.3s"
                dur="0.2s"
                to={1}
              ></animate>
            </circle>
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 hover:text-muted-foreground  text-green-500 flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22Z"></path>
              <path
                strokeLinecap="round"
                d="M12.882 12C14.052 12 15 13.007 15 14.25s-.948 2.25-2.118 2.25h-2.47c-.666 0-.998 0-1.205-.203S9 15.768 9 15.115V12m3.882 0C14.052 12 15 10.993 15 9.75s-.948-2.25-2.118-2.25h-2.47c-.666 0-.998 0-1.205.203S9 8.232 9 8.885V12m3.882 0H9"
              ></path>
            </g>
          </svg>
        </a>
      </div>
      <div className="max-w-5xl w-fit mx-auto flex items-center md:flex-row md:justify-between flex-wrap flex-col justify-center gap-6 relative">
        {/* Left Side - Powered by brand */}
        <div className="w-fit flex items-center gap-2 text-sm text-foreground bg-background border rounded-lg lg:fixed lg:bottom-5 lg:left-5 z-[9999]">
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
        <div className="w-fit flex items-center flex-wrap gap-6 text-base text-foreground">
          <span className="flex items-center">
            <Copyright className="w-4 h-4" />
            {currentYear}. {coach?.name || "Coach"}. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
