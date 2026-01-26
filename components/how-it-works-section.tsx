"use client"

import React from "react"
import {
    ArrowRight,
    CheckCircle2,
    Wallet,
    ShoppingBag,
    GraduationCap,
    MessagesSquare,
    WalletCards,
    PlusCircle,
} from "lucide-react"
import Image from "next/image"

export function HowItWorksSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">How it works</h2>
                <p className="text-muted-foreground">No confusion or delays. setup with 3 steps.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side: Visual Mockup */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20 rounded-3xl p-8 relative min-h-[500px] flex items-center justify-center">
                    <div className="relative w-full max-w-sm">
                        {/* Instructor Image Placeholder */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-8">
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                                <Image
                                    src="/team-collaboration-interface-with-shared-workspace.jpg"
                                    width={400}
                                    height={300}
                                    alt="Instructor"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Order Kit Button */}
                        <div className="absolute top-32 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                            Signup and set account
                            <ArrowRight className="w-4 h-4" />
                        </div>

                        {/* features Grid */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-lg font-semibold mb-4">Features</h3>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="flex flex-col items-center">
                                    <div className="aspect-square border rounded-lg mb-1 flex items-center justify-center p-3">
                                        <ShoppingBag className="w-6 h-6 text-foreground" />
                                    </div>
                                    <p className="text-xs text-center mt-2 text-foreground">Marketplace</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="aspect-square border rounded-lg mb-1 flex items-center justify-center p-3">
                                        <GraduationCap className="w-6 h-6 text-foreground" />
                                    </div>
                                    <p className="text-xs text-center mt-2 text-foreground">Classroom</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="aspect-square border rounded-lg mb-1 flex items-center justify-center p-3">
                                        <MessagesSquare className="w-6 h-6 text-foreground" />
                                    </div>
                                    <p className="text-xs text-center mt-2 text-foreground">Community</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="aspect-square border rounded-lg mb-1 flex items-center justify-center p-3">
                                        <WalletCards className="w-6 h-6 text-foreground" />
                                    </div>
                                    <p className="text-xs text-center mt-2 text-foreground">Escrow</p>
                                </div>
                            </div>
                            <div className="mt-4 h-2 bg-primary rounded-full w-3/4 mx-auto"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Steps */}
                <div className="space-y-10">
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900/20">
                                <PlusCircle className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Create Your Course</h3>
                            <p className="text-muted-foreground">
                                Set up your live cohort with topic, dates, and pricing in minutes.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900/20">
                                <Wallet className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Students Enroll</h3>
                            <p className="text-muted-foreground">
                                Funds are held securely in escrow while students join your cohort.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900/20">
                                <CheckCircle2 className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Teach & Get Paid</h3>
                            <p className="text-muted-foreground">
                                Receive payments as you teach. All timezone logistics handled automatically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
