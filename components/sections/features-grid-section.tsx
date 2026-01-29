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
import seoDiscoveryBg from "@/public/image_06.png";
import AllInOneBg from "@/public/image_04.png";
import PreviewPageBg from "@/public/shop-discover.jpg";
import EngagingContentBg from "@/public/image_03.png";
import MulticurrencyImage from "@/public/image_08.png";
import BrandImage from "@/public/image_05.png";

export function FeaturesGridSection() {
  const sessionManagementSrc = sessionManagement.src || sessionManagement;
  const seoDiscoveryBgSrc = seoDiscoveryBg.src || seoDiscoveryBg;
  const AllInOneBgSrc = AllInOneBg.src || AllInOneBg;
  const PreviewPageBgSrc = PreviewPageBg.src || PreviewPageBg;
  const EngagingContentBgSrc = EngagingContentBg.src || EngagingContentBg;
  const MulticurrencyImageSrc = MulticurrencyImage.src || MulticurrencyImage;
  const BrandImageSrc = BrandImage.src || BrandImage;
  return (
    <section className="w-full min-h-page px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-foreground text-background rounded-t-[52px]">
      <div className="text-start mb-12 sm:mb-16">
        {/* <p className="text-primary mb-3 text-base md:text-xl">Online and in person</p> */}
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-light">
          Everything you need to Create, Engage, and scale.
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
        {/* Column 1 - All-in-one Management */}
        <div className="bg-foreground rounded-3xl flex flex-col min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-80 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${AllInOneBgSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Your Entire Business, Anywhere
            </h3>
            <p className="text-background text-base lg:text-lg mb-4">
              From your back office to the front of your store, stay in total
              control. Our fully centralized Admin allows you to manage ebooks,
              videos, and classes from one unified dashboard.
            </p>
          </div>
        </div>

        {/* Column 2 - SEO Management */}
        <div className="bg-foreground rounded-3xl flex flex-col min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-80 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url("${seoDiscoveryBgSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              SEO Discovery
            </h3>
            <p className="text-background text-base lg:text-lg mb-4">
              Stand out in search results without the heavy lifting. Boost your
              brand with automatically generated title tags, meta descriptions,
              and custom domains designed to rank.
            </p>
          </div>
        </div>

        {/* Column 3 - Calendar Management */}
        <div className="bg-foreground rounded-3xl flex flex-col min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-80 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url("${sessionManagementSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Automated Booking
            </h3>
            <p className="text-background text-base lg:text-lg mb-4">
              Handle live sessions, coaching calls, and class registrations automatically with a
              full-featured Calendar tool built for scale.
            </p>
          </div>
        </div>

        {/* Column 4 - Create */}
        <div className="bg-foreground rounded-3xl flex flex-col min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-80 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${EngagingContentBgSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Create
            </h3>
            <p className="text-background text-base lg:text-lg mb-4">
              Create customized and engaging content with our intuitive course builder.
            </p>
          </div>
        </div>

        {/* Column 5 - Brand */}
        <div className="bg-foreground rounded-3xl flex flex-col min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-80 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url("${BrandImageSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Brand
            </h3>
            <p className="text-background text-base lg:text-lg mb-4">
              Customize your brand to match your style and personality, creating a unique experience for your audience.
            </p>
          </div>
        </div>

        {/* Column 6 - Multicurrency */}
        <div className="bg-foreground rounded-3xl flex flex-col min-h-[500px] lg:min-h-[600px] overflow-hidden relative">
          <div
            className="rounded-3xl w-full min-h-80 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 overflow-hidden relative flex items-center justify-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url("${MulticurrencyImageSrc}")` }}
          ></div>
          <div className="p-6 lg:px-4">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Multicurrency
            </h3>
            <p className="text-background text-base lg:text-lg mb-4">
              Sell to a global audience with built-in multicurrency support, allowing customers to pay in their preferred currency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
