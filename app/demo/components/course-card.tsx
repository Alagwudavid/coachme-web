"use client";

import { useState } from "react";
import { Calendar, Check } from "lucide-react";
import { type Course } from "@/app/data/courses";
import { getCoachById } from "@/app/data/utils";

const PremiumIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414"
        ></path>
      </g>
    </svg>
  );
};

interface CourseCardProps {
  courseItem: Course;
  onClick: () => void;
}

export const CourseCard = ({ courseItem, onClick }: CourseCardProps) => {
  const coach = getCoachById(courseItem.coachId);

  return (
    <div
      key={courseItem.id}
      onClick={onClick}
      className="cursor-pointer relative group"
    >
      {/* Course Image */}
      <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl">
        <img
          src={courseItem.image}
          alt={courseItem.title}
          className="w-full h-full object-cover"
        />
        {courseItem.price && (
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-primary text-primary-foreground">
            {/* {courseItem.level} */}
            {courseItem.price}
          </div>
        )}

        <button className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 hover:cursor-pointer transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.41 19.968C7.59 17.858 2 13.035 2 8.694C2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5c2-2 3.5-2.5 5-2.5c2.895 0 5 2.326 5 5.194c0 4.34-5.59 9.164-8.41 11.274c-.95.71-2.23.71-3.18 0"
            ></path>
          </svg>
        </button>
      </div>

      {/* Course Content */}
      <div className="mt-4 flex gap-4">
        {/* Meta Info */}
        <div className="flex-1 flex flex-col space-y-1">
          {/* Title */}
          <h3 className="font-semibold text-foreground text-base line-clamp-2">
            {courseItem.title}
          </h3>
          {/* Rating */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <svg
                className={"w-4 h-4 text-yellow-500 fill-yellow-500"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="">
                {courseItem.rating} ({courseItem.reviews})
              </span>
            </div>
            <span>|</span>
            {courseItem.level}
          </div>
          {/* Range Info - Progress/Enrollment Indicator */}
          {courseItem.duration && (
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(Math.floor(Math.random() * 40) + 60, 100)}%`,
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {Math.min(Math.floor(Math.random() * 40) + 60, 100)}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
