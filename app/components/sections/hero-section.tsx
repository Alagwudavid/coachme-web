"use client";

import React, { useRef } from "react";
import { Rss } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import landingBg from "@/public/0b40a8bcfe3efb57abcff206bc5a1cd0.jpg";
import AllInOneBg from "@/public/all-in-one.png";
import AllInOnePlaceBg from "@/public/all-in-one-place.png";
import AnalyticsBg from "@/public/analytics.jpg";
import Consult247Bg from "@/public/booking-gif.gif";
import PreviewPageBg from "@/public/page_preview_tablet.png";
import membershipBg from "@/public/membership.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const landingBgSrc = landingBg.src || landingBg;
  const AllInOneBgSrc = AllInOneBg.src || AllInOneBg;
  const AllInOnePlaceBgSrc = AllInOnePlaceBg.src || AllInOnePlaceBg;
  const AnalyticsSrc = AnalyticsBg.src || AnalyticsBg;
  const Consult247BgSrc = Consult247Bg.src || Consult247Bg;
  const PreviewPageBgSrc = PreviewPageBg.src || PreviewPageBg;
  const membershipBgSrc = membershipBg.src || membershipBg;

  return (
    <section className="w-full min-h-page px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
      <div className="mx-auto max-w-6xl relative overflow-visible grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex items-center justify-start">
          <motion.div
            ref={ref}
            className="w-full mx-auto text-start"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-none border border-primary mx-auto"
                variants={itemVariants}
              >
                <Rss className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Join the waitlist for Q2 2026
                </span>
              </motion.div>
              <motion.div className="space-y-3" variants={itemVariants}>
                <h2 className="text-4xl sm:text-6xl font-semibold text-foreground leading-tight flex items-center flex-wrap">
                  <span className="text-[#00885a]">Sell, </span>
                  <span className="text-primary">Teach, </span>and Engage
                </h2>
                <h2 className="text-4xl sm:text-6xl font-normal text-muted-foreground leading-tight">
                  all in one place
                </h2>
              </motion.div>
              <motion.p
                className="text-lg text-foreground max-w-sm leading-relaxed"
                variants={itemVariants}
              >
                The digital platform for solo creators to sell products, host
                live classes, and manage session bookings from one simple
                dashboard.
              </motion.p>
              <motion.div
                className="flex justify-start pt-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    className="px-12 py-6 bg-foreground hover:bg-primary text-background rounded-full font-medium text-base shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] cursor-pointer transition-colors"
                    onClick={() =>
                      document
                        .getElementById("waitlist-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Join the Waitlist
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="w-full min-h-52 lg:min-h-landingBg grid grid-cols-3 lg:grid-cols-2 lg:grid-rows-2 gap-4 box-border">
          <div className="lg:row-span-2 rounded-2xl border overflow-hidden relative group cursor-pointer">
            <Image
              src={AllInOnePlaceBgSrc}
              alt="Landing BG"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-2 lg:p-4">
              <h3 className="text-white font-semibold text-sm lg:text-xl mb-1 lg:mb-2 drop-shadow-lg">
                Live classes
              </h3>
              <p className="text-white/90 text-xs lg:text-sm drop-shadow-md hidden lg:block">
                Host interactive sessions, teach in real time, and connect
                directly with your audience.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border overflow-hidden relative group cursor-pointer">
            <Image
              src={PreviewPageBgSrc}
              alt="Landing BG"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-2 lg:p-4">
              <h3 className="text-white font-semibold text-xs lg:text-lg mb-0.5 lg:mb-1 drop-shadow-lg">
                Digital Storefront
              </h3>
              <p className="text-white/90 text-[10px] lg:text-xs drop-shadow-md hidden lg:block">
                Offer ebooks, templates, recordings, and more - with built-in
                checkout and instant delivery.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border overflow-hidden relative group cursor-pointer">
            <Image
              src={Consult247BgSrc}
              alt="Landing BG"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-2 lg:p-4">
              <h3 className="text-white font-semibold text-xs lg:text-lg mb-0.5 lg:mb-1 drop-shadow-lg">
                Manage bookings
              </h3>
              <p className="text-white/90 text-[10px] lg:text-xs drop-shadow-md hidden lg:block">
                Let clients book coaching, consulting, or mentoring sessions
                directly from your page - no back-and-forth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
