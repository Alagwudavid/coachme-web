"use client"

import React from "react"

interface Integration {
    name: string
    icon: string
    color: string
    filter: boolean
}

const SlidingIntegrations: React.FC = () => {
    const integrations: Integration[] = [
        { name: "Zoom", icon: "zoom", color: "#000000", filter: true },
        { name: "Slack", icon: "slack", color: "#ffffff", filter: false },
        { name: "Telegram", icon: "telegram", color: "#EEEFE8", filter: false },
        { name: "Discord", icon: "discord", color: "#5865F2", filter: true },
        { name: "Meet", icon: "googlemeet", color: "#ffffff", filter: false },
        { name: "Stripe", icon: "stripe", color: "#635BFF", filter: true },
        { name: "Calendar", icon: "googlecalendar", color: "#000000", filter: true },
    ]

    return (
        <section className="w-full bg-background py-8 overflow-hidden">
            <div className="relative">
                {/* Infinite sliding container */}
                <div className="flex gap-2 md:gap-8 animate-slide">
                    {/* Duplicate integrations for seamless infinite scroll */}
                    {[...integrations, ...integrations, ...integrations].map((integration, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 flex flex-col items-center gap-3 min-w-[120px] cursor-pointer"
                        >
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                                style={{ background: integration.color }}
                            >
                                <img
                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/${integration.icon}.svg`}
                                    alt={integration.name}
                                    className="w-8 h-8"
                                    style={{ filter: integration.filter ? "brightness(0) invert(1)" : "none" }}
                                />
                            </div>
                            <span className="text-sm text-foreground font-medium whitespace-nowrap">
                                {integration.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SlidingIntegrations
