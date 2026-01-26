"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    position: number;
    referralLink: string;
    statusLink: string;
}

export function SuccessModal({
    isOpen,
    onClose,
    position,
    referralLink,
    statusLink,
}: SuccessModalProps) {
    const [copiedReferral, setCopiedReferral] = React.useState(false);
    const [copiedStatus, setCopiedStatus] = React.useState(false);

    const copyToClipboard = (text: string, type: "referral" | "status") => {
        navigator.clipboard.writeText(text);
        if (type === "referral") {
            setCopiedReferral(true);
            setTimeout(() => setCopiedReferral(false), 2000);
        } else {
            setCopiedStatus(true);
            setTimeout(() => setCopiedStatus(false), 2000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 h-screen bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-background rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-border"
                        >
                            {/* Header */}
                            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center border-b border-border">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-background/50 transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>

                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4"
                                >
                                    <Check className="w-8 h-8 text-white" />
                                </motion.div>

                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    You are in! Welcome aboard
                                </h2>
                                <p className="text-muted-foreground">
                                    Thanks for signing up!
                                </p>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-6">
                                {/* Position Badge */}
                                <div className="bg-primary/10 rounded-lg p-4 text-center border border-primary/20">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        You are
                                    </p>
                                    <p className="text-3xl font-bold text-primary">
                                        #{position}
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        on the Waitlist
                                    </p>
                                </div>

                                <p className="text-sm text-foreground">
                                    We'll notify you the moment early access opens.
                                </p>

                                {/* Referral Link */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">
                                        Share your unique referral link to move up in line:
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={referralLink}
                                            readOnly
                                            className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        />
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => copyToClipboard(referralLink, "referral")}
                                            className="shrink-0"
                                        >
                                            {copiedReferral ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                {/* Status Link */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">
                                        Check your status in line:
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={statusLink}
                                            readOnly
                                            className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        />
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => copyToClipboard(statusLink, "status")}
                                            className="shrink-0"
                                        >
                                            {copiedStatus ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="pt-4">
                                    <Button
                                        onClick={onClose}
                                        className="w-full"
                                        size="lg"
                                    >
                                        Got it, thanks!
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
