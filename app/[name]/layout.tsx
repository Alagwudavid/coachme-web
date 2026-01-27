"use client";

import { notFound, useParams } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";
import BrandedNavbar from "./components/branded-navbar";
import BrandedFooter from "./components/branded-footer";
import { TabRouteProvider } from "./components/tab-route-context";
import { TabNav } from "@/components/ui/tab-nav";
import Rightbar from "./components/rightbar";

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const coachSlug = params.name as string;
  const coach = getCoachBySlug(coachSlug);

  if (!coach) {
    notFound();
  }

  const tabs = [
    { id: "shop", label: "Shop", href: `/${coachSlug}/shop` },
    {
      id: "community",
      label: "Community",
      href: `/${coachSlug}/community`,
    },
    {
      id: "classroom",
      label: "Classroom",
      href: `/${coachSlug}/classroom`,
    },
    {
      id: "membership",
      label: "Membership",
      href: `/${coachSlug}/membership`,
    },
    { id: "about", label: "About", href: `/${coachSlug}/about` },
    {
      id: "calendar",
      label: "Calendar",
      href: `/${coachSlug}/calendar`,
    },
  ];

  return (
    <TabRouteProvider coachSlug={coachSlug}>
      <div className="relative bg-background min-h-screen">
        <BrandedNavbar />
        <div className="min-h-screen">
          <div className="min-h-page w-full flex flex-col mx-auto">
            <main className="w-full mx-auto flex flex-col">
              {/* Navigation Tabs */}
              <TabNav tabs={tabs} />
              {/* <div className="grid lg:grid-cols-3"> */}
                {/* Tab Content */}
                <div className="min-h-screen col-span-2">{children}</div>
                {/* <Rightbar className="p-4 md:p-6 col-span-1" /> */}
              {/* </div> */}
            </main>
          </div>
          <BrandedFooter />
        </div>
      </div>
    </TabRouteProvider>
  );
}
