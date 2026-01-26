import React from 'react';
import Link from "next/link";
import { Copyright } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 hidden">
                    {/* About Section */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">About</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-200 hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-gray-200 hover:text-white transition-colors">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-200 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/investors" className="text-gray-200 hover:text-white transition-colors">
                                    Investors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Discover Section */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Discover {process.env.NEXT_PUBLIC_APP_NAME}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/intranet" className="text-gray-200 hover:text-white transition-colors">
                                    Get the app
                                </Link>
                            </li>
                            <li>
                                <Link href="/teach" className="text-gray-200 hover:text-white transition-colors">
                                    Teach on {process.env.NEXT_PUBLIC_APP_NAME}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-200 hover:text-white transition-colors">
                                    Plans and Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/accessibility" className="text-gray-200 hover:text-white transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-200 hover:text-white transition-colors">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-200 hover:text-white transition-colors">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tools Section */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Tools</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/ai" className="text-gray-200 hover:text-white transition-colors">
                                    Beet Ai
                                </Link>
                            </li>
                            <li>
                                <Link href="/#bit-forms" className="text-gray-200 hover:text-white transition-colors">
                                    BitForms
                                </Link>
                            </li>
                            <li>
                                <Link href="/#bit-share" className="text-gray-200 hover:text-white transition-colors">
                                    Escrow vault
                                </Link>
                            </li>
                            <li>
                                <Link href="/#whiteboard" className="text-gray-200 hover:text-white transition-colors">
                                    Whiteboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Accessibility Section */}
                    <div>
                        {/* For Business Section */}
                        <h3 className="font-semibold text-lg mb-4">{process.env.NEXT_PUBLIC_APP_NAME} for Enterprise</h3>
                        <ul className="space-y-2">
                            <li className='flex flex-col gap-1'>
                                <span>Need a custom software to educate your team?</span>
                                <Link href="/enterprise" className="text-sky-600 hover:text-sky-400 transition-colors">
                                    Learn more
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* <div className="flex items-baseline gap-2">
                        <Link href="/" className="text-5xl font-bold hover:opacity-80 transition-opacity">
                            {process.env.NEXT_PUBLIC_APP_NAME}, LLC.
                        </Link>
                        <span className="text-gray-400">© {currentYear}</span>
                    </div> */}
                    <div className="flex-1 flex items-center flex-wrap gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Copyright className="w-4 h-4" />
                            Copyright 2025. {process.env.NEXT_PUBLIC_APP_NAME}, LLC
                        </span>
                        <Link href="/terms" className="hover:text-gray-700 transition-colors">
                            Term & Condition
                        </Link>
                        <Link href="/privacy" className="hover:text-gray-700 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/help" className="hover:text-gray-700 transition-colors">
                            Help
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                            <button className="text-foreground transition-colors">
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
