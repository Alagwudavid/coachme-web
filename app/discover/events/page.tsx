"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { coaches } from "../../data/coaches";
import { courses } from "../../data/courses";
import { CourseCard } from "../../components/course-card";

export default function EventsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(courses.map((e) => e.category))),
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((e) => e.category === selectedCategory);

  // const coachGetSlug
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">All Courses</h1>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
        {filteredCourses.map((course) => {
          const coach = coaches.find((c) => c.id === course.coachId);
          const coachSlug = coach ? coach.slug : "unknown-coach";

          return (
            <CourseCard
              key={course.id}
              courseItem={course}
              onClick={() =>
                router.push(`/${coachSlug}/classroom/${course.slug}`)
              }
            />
          );
        })}
      </div>

      {/* No Results */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No courses found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
