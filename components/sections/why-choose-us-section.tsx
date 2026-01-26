"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import globalMapConnectionsBg from "@/public/global-map-connections.jpg";
import globalNetworkConnectionsBg from "@/public/global-network-connections.jpg";

export function WhyChooseUsSection() {
  const globalMapConnectionsBgSrc =
    globalMapConnectionsBg.src || globalMapConnectionsBg;
  const globalNetworkConnectionsBgSrc =
    globalNetworkConnectionsBg.src || globalNetworkConnectionsBg;
  return (
    <section className="w-full min-h-page px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-foreground text-background rounded-t-[52px]">
      <div className="text-start mb-12 sm:mb-16">
        {/* <p className="text-primary mb-3 text-base md:text-xl">Online and in person</p> */}
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-light">
          Grow around the world
        </h2>
        <p className="text-background/80 text-sm sm:text-base">
          Connect with customers and students across the globe. Grow your
          business internationally with seamless tools and a borderless
          presence.
        </p>
      </div>
      <div className="max-w-8xl mx-auto rounded-3xl lg:rounded-[40px] bg-foreground text-background">
        {/* Right - World Map with Profile Images */}
        <div
          className="relative h-[400px] sm:h-[500px] flex items-center justify-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${globalNetworkConnectionsBgSrc}")` }}
        ></div>
      </div>
    </section>
  );
}
