"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { courses } from "@/app/data/courses";
import { products, type Product } from "@/app/data/products";
import { services, type Service } from "@/app/data/services";
import { coaches, type Coach } from "@/app/data/coaches";
import { getCoachById } from "@/app/data/utils";
import { CourseCard } from "@/components/course-card";
import { ServiceCard } from "@/components/service-card";
import { ProductCard } from "@/components/product-card";
import SearchBar from "../components/search-bar";

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

function HomePage() {
  const router = useRouter();

  // Get popular items (top 4 by rating)
  const popularProducts = products
    .filter((p) => p.isFeatured || p.isTrending)
    .slice(0, 4);

  const popularCourses = courses
    .filter((e) => e.isSponsored || e.isTrending)
    .slice(0, 4);

  const popularServices = services
    .filter((s) => s.isFeatured || s.isTrending)
    .slice(0, 4);

  const popularCoaches = coaches
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-4">
        <div className="w-full mx-auto mt-8 mb-12 flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Discover digital products
          </h1>
          <div className="flex items-center gap-2">
            or{" "}
            <Link
              className="text-sky-500 font-semibold hover:underline"
              href={"#"}
            >
              Become a Creator
            </Link>
          </div>
          <div className="w-full mx-auto mt-6">
            <SearchBar
              maxWidth="max-w-2xl mx-auto"
              placeholder="Search products, services, events, creators..."
            />
          </div>
        </div>

        {/* Popular Products Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Popular Products
            </h2>
            <Link
              href="/coachme/discover/products"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
            {popularProducts.map((product) => {
              const coach = product.coachId
                ? getCoachById(product.coachId)
                : null;
              const coachSlug = coach?.slug || "default";
              return (
                <ProductCard
                  key={product.id}
                  productItem={product}
                  onClick={() =>
                    router.push(`/coachme/${coachSlug}/product/${product.slug}`)
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Popular Courses Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Popular Courses
            </h2>
            <Link
              href="/coachme/discover/events"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
            {popularCourses.map((course) => {
              const coach = course.coachId
                ? getCoachById(course.coachId)
                : null;
              const coachSlug = coach?.slug || "default";
              return (
                <CourseCard
                  key={course.id}
                  courseItem={course}
                  onClick={() =>
                    router.push(
                      `/coachme/${coachSlug}/classroom/${course.slug}`,
                    )
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Popular Services Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Popular Services
            </h2>
            <Link
              href="/coachme/discover/services"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
            {popularServices.map((service) => {
              const coach = service.coachId
                ? getCoachById(service.coachId)
                : null;
              const coachSlug = coach?.slug || "default";
              return (
                <ServiceCard
                  key={service.id}
                  serviceItem={service}
                  onClick={() =>
                    router.push(`/coachme/${coachSlug}/session/${service.slug}`)
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Popular Coaches Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Popular Coaches
            </h2>
            <Link
              href="/coachme/discover/creator"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularCoaches.map((coach) => (
              <Link
                key={coach.id}
                href={`/coachme/${coach.slug}/home`}
                className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group block"
                style={{
                  backgroundImage: `url(${coach.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    Visit Profile
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-1 mb-3">
                    <svg
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-white text-sm font-medium">
                      {coach.rating} ({coach.reviews})
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-xl mb-1 flex items-center gap-2">
                    {coach.isPremium && <PremiumIcon className="w-5 h-5" />}
                    {coach.name}
                  </h3>
                  <div className="text-gray-200 text-sm">{coach.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
