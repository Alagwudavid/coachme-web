"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function NotFound() {
    const router = useRouter();

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-lg"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-6 text-destructive"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={240} height={240} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8v3a1 1 0 0 0 1 1h3m0-4v8m10-8v3a1 1 0 0 0 1 1h3m0-4v8m-11-6v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0"></path></svg>
                    </motion.div>
                    <h2 className="text-2xl font-semibold text-foreground mb-3">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        The URL you're looking for doesn't exist or the link is invalid.
                        Please check the URL and try again.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => router.back()}
                            variant="outline"
                            className="gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </Button>
                        <Button
                            onClick={() => router.push('/')}
                            className="gap-2 bg-foreground text-background hover:bg-foreground/90 cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5 22v-8m0 0V4m0 10l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 0V2"></path></svg>
                            Report issue
                        </Button>
                    </div>

                    {/* Help Text */}
                    <div className="mt-12 pt-8">
                        <p className="text-sm text-muted-foreground">
                            Need help? Reach out to us at {" "}
                            <button
                                onClick={() => router.push('/')}
                                className="text-primary hover:underline font-medium"
                            >
                                bitrootinfo@gmail.com
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
