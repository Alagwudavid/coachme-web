"use client";

import { notFound, useParams } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";
import BrandedNavbar from "./components/branded-navbar";
import BrandedFooter from "./components/branded-footer";
import { TabRouteProvider } from "./components/tab-route-context";
import { TabNav } from "@/components/ui/tab-nav";

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
    { id: "shop", label: "Shop", href: `/coachme/${coachSlug}/shop` },
    {
      id: "classroom",
      label: "Classroom",
      href: `/coachme/${coachSlug}/classroom`,
    },
    {
      id: "membership",
      label: "Membership",
      href: `/coachme/${coachSlug}/membership`,
    },
    { id: "about", label: "About", href: `/coachme/${coachSlug}/about` },
    {
      id: "calendar",
      label: "Calendar",
      href: `/coachme/${coachSlug}/calendar`,
    },
  ];

  return (
    <TabRouteProvider coachSlug={coachSlug}>
      <div className="relative bg-background min-h-screen">
        <BrandedNavbar />
        <div className="min-h-screen">
          <div className="min-h-page w-full flex flex-col mx-auto">
            <main className="max-w-7xl w-full mx-auto flex flex-col">
              {/* Navigation Tabs */}
              <TabNav tabs={tabs} />

              {/* Tab Content */}
              <div className="p-4 md:p-6 lg:p-8 min-h-screen">{children}</div>
            </main>
          </div>
          <BrandedFooter />
        </div>
      </div>
    </TabRouteProvider>
  );
}
