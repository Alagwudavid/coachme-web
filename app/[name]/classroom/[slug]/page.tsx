"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Users,
  Star,
  BookOpen,
  Award,
  Video,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { getCourseBySlug, getCoachBySlug } from "@/app/data/utils";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const coachSlug = params.name as string;
  const courseSlug = params.slug as string;

  const course = getCourseBySlug(courseSlug);
  const coach = getCoachBySlug(coachSlug);

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Course not found
          </h1>
          <button
            onClick={() => router.back()}
            className="text-primary hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left: Course Details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                {course.category}
              </span>
              {course.level && (
                <span className="px-3 py-1 bg-muted rounded-full">
                  {course.level}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {course.description}
            </p>
          </div>

          {/* Course Stats */}
          <div className="flex flex-wrap gap-6">
            {course.rating && (
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">{course.rating}</span>
                {course.totalReviews && (
                  <span className="text-muted-foreground">
                    ({course.totalReviews} reviews)
                  </span>
                )}
              </div>
            )}
            {course.students && (
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
            )}
            {course.duration && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
            )}
          </div>

          {/* Instructor Info */}
          {coach && (
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Instructor</p>
                <p className="font-semibold text-lg">{coach.name}</p>
                {coach.title && (
                  <p className="text-sm text-muted-foreground">{coach.title}</p>
                )}
              </div>
            </div>
          )}

          {/* What You'll Learn */}
          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Course Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Course Content
            </h2>
            <div className="space-y-2">
              {course.modules && course.modules.length > 0 ? (
                course.modules.map((module, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{module.title}</span>
                      </div>
                      {module.duration && (
                        <span className="text-sm text-muted-foreground">
                          {module.duration}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-6 text-muted-foreground p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    <span>Video lectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>Resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Certificate</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Requirements */}
          {course.requirements && course.requirements.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Requirements
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Description */}
          {course.longDescription && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Description
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {course.longDescription}
              </p>
            </div>
          )}
        </div>

        {/* Right: Course Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-4">
            {/* Course Image */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Pricing and CTA */}
            <div className="p-6 border rounded-lg space-y-4">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold">{course.price}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Enroll Now
              </button>

              <button className="w-full py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                Add to Cart
              </button>

              {/* Course Includes */}
              <div className="pt-4 border-t space-y-3">
                <p className="font-semibold">This course includes:</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {course.duration && (
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Downloadable resources</span>
                  </div>
                  {course.hasLifetimeAccess && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Full lifetime access</span>
                    </div>
                  )}
                  {course.hasCertificate && (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Certificate of completion</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
