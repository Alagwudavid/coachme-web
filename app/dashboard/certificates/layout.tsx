import { Metadata } from 'next';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

export const metadata: Metadata = {
    title: 'My Certificates | CoachMe',
    description: 'Your earned certificates',
};

export default function CertificatesLayout({
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
