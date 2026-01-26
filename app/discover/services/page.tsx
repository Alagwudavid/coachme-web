'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { services } from '../../data/services';
import { ServiceCard } from '../../components/service-card';
import { coaches } from '../../data/coaches';

export default function ServicesPage() {
    const router = useRouter();
    const [selectedType, setSelectedType] = useState<string>('All');

    const serviceTypes = ['All', '1-on-1', 'group', 'consultation', 'mentorship'];

    const filteredServices = selectedType === 'All'
        ? services
        : services.filter(s => s.sessionType === selectedType);

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">All Services</h1>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto">
                {serviceTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors capitalize ${selectedType === type
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
                {filteredServices.map((service) => {
                    const coach = coaches.find((c) => c.id === service.coachId);
                    const coachSlug = coach ? coach.slug : 'unknown-coach';
                return (
                    <ServiceCard
                        key={service.id}
                        serviceItem={service}
                        onClick={() => router.push(`/coachme/${coachSlug}/session/${service.slug}`)}
                    />
                )
                })}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                        No services found in this category.
                    </p>
                </div>
            )}
        </div>
    );
}
