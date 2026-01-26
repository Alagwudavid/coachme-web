'use client';

import { Check, Crown, Zap } from 'lucide-react';
import { useParams } from 'next/navigation';
import { getCoachBySlug } from '@/app/coachme/data/utils';

function MembershipPage() {
    const params = useParams();
    const coachSlug = params.name as string;
    const coach = getCoachBySlug(coachSlug);

    const membershipTiers = [
        {
            id: 'basic',
            name: 'Basic Membership',
            price: '$9.99',
            period: '/month',
            description: 'Perfect for getting started with exclusive content',
            icon: <Zap className="w-8 h-8" />,
            color: 'from-blue-400 to-blue-600',
            features: [
                'Access to exclusive products',
                'CoachMe community access',
                'Mailing list subscription',
            ],
            popular: false,
        },
        {
            id: 'premium',
            name: 'Premium Membership',
            price: '$29.99',
            period: '/month',
            description: 'Everything you need to grow and connect',
            icon: <Crown className="w-8 h-8" />,
            color: 'from-purple-400 to-pink-600',
            features: [
                'Access to exclusive products',
                'All communities access',
                'Mailing list subscription',
                'Free one-time booking per month',
            ],
            popular: true,
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Choose Your Membership Plan
                </h2>
                <p className="text-lg text-muted-foreground">
                    Join {coach?.name || 'this coach'}'s community and unlock exclusive benefits, resources, and opportunities
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {membershipTiers.map((tier) => (
                    <div
                        key={tier.id}
                        className={`relative bg-card border-2 rounded-2xl p-8 transition-all hover:shadow-xl ${tier.popular
                                ? 'border-primary scale-105 md:scale-110'
                                : 'border-border hover:border-primary/50'
                            }`}
                    >
                        {/* Popular Badge */}
                        {tier.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                    Most Popular
                                </div>
                            </div>
                        )}

                        {/* Plan Name */}
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            {tier.name}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6">
                            {tier.description}
                        </p>

                        {/* Price */}
                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-foreground">
                                    {tier.price}
                                </span>
                                <span className="text-muted-foreground">
                                    {tier.period}
                                </span>
                            </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8">
                            {tier.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex-shrink-0">
                                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                    <span className="text-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Subscribe Button */}
                        <button
                            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${tier.popular
                                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl'
                                    : 'bg-muted hover:bg-muted/80 text-foreground'
                                }`}
                        >
                            Subscribe Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="max-w-3xl mx-auto text-center pt-8 border-t">
                <h3 className="text-xl font-bold text-foreground mb-4">
                    What's Included in All Memberships
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="space-y-2">
                        <div className="text-3xl">🎯</div>
                        <h4 className="font-semibold text-foreground">Exclusive Content</h4>
                        <p className="text-muted-foreground">
                            Access premium resources and materials
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl">👥</div>
                        <h4 className="font-semibold text-foreground">Community</h4>
                        <p className="text-muted-foreground">
                            Connect with like-minded individuals
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl">📧</div>
                        <h4 className="font-semibold text-foreground">Updates</h4>
                        <p className="text-muted-foreground">
                            Stay informed with regular newsletters
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ or Additional Info */}
            <div className="max-w-3xl mx-auto bg-muted/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">💡 Need Help Choosing?</h3>
                <p className="text-muted-foreground">
                    Not sure which plan is right for you? Start with the Basic Membership and upgrade anytime.
                    All plans include a 7-day money-back guarantee.
                </p>
            </div>
        </div>
    );
}

export default MembershipPage;
