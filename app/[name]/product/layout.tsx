import { Metadata } from 'next';
import BrandedNavbar from '../components/branded-navbar';
import Sidebar from '../components/sidebar';
import BrandedFooter from '../components/branded-footer';

export const metadata: Metadata = {
    title: 'Demo Coach | Coachme',
    description: 'Your personal account dashboard',
};

export default function MeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='relative bg-muted min-h-screen'>
            {/* <BrandedNavbar /> */}
            <div className="min-h-screen">
                {children}
                {/* <BrandedFooter /> */}
            </div>
        </div>
    );
}
