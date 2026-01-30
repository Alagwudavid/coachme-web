import { notFound } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";
import BrandedNavbar from "@/app/[name]/components/branded-navbar";
import BrandedFooter from "@/app/[name]/components/branded-footer";
import ClientLayoutWrapper from "@/app/[name]/components/client-layout-wrapper";

export default async function CoachLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const coachSlug = name;
  const coach = getCoachBySlug(coachSlug);

  if (!coach) {
    notFound();
  }

  return (
    <div className="relative bg-background min-h-screen">
      {/* <BrandedNavbar /> */}
      <div className="min-h-screen">
        <ClientLayoutWrapper coachSlug={coachSlug}>
          {children}
        </ClientLayoutWrapper>
        <BrandedFooter />
      </div>
    </div>
  );
}
