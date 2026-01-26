'use client';

import { Suspense } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import FloatingCurrencyButton from './components/floating-currency-button';

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {/* <FloatingCurrencyButton /> */}
            <div className="min-h-screen bg-background relative">
                <div className="w-full">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}
