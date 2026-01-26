"use client";

import { useState } from "react";
import Image from "next/image";
import Rightbar from "../../components/rightbar";
import {
  ChartPie,
  Coins,
  Gem,
  Instagram,
  Twitter,
  Facebook,
  Share2,
} from "lucide-react";
import appLogo from "@/public/logo.png";
import appBanner from "@/public/banner.png";
import introVideo from "@/app/coachme/me/public/intro-video.png";
import Link from "next/link";
import { Tabs, TabPanel } from "@/components/ui/tabs";

const PremiumIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414"
        ></path>
      </g>
    </svg>
  );
};

const tabs = [
  { id: "all", label: "All" },
  { id: "live-events", label: "Live events" },
  { id: "sessions", label: "1:1 sessions" },
  { id: "store", label: "Store" },
];

function UserPage() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="min-h-page container mx-auto flex">
        <main className="max-w-6xl mx-auto flex-1 flex flex-col space-y-6">
          {/* Hero Section */}
          {/* <div className="bg-background flex flex-col h-40 relative">
                        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl mb-6">
                            <Image
                                src={appBanner}
                                alt="Community Banner Image"
                                width={1240}
                                height={120}
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-5 left-5 rounded-full overflow-hidden w-20 h-20 md:w-[150px] md:h-[150px] mx-auto border-4 border-background">
                            <Image
                                src={appLogo}
                                alt="User profile image"
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                    </div> */}
          <div className="flex gap-6 flex-col md:flex-row md:rounded-2xl bg-muted/70 p-4 md:p-6 lg:p-8">
            {/* Left Section */}
            <div className="rounded-full overflow-hidden w-28 h-28 md:w-[150px] md:h-[150px] mx-auto">
              <Image
                src={appLogo}
                alt="User profile image"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>

            <div className="flex-1 space-y-4">
              {/* Author Name */}
              <div className="space-y-2 flex items-center md:items-start flex-col">
                <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  <PremiumIcon className="w-5 h-5" />
                  Example coach
                </h1>
                <p className="text-foreground font-medium md:text-lg flex text-center md:text-start">
                  Youth Development, Opportunities and Career Systems Expert
                </p>
                <p className="text-muted-foreground line-clamp-3 flex text-center md:text-start">
                  A nationally and internationally visible youth development and
                  career systems expert, professional speaker, and trusted voice
                  in employability, leadership, and purpose-driven growth,
                  working with institutions, brands, and platforms shaping young
                  people and the future of work.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded bg-muted hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded bg-muted hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded bg-muted hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded bg-muted hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs tabs={tabs} defaultTab="all" onTabChange={setActiveTab} />

          {/* Tab Content */}
          <div className="p-4 md:p-6 lg:p-8">
            <TabPanel value="all" activeTab={activeTab}>
              <p className="text-muted-foreground">All content goes here</p>
            </TabPanel>
            <TabPanel value="live-events" activeTab={activeTab}>
              <p className="text-muted-foreground">
                Live events content goes here
              </p>
            </TabPanel>
            <TabPanel value="sessions" activeTab={activeTab}>
              <p className="text-muted-foreground">
                1:1 sessions content goes here
              </p>
            </TabPanel>
            <TabPanel value="store" activeTab={activeTab}>
              <p className="text-muted-foreground">Store content goes here</p>
            </TabPanel>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserPage;
