"use client"

import React, { useState } from "react"
import { Sparkles, Network, BookOpen, Users, FileText, Puzzle, CreditCard, Heart, Ticket, GraduationCap, Calendar, Package, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const features = [
    {
        image: "/assets/discover.png",
        title: "Discover",
        description: "Explore top-tier educators, masterclasses, and live workshops tailored to your goals.",
        textColor: "text-sky-500",
        // resizeImage: "hover:bg-green-700"
    },
    {
        image: "/assets/learn.png",
        title: "Learn",
        description: "Master new skills through interactive learning paths, self-paced modules, and live sessions.",
        textColor: "text-yellow-600",
        // resizeImage: "hover:bg-yellow-700"
    },
    {
        image: "/assets/community.png",
        title: "Community",
        description: "Network with global peers and engage your audience through real-time updates and collaboration.",
        textColor: "text-green-600",
        // resizeImage: "hover:bg-blue-700"
    },
    {
        image: "/assets/live-trivia.png",
        title: "Create",
        description: "Build engaging content with live trivias, automated quizzes, and comprehensive assessments.",
        textColor: "text-red-600",
        // resizeImage: "hover:bg-red-700"
    },
    {
        image: "/assets/escrow-vault.png",
        title: "Digital Escrow",
        description: "Secure your high-value digital assets and paid content within our protected escrow vault.",
        textColor: "text-blue-600",
        // resizeImage: "hover:bg-purple-700"
    },
    {
        image: "/assets/join-rooms.png",
        title: "Classroom",
        description: "Host dedicated learning spaces or join active sessions instantly with a secure entry code.",
        textColor: "text-purple-600",
        // resizeImage: "scale-105"
    },
    {
        image: "/assets/scheduling-system.png",
        title: "Schedule & Track",
        description: "Automate session scheduling and track real-time attendance with seamless student logging.",
        textColor: "text-amber-600",
        // resizeImage: "scale-110"
    },
    {
        image: "/assets/ai.png",
        title: "AI Co-Pilot",
        description: "Generate course outlines, summarize sessions, and automate student queries with built-in AI.",
        textColor: "text-indigo-600",
        hoverColor: "hover:bg-indigo-700"
    },
    {
        image: "/assets/multilingual.png",
        title: "Global Reach",
        description: "Break language barriers with real-time translation and multilingual support for a global audience.",
        textColor: "text-teal-600",
        hoverColor: "hover:bg-teal-700"
    },
    {
        image: "/assets/replays.png",
        title: "Courses & live replays",
        description: "Sell courses & webinar replays that your learners can watch directly on Bitroot.",
        textColor: "text-green-600"
    },
    {
        image: "/assets/live.png",
        title: "Live Interactive",
        description: "Host high-definition live sessions with real-time engagement tools and instant playback.",
        textColor: "text-rose-600",
        hoverColor: "hover:bg-rose-700"
    },
    {
        image: "/assets/portfolio.png",
        title: "Professional Portfolio",
        description: "Get a curated and organized profile displaying your success.",
        textColor: "text-sky-500"
    },
    {
        image: "/assets/integrations.png",
        title: "Integrations",
        description: "Connect your workflow with the tools you already love for a unified teaching experience.",
        textColor: "text-slate-600",
        hoverColor: "hover:bg-slate-700"
    },
    {
        image: "/assets/multicurrency.png",
        title: "Global Payments",
        description: "Accept multicurrency payments and reach learners across the globe without financial borders.",
        textColor: "text-emerald-600",
        hoverColor: "hover:bg-emerald-700"
    },
    {
        image: "/assets/show-love.png",
        title: "Show Love",
        description: "Empower your community with direct financial support and student sponsorship features.",
        textColor: "text-pink-600",
        hoverColor: "hover:bg-pink-700"
    },
    {
        image: "/assets/retention.png",
        title: "Active Engagement",
        description: "Boost retention with gamified learning milestones and real-time interactive feedback loops.",
        textColor: "text-orange-600",
        hoverColor: "hover:bg-orange-700"
    },
    {
        image: "/assets/toolkit.png",
        title: "Masterclasses",
        description: "Host and sell online, physical, or hybrid masterclasses, manage attendees, send reminders, offer replays, and more.",
        textColor: "text-purple-600"
    },
    {
        image: "/assets/ticket.png",
        title: "Event Tickets & Training",
        description: "Sell tickets for all kinds of events and access to masterclasses, events, workshops, training, webinars, and even more.",
        textColor: "text-purple-600"
    },
    {
        image: "/assets/bookings.png",
        title: "Bookings",
        description: "Sell services like consultations and coaching sessions with automated scheduling, calendar integration, and reminders to keep appointments on track.",
        textColor: "text-green-600"
    },
    {
        image: "/assets/toolkit.png",
        title: "Bundles",
        description: "Sell digital products in bundles with different prices and files. Let learners choose the bundle that fits them best, helping you earn more per sale.",
        textColor: "text-yellow-600"
    },
    {
        image: "/assets/ticket.png",
        title: "Memberships",
        description: "Sell members-only subscriptions on your community.",
        textColor: "text-yellow-600"
    },
]

const ITEMS_PER_PAGE = 6

export function FeaturesGridSection() {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(features.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentFeatures = features.slice(startIndex, endIndex)

    const handlePrevious = () => {
        setCurrentPage(prev => Math.max(1, prev - 1))
    }

    const handleNext = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1))
    }

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-sky-300/10">
            <div className="mx-auto w-fit mb-4 flex items-center gap-2 px-4 py-2 rounded-full bg-none border border-primary">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-secondary">Our features</span>
            </div>
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">What we offer.</h2>
                <p className="text-muted-foreground text-lg">Bitroot makes learning easy and interactive with peers and the community.</p>
            </div>

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {currentFeatures.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
                            image={feature.image}
                            // icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            textColor={feature.textColor}
                            resizeImage={feature.resizeImage}
                        />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <Button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                variant={currentPage === page ? "default" : "outline"}
                                size="icon"
                                className="h-10 w-10"
                            >
                                {page}
                            </Button>
                        ))}
                    </div>

                    <Button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

function FeatureCard({
    image,
    icon,
    title,
    description,
    textColor,
    resizeImage
}: {
    image?: string
    icon?: React.ReactNode
    title: string
    description: string
    textColor: string
    resizeImage?: string
}) {
    if (image) {
        return (
            <div className={`grid grid-cols-3 items-start gap-4 p-6 rounded-2xl cursor-pointer border shadow-lg hover:scale-90 bg-background transition-transform duration-300 text-foreground relative`}>
                <div className="col-span-2">
                    <h3 className={`text-3xl font-bold font-mono ${textColor}`}>{title}</h3>
                    <p className="text-foreground text-base">{description}</p>
                </div>
                <div className={`w-44 h-44 ${resizeImage} absolute -bottom-5 -right-5 transform-3d rotate-12 select-none`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain select-none"
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100">
            <div className={`mb-4 ${textColor}`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    )
}
