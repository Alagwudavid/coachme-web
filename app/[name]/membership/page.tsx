"use client";

import { useParams } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";

function MembershipPage() {
  const params = useParams();
  const coachSlug = params.name as string;
  const coach = getCoachBySlug(coachSlug);

  const membershipTiers = [
    {
      id: "basic",
      name: "Forex learner!",
      price: "$2",
      period: "/ month",
      image: null,
      features: [
        "My eternal gratitude",
        "The knowledge that you're making the world a better place",
        "Patron-only polls",
      ],
      recommended: false,
    },
    {
      id: "premium",
      name: "Forex trader!",
      price: "$5",
      period: "/ month",
      image: "/path-to-htd-app-image.jpg",
      features: [
        "Access to the HTD App (still in VERY early release!)",
        "Access to patron-only content",
        "Upcoming episode sneak peeks",
        "Extended episode cuts",
        "Behind the scenes videos",
        "Plus all previous rewards",
        "Discord access 🎮",
      ],
      recommended: true,
    },
    {
      id: "elite",
      name: "Forex professional!",
      price: "$10",
      period: "/ month",
      image: "/path-to-pin-image.jpg",
      features: [
        "Patron exclusive How To Drink Pins! We release new pins every quarter, you'll get them!",
        "Plus all previous rewards",
        "Discord access 🎮",
      ],
      recommended: false,
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-12 w-full bg-muted min-h-screen">
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose your membership
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-card border rounded-lg overflow-hidden transition-all hover:shadow-lg ${
                tier.recommended ? "border-primary shadow-md" : "border"
              }`}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="bg-foreground text-background text-center py-2 px-4 text-xs font-semibold uppercase tracking-wide">
                  RECOMMENDED BY CREATOR
                </div>
              )}

              {/* Image */}
              {tier.image ? (
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground text-4xl font-bold">{tier.name}</div>
                </div>
              ) : (
                <div className="w-full h-48 bg-muted"></div>
              )}

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {tier.period}
                  </span>
                </div>

                {/* Upgrade Button */}
                <button className="w-full bg-foreground text-background font-semibold py-3 px-6 rounded transition-colors">
                  Upgrade
                </button>

                {/* Features List */}
                <ul className="space-y-2.5 pt-2">
                  {tier.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPage;
