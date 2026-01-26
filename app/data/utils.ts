import { coaches } from './coaches';
import { products } from './products';
import { services } from './services';
import { courses } from './courses';

/**
 * Generate slug based on premium status
 * Premium coaches: combined letters (e.g., drmichelletaylor)
 * Freemium coaches: dashed (e.g., dr-michelle-taylor)
 */
export function generateCoachSlug(name: string, isPremium: boolean): string {
    const cleaned = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '');

    if (isPremium) {
        // Remove all spaces and dashes for premium coaches
        return cleaned.replace(/[\s-]/g, '');
    } else {
        // Replace spaces with dashes for freemium coaches
        return cleaned.replace(/\s+/g, '-');
    }
}

/**
 * Get coach by slug
 */
export function getCoachBySlug(slug: string) {
    return coaches.find(coach => coach.slug === slug);
}

/**
 * Get coach by ID
 */
export function getCoachById(id: number) {
    return coaches.find(coach => coach.id === id);
}

/**
 * Get products for a specific coach
 */
export function getCoachProducts(coachId: number) {
    return products.filter(product => product.coachId === coachId);
}

/**
 * Get services for a specific coach
 */
export function getCoachServices(coachId: number) {
    return services.filter(service => service.coachId === coachId);
}

/**
 * Get courses for a specific coach
 */
export function getCoachCourses(coachId: number) {
    return courses.filter(course => course.coachId === coachId);
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string) {
    return products.find(product => product.slug === slug);
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string) {
    return services.find(service => service.slug === slug);
}

/**
 * Get course by slug
 */
export function getCourseBySlug(slug: string) {
    return courses.find(course => course.slug === slug);
}

/**
 * Get all premium coaches
 */
export function getPremiumCoaches() {
    return coaches.filter(coach => coach.isPremium);
}

/**
 * Get all freemium coaches
 */
export function getFreemiumCoaches() {
    return coaches.filter(coach => !coach.isPremium);
}
