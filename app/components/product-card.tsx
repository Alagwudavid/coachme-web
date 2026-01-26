'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { type Product } from '../data/products';
import { getCoachById } from '../data/utils';

interface ProductCardProps {
    productItem: Product;
    onClick: () => void;
}

export const ProductCard = ({ productItem, onClick }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [popupPosition, setPopupPosition] = useState<'left' | 'right'>('right');
    const coach = getCoachById(productItem.coachId);

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
            key={productItem.id}
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
                            {productItem.title}
                        </h4>
                        <p className="text-base text-foreground line-clamp-3">
                            {productItem.description}
                        </p>
                        <div className="space-y-2 pt-4 border-t">
                            <div className="flex gap-4 text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clipRule="evenodd" opacity={0.5}></path><path fill="currentColor" d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></path></svg>
                                <div className="flex flex-col text-foreground">
                                    <span>Product Type: {productItem.type}</span>
                                    {productItem.format && <span className='text-sm text-muted-foreground'>{productItem.format}</span>}
                                </div>
                            </div>
                            {productItem.duration && (
                                <div className="flex gap-4 text-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M10.975 3.002a1 1 0 0 1-.754 1.196a8 8 0 0 0-.583.156a1 1 0 0 1-.59-1.911q.36-.112.73-.195a1 1 0 0 1 1.197.754m2.05 0a1 1 0 0 1 1.196-.754c4.454 1.01 7.78 4.992 7.78 9.752c0 5.523-4.478 10-10 10c-4.761 0-8.743-3.325-9.753-7.779a1 1 0 0 1 1.95-.442a8 8 0 1 0 9.58-9.58a1 1 0 0 1-.753-1.197M6.614 4.72a1 1 0 0 1-.053 1.414q-.222.205-.427.426A1 1 0 0 1 4.668 5.2q.255-.276.532-.533a1 1 0 0 1 1.414.053M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1M3.693 8.388a1 1 0 0 1 .661 1.25a8 8 0 0 0-.156.583a1 1 0 0 1-1.95-.442q.084-.37.195-.73a1 1 0 0 1 1.25-.661"></path></g></svg>
                                    <div className="flex flex-col text-foreground">
                                        <span>Duration</span>
                                        <span className='text-sm text-muted-foreground'>{productItem.duration}</span>
                                    </div>
                                </div>
                            )}
                            {productItem.pages && (
                                <div className="flex gap-4 text-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" d="M16 13.5a2.5 2.5 0 0 1-2.5 2.5h-6c-.979 0-1.83-.562-2.24-1.38c-.152-.303.104-.618.443-.618c.227 0 .422.149.549.338c.269.4.726.662 1.24.662h6a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 1 2.5 2.5v8z" opacity={0.3}></path><path fill="currentColor" d="M6.15 3.15a.499.499 0 0 1 .854.354v5a.5.5 0 0 1-1 0v-3.79l-1.15 1.15a.5.5 0 0 1-.707-.707l2-2z"></path><path fill="currentColor" fillRule="evenodd" d="M8.5 0A2.5 2.5 0 0 1 11 2.5v8A2.5 2.5 0 0 1 8.5 13h-6A2.5 2.5 0 0 1 0 10.5v-8A2.5 2.5 0 0 1 2.5 0zm-6 1A1.5 1.5 0 0 0 1 2.5v8A1.5 1.5 0 0 0 2.5 12h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 8.5 1z" clipRule="evenodd"></path></svg>
                                    <div className="flex flex-col text-foreground">
                                        <span>Pages</span>
                                        <span className='text-sm text-muted-foreground'>{productItem.pages}</span>
                                    </div>
                                </div>
                            )}
                            {productItem.downloadCount && (
                                <div className="flex gap-4 text-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}><path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity={0.5}></path><path strokeLinejoin="round" d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"></path></g></svg>
                                    <div className="flex flex-col text-foreground">
                                        <span>Downloads</span>
                                        <span className='text-sm text-muted-foreground'>{productItem.downloadCount}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="pt-4 border-t">
                            <h3 className="text-lg font-semibold text-foreground mb-3">What's Included</h3>
                            <ul className="space-y-2 text-muted-foreground text-sm flex flex-col">
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Instant digital download</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Lifetime access to content</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Regular updates and improvements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="size-5 mt-1" />
                                    <span>Money-back guarantee</span>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <button className="w-full bg-black dark:bg-white hover:bg-purple-500 text-white dark:text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer">
                                Add to cart
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

            {/* Product Image */}
            <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl">
                <img
                    src={productItem.image}
                    alt={productItem.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-background text-foreground capitalize">
                    {productItem.type}
                </div>
            </div>

            {/* Product Content */}
            <div className="mt-4 flex gap-4">
                <div className="flex-1 flex flex-col space-y-1">
                    {/* Title */}
                    <h3 className="font-semibold text-foreground text-base line-clamp-2">
                        {productItem.title}
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
                                className={`w-4 h-4 ${i < Math.floor(productItem.rating)
                                    ? 'text-yellow-500 fill-yellow-500'
                                    : i < productItem.rating
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
                            {productItem.rating} ({productItem.reviews})
                        </span>
                    </div>

                    <div className="text-base font-semibold text-foreground">
                        {productItem.price}
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-1'>
                {productItem.category && (
                    <div className={`px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-primary text-primary-foreground`}>
                        {productItem.category}
                    </div>
                )}
            </div>
        </div>
    );
};
