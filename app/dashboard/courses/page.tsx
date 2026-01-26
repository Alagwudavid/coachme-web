'use client';

import { Heart, ChevronDown, Grid3x3, List, Clock, Users, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface Course {
    id: string;
    title: string;
    code: string;
    instructor: string;
    progress: number;
    totalLessons: number;
    completedLessons: number;
    color: string;
    isFavorite: boolean;
    category: string;
    thumbnail: string;
    nextLesson?: string;
    duration?: string;
    students?: number;
}

const mockCourses: Course[] = [
    {
        id: '1',
        title: 'Engineering Drawing II',
        code: 'MEE 314',
        instructor: 'Dr. John Smith',
        progress: 65,
        totalLessons: 24,
        completedLessons: 16,
        color: 'from-blue-500 to-blue-600',
        isFavorite: true,
        category: 'Mechanical Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
        nextLesson: 'Module 5: Advanced CAD',
        duration: '12 weeks',
        students: 45,
    },
    {
        id: '2',
        title: 'Thermodynamics',
        code: 'MEE 312',
        instructor: 'Prof. Sarah Johnson',
        progress: 40,
        totalLessons: 20,
        completedLessons: 8,
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        category: 'Mechanical Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
        nextLesson: 'Module 3: Heat Transfer',
        duration: '10 weeks',
        students: 52,
    },
    {
        id: '3',
        title: 'Fluid Mechanics',
        code: 'MEE 332',
        instructor: 'Dr. Michael Brown',
        progress: 80,
        totalLessons: 18,
        completedLessons: 14,
        color: 'from-blue-500 to-blue-600',
        isFavorite: true,
        category: 'Mechanical Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400',
        nextLesson: 'Module 6: Turbulent Flow',
        duration: '8 weeks',
        students: 38,
    },
    {
        id: '4',
        title: 'Heat and Mass Transfer I',
        code: 'ME 372',
        instructor: 'Prof. Emily Davis',
        progress: 25,
        totalLessons: 22,
        completedLessons: 5,
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        category: 'Mechanical Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
        nextLesson: 'Module 2: Conduction',
        duration: '11 weeks',
        students: 41,
    },
    {
        id: '5',
        title: 'Computing and Programming',
        code: 'MEE 204',
        instructor: 'Dr. Robert Wilson',
        progress: 90,
        totalLessons: 16,
        completedLessons: 14,
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        category: 'Computer Science',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
        nextLesson: 'Module 7: Data Structures',
        duration: '9 weeks',
        students: 60,
    },
    {
        id: '6',
        title: 'Engineering Mathematics',
        code: 'MEE 202',
        instructor: 'Prof. Lisa Anderson',
        progress: 55,
        totalLessons: 25,
        completedLessons: 14,
        color: 'from-blue-500 to-blue-600',
        isFavorite: true,
        category: 'Mathematics',
        thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400',
        nextLesson: 'Module 4: Differential Equations',
        duration: '13 weeks',
        students: 48,
    },
    {
        id: '7',
        title: 'Mechanical Engineering Design',
        code: 'MEE 211',
        instructor: 'Dr. James Taylor',
        progress: 70,
        totalLessons: 20,
        completedLessons: 14,
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        category: 'Mechanical Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
        nextLesson: 'Module 5: Material Selection',
        duration: '10 weeks',
        students: 35,
    },
    {
        id: '8',
        title: 'Engineering Thermodynamics I',
        code: 'MEE 261',
        instructor: 'Prof. Patricia Martinez',
        progress: 100,
        totalLessons: 18,
        completedLessons: 18,
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        category: 'Mechanical Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400',
        nextLesson: 'Course Completed',
        duration: '8 weeks',
        students: 42,
    },
];

function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>(mockCourses);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Get unique categories from courses
    const allCategories = ['All', 'In Progress', 'Completed', 'Favourite', ...Array.from(new Set(mockCourses.map(c => c.category)))];

    const toggleFavorite = (courseId: string) => {
        setCourses(courses.map(course =>
            course.id === courseId ? { ...course, isFavorite: !course.isFavorite } : course
        ));
    };

    const handleContinueLearning = (courseTitle: string) => {
        console.log(`Continue learning: ${courseTitle}`);
        // Add your navigation logic here
    };

    // Filter courses based on selected category
    const filteredCourses = selectedCategory === 'All'
        ? courses
        : selectedCategory === 'In Progress'
            ? courses.filter(c => c.progress < 100)
            : selectedCategory === 'Completed'
                ? courses.filter(c => c.progress === 100)
                : selectedCategory === 'Favourite'
                    ? courses.filter(c => c.isFavorite)
                    : courses.filter(c => c.category === selectedCategory);

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto p-6">
                {/* Weekly Streak Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Start a weekly streak
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Let's chip away at your learning goals.
                            </p>
                        </div>

                        {/* Streak Counter */}
                        <div className="flex items-center gap-3 mx-12">
                            <div className="w-12 h-12 text-gray-300 dark:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 640 640"><path fill="currentColor" d="M256.5 37.6c9.3-7.8 23-7.5 31.9.9c12.3 11.6 23.3 24.4 33.9 37.4c13.5 16.5 29.7 38.3 45.3 64.2c5.2-6.8 10-12.8 14.2-17.9c1.1-1.3 2.2-2.7 3.3-4.1c7.9-9.8 17.7-22.1 30.8-22.1c13.4 0 22.8 11.9 30.8 22.1q1.95 2.55 3.9 4.8c10.3 12.4 24 30.3 37.7 52.4c27.2 43.9 55.6 106.4 55.6 176.6c0 123.7-100.3 224-224 224S96 475.7 96 352c0-91.1 41.1-170 80.5-225c19.9-27.7 39.7-49.9 54.6-65.1c8.2-8.4 16.5-16.7 25.5-24.2zM321.7 480c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-17.3-22.1-49.1-62.4-65.3-83c-5.4-6.9-15.2-8-21.5-1.9c-18.3 17.8-51.5 56.8-51.5 104.3c0 68.6 50.6 109.2 113.7 109.2z"></path></svg>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                    0 <span className="text-base font-normal text-gray-600 dark:text-gray-400">weeks</span>
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-500">
                                    Current streak
                                </div>
                            </div>
                        </div>

                        {/* Progress Circle */}
                        <div className="flex items-center gap-4">
                            <div className="relative w-24 h-24">
                                <svg className="w-24 h-24 transform -rotate-90">
                                    <circle
                                        cx="48"
                                        cy="48"
                                        r="40"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="none"
                                        className="text-gray-200 dark:text-gray-700"
                                    />
                                    <circle
                                        cx="48"
                                        cy="48"
                                        r="40"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="251.2"
                                        strokeDashoffset="188.4"
                                        className="text-green-500"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center">
                                        {/* <div className="w-8 h-8 rounded-full bg-green-500"></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">0/30 course min</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">1/1 visit</span>
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                    Dec 29 - Jan 5
                                </div>
                            </div>
                            <button className="ml-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="currentColor"><path d="M11 10.98a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zm1-4.929a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></path><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0" clipRule="evenodd"></path></g></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter Bar with Dropdown and View Toggle */}
                <div className="mb-8 flex items-center gap-4">
                    {/* Dropdown Filter */}
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-6 py-4 bg-white border-2 border-blue-500 rounded-xl text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900">{selectedCategory}</span>
                                <ChevronDown className={`w-5 h-5 text-blue-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
                                    {allCategories.map((category, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors ${index <= 3 ? 'border-b border-gray-200' : ''
                                                } ${selectedCategory === category ? 'bg-gray-100' : ''}`}
                                        >
                                            <span className="text-gray-900">{category}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* View Toggle Buttons */}
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-3 rounded-lg transition-all ${viewMode === 'grid'
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            title="Grid View"
                        >
                            <Grid3x3 className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-3 rounded-lg transition-all ${viewMode === 'list'
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            title="List View"
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Courses Section */}
                <section>
                    <div className={viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                        : 'flex flex-col gap-4'
                    }>
                        {filteredCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onToggleFavorite={toggleFavorite}
                                onContinue={handleContinueLearning}
                                viewMode={viewMode}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

interface CourseCardProps {
    course: Course;
    onToggleFavorite: (id: string) => void;
    onContinue: (title: string) => void;
    viewMode: 'grid' | 'list';
}

function CourseCard({ course, onToggleFavorite, onContinue, viewMode }: CourseCardProps) {
    const isCompleted = course.progress === 100;

    if (viewMode === 'list') {
        return (
            <div className="bg-white transition-all duration-300 p-3 rounded-2xl border border-gray-100 relative">
                <div className="flex items-center flex-wrap gap-6 max-sm:gap-3">
                    <div className="flex-1 flex items-center gap-4">
                        {/* Thumbnail */}
                        <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-16 h-16 rounded-xl object-cover border flex-shrink-0"
                        />

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-blue-600">{course.code}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">
                                {course.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {course.instructor}
                            </p>
                        </div>
                    </div>
                    {/* Progress */}
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                                <div
                                    className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-500`}
                                    style={{ width: `${course.progress}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-500 mt-1 max-sm:hidden">{course.completedLessons}/{course.totalLessons} lessons</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white transition-all duration-300 rounded-xl relative group">
            {/* Thumbnail */}
            <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg border mb-2"
            />

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                    className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${course.progress}%` }}
                />
            </div>

            {/* Course Code */}
            <div className="text-sm font-semibold text-blue-600">
                {course.nextLesson}
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-gray-900">
                {course.title}
            </h3>

            {/* Instructor */}
            <p className="text-sm text-gray-600 mb-3">
                {course.instructor}
            </p>
        </div>
    );
}

export default CoursesPage;
