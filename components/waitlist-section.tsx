"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { SuccessModal } from "@/components/success-modal";

export function WaitlistSection() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [modalData, setModalData] = useState({
        position: 0,
        referralLink: "",
        statusLink: "",
    });
    const emailInputRef = useRef<HTMLInputElement>(null);

    // Sanitize email input
    const sanitizeEmail = (email: string): string => {
        return email.trim().toLowerCase();
    };

    // Validate email format
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const sanitizedEmail = sanitizeEmail(email);
        const sanitizedName = fullName.trim();

        if (!sanitizedName) {
            alert('Please enter your full name');
            return;
        }

        if (!sanitizedEmail || !isValidEmail(sanitizedEmail)) {
            alert('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName: sanitizedName, email: sanitizedEmail }),
            });

            const data = await response.json();

            if (data.alreadyExists) {
                // Redirect to existing waitlist status page
                window.location.href = `/waitlist/${data.id}`;
                return;
            }

            if (data.success) {
                const appUrl = typeof window !== 'undefined' ? window.location.origin : '';
                const referralLink = `${appUrl}?ref=${data.referralId}`;
                const statusLink = `${appUrl}/waitlist/${data.id}`;

                setModalData({
                    position: data.position,
                    referralLink,
                    statusLink,
                });
                setShowSuccessModal(true);
                setFullName('');
                setEmail('');
            } else {
                const errorMessage = data.details
                    ? `${data.error}: ${data.details}`
                    : data.error || 'Failed to join waitlist. Please try again.';
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please check your internet connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Focus input when hash is #waitlist-form
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#waitlist-form') {
                setTimeout(() => {
                    emailInputRef.current?.focus();
                }, 100);
            }
        };

        // Check on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <section id="waitlist-form" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-muted">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center">
                    <div className="space-y-8 w-full mx-auto text-center">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Join the Waitlist
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Be among the first to experience our platform when we launch in Q1 2026
                            </p>
                        </div>

                        {/* Waitlist Form */}
                        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                                <input
                                    ref={emailInputRef}
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed gap-2 whitespace-nowrap"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Joining...
                                        </>
                                    ) : (
                                        <>
                                            Join Now
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Success Modal */}
                        <SuccessModal
                            isOpen={showSuccessModal}
                            onClose={() => setShowSuccessModal(false)}
                            position={modalData.position}
                            referralLink={modalData.referralLink}
                            statusLink={modalData.statusLink}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
