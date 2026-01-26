import React from "react"
import { Monitor, Heart, Users } from "lucide-react"

export function WhyChooseUsSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                    Why choose Bitroot for engagement?
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Interactive Learning */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Monitor className="w-12 h-12 text-primary stroke-[1.5]" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
                        <p className="text-muted-foreground">
                            Make learning fun with gamified experiences with others.
                        </p>
                    </div>

                    {/* Real-Time Engagement */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Heart className="w-12 h-12 text-primary stroke-[1.5]" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Real-Time Engagement</h3>
                        <p className="text-muted-foreground">
                            Participate and get instant feedback in class, at work, or at home.
                        </p>
                    </div>

                    {/* Collaboration & Connection */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Users className="w-12 h-12 text-primary stroke-[1.5]" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Collaboration & Connection</h3>
                        <p className="text-muted-foreground">
                            Bring friends, students, or colleagues together for shared, active learning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
