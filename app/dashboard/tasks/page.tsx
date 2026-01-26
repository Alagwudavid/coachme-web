'use client';

import { Heart, ChevronDown, Grid3x3, List } from 'lucide-react';
import { useState } from 'react';

interface Assessment {
    id: string;
    title: string;
    course: string;
    deadline: string;
    progress: number;
    icon: string;
    color: string;
    isFavorite: boolean;
    status: 'not-started' | 'in-progress' | 'completed';
    score?: number;
    submittedDate?: string;
}

const mockAssessments: Assessment[] = [
    // Assigned - Not Started
    {
        id: '1',
        title: 'End-of-Course Assessment',
        course: 'MEE 314 - Engineering Drawing II',
        deadline: 'Wed, 11:59 PM',
        progress: 0,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        status: 'not-started',
    },
    {
        id: '2',
        title: 'Mid-Term Examination',
        course: 'MEE 312 - Thermodynamics (07/2025)',
        deadline: 'Thu, 11:59 PM',
        progress: 0,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        status: 'not-started',
    },
    // Assigned - In Progress
    {
        id: '3',
        title: 'Final Project Assessment',
        course: 'MEE 332 - Fluid Mechanics (07/2025)',
        deadline: 'Fri, 11:59 PM',
        progress: 45,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: true,
        status: 'in-progress',
    },
    {
        id: '4',
        title: 'Quiz 3 - Property Rights',
        course: 'ME 372 - Heat and Mass Transfer I',
        deadline: 'Sat, 11:59 PM',
        progress: 60,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        status: 'in-progress',
    },
    // Turned In - Completed
    {
        id: '5',
        title: 'Constitutional Principles Test',
        course: 'MEE 204 - Computing and Programming',
        deadline: 'Completed',
        progress: 100,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        status: 'completed',
        score: 92,
        submittedDate: 'Dec 20, 2025',
    },
    {
        id: '6',
        title: 'Contract Formation Quiz',
        course: 'MEE 202 - Engineering Mathematics',
        deadline: 'Completed',
        progress: 100,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: true,
        status: 'completed',
        score: 88,
        submittedDate: 'Dec 18, 2025',
    },
    {
        id: '7',
        title: 'Tort Liability Assessment',
        course: 'MEE 211 - Mechanical Engineering',
        deadline: 'Completed',
        progress: 100,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        status: 'completed',
        score: 95,
        submittedDate: 'Dec 15, 2025',
    },
    {
        id: '8',
        title: 'Administrative Procedures Exam',
        course: 'MEE 261 - Engineering Thermodynamics I',
        deadline: 'Completed',
        progress: 100,
        icon: '📋',
        color: 'from-blue-500 to-blue-600',
        isFavorite: false,
        status: 'completed',
        score: 90,
        submittedDate: 'Dec 12, 2025',
    },
];

function AssessmentsPage() {
    const [assessments, setAssessments] = useState<Assessment[]>(mockAssessments);
    const [selectedClass, setSelectedClass] = useState<string>('All classes');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Get unique classes from assessments
    const allClasses = ['All classes', 'Favourite', ...Array.from(new Set(mockAssessments.map(a => a.course)))];

    const toggleFavorite = (assessmentId: string) => {
        setAssessments(assessments.map(assessment =>
            assessment.id === assessmentId ? { ...assessment, isFavorite: !assessment.isFavorite } : assessment
        ));
    };

    const handleTakeTest = (assessmentTitle: string) => {
        console.log(`Starting test for: ${assessmentTitle}`);
        // Add your navigation logic here
    };

    // Filter assessments based on selected class
    const filteredAssessments = selectedClass === 'All classes'
        ? assessments
        : selectedClass === 'Favourite'
            ? assessments.filter(a => a.isFavorite)
            : assessments.filter(a => a.course === selectedClass);

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                {/* Filter Bar with Dropdown and View Toggle */}
                <div className="mb-8 flex items-center gap-4">
                    {/* Dropdown Filter */}
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-6 py-4 bg-white border-2 border-blue-500 rounded-xl text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900">{selectedClass}</span>
                                <ChevronDown className={`w-5 h-5 text-blue-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
                                    {allClasses.map((className, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setSelectedClass(className);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors ${index <= 1 ? 'border-b border-gray-200' : ''
                                                } ${selectedClass === className ? 'bg-gray-100' : ''}`}
                                        >
                                            <span className="text-gray-900">{className}</span>
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

                {/* Assigned Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Assigned</h2>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                        : 'flex flex-col gap-4'
                    }>
                        {filteredAssessments.filter(a => a.status !== 'completed').map((assessment) => (
                            <AssessmentCard
                                key={assessment.id}
                                assessment={assessment}
                                onToggleFavorite={toggleFavorite}
                                onTakeTest={handleTakeTest}
                                viewMode={viewMode}
                            />
                        ))}
                    </div>
                </section>

                {/* Turned In Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Turned In</h2>
                    </div>

                    <div className={viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                        : 'flex flex-col gap-4'
                    }>
                        {filteredAssessments.filter(a => a.status === 'completed').map((assessment) => (
                            <AssessmentCard
                                key={assessment.id}
                                assessment={assessment}
                                onToggleFavorite={toggleFavorite}
                                onTakeTest={handleTakeTest}
                                viewMode={viewMode}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

interface AssessmentCardProps {
    assessment: Assessment;
    onToggleFavorite: (id: string) => void;
    onTakeTest: (title: string) => void;
    viewMode: 'grid' | 'list';
}

function AssessmentCard({ assessment, onToggleFavorite, onTakeTest, viewMode }: AssessmentCardProps) {
    const isCompleted = assessment.status === 'completed';
    const isInProgress = assessment.status === 'in-progress';
    const isNotStarted = assessment.status === 'not-started';

    if (viewMode === 'list') {
        return (
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 relative">
                <div className="flex items-center gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-muted ${assessment.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-3xl filter brightness-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {assessment.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                            {assessment.course}
                        </p>
                        {!isCompleted && (
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-700 font-medium">{assessment.deadline}</span>
                            </div>
                        )}
                        {isCompleted && (
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600">Score: <span className="font-bold text-green-600">{assessment.score}%</span></span>
                                <span className="text-sm text-gray-600">Submitted: {assessment.submittedDate}</span>
                            </div>
                        )}
                    </div>

                    {/* Progress */}
                    <div className="flex items-center gap-4">
                        {!isCompleted && (
                            <div className="flex flex-col items-center">
                                <span className="text-sm text-gray-600 mb-2">{assessment.progress}% Completed</span>
                                <div className="w-32 bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`bg-gradient-to-r ${assessment.color} h-2 rounded-full transition-all duration-500`}
                                        style={{ width: `${assessment.progress}%` }}
                                    />
                                </div>
                            </div>
                        )}
                        {isCompleted && (
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                                <div
                                    className={`bg-gradient-to-r ${assessment.color} h-2 rounded-full`}
                                    style={{ width: `${assessment.progress}%` }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <button
                            onClick={() => onToggleFavorite(assessment.id)}
                            className="p-2 rounded-full transition-colors"
                        >
                            <Heart
                                className={`w-5 h-5 ${assessment.isFavorite ? 'fill-pink-500 text-pink-500' : 'text-foreground'}`}
                            />
                        </button>
                        <button
                            onClick={() => onTakeTest(assessment.title)}
                            disabled={isNotStarted}
                            className={`
                                px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap
                                ${isNotStarted
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : isCompleted
                                        ? 'bg-slate-600 text-white hover:shadow-lg hover:scale-105'
                                        : 'bg-blue-500 text-white hover:shadow-lg hover:scale-105'
                                }
                            `}
                        >
                            {isNotStarted ? 'Take Test' : isCompleted ? 'View Result' : 'Continue'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 relative group">

            {/* Title */}
            <h3 className="text-base font-bold text-gray-900">
                {assessment.title}
            </h3>

            {/* Course Name */}
            <p className="text-sm text-gray-600 mb-3">
                {assessment.course}
            </p>

            {/* Progress Badge */}
            {!isCompleted && (
                <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">{assessment.progress}% Completed</span>
                </div>
            )}

            {/* Deadline Detail */}
            {!isCompleted && (
                <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">Assigned:</span>
                        <span className="text-sm text-gray-700">{assessment.deadline}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div
                            className={`bg-gradient-to-r ${assessment.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${assessment.progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Completed Details */}
            {isCompleted && (
                <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Score:</span>
                        <span className="text-lg font-bold text-green-600">{assessment.score}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Submitted:</span>
                        <span className="text-sm text-gray-700">{assessment.submittedDate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div
                            className={`bg-gradient-to-r ${assessment.color} h-2 rounded-full`}
                            style={{ width: `${assessment.progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
                {/* Favorite Button */}
                <button
                    onClick={() => onToggleFavorite(assessment.id)}
                    className="p-3 rounded-full transition-colors flex-shrink-0"
                >
                    <Heart
                        className={`w-5 h-5 ${assessment.isFavorite ? 'fill-pink-500 text-pink-500' : 'text-foreground'}`}
                    />
                </button>

                {/* Action Button */}
                <button
                    onClick={() => onTakeTest(assessment.title)}
                    disabled={isNotStarted}
                    className={`
                        flex-1 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer
                        ${isNotStarted
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : isCompleted
                                ? 'bg-slate-600 text-white hover:shadow-lg hover:scale-105'
                                : 'bg-blue-500 text-white hover:shadow-lg hover:scale-105'
                        }
                    `}
                >
                    {isNotStarted ? 'Take Test' : isCompleted ? 'View Result' : 'Continue'}
                </button>
            </div>
        </div>
    );
}

export default AssessmentsPage;
