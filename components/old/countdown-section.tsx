"use client"

import React, { useState, useEffect } from "react"

export function CountdownSection() {
    return (
        <section className="w-full bg-muted px-4 sm:px-6 lg:px-8 py-16 sm:py-20 mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to launch your academy?</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
                Join us on our launch day and be among the first to experience the future of online teaching.
            </p>
            <CountdownTimer />
        </section>
    )
}

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
    })

    useEffect(() => {
        const targetDate = new Date("2026-04-01T00:00:00")

        const updateCountdown = () => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const months = Math.floor(days / 30)
                const remainingDays = days % 30

                setTimeLeft({
                    months,
                    days: remainingDays,
                    hours,
                })
            }
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000 * 60 * 60) // Update every hour

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex justify-center gap-4 sm:gap-8">
            <TimeUnit value={timeLeft.months} label="MONTHS" />
            <div className="h-[100px] w-[2px] bg-foreground"></div>
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <div className="h-[100px] w-[2px] bg-foreground"></div>
            <TimeUnit value={timeLeft.hours} label="HOURS" />
        </div>
    )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="px-6 py-4 sm:px-8 sm:py-6 min-w-[80px] sm:min-w-[100px]">
                <span className="text-3xl sm:text-5xl font-bold">{String(value).padStart(2, "0")}</span>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-semibold tracking-wide">{label}</span>
        </div>
    )
}
