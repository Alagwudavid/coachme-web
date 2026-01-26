import { ImageResponse } from 'next/og';
import { getCoachBySlug } from '@/app/coachme/data/utils';

export const runtime = 'edge';
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default async function Icon({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    const coach = getCoachBySlug(name);

    // Get first letter for fallback
    const firstLetter = coach?.name?.charAt(0).toUpperCase() || 'C';
    const bgColor = coach?.isPremium ? '#8b5cf6' : '#3b82f6';

    // Return icon with first letter (using letter instead of image for reliability)
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: bgColor,
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    borderRadius: '6px',
                }}
            >
                {firstLetter}
            </div>
        ),
        {
            ...size,
        }
    );
}
