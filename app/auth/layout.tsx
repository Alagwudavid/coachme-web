import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authentication | CoachMe',
    description: 'Sign in or create your account',
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}