"use client";

import { useParams, useRouter } from "next/navigation";
import { getCoachBySlug } from "@/app/coachme/data/utils";
import { events, type Event } from "@/app/coachme/data/events";
import { getCoachById } from "@/app/coachme/data/utils";
import {
  ArrowLeft,
  Play,
  Pause,
  Check,
  Calendar,
  Copy,
  X,
  Facebook,
  Share2,
  Twitter,
  Mail,
  Instagram,
  Clock,
  Users,
  Bookmark,
  ShoppingCart,
  Home,
} from "lucide-react";
import { useState } from "react";
import certificateImage from "@/coachme/me/public/ut-dae-certificate.jpg";
import { TabNav } from "@/components/ui/tabNav";
import Link from "next/link";
import PreviewPageBg from "@/public/page_preview_tablet.png";

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

export default function EventOverviewPage() {
  const params = useParams();
  const router = useRouter();
  const eventSlug = params.slug as string;
  const [paymentType, setPaymentType] = useState<"full" | "installment">(
    "full",
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Curriculum accordion states - Modules and Chapters
  const [module1Open, setModule1Open] = useState(false);
  const [module2Open, setModule2Open] = useState(false);
  const [module3Open, setModule3Open] = useState(false);
  const [module4Open, setModule4Open] = useState(false);

  // Validate slug format (only alphanumeric, dashes, and underscores)
  const isValidSlug = /^[a-z0-9_-]+$/i.test(eventSlug);

  // Find event by slug
  const eventItem = isValidSlug
    ? events.find((c) => c.slug === eventSlug)
    : null;
  const PreviewPageBgSrc = PreviewPageBg.src || PreviewPageBg;

  // Media carousel items
  const mediaItems = [
    {
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: eventItem?.image,
    },
    { type: "image", src: PreviewPageBgSrc },
    { type: "image", src: eventItem?.image },
    { type: "image", src: eventItem?.image },
    { type: "image", src: eventItem?.image },
  ];

  // Get coach information
  const coach = eventItem ? getCoachById(eventItem.coachId) : null;

  // Calculate installment price and duration
  const getInstallmentDetails = () => {
    if (!eventItem) return { price: "", duration: "" };

    const priceMatch = eventItem.price.match(/\$([\d.]+)/);
    const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

    // Divide by 3 for installments
    const installmentPrice = (price / 3).toFixed(2);

    // Calculate duration divisor based on duration text
    let durationText = eventItem.duration || "";
    if (durationText.includes("month")) {
      const monthMatch = durationText.match(/(\d+)\s*months?/);
      if (monthMatch) {
        const months = parseInt(monthMatch[1]);
        const installmentMonths = Math.ceil(months / 3);
        durationText = `${installmentMonths} month${installmentMonths > 1 ? "s" : ""}`;
      }
    } else if (durationText.includes("week")) {
      const weekMatch = durationText.match(/(\d+)\s*weeks?/);
      if (weekMatch) {
        const weeks = parseInt(weekMatch[1]);
        const installmentWeeks = Math.ceil(weeks / 3);
        durationText = `${installmentWeeks} week${installmentWeeks > 1 ? "s" : ""}`;
      }
    }

    return { price: `$${installmentPrice}`, duration: durationText };
  };

  const installmentDetails = getInstallmentDetails();
  const displayPrice =
    paymentType === "installment" && eventItem?.acceptsInstallmentPayment
      ? installmentDetails.price
      : eventItem?.price;
  const displayDuration =
    paymentType === "installment" && eventItem?.acceptsInstallmentPayment
      ? installmentDetails.duration
      : eventItem?.duration;

  if (!eventItem) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Event Not Found
          </h1>
          <p className="text-foreground">
            The event you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // const params = useParams();
  const coachSlug = params.name as string;

  const tabs = [
    // { id: 'overview', label: 'Overview', isActivated: true },
    {
      id: "overview",
      label: "Overview",
      href: `/coachme/${coachSlug}/event/${eventItem.slug}`,
    },
    {
      id: "curriculum",
      label: "Curriculum",
      href: `/coachme/${coachSlug}/event/${eventItem.slug}/curriculum`,
    },
    // { id: 'creator', label: 'Creator', href: `/coachme/${coachSlug}/event/${eventItem.slug}/creator` },
    {
      id: "reviews",
      label: "Reviews",
      href: `/coachme/${coachSlug}/event/${eventItem.slug}/reviews`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 xl:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8 relative">
          {/* Media Carousel */}
          <div className="relative h-auto w-full">
            <div className="relative h-[410px] w-full border overflow-hidden rounded-2xl group">
              {/* Blurred Background */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: `url("${eventItem?.image}")`,
                  filter: "blur(20px)",
                  transform: "scale(1.1)",
                }}
              />

              {/* Content Layer */}
              <div className="relative h-full w-full flex items-center justify-center">
                {mediaItems[currentSlide].type === "video" ? (
                  <>
                    <video
                      id="eventItem-intro-video"
                      className="w-full h-full object-cover"
                      poster={mediaItems[currentSlide].poster}
                      preload="metadata"
                    >
                      <source
                        src={mediaItems[currentSlide].src}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <button
                      onClick={() => {
                        const video = document.getElementById(
                          "eventItem-intro-video",
                        ) as HTMLVideoElement;
                        if (video) {
                          if (isPlaying) {
                            video.pause();
                            setIsPlaying(false);
                          } else {
                            video.play();
                            setIsPlaying(true);
                          }
                        }
                      }}
                      className="absolute bottom-5 left-5 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-2.5 rounded-full cursor-pointer transition-all shadow-lg group-hover:scale-110"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-primary fill-primary" />
                      ) : (
                        <Play className="w-6 h-6 text-primary fill-primary" />
                      )}
                    </button>
                  </>
                ) : (
                  <img
                    src={mediaItems[currentSlide].src}
                    alt={eventItem.title}
                    className="w-full h-full object-contain mx-auto"
                  />
                )}

                {/* Navigation Buttons */}
                {currentSlide > 0 && (
                  <button
                    onClick={() => {
                      setCurrentSlide(currentSlide - 1);
                      setIsPlaying(false);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-3 rounded-full cursor-pointer transition-all shadow-lg"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-800" />
                  </button>
                )}
                {currentSlide < mediaItems.length - 1 && (
                  <button
                    onClick={() => {
                      setCurrentSlide(currentSlide + 1);
                      setIsPlaying(false);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-3 rounded-full cursor-pointer transition-all shadow-lg rotate-180"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-800" />
                  </button>
                )}

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 z-20 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {currentSlide + 1} / {mediaItems.length}
                </div>
              </div>
            </div>
          </div>
          <TabNav tabs={tabs} />
          <div className="md:hidden">
            <div className="space-y-2 mb-6">
              <div className="flex flex-col items-start">
                <h1 className="text-lg font-bold text-foreground mb-2">
                  {eventItem.title}
                </h1>
                <div className="flex items-center gap-2 sm:gap-4">
                  {/* Event Title */}
                  <p className="text-foreground flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}{" "}
                    ({eventItem.reviews})
                  </p>
                  {/* <span className="text-muted-foreground">•</span> */}
                  <div className="flex items-center gap-1">
                    <img
                      src={coach?.image}
                      alt={coach?.name}
                      className="w-6 h-6 rounded-lg object-cover"
                    />
                    <p className="font-semibold text-foreground line-clamp-1">
                      {coach?.name}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-primary-foreground px-2 py-1 rounded-sm bg-primary/70 w-fit">
                {eventItem.category}
              </p>
              <div className="flex gap-4 text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mt-1"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth={1.5}
                      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth={1.5}
                      d="M7 4V2.5M17 4V2.5M2.5 9h19"
                      opacity={0.5}
                    ></path>
                    <path
                      fill="currentColor"
                      d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                    ></path>
                  </g>
                </svg>
                <div className="flex flex-col text-foreground">
                  <span> Start date</span>
                  <span className="text-sm text-muted-foreground">
                    Feb 07, 2026
                  </span>
                </div>
              </div>
              <div className="flex gap-4 text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mt-1"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <circle
                      cx={12}
                      cy={12}
                      r={9}
                      fill="currentColor"
                      fillOpacity={0.25}
                    ></circle>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"
                      strokeWidth={1}
                    ></path>
                  </g>
                </svg>
                <div className="flex flex-col text-foreground">
                  <span>Time</span>
                  <span className="text-sm text-muted-foreground">
                    09:00 AM - 11:30 AM EST(Africa/Lagos)
                  </span>
                </div>
              </div>
              <div className="flex gap-4 text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mt-1"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.72 16.64a1 1 0 1 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 7.5c-1.54 0-2.502 1.667-1.732 3c.357.619 1.017 1 1.732 1c1.54 0 2.502-1.667 1.732-3A2 2 0 0 0 12 7.5"
                    className="duoicon-primary-layer"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.4 16.4 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a21 21 0 0 1-1.952-1.282A16.4 16.4 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2"
                    className="duoicon-secondary-layer"
                    opacity={0.3}
                  ></path>
                </svg>
                <div className="flex flex-col text-foreground">
                  <span>Location</span>
                  <span className="text-sm text-muted-foreground">
                    Online (Zoom)
                  </span>
                </div>
              </div>
              <div className="flex gap-4 text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mt-1"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 12a2 2 0 0 0 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 0 2-2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 0-2 2m-3.5 4.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zm-4.5-4A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"
                  ></path>
                </svg>
                <div className="flex flex-col text-foreground">
                  <span>Attendees</span>
                  <span className="text-sm text-muted-foreground">
                    12 registered
                  </span>
                </div>
              </div>
            </div>
            {eventItem.acceptsInstallmentPayment && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Payment Option
                </p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentType-desktop"
                      value="full"
                      checked={paymentType === "full"}
                      onChange={(e) =>
                        setPaymentType(e.target.value as "full" | "installment")
                      }
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm text-foreground">
                      Full Payment
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentType-desktop"
                      value="installment"
                      checked={paymentType === "installment"}
                      onChange={(e) =>
                        setPaymentType(e.target.value as "full" | "installment")
                      }
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm text-foreground">
                      Installment (3 payments)
                    </span>
                  </label>
                </div>
              </div>
            )}
            <div className="mb-6">
              <p className="text-xl font-bold text-foreground mb-2">
                {displayPrice}
                {displayDuration && ` • ${displayDuration}`}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <button className="w-full bg-foreground hover:bg-purple-500 text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer">
                  Enroll
                </button>
                <button className="flex items-center justify-center w-14 h-full bg-background text-foreground py-3 rounded-lg font-semibold border border-border hover:cursor-pointer transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.5 10h4m-2-2v4m4 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"
                    ></path>
                  </svg>
                </button>
              </div>
              <button className="w-full bg-background border text-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer flex items-center justify-center gap-2">
                <Bookmark className="w-5 h-5" /> Add to wishlist
              </button>
            </div>
          </div>
          {/* Course Details Section */}
          <section id="curriculum-tab" className="">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About This Event
            </h2>
            <p className="text-foreground mb-4">{eventItem.description}</p>

            {isDetailsExpanded && (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  What You'll Learn
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Comprehensive understanding of core concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>
                      Hands-on practical experience with real-world projects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>
                      Expert tips and best practices from industry professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Access to exclusive resources and materials</span>
                  </li>
                </ul>

                <div className="pt-4 mt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    This program includes:
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></path>
                          <path d="m14.576 9.235l-3.387-2.117a.777.777 0 0 0-1.189.66v4.445a.777.777 0 0 0 1.189.659l3.387-2.117a.902.902 0 0 0 0-1.53"></path>
                        </g>
                      </svg>
                      <span>Access to recorded replays</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M12 0a4 4 0 0 1 4 4v2.5h-1V4a3 3 0 1 0-6 0v2h.5A2.5 2.5 0 0 1 12 8.5v5A2.5 2.5 0 0 1 9.5 16h-7A2.5 2.5 0 0 1 0 13.5v-5A2.5 2.5 0 0 1 2.5 6H8V4a4 4 0 0 1 4-4M2.5 7A1.5 1.5 0 0 0 1 8.5v5A1.5 1.5 0 0 0 2.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 7z"
                        ></path>
                      </svg>
                      <span>Lifetime access to exclusive materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></path>
                          <path
                            strokeLinecap="round"
                            d="M12 16v3"
                            opacity={0.5}
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"
                          ></path>
                          <path
                            d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"
                            opacity={0.5}
                          ></path>
                          <path d="M11.146 6.023C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path>
                          <path
                            strokeLinecap="round"
                            d="M18 22H6"
                            opacity={0.5}
                          ></path>
                        </g>
                      </svg>
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 18h-.75a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h.75a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75m15.75 0h-.75a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 19.5 9h.75a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3M3.75 9a8.25 8.25 0 1 1 16.5 0M15 21.75h2.25a3 3 0 0 0 3-3V18"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 23.25H12a1.5 1.5 0 1 1 0-3h1.5a1.5 1.5 0 1 1 0 3M9 8.25a3 3 0 0 1 5.753-1.192c.218.505.294 1.06.218 1.605A3 3 0 0 1 13 11.079a1.5 1.5 0 0 0-1 1.415v.256"
                          ></path>
                          <path d="M12 16.5a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></path>
                        </g>
                      </svg>
                      <span>Expert support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M16.5 23.25h-6l.75-4.5h4.5zm-8.25 0h10.5m-7.5-18h10.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-1.5m0 0h19.5"></path>
                          <path d="M2.25.75h4.5s1.5 0 1.5 1.5v9s0 1.5-1.5 1.5h-4.5s-1.5 0-1.5-1.5v-9s0-1.5 1.5-1.5m-1.5 9h7.5"></path>
                        </g>
                      </svg>
                      <span>Mobile and desktop access</span>
                    </li>
                  </ul>
                </div>
              </>
            )}

            <button
              onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
              className="mt-4 text-primary hover:underline font-semibold flex items-center gap-2"
            >
              {isDetailsExpanded ? (
                <>
                  Show less
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </>
              ) : (
                <>
                  Show more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </>
              )}
            </button>
          </section>
          {/* Curriculum Section */}
          <section id="curriculum-tab">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Curriculum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-muted/50 border-b-3 rounded-2xl p-4">
                <p className="text-xl font-bold text-foreground mb-1">
                  {displayDuration}
                </p>
                <p className="text-sm text-gray-600">Program Duration</p>
              </div>
              <div className="bg-muted/50 border-b-3 rounded-2xl p-4">
                <p className="text-xl font-bold text-foreground mb-1">11+</p>
                <p className="text-sm text-gray-600">learning content</p>
              </div>
              <div className="bg-muted/50 border-b-3 rounded-2xl p-4">
                <p className="text-xl font-bold text-foreground mb-1">Level</p>
                <p className="text-sm text-gray-600">{eventItem.level}</p>
              </div>
              <div className="bg-muted/50 border-b-3 rounded-2xl p-4">
                <p className="text-xl font-bold text-foreground mb-1">3+</p>
                <p className="text-sm text-gray-600">
                  Real-live projects & certification
                </p>
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden">
              <div className="border-t">
                {/* Module 01 - Writers and stories */}
                <div className="border-b border-border overflow-hidden">
                  <button
                    onClick={() => setModule1Open(!module1Open)}
                    className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-foreground mb-2">
                        Lorem ipsum{" "}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                          Self-paced
                        </span>
                        <span className="text-sm text-foreground">
                          2 Lectures • 38:01
                        </span>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${module1Open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Chapters for Module 1 */}
                  <div
                    className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module1Open ? "block" : "hidden"}`}
                  >
                    <div className="w-full gap-3 text-sm list-disc list-inside">
                      <div className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                        <div className="flex items-center gap-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                            >
                              <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                              <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                            </g>
                          </svg>
                          <span className="font-medium">
                            The basics: demo video
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          23:01
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-muted-foreground"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                        <div className="flex items-center gap-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                            >
                              <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                              <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                            </g>
                          </svg>
                          <span className="font-medium">The introduction</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          15:00
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-muted-foreground"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path d="M7.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88c.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126c-.641-.642-1.569-.815-3.125-.862"></path>
                            <path
                              strokeLinejoin="round"
                              d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75Z"
                            ></path>
                            <path strokeLinecap="round" d="M6.5 10h4"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 11s.5 0 1 1c0 0 1.588-2.5 3-3"
                            ></path>
                            <path strokeLinecap="round" d="M6.5 16h4"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 17s.5 0 1 1c0 0 1.588-2.5 3-3"
                            ></path>
                          </g>
                        </svg>
                        <span className="font-medium">Assessment</span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                        </svg>
                        <span>Notebook examples</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 02 - Demo tutor */}
                <li className="border-b border-border overflow-hidden">
                  <button
                    onClick={() => setModule2Open(!module2Open)}
                    className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-muted-foreground"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-foreground mb-1">
                        2. Demo session
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                          1:1 Session
                        </span>
                        <span className="text-sm text-foreground">
                          1 Session
                        </span>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${module2Open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module2Open ? "block" : "hidden"}`}
                  >
                    <div className="mt-3 border rounded-lg flex items-center gap-3 text-sm p-3">
                      <div className="flex flex-col items-center justify-center lg:px-3">
                        <span className="text-xs text-muted-foreground">
                          Sun
                        </span>
                        <span className="text-2xl font-bold text-foreground">
                          07
                        </span>
                      </div>
                      <span className="w-px h-10 bg-border"></span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <span className="font-medium text-foreground">
                            Revision of module 01
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-xs text-purple-400 bg-muted font-semibold p-1 px-2 rounded-lg flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-purple-500"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                              >
                                <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                                <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                              </g>
                            </svg>
                            Zoom
                          </span>
                          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g fill="none">
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="9"
                                  fill="currentColor"
                                  fill-opacity="0.25"
                                ></circle>
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"
                                  stroke-width="1"
                                ></path>
                              </g>
                            </svg>
                            02:00 PM EST(Africa/Lagos)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Module 03 - The future of books */}
                <li className="border-b border-border overflow-hidden">
                  <button
                    onClick={() => setModule3Open(!module3Open)}
                    className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-muted-foreground"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-foreground mb-2">
                        3. Mind map
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                          Self-paced
                        </span>
                        <span className="text-sm text-foreground">
                          2 Lectures • 2:15:00
                        </span>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${module3Open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Chapters for Module 3 */}
                  <div
                    className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module3Open ? "block" : "hidden"}`}
                  >
                    <ul className="w-full gap-3 text-sm list-disc list-inside">
                      <li className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                        <div className="flex items-center gap-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                            >
                              <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                              <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                            </g>
                          </svg>
                          <span className="font-medium">
                            The intermediate video
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">2:00:00</div>
                      </li>
                      <li className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                        <div className="flex items-center gap-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                            >
                              <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                              <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                            </g>
                          </svg>
                          <span className="font-medium">
                            The introduction to professional study
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">15:00</div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Module 04 - Revision A */}
                <li className="overflow-hidden">
                  <button
                    onClick={() => setModule4Open(!module4Open)}
                    className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-muted-foreground"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-foreground mb-1">
                        4. Projects & Certification
                      </h3>
                      <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                        Compulsory
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${module4Open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Projects and Certificate for Module 4 */}
                  <div
                    className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module4Open ? "block" : "hidden"}`}
                  >
                    <div className="px-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        Apply your knowledge through hands-on projects and earn
                        your certification upon successful completion.
                      </p>

                      {/* Projects Section */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Capstone Projects
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
                          {/* Project 1 */}
                          <div className="">
                            <div className="flex flex-col items-center gap-3">
                              <div className="bg-muted p-2 rounded-lg flex-shrink-0 w-30 h-30">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-blue-600"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col items-center">
                                <h5 className="text-sm font-semibold text-center text-foreground mb-1">
                                  Project 1: Foundation Build
                                </h5>
                                <span className="text-xs text-muted-foreground">
                                  📊 Easy
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Project 2 */}
                          <div className="">
                            <div className="flex flex-col items-center gap-3">
                              <div className="bg-muted p-2 rounded-lg flex-shrink-0 w-30 h-30">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-green-600"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col items-center">
                                <h5 className="text-sm font-semibold text-center text-foreground mb-1">
                                  Project 2: Advanced Integration
                                </h5>
                                <span className="text-xs text-muted-foreground">
                                  📊 Hard
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Project 3 */}
                          <div className="">
                            <div className="flex flex-col items-center gap-3">
                              <div className="bg-muted p-2 rounded-lg flex-shrink-0 w-30 h-30">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-purple-600"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col items-center">
                                <h5 className="text-sm font-semibold text-center text-foreground mb-1">
                                  Final Capstone Project
                                </h5>
                                <span className="text-xs text-muted-foreground">
                                  📊 Professional
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Section */}
                      <div className="mt-6 pb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Your Certificate of Completion
                        </h4>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full -mr-12 -mt-12 opacity-50"></div>
                          <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full -ml-10 -mb-10 opacity-50"></div>
                          <div className="relative z-10">
                            <div className="text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-2"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={1.5}
                                >
                                  <path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></path>
                                  <path
                                    strokeLinecap="round"
                                    d="M12 16v3"
                                    opacity={0.5}
                                  ></path>
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"
                                  ></path>
                                  <path
                                    d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"
                                    opacity={0.5}
                                  ></path>
                                  <path d="M11.146 6.023C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path>
                                  <path
                                    strokeLinecap="round"
                                    d="M18 22H6"
                                    opacity={0.5}
                                  ></path>
                                </g>
                              </svg>
                              <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-1">
                                Certificate of Completion
                              </h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                This is to certify that
                              </p>
                              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                [Your Name]
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                has successfully completed
                              </p>
                              <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-3">
                                {eventItem.title}
                              </p>
                              <div className="flex justify-center gap-8 pt-2 border-t border-blue-200 dark:border-blue-800">
                                <div className="text-center">
                                  <div className="w-16 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1 mx-auto"></div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Instructor
                                  </p>
                                </div>
                                <div className="text-center">
                                  <div className="w-16 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1 mx-auto"></div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Date
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Upon successful completion of all projects and
                          assessments, you'll receive a verified digital
                          certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </section>

          {/* About the Creator Section */}
          <section
            id="creator-tab"
            className="hidden block bg-background border rounded-2xl p-6"
          >
            <h2 className="text-base font-bold text-foreground mb-4">
              Creator
            </h2>

            <div className="flex items-start gap-4 mb-4">
              <img
                src={coach?.image}
                alt={coach?.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-base font-semibold text-foreground">
                  {coach?.name}
                </p>
                <div className="flex items-center gap-1 text-sm text-foreground">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint delectus fugiat veritatis accusantium autem, mollitia
                    laudantium quisquam aperiam dolorem voluptatum ipsum eius ad
                    debitis vitae, deleniti neque eligendi perspiciatis quos.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-foreground font-bold mb-2">Share event via</p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded text-primary hover:bg-primary/30 flex items-center justify-center transition-colors"
              >
                {/* <Copy className="w-5 h-5" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M18 10h.6c.778 0 1.4.622 1.4 1.4v7.2c0 .778-.622 1.4-1.4 1.4h-7.2c-.778 0-1.4-.622-1.4-1.4V18a1 1 0 1 0-2 0v.6c0 1.882 1.518 3.4 3.4 3.4h7.2c1.882 0 3.4-1.518 3.4-3.4v-7.2C22 9.518 20.482 8 18.6 8H18a1 1 0 1 0 0 2"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded bg-background hover:bg-primary/30 flex items-center justify-center transition-colors"
              >
                {/* <Mail className="w-5 h-5" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.125 3.75h9.75c.813 0 1.468 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47q.01.12.016.247a.75.75 0 0 1 .014.336c.013.41.013.879.013 1.417v5.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.532.043-1.187.043-2 .043h-9.75c-.813 0-1.468 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.32-.924-.365-1.47c-.044-.531-.044-1.187-.044-2V9.268c0-.538 0-1.007.013-1.417a.75.75 0 0 1 .014-.336q.007-.128.017-.246c.044-.547.139-1.027.365-1.471a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.532-.043 1.187-.043 2-.043M20.85 7.341c-.038-.423-.105-.672-.202-.862a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038H7.157c-.852 0-1.446 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.096.19-.164.439-.202.862l6.604 4.403c1.01.674 1.363.895 1.722.981a2.25 2.25 0 0 0 1.048 0c.36-.086.711-.307 1.723-.981z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded bg-background hover:bg-primary/30 flex items-center justify-center transition-colors"
              >
                {/* <Twitter className="w-5 h-5" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  >
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"></path>
                    <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"></path>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded text-blue-500 hover:bg-primary/30 flex items-center justify-center transition-colors"
              >
                {/* <Facebook className="w-5 h-5" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  >
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"></path>
                    <path
                      strokeLinecap="round"
                      d="M16.927 8.026h-2.945a1.9 1.9 0 0 0-1.9 1.886l-.086 11.515m-1.914-7.425h4.803"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded text-pink-500 hover:bg-primary/30 flex items-center justify-center transition-colors"
              >
                {/* <Instagram className="w-5 h-5" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path
                      strokeDasharray={66}
                      d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="66;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={28}
                      strokeDashoffset={28}
                      d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.6s"
                        to={0}
                      ></animate>
                    </path>
                  </g>
                  <circle
                    cx={17}
                    cy={7}
                    r={1.5}
                    fill="currentColor"
                    opacity={0}
                  >
                    <animate
                      fill="freeze"
                      attributeName="opacity"
                      begin="1.3s"
                      dur="0.2s"
                      to={1}
                    ></animate>
                  </circle>
                </svg>
              </a>
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews-tab" className="">
            <h2 className="text-2xl font-bold text-foreground">Reviews</h2>

            {/* Rating Summary */}
            <div className="bg-background rounded-2xl p-4 mb-4">
              <p className="text-2xl font-semibold text-foreground mb-1">
                {eventItem.rating} ({eventItem.reviews})
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              {/* <p className="text-sm text-foreground">
                                {eventItem.reviews} total reviews
                            </p> */}
            </div>

            {/* Individual Reviews */}
            <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Review 1 */}
              <div className="bg-background border rounded-2xl p-3">
                <div className="flex items-start gap-4">
                  <img
                    src="/assets/user-1.png"
                    alt="Cod3rMax"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        Cod3rMax
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground">
                      Its great until now i had a lot of winnings parlay
                    </p>
                    <div className="text-foreground mt-3 flex items-center gap-2 text-sm cursor-pointer select-none hover:text-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13.349 2.378a.75.75 0 0 1 .808-.361l.127.027a3.875 3.875 0 0 1 2.879 4.97L16.527 9h1.137c2.645 0 4.513 2.591 3.676 5.1l-1.559 4.678A3.25 3.25 0 0 1 16.698 21h-5.289a4.5 4.5 0 0 1-2.828-.999A1.75 1.75 0 0 1 7 21H4.75A1.75 1.75 0 0 1 3 19.25v-8.5C3 9.784 3.784 9 4.75 9h4.67a.25.25 0 0 0 .217-.126zM8.75 18.16l.683.598a3 3 0 0 0 1.976.742h5.289a1.75 1.75 0 0 0 1.66-1.197l1.559-4.677a2.375 2.375 0 0 0-2.253-3.126H15.5a.75.75 0 0 1-.714-.979l.948-2.964a2.375 2.375 0 0 0-1.373-2.927l-3.422 5.988a1.75 1.75 0 0 1-1.519.882h-.67zm-1.5-7.66h-2.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25H7a.25.25 0 0 0 .25-.25z"
                        ></path>
                      </svg>
                      Helpful
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-background border rounded-2xl p-3">
                <div className="flex items-start gap-4">
                  <img
                    src="/assets/user-3.jpg"
                    alt="Wayne Chapman"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        Wayne Chapman
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground">Great picks & support</p>
                    <div className="text-foreground mt-3 flex items-center gap-2 text-sm cursor-pointer select-none hover:text-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13.349 2.378a.75.75 0 0 1 .808-.361l.127.027a3.875 3.875 0 0 1 2.879 4.97L16.527 9h1.137c2.645 0 4.513 2.591 3.676 5.1l-1.559 4.678A3.25 3.25 0 0 1 16.698 21h-5.289a4.5 4.5 0 0 1-2.828-.999A1.75 1.75 0 0 1 7 21H4.75A1.75 1.75 0 0 1 3 19.25v-8.5C3 9.784 3.784 9 4.75 9h4.67a.25.25 0 0 0 .217-.126zM8.75 18.16l.683.598a3 3 0 0 0 1.976.742h5.289a1.75 1.75 0 0 0 1.66-1.197l1.559-4.677a2.375 2.375 0 0 0-2.253-3.126H15.5a.75.75 0 0 1-.714-.979l.948-2.964a2.375 2.375 0 0 0-1.373-2.927l-3.422 5.988a1.75 1.75 0 0 1-1.519.882h-.67zm-1.5-7.66h-2.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25H7a.25.25 0 0 0 .25-.25z"
                        ></path>
                      </svg>
                      Helpful
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-background border rounded-2xl p-3">
                <div className="flex items-start gap-4">
                  <img
                    src="/assets/user-3.jpg"
                    alt="Nyle Samuels"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        Nyle Samuels
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground">
                      Excellent content and very helpful!
                    </p>
                    <div className="text-foreground mt-3 flex items-center gap-2 text-sm cursor-pointer select-none hover:text-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13.349 2.378a.75.75 0 0 1 .808-.361l.127.027a3.875 3.875 0 0 1 2.879 4.97L16.527 9h1.137c2.645 0 4.513 2.591 3.676 5.1l-1.559 4.678A3.25 3.25 0 0 1 16.698 21h-5.289a4.5 4.5 0 0 1-2.828-.999A1.75 1.75 0 0 1 7 21H4.75A1.75 1.75 0 0 1 3 19.25v-8.5C3 9.784 3.784 9 4.75 9h4.67a.25.25 0 0 0 .217-.126zM8.75 18.16l.683.598a3 3 0 0 0 1.976.742h5.289a1.75 1.75 0 0 0 1.66-1.197l1.559-4.677a2.375 2.375 0 0 0-2.253-3.126H15.5a.75.75 0 0 1-.714-.979l.948-2.964a2.375 2.375 0 0 0-1.373-2.927l-3.422 5.988a1.75 1.75 0 0 1-1.519.882h-.67zm-1.5-7.66h-2.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25H7a.25.25 0 0 0 .25-.25z"
                        ></path>
                      </svg>
                      Helpful
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="bg-background border rounded-2xl p-3">
                <div className="flex items-start gap-4">
                  <img
                    src="/assets/user-3.jpg"
                    alt="Donovan Byrd"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        Donovan Byrd
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground">
                      Worth every penny. Highly recommended!
                    </p>
                    <div className="text-foreground mt-3 flex items-center gap-2 text-sm cursor-pointer select-none hover:text-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13.349 2.378a.75.75 0 0 1 .808-.361l.127.027a3.875 3.875 0 0 1 2.879 4.97L16.527 9h1.137c2.645 0 4.513 2.591 3.676 5.1l-1.559 4.678A3.25 3.25 0 0 1 16.698 21h-5.289a4.5 4.5 0 0 1-2.828-.999A1.75 1.75 0 0 1 7 21H4.75A1.75 1.75 0 0 1 3 19.25v-8.5C3 9.784 3.784 9 4.75 9h4.67a.25.25 0 0 0 .217-.126zM8.75 18.16l.683.598a3 3 0 0 0 1.976.742h5.289a1.75 1.75 0 0 0 1.66-1.197l1.559-4.677a2.375 2.375 0 0 0-2.253-3.126H15.5a.75.75 0 0 1-.714-.979l.948-2.964a2.375 2.375 0 0 0-1.373-2.927l-3.422 5.988a1.75 1.75 0 0 1-1.519.882h-.67zm-1.5-7.66h-2.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25H7a.25.25 0 0 0 .25-.25z"
                        ></path>
                      </svg>
                      Helpful
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* See All Reviews Button */}
            <div className="flex justify-center mt-4">
              <button className="text-primary hover:underline font-semibold">
                See all reviews
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar - Desktop Position */}
        <div className="hidden md:block md:col-span-1">
          <div className="space-y-2 sticky top-6">
            <div className="bg-background overflow-hidden py-4">
              <div className="space-y-2 mb-6">
                <div className="flex flex-col items-start">
                  {/* Event Title */}
                  <h1 className="text-lg font-bold text-foreground mb-2">
                    {eventItem.title}
                  </h1>
                  <div className="flex items-center flex-wrap gap-2 sm:gap-4">
                    <p className="text-foreground flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}{" "}
                      ({eventItem.reviews})
                    </p>
                    {/* <span className="text-muted-foreground">•</span> */}
                    <div className="flex items-center gap-1">
                      <img
                        src={coach?.image}
                        alt={coach?.name}
                        className="w-6 h-6 rounded-lg object-cover"
                      />
                      <p className="font-semibold text-foreground line-clamp-1">
                        {coach?.name}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-primary-foreground px-2 py-1 rounded-sm bg-primary/70 w-fit">
                  {eventItem.category}
                </p>
                <div className="flex gap-4 text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mt-1"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth={1.5}
                        d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth={1.5}
                        d="M7 4V2.5M17 4V2.5M2.5 9h19"
                        opacity={0.5}
                      ></path>
                      <path
                        fill="currentColor"
                        d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      ></path>
                    </g>
                  </svg>
                  <div className="flex flex-col text-foreground">
                    <span> Start date</span>
                    <span className="text-sm text-muted-foreground">
                      Feb 07, 2026
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mt-1"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <circle
                        cx={12}
                        cy={12}
                        r={9}
                        fill="currentColor"
                        fillOpacity={0.25}
                      ></circle>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"
                        strokeWidth={1}
                      ></path>
                    </g>
                  </svg>
                  <div className="flex flex-col text-foreground">
                    <span>Time</span>
                    <span className="text-sm text-muted-foreground">
                      09:00 AM - 11:30 AM EST(Africa/Lagos)
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mt-1"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.72 16.64a1 1 0 1 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 7.5c-1.54 0-2.502 1.667-1.732 3c.357.619 1.017 1 1.732 1c1.54 0 2.502-1.667 1.732-3A2 2 0 0 0 12 7.5"
                      className="duoicon-primary-layer"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.4 16.4 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a21 21 0 0 1-1.952-1.282A16.4 16.4 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2"
                      className="duoicon-secondary-layer"
                      opacity={0.3}
                    ></path>
                  </svg>
                  <div className="flex flex-col text-foreground">
                    <span>Location</span>
                    <span className="text-sm text-muted-foreground">
                      Online (Zoom)
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mt-1"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 12a2 2 0 0 0 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 0 2-2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 0-2 2m-3.5 4.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zm-4.5-4A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"
                    ></path>
                  </svg>
                  <div className="flex flex-col text-foreground">
                    <span>Attendees</span>
                    <span className="text-sm text-muted-foreground">
                      12 registered
                    </span>
                  </div>
                </div>
              </div>
              {eventItem.acceptsInstallmentPayment && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Payment Option
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentType-desktop"
                        value="full"
                        checked={paymentType === "full"}
                        onChange={(e) =>
                          setPaymentType(
                            e.target.value as "full" | "installment",
                          )
                        }
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="text-sm text-foreground">
                        Full Payment
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentType-desktop"
                        value="installment"
                        checked={paymentType === "installment"}
                        onChange={(e) =>
                          setPaymentType(
                            e.target.value as "full" | "installment",
                          )
                        }
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="text-sm text-foreground">
                        Installment (3 payments)
                      </span>
                    </label>
                  </div>
                </div>
              )}
              <div className="mb-6">
                <p className="text-xl font-bold text-foreground mb-2">
                  {displayPrice}
                  {displayDuration && ` • ${displayDuration}`}
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <button className="w-full bg-foreground hover:bg-purple-500 text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer">
                    Enroll
                  </button>
                  <button className="flex items-center justify-center w-14 h-full bg-background text-foreground py-3 rounded-lg font-semibold border border-border hover:cursor-pointer transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10.5 10h4m-2-2v4m4 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button className="w-full bg-background border text-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer flex items-center justify-center gap-2">
                  <Bookmark className="w-5 h-5" /> Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
