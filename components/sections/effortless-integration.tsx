"use client";

import type React from "react";
import Image from "next/image";
import appLogo from "@/public/icon.png";
import { Button } from "../ui/button";

interface EffortlessIntegrationProps {
  /** Fixed width from Membership: 482px */
  width?: number | string;
  /** Fixed height from Membership: 300px */
  height?: number | string;
  /** Optional className to pass to root */
  className?: string;
}

/**
 * Effortless Integration – Service integration constellation
 * Three concentric rings with logos positioned on ring axes
 */
const EffortlessIntegration: React.FC<EffortlessIntegrationProps> = ({
  width = "100%",
  height = "100vh",
  className = "px-4 sm:px-6 lg:px-8 py-12",
}) => {
  return (
    <section className="w-full bg-background min-h-screen flex items-center justify-center rounded-t-[52px] -mt-14 z-10">
      <div className="container mx-auto max-w-6xl relative overflow-visible">
        <div
          className={className}
          style={{
            width,
            height,
            position: "relative",
            overflow: "hidden",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.1) 100%)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />

          {/* Company logos positioned freely with floating animations */}
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {/* Central hub */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={appLogo}
                  alt="CoachMe Logo"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-4 text-center max-w-xs">
                Integrate all your favorite business tools and many more
              </p>
            </div>

            {/* Live sessions - Top Left */}
            <div
              className="group relative"
              style={{
                left: "20%",
                top: "20%",
                position: "absolute",
              }}
            >
              <div
                className="animate-float w-10 h-10 sm:w-12 sm:h-12 bg-foreground"
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-background"
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
                    <path d="M17 21c1.87 0 2.804 0 3.5-.402a3 3 0 0 0 1.098-1.098C22 18.804 22 17.87 22 16s0-2.804-.402-3.5a3 3 0 0 0-1.098-1.098C19.804 11 18.87 11 17 11H7c-1.87 0-2.804 0-3.5.402A3 3 0 0 0 2.402 12.5C2 13.196 2 14.13 2 16s0 2.804.402 3.5A3 3 0 0 0 3.5 20.598C4.196 21 5.13 21 7 21zM16 6c-.977-1.226-2.407-2-4-2s-3.023.774-4 2m6 2c-.489-.613-1.203-1-2-1s-1.511.387-2 1"></path>
                    <path d="M5 14v4h1.5M19 18h-2v-2m0 0v-2h2m-2 2h1.5M9 14v4m2.5-4l1.5 4l1.5-4"></path>
                  </g>
                </svg>
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
                  Live sessions
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Storefront - Right */}
            <div
              className="group relative"
              style={{
                right: "15%",
                top: "25%",
                position: "absolute",
              }}
            >
              <div
                className="animate-float-delay-1 w-10 h-10 sm:w-12 sm:h-12"
                style={{
                  background: "#d22f27",
                  color: "#ffffff",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172S20.5 17.771 20.5 14v-3"></path>
                    <path d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"></path>
                    <path d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"></path>
                    <path
                      strokeLinecap="round"
                      d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"
                    ></path>
                  </g>
                </svg>
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
                  Storefront
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Membership - Top Right */}
            <div
              className="group relative"
              style={{
                right: "42%",
                top: "10%",
                position: "absolute",
              }}
            >
              <div
                className="animate-float-delay-2 w-10 h-10 sm:w-12 sm:h-12"
                style={{
                  background: "#EEEFE8",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/telegram.svg"
                  alt="Membership"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
                  Membership
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Community - Left */}
            <div
              className="group relative"
              style={{
                left: "8%",
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
              }}
            >
              <div
                className="animate-float-delay-3 w-10 h-10 sm:w-12 sm:h-12"
                style={{
                  background: "#5865F2",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg"
                  alt="Community"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
                  Community
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Custom domain - Bottom Right */}
            <div
              className="group relative"
              style={{
                right: "38%",
                bottom: "18%",
                position: "absolute",
              }}
            >
              <div
                className="animate-float w-10 h-10 sm:w-12 sm:h-12 bg-foreground"
                style={{
                  // background: "#f2f2f3",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-background"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4.719-3.738a1.73 1.73 0 0 0-2.458 0a1.757 1.757 0 0 0 0 2.476a1.73 1.73 0 0 0 2.458 0a.75.75 0 0 1 1.062 1.059a3.23 3.23 0 0 1-4.583 0a3.257 3.257 0 0 1 0-4.594a3.23 3.23 0 0 1 4.583 0a.75.75 0 0 1-1.062 1.059M8.5 11.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m3.25-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M18 8.25c-1.395 0-2.5 1.15-2.5 2.536V14a.75.75 0 0 0 1.5 0v-3.214c0-.587.462-1.036 1-1.036s1 .45 1 1.036V14a.75.75 0 0 0 1.5 0v-3.214c0-.587.462-1.036 1-1.036s1 .45 1 1.036V14a.75.75 0 0 0 1.5 0v-3.214C24 9.4 22.895 8.25 21.5 8.25c-.686 0-1.301.278-1.75.725A2.47 2.47 0 0 0 18 8.25"
                  ></path>
                </svg>
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
                  Custom domain
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Multicurrency - Bottom Left */}
            <div
              className="group relative"
              style={{
                left: "18%",
                bottom: "20%",
                position: "absolute",
              }}
            >
              <div
                className="animate-float-delay-1 w-10 h-10 sm:w-12 sm:h-12"
                style={{
                  background: "#635BFF",
                  color: "#ffffff",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 7.027a6.044 6.044 0 0 1 12 1.016A6.044 6.044 0 0 1 16.973 14M8 22a6 6 0 1 0 0-12a6 6 0 0 0 0 12M2 9c0-3.317 2.683-6 6-6l-.857 1.714M22 15c0 3.317-2.683 6-6 6l.857-1.714"
                  ></path>
                </svg>
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
                  Multicurrency
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Calendar - Right Middle */}
            <div
              className="group relative"
              style={{
                right: "15%",
                top: "60%",
                position: "absolute",
              }}
            >
              <div
                className="animate-float-delay-2 w-10 h-10 sm:w-12 sm:h-12 bg-foreground dark:bg-muted"
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@16.6.0/icons/googlecalendar.svg"
                  alt="Calendar"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
                  Calendar
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffortlessIntegration;
