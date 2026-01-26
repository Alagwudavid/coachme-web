"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Sparkles, Monitor } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const infoCards = [
    {
        icon: Calendar,
        label: "Beta Access:",
        value: "Q2, 2026",
    },
    {
        icon: Sparkles,
        label: "Ecosystem:",
        value: "Adaptive, Self-Learning, Assistive-Learning",
    },
    {
        icon: Monitor,
        label: "Category:",
        value: "EdTech + FinTech + Creator Economy",
    },
];

export function AboutUsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <section id="about-us" className="w-full min-h-page px-4 sm:px-6 lg:px-8 py-16 sm:py-20 sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-14 py-16 rounded-3xl lg:rounded-[40px] bg-muted text-background flex items-center justify-center flex-col gap-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center justify-center flex-col w-full"
                >
                    {/* Header */}
                    <motion.div className="mb-12 w-full" variants={itemVariants}>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-foreground w-fit mx-auto">
                            <span className="text-sm font-medium text-foreground">About Us</span>
                        </div>
                    </motion.div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column - Main Content */}
                        <motion.div className="space-y-6" variants={itemVariants}>
                            <h2 className="text-lg font-normal text-foreground leading-tight">
                                <span className="font-light text-foreground">"Own Your Brand. Scale Your Expertise. Secure Your Future."</span> CoachMe is the all-in-one infrastructure for educators to build a branded official hub, manage professional sessions, and automate high-ticket sales{" "}
                                <span className="text-foreground">— all seamlessly integrated into your workflow.</span>
                            </h2>
                            {/* <p className="text-sm text-muted-foreground leading-relaxed">
                                <span className="font-light">Designed to evolve, it</span> helps you work smarter, innovate faster, and stay ahead{" "}
                                <span className="text-muted-foreground">of the innovation curve.</span>
                            </p> */}
                        </motion.div>

                        {/* Right Column - Info Cards */}
                        <motion.div className="flex flex-col gap-8 justify-center" variants={itemVariants}>
                            {infoCards.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center gap-2 text-foreground text-sm">
                                            <Icon className="w-4 h-4" />
                                            <span>{card.label}</span>
                                        </div>
                                        <p className="text-lg sm:text-xl font-medium text-foreground pl-6">
                                            {card.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
