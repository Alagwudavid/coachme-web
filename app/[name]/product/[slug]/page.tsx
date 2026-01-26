"use client";

import { useParams, useRouter } from "next/navigation";
import { products, type Product } from "@/app/data/products";
import { getCoachById } from "@/app/data/utils";
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
  Download,
  FileText,
} from "lucide-react";
import { useState } from "react";

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

export default function ProductOverviewPage() {
  const params = useParams();
  const router = useRouter();
  const productSlug = params.slug as string;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

  // Validate slug format (only alphanumeric, dashes, and underscores)
  const isValidSlug = /^[a-z0-9_-]+$/i.test(productSlug);

  // Find product by slug
  const productItem = isValidSlug
    ? products.find((c) => c.slug === productSlug)
    : null;

  // Get coach information
  const coach = productItem ? getCoachById(productItem.coachId) : null;

  if (!productItem) {
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
            Product Not Found
          </h1>
          <p className="text-foreground">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 bg-background text-foreground hover:bg-background mb-6 p-2 rounded-lg cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-background rounded-2xl overflow-hidden p-4 space-y-4">
            {/* Product Preview */}
            {productItem.type === "video" || productItem.type === "course" ? (
              <div className="relative aspect-video bg-background overflow-hidden rounded-2xl group">
                <video
                  id="productItem-intro-video"
                  className="w-full h-full object-cover"
                  poster={productItem.image}
                  // controls
                  preload="metadata"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => {
                    const video = document.getElementById(
                      "productItem-intro-video",
                    ) as HTMLVideoElement;
                    if (video) {
                      if (isPlaying) {
                        video.pause();
                        setIsPlaying(false);
                      } else {
                        video.play();
                        setIsPlaying(true);
                      }
                      (video as any).style.pointerEvents = "auto";
                    }
                  }}
                  id="video-play-overlay"
                  className="absolute bottom-5 left-5 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-2.5 rounded-full cursor-pointer transition-all shadow-lg group-hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-primary fill-primary" />
                  ) : (
                    <Play className="w-6 h-6 text-primary fill-primary" />
                  )}
                </button>
              </div>
            ) : (
              <div className="relative aspect-video bg-background overflow-hidden rounded-2xl">
                <img
                  src={productItem.image}
                  alt={productItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex items-start gap-3 mt-2 border-b pb-4">
              <div className="relative w-20 h-20 bg-background overflow-hidden rounded-2xl">
                <img
                  src={productItem.image}
                  alt={productItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                {/* Product Title */}
                <h1 className="text-lg font-bold text-foreground">
                  {productItem.title}
                </h1>
                <p className="font-semibold text-foreground flex items-center gap-1">
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
                  ({productItem.reviews} ratings)
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src={coach?.image}
                    alt={coach?.name}
                    className="w-7 h-7 rounded-lg object-cover"
                  />
                  <p className="font-semibold text-foreground">{coach?.name}</p>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <div className="space-y-2 mb-6">
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
                      fillRule="evenodd"
                      d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22"
                      clipRule="evenodd"
                      opacity={0.5}
                    ></path>
                    <path
                      fill="currentColor"
                      d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"
                    ></path>
                  </svg>
                  <div className="flex flex-col text-foreground">
                    <span>Product Type: {productItem.type}</span>
                    {productItem.format && (
                      <span className="text-sm text-muted-foreground">
                        {productItem.format}
                      </span>
                    )}
                  </div>
                </div>
                {productItem.duration && (
                  <div className="flex gap-4 text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mt-1"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="currentColor"
                          d="M10.975 3.002a1 1 0 0 1-.754 1.196a8 8 0 0 0-.583.156a1 1 0 0 1-.59-1.911q.36-.112.73-.195a1 1 0 0 1 1.197.754m2.05 0a1 1 0 0 1 1.196-.754c4.454 1.01 7.78 4.992 7.78 9.752c0 5.523-4.478 10-10 10c-4.761 0-8.743-3.325-9.753-7.779a1 1 0 0 1 1.95-.442a8 8 0 1 0 9.58-9.58a1 1 0 0 1-.753-1.197M6.614 4.72a1 1 0 0 1-.053 1.414q-.222.205-.427.426A1 1 0 0 1 4.668 5.2q.255-.276.532-.533a1 1 0 0 1 1.414.053M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1M3.693 8.388a1 1 0 0 1 .661 1.25a8 8 0 0 0-.156.583a1 1 0 0 1-1.95-.442q.084-.37.195-.73a1 1 0 0 1 1.25-.661"
                        ></path>
                      </g>
                    </svg>
                    <div className="flex flex-col text-foreground">
                      <span>Duration</span>
                      <span className="text-sm text-muted-foreground">
                        {productItem.duration}
                      </span>
                    </div>
                  </div>
                )}
                {productItem.pages && (
                  <div className="flex gap-4 text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mt-1"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M16 13.5a2.5 2.5 0 0 1-2.5 2.5h-6c-.979 0-1.83-.562-2.24-1.38c-.152-.303.104-.618.443-.618c.227 0 .422.149.549.338c.269.4.726.662 1.24.662h6a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 1 2.5 2.5v8z"
                        opacity={0.3}
                      ></path>
                      <path
                        fill="currentColor"
                        d="M6.15 3.15a.499.499 0 0 1 .854.354v5a.5.5 0 0 1-1 0v-3.79l-1.15 1.15a.5.5 0 0 1-.707-.707l2-2z"
                      ></path>
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8.5 0A2.5 2.5 0 0 1 11 2.5v8A2.5 2.5 0 0 1 8.5 13h-6A2.5 2.5 0 0 1 0 10.5v-8A2.5 2.5 0 0 1 2.5 0zm-6 1A1.5 1.5 0 0 0 1 2.5v8A1.5 1.5 0 0 0 2.5 12h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 8.5 1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="flex flex-col text-foreground">
                      <span>Pages</span>
                      <span className="text-sm text-muted-foreground">
                        {productItem.pages}
                      </span>
                    </div>
                  </div>
                )}
                {productItem.downloadCount && (
                  <div className="flex gap-4 text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mt-1"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth={1.5}
                      >
                        <path
                          d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"
                          opacity={0.5}
                        ></path>
                        <path
                          strokeLinejoin="round"
                          d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"
                        ></path>
                      </g>
                    </svg>
                    <div className="flex flex-col text-foreground">
                      <span>Downloads</span>
                      <span className="text-sm text-muted-foreground">
                        {productItem.downloadCount}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-6">
                <p className="text-xl font-bold text-foreground mb-2">
                  {productItem.price}
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="w-full bg-black dark:bg-white hover:bg-purple-500 text-white dark:text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer">
                  Buy now
                </button>
                <button className="w-full bg-background border text-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Add to cart
                </button>
              </div>
            </div>
            {/* Product Details Section */}
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About This Product
            </h2>
            <p className="text-foreground mb-4">{productItem.description}</p>
            {isDetailsExpanded && (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  What's Included
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Comprehensive and well-structured content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Practical examples and real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Expert insights and professional guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Downloadable resources and materials</span>
                  </li>
                </ul>

                <div className="pt-4 mt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    This product includes:
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground">
                    <li className="flex items-center gap-2">
                      <Download className="size-5 mt-1" />
                      <span>Instant download access</span>
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
                      <span>Lifetime access to content</span>
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
                      <span>High-quality content</span>
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
                      <span>Support and assistance</span>
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
                      <span>Access on all devices</span>
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
          </div>

          {/* About the Creator Section */}
          <div className="md:hidden block bg-background rounded-2xl p-6">
            <h2 className="text-base font-bold text-foreground mb-4">
              Created by
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
                  <span>{productItem.category} Expert</span>
                </div>
              </div>
            </div>

            <p className="text-foreground font-bold mb-2">Share product via</p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded text-primary hover:bg-primary/30 flex items-center justify-center transition-colors"
              >
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
          </div>

          {/* Reviews Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Reviews</h2>

            {/* Rating Summary */}
            <div className="bg-background rounded-2xl p-6 mb-6">
              <p className="text-2xl font-semibold text-foreground mb-1">
                {productItem.rating}
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
              <p className="text-sm text-foreground">
                {productItem.reviews} total reviews
              </p>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/assets/user-1.png"
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        Alex Johnson
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
                      Excellent resource! Very comprehensive and well-organized.
                    </p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/assets/user-3.jpg"
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        Maria Garcia
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
                      Great value for money. Highly recommended!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* See All Reviews Button */}
            <div className="flex justify-center mt-6">
              <button className="text-primary hover:underline font-semibold">
                See all reviews
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Desktop Position */}
        <div className="hidden md:block md:col-span-1">
          <div className="space-y-2 sticky top-6">
            <div className="bg-background rounded-2xl overflow-hidden p-4">
              <div className="space-y-2 mb-6">
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
                      fillRule="evenodd"
                      d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22"
                      clipRule="evenodd"
                      opacity={0.5}
                    ></path>
                    <path
                      fill="currentColor"
                      d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"
                    ></path>
                  </svg>
                  <div className="flex flex-col text-foreground">
                    <span>Product Type: {productItem.type}</span>
                    {productItem.format && (
                      <span className="text-sm text-muted-foreground">
                        {productItem.format}
                      </span>
                    )}
                  </div>
                </div>
                {productItem.duration && (
                  <div className="flex gap-4 text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mt-1"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="currentColor"
                          d="M10.975 3.002a1 1 0 0 1-.754 1.196a8 8 0 0 0-.583.156a1 1 0 0 1-.59-1.911q.36-.112.73-.195a1 1 0 0 1 1.197.754m2.05 0a1 1 0 0 1 1.196-.754c4.454 1.01 7.78 4.992 7.78 9.752c0 5.523-4.478 10-10 10c-4.761 0-8.743-3.325-9.753-7.779a1 1 0 0 1 1.95-.442a8 8 0 1 0 9.58-9.58a1 1 0 0 1-.753-1.197M6.614 4.72a1 1 0 0 1-.053 1.414q-.222.205-.427.426A1 1 0 0 1 4.668 5.2q.255-.276.532-.533a1 1 0 0 1 1.414.053M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1M3.693 8.388a1 1 0 0 1 .661 1.25a8 8 0 0 0-.156.583a1 1 0 0 1-1.95-.442q.084-.37.195-.73a1 1 0 0 1 1.25-.661"
                        ></path>
                      </g>
                    </svg>
                    <div className="flex flex-col text-foreground">
                      <span>Duration</span>
                      <span className="text-sm text-muted-foreground">
                        {productItem.duration}
                      </span>
                    </div>
                  </div>
                )}
                {productItem.pages && (
                  <div className="flex gap-4 text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mt-1"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M16 13.5a2.5 2.5 0 0 1-2.5 2.5h-6c-.979 0-1.83-.562-2.24-1.38c-.152-.303.104-.618.443-.618c.227 0 .422.149.549.338c.269.4.726.662 1.24.662h6a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 1 2.5 2.5v8z"
                        opacity={0.3}
                      ></path>
                      <path
                        fill="currentColor"
                        d="M6.15 3.15a.499.499 0 0 1 .854.354v5a.5.5 0 0 1-1 0v-3.79l-1.15 1.15a.5.5 0 0 1-.707-.707l2-2z"
                      ></path>
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8.5 0A2.5 2.5 0 0 1 11 2.5v8A2.5 2.5 0 0 1 8.5 13h-6A2.5 2.5 0 0 1 0 10.5v-8A2.5 2.5 0 0 1 2.5 0zm-6 1A1.5 1.5 0 0 0 1 2.5v8A1.5 1.5 0 0 0 2.5 12h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 8.5 1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="flex flex-col text-foreground">
                      <span>Pages</span>
                      <span className="text-sm text-muted-foreground">
                        {productItem.pages}
                      </span>
                    </div>
                  </div>
                )}
                {productItem.downloadCount && (
                  <div className="flex gap-4 text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mt-1"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth={1.5}
                      >
                        <path
                          d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"
                          opacity={0.5}
                        ></path>
                        <path
                          strokeLinejoin="round"
                          d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"
                        ></path>
                      </g>
                    </svg>
                    <div className="flex flex-col text-foreground">
                      <span>Downloads</span>
                      <span className="text-sm text-muted-foreground">
                        {productItem.downloadCount}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-6">
                <p className="text-xl font-bold text-foreground mb-2">
                  {productItem.price}
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="w-full bg-black dark:bg-white hover:bg-purple-500 text-white dark:text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer">
                  Buy now
                </button>
                <button className="w-full bg-background border text-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Add to cart
                </button>
              </div>
            </div>

            {/* About the Creator Section */}
            <div className="bg-background rounded-2xl p-6">
              <h2 className="text-base font-bold text-foreground mb-4">
                Created by
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
                    <span>{productItem.category} Expert</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground font-bold mb-2">
                Share product via
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg text-primary hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
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
                  className="w-8 h-8 rounded-lg bg-background hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
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
                  className="w-8 h-8 rounded-lg bg-background hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
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
                  className="w-8 h-8 rounded-lg text-blue-500 hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
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
                  className="w-8 h-8 rounded-lg text-pink-500 hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
