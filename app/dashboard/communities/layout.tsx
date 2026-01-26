import { Metadata } from 'next';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

export const metadata: Metadata = {
    title: 'My Communities | CoachMe',
    description: 'Your communities and groups',
};

export default function CommunitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <div className="min-h-page bg-muted">
                {children}
            </div>
        </>
    );
}
