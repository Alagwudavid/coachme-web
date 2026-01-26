import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

export const metadata: Metadata = {
    title: 'Notifications | CoachMe',
    description: 'View your notifications and activity',
};

export default function NotificationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="pl-20 min-h-page bg-background relative">
                <div className="lg:flex-1">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}
