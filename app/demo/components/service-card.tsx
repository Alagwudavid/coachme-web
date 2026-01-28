'use client';

import { useState } from 'react';
import { Calendar, Check } from 'lucide-react';
import { type Service } from '../data/services';
import { getCoachById } from '../data/utils';

interface ServiceCardProps {
    serviceItem: Service;
    onClick: () => void;
}

export const ServiceCard = ({ serviceItem, onClick }: ServiceCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [popupPosition, setPopupPosition] = useState<'left' | 'right'>('right');
    const coach = getCoachById(serviceItem.coachId);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHovered(true);

        // Calculate if popup should be on left or right
        const rect = e.currentTarget.getBoundingClientRect();
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;

        // If not enough space on right (less than 350px), show on left
        if (spaceRight < 350 && spaceLeft > spaceRight) {
            setPopupPosition('left');
        } else {
            setPopupPosition('right');
        }
    };

    return (
        <div
            key={serviceItem.id}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-background cursor-pointer relative group"
        >
            {/* Hover Popup - Only visible on md screens and above */}
            {isHovered && (
                <div
                    className={`hidden md:block absolute top-0 z-50 bg-background border border-border rounded-lg shadow-xl p-4 w-92 ${popupPosition === 'left' ? 'right-full mr-2' : 'left-full ml-2'
                        }`}
                    style={{
                        animation: 'fadeIn 0.2s ease-in-out'
                    }}
                >
                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-xl line-clamp-2">
                            {serviceItem.title}
                        </h4>
                        <p className="text-base text-foreground line-clamp-3">
                            {serviceItem.description}
                        </p>
                        <div className="space-y-2 pt-4 border-t">
                            <div className="flex gap-4 text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 4V2.5M17 4V2.5M2.5 9h19" opacity={0.5}></path><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path></g></svg>
                                <div className="flex flex-col text-foreground">
                                    <span>Session Type: {serviceItem.sessionType}</span>
                                    {serviceItem.duration && <span className='text-sm text-muted-foreground'>{serviceItem.duration}</span>}
                                </div>
                            </div>
                            <div className="flex gap-4 text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M6.72 16.64a1 1 0 1 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 7.5c-1.54 0-2.502 1.667-1.732 3c.357.619 1.017 1 1.732 1c1.54 0 2.502-1.667 1.732-3A2 2 0 0 0 12 7.5" className="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.4 16.4 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a21 21 0 0 1-1.952-1.282A16.4 16.4 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2" className="duoicon-secondary-layer" opacity={0.3}></path></svg>
                                <div className="flex flex-col text-foreground">
                                    <span>Online Session</span>
                                    {serviceItem.availability && <span className='text-sm text-muted-foreground'>{serviceItem.availability}</span>}
                                </div>
                            </div>
                            <div className="flex gap-2 text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M17 10.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.673zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z"></path><path strokeLinecap="square" strokeLinejoin="round" d="M5 9c0-3.314 3.134-6 7-6s7 2.686 7 6"></path><path strokeLinecap="round" strokeLinejoin="round" d="M19 17v.8c0 1.767-1.79 3.2-4 3.2h-2"></path></g></svg>
                                <span>Expert {coach?.name || 'Coach'}</span>
                            </div>
                        </div>
                        <div className="pt-4 border-t">
                            <h3 className="text-lg font-semibold text-foreground mb-3">What You'll Get</h3>
                            <ul className="space-y-2 text-muted-foreground text-sm flex flex-col">
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Personalized one-on-one attention</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Customized approach for your specific needs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Direct feedback and actionable advice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Flexible scheduling to fit your calendar</span>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <button className="w-full bg-black dark:bg-white hover:bg-purple-500 text-white dark:text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer">
                                Book now
                            </button>

                            <button className="flex items-center justify-center w-12 h-full bg-background text-foreground py-3 rounded-lg font-semibold border border-border hover:cursor-pointer transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.41 19.968C7.59 17.858 2 13.035 2 8.694C2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5c2-2 3.5-2.5 5-2.5c2.895 0 5 2.326 5 5.194c0 4.34-5.59 9.164-8.41 11.274c-.95.71-2.23.71-3.18 0"></path></svg>
                            </button>
                        </div>
                    </div>
                    {/* Arrow indicator */}
                    <div
                        className={`absolute top-6 w-3 h-3 bg-background border-border transform rotate-45 ${popupPosition === 'left'
                            ? 'left-full ml-[-6px] border-t border-r'
                            : 'right-full mr-[-6px] border-l border-b'
                            }`}
                    />
                </div>
            )}

            {/* Service Image */}
            <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl">
                <img
                    src={serviceItem.image}
                    alt={serviceItem.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-background text-foreground capitalize">
                    {serviceItem.sessionType}
                </div>
            </div>

            {/* Service Content */}
            <div className="mt-4 flex gap-4">
                <div className="flex-1 flex flex-col space-y-1">
                    {/* Title */}
                    <h3 className="font-semibold text-foreground text-base line-clamp-2">
                        {serviceItem.title}
                    </h3>

                    {/* Coach */}
                    <div className="flex items-center gap-1">
                        {coach?.isPremium && <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414"></path></g></svg>}
                        <span className="text-sm text-foreground">{coach?.name || 'Coach'}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(serviceItem.rating)
                                    ? 'text-yellow-500 fill-yellow-500'
                                    : i < serviceItem.rating
                                        ? 'text-yellow-500 fill-yellow-500 opacity-50'
                                        : 'text-gray-300'
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                        <span className="text-sm text-foreground">
                            {serviceItem.rating} ({serviceItem.reviews})
                        </span>
                    </div>

                    {(serviceItem.price || serviceItem.duration) && (
                        <div className="text-base font-semibold text-foreground">
                            {serviceItem.price}{serviceItem.duration && ` • ${serviceItem.duration}`}
                        </div>
                    )}
                </div>
            </div>
            <div className='flex items-center gap-2 mt-1'>
                {serviceItem.category && (
                    <div className={`px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-primary text-primary-foreground`}>
                        {serviceItem.category}
                    </div>
                )}
            </div>
        </div>
    );
};
