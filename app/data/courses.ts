export interface Course {
    id: number;
    title: string;
    slug: string;
    canonical: string;
    description: string;
    price: string;
    duration?: string;
    rating: number;
    reviews: number;
    image: string;
    type?: string;
    category: string;
    isSponsored?: boolean;
    isNew?: boolean;
    isTrending?: boolean;
    batchId?: string;
    registrationEndsIn?: string;
    level?: string;
    acceptsInstallmentPayment?: boolean;
    coachId: number;
}

export const courses: Course[] = [
    {
        id: 1,
        title: 'Run faster with coach ryan',
        slug: 'parlay-pros',
        canonical: '/[name]/classroom/parlay-pros',
        description: 'Run faster with coach ryan - Athletic sports',
        price: '$7.50',
        duration: '3 weeks',
        rating: 5,
        reviews: 6,
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
        type: 'Workshop',
        category: 'Business',
        isSponsored: true,
        isTrending: true,
        batchId: '#10002',
        registrationEndsIn: '2 days left • 12 spots left',
        level: "Intermediate",
        acceptsInstallmentPayment: true,
        coachId: 7,
    },
    {
        id: 2,
        title: 'Become the BEST Producer You Can Be',
        slug: 'become-the-best-producer-you-can-be',
        canonical: '/[name]/classroom/become-the-best-producer-you-can-be',
        description: 'SoniX Academy',
        price: '$29.99',
        duration: '1 month',
        rating: 4.86,
        reviews: 36,
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
        type: 'Cohort',
        category: 'Music',
        isSponsored: true,
        isTrending: true,
        batchId: '#30202',
        registrationEndsIn: '5 days left • 7 spots left',
        level: "Beginner",
        acceptsInstallmentPayment: true,
        coachId: 8,
    },
    {
        id: 3,
        title: 'Made for all music creators',
        slug: 'made-for-all-music-creators',
        canonical: '/[name]/classroom/made-for-all-music-creators',
        description: 'Duetti',
        price: '$10',
        duration: '3 days',
        rating: 3.56,
        reviews: 90,
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
        type: 'Masterclass',
        category: 'Music',
        isSponsored: true,
        isNew: true,
        level: "Intermediate",
        coachId: 8,
    },
    {
        id: 4,
        title: 'Digital Marketing Mastery',
        slug: 'digital-marketing-mastery',
        canonical: '/[name]/classroom/digital-marketing-mastery',
        description: 'Learn advanced digital marketing strategies',
        price: '$49.99',
        rating: 4.5,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        category: 'Marketing',
        isSponsored: true,
        isTrending: true,
        level: "Beginner",
        coachId: 9,
    },
    {
        id: 5,
        title: 'Full Stack Web Development',
        slug: 'full-stack-web-development',
        canonical: '/[name]/classroom/full-stack-web-development',
        description: 'Build modern web applications from scratch',
        price: '$790',
        duration: '6 months',
        rating: 4.8,
        reviews: 245,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
        type: 'Physical class',
        category: 'Development',
        isNew: true,
        isTrending: true,
        registrationEndsIn: '1 month left • 17 spots left',
        level: "Beginner",
        acceptsInstallmentPayment: true,
        coachId: 10,
    },
    {
        id: 6,
        title: 'Photography Basics',
        slug: 'photography-basics',
        canonical: '/[name]/classroom/photography-basics',
        description: 'Master the fundamentals of photography',
        price: '$39.99',
        duration: '2 months',
        rating: 4.7,
        reviews: 150,
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
        type: 'Subscription',
        category: 'Photography',
        isNew: true,
        isTrending: true,
        level: "Intermediate",
        acceptsInstallmentPayment: true,
        coachId: 8,
    },
    {
        id: 7,
        title: 'Data Science with Python',
        slug: 'data-science-with-python',
        canonical: '/[name]/classroom/data-science-with-python',
        description: 'Learn data analysis and machine learning',
        price: '$89.99',
        duration: '1 month',
        rating: 4.9,
        reviews: 300,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        category: 'Development',
        isNew: true,
        level: "Professional",
        coachId: 10,
    },
];
