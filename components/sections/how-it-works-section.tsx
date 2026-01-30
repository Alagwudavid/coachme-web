"use client"

import React from "react"
import { UserPlus, BarChart3, TrendingUp, ArrowDownRight } from "lucide-react"

export function HowItWorksSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">How we work?</h2>
            </div>

            <div className="relative">
                {/* Steps Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                    {/* Step 1: Sign up */}
                    <div className="flex flex-col items-center text-center relative">
                        {/* Icon Card */}
                        <div className="mb-6 relative">
                            <div className="w-30 h-14 bg-foreground rounded-xl flex items-center justify-center gap-2 p-3 shadow-lg">
                                <UserPlus className="w-6 h-6 text-background" />
                                <div className="flex-1 flex flex-col gap-2">
                                    <span className="w-full h-1 bg-muted rounded-2xl"></span>
                                    <span className="w-1/3 h-1 bg-muted rounded-2xl"></span>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3">Sign up</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Create an account in just a few steps and join our marketplace.
                        </p>

                        {/* Connecting Dotted Line - Desktop */}
                        <svg className="absolute hidden md:block" style={{ left: '85%', top: '5%', width: '120px', height: '84px' }}>
                            <path d="M 0 50 Q 40 20, 80 40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" className="text-muted-foreground/30" />
                        </svg>
                    </div>

                    {/* Step 2: Set up a shop */}
                    <div className="flex flex-col items-center text-center relative">
                        {/* Icon Card */}
                        <div className="mb-6 relative">
                            <div className="w-24 h-20 bg-foreground rounded-xl flex items-center justify-center shadow-lg relative">
                                <div className="flex gap-1 items-end">
                                    <div className="w-3 h-8 bg-background rounded-sm"></div>
                                    <div className="w-3 h-14 bg-background rounded-sm"></div>
                                    <div className="w-3 h-10 bg-background rounded-sm"></div>
                                    <div className="w-3 h-12 bg-background rounded-sm"></div>
                                </div>
                                {/* Small location badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-md border-2 border-foreground">
                                    <div className="w-3 h-3 bg-foreground rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3">Set up a shop</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            List your products or services, customise your store.
                        </p>

                        {/* Connecting Dotted Line - Desktop */}
                        <svg className="absolute hidden md:block" style={{ left: '85%', top: '15%', width: '120px', height: '80px' }}>
                            <path d="M 0 10 Q 60 40, 120 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" className="text-muted-foreground/30" />
                        </svg>
                    </div>

                    {/* Step 3: Start selling */}
                    <div className="flex flex-col items-center text-center relative">
                        {/* Icon Card */}
                        <div className="mb-6 relative">
                            <div className="w-30 h-16 bg-foreground rounded-xl flex flex-col items-start p-3 shadow-lg">
                                <div className="flex items-center gap-2 text-background">
                                    <TrendingUp className="w-5 h-5" />
                                    <span className="text-sm">Revenue</span>
                                </div>
                                <div className="text-background font-bold text-2xl mx-auto">480%</div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3">Start coaching</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Reach customers in your location, process bookings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
