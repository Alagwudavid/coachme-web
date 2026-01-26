import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

export const metadata: Metadata = {
    title: 'Profile | CoachMe',
    description: 'Manage your profile and settings',
};

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="min-h-page bg-background pl-20">
                {children}
                <Footer />
            </div>
        </>
    );
}