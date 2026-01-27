"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Network,
  BookOpen,
  Users,
  FileText,
  Puzzle,
  CreditCard,
  Heart,
  Ticket,
  GraduationCap,
  Calendar,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import sessionManagement from "@/public/booking-gif.gif";
import seoDiscoveryBg from "@/public/seo-discovery.png";
import AllInOneBg from "@/public/all-in-one.png";
import PreviewPageBg from "@/public/shop-discover.jpg";

export function FeaturesGridSection() {
  const sessionManagementSrc = sessionManagement.src || sessionManagement;
  const seoDiscoveryBgSrc = seoDiscoveryBg.src || seoDiscoveryBg;
  const AllInOneBgSrc = AllInOneBg.src || AllInOneBg;
  const PreviewPageBgSrc = PreviewPageBg.src || PreviewPageBg;

  return (
    <section className="w-full min-h-page px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-foreground text-background rounded-t-[52px]">
      <div className="text-start mb-12 sm:mb-16">
        {/* <p className="text-primary mb-3 text-base md:text-xl">Online and in person</p> */}
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-light">
          Everything you need to sell, teach, and scale.
        </h2>
      </div>
      {/* <div className="max-w-7xl h-[400px] md:h-[600px] mx-auto rounded-2xl overflow-hidden relative group cursor-pointer mb-4 md:mb-8">
        <Image
          src={PreviewPageBgSrc}
          alt="Landing BG"
          fill
          className="object-cover"
        />
      </div> */}
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Column 1 - Desktop Management */}
        <div className="bg-foreground rounded-3xl flex flex-col justify-between min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-[320px] bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${AllInOneBgSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-light mb-4">
              Your Entire Business, Anywhere
            </h3>
            <p className="text-gray-400 text-base lg:text-lg mb-4">
              From your back office to the front of your store, stay in total
              control. Our fully centralized Admin allows you to manage ebooks,
              videos, and classes from one unified dashboard.
            </p>
          </div>
        </div>

        {/* Column 2 - SEO Management */}
        <div className="bg-foreground rounded-3xl flex flex-col justify-between min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-[320px] bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url("${seoDiscoveryBgSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-light mb-4">
              Get Discovered Effortlessly
            </h3>
            <p className="text-gray-400 text-base lg:text-lg mb-4">
              Stand out in search results without the heavy lifting. Boost your
              brand with automatically generated title tags, meta descriptions,
              and custom domains designed to rank.
            </p>
          </div>
        </div>

        {/* Column 3 - Mobile Management */}
        <div className="bg-foreground rounded-3xl flex flex-col justify-between min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-80 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url("${sessionManagementSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-light mb-4">
              Seamless Automated Booking
            </h3>
            <p className="text-gray-400 text-base lg:text-lg mb-4">
              Let your business run while you’re offline. Handle live sessions,
              coaching calls, and class registrations automatically with a
              full-featured Calendar tool built for scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
