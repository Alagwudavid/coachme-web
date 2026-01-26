export interface CourseCategory {
    id: string
    name: string
    emoji: string
    bgColor: string
}

export const courseCategories: CourseCategory[] = [
    { id: 'all', name: 'All', emoji: '🌐', bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { id: 'design', name: 'Design', emoji: '🎨', bgColor: 'bg-gradient-to-br from-pink-400 to-purple-500' },
    { id: 'development', name: 'Development', emoji: '💻', bgColor: 'bg-gradient-to-br from-green-400 to-blue-500' },
    { id: 'marketing', name: 'Marketing', emoji: '📈', bgColor: 'bg-gradient-to-br from-orange-400 to-red-500' },
    { id: 'business', name: 'Business', emoji: '💼', bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
    { id: 'photography', name: 'Photography', emoji: '📷', bgColor: 'bg-gradient-to-br from-purple-400 to-pink-500' },
    { id: 'music', name: 'Music', emoji: '🎵', bgColor: 'bg-gradient-to-br from-indigo-400 to-purple-500' },
    { id: 'fitness', name: 'Fitness', emoji: '💪', bgColor: 'bg-gradient-to-br from-red-400 to-pink-500' },
    { id: 'lifestyle', name: 'Lifestyle', emoji: '✨', bgColor: 'bg-gradient-to-br from-teal-400 to-cyan-500' },
    { id: 'teaching', name: 'Teaching', emoji: '📚', bgColor: 'bg-gradient-to-br from-amber-400 to-orange-500' },
    { id: 'health-&-fitness', name: 'Health & Fitness', emoji: '❤️', bgColor: 'bg-gradient-to-br from-amber-400 to-orange-500' },
    { id: 'personal-development', name: 'Personal development', emoji: '🎓', bgColor: 'bg-gradient-to-br from-amber-400 to-orange-500' },
    { id: 'Arts-&-crafts', name: 'Arts & crafts', emoji: '🎨', bgColor: 'bg-gradient-to-br from-amber-400 to-orange-500' },
    { id: 'photo-&-video', name: 'Photo & Video', emoji: '📷', bgColor: 'bg-gradient-to-br from-amber-400 to-orange-500' },
]
