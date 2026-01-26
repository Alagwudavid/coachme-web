"use client";

import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Grid3x3,
  List,
  MoreVertical,
  Folder,
  EyeOff,
  UserMinus,
  Flag,
  ListTodo,
} from "lucide-react";
import { useState } from "react";
import Tooltip from "@/components/ui/tooltip";
import SearchBar from "@/components/search-bar";

interface Class {
  id: string;
  courseCode: string;
  classTitle: string;
  courseTitle: string;
  description: string;
  instructor: string;
  schedule: string;
  location: string;
  isOnline?: boolean;
  locationLink?: string;
  color: string;
  students: number;
  time: string;
  duration: string;
}

const mockClasses: Class[] = [
  {
    id: "1",
    courseCode: "MEE 314",
    classTitle: "Advanced Technical Drawing",
    courseTitle: "Engineering Drawing II",
    description:
      "Learn advanced CAD techniques, 3D modeling, and engineering documentation standards.",
    instructor: "Dr. John Smith",
    schedule: "Mon, Wed, Fri",
    location: "Room 203, Engineering Building",
    isOnline: false,
    color: "from-blue-500 to-blue-600",
    students: 45,
    time: "09:00 AM - 10:30 AM",
    duration: "3 days (Mon - Fri)",
  },
  {
    id: "2",
    courseCode: "MEE 312",
    classTitle: "Heat and Energy Systems",
    courseTitle: "Thermodynamics (07/2025)",
    description:
      "Study energy conversion, heat engines, and thermodynamic cycles in engineering systems.",
    instructor: "Prof. Sarah Johnson",
    schedule: "Tue, Thu",
    location: "Online Class",
    isOnline: true,
    locationLink: "https://meet.google.com/abc-defg-hij",
    color: "from-blue-500 to-blue-600",
    students: 52,
    time: "11:00 AM - 12:30 PM",
    duration: "2 days (Tue - Thu)",
  },
  {
    id: "3",
    courseCode: "MEE 332",
    classTitle: "Flow Dynamics Laboratory",
    courseTitle: "Fluid Mechanics (07/2025)",
    description:
      "Hands-on experiments with fluid flow, pressure systems, and hydraulic machinery.",
    instructor: "Dr. Michael Brown",
    schedule: "Mon, Wed",
    location: "Lab 301, Engineering Building",
    isOnline: false,
    color: "from-blue-500 to-blue-600",
    students: 38,
    time: "02:00 PM - 04:00 PM",
    duration: "2 days (Mon - Wed)",
  },
  {
    id: "4",
    courseCode: "ME 372",
    classTitle: "Thermal Transport Fundamentals",
    courseTitle: "Heat and Mass Transfer I",
    description:
      "Explore conduction, convection, radiation, and mass diffusion principles.",
    instructor: "Prof. Emily Davis",
    schedule: "Tue, Thu, Fri",
    location: "Room 410, Technology Center",
    color: "from-blue-500 to-blue-600",
    students: 41,
    time: "08:00 AM - 09:30 AM",
    duration: "3 days (Tue - Fri)",
  },
  {
    id: "5",
    courseCode: "MEE 204",
    classTitle: "Software Engineering Basics",
    courseTitle: "Computing and Programming",
    description:
      "Master Python, C++, and algorithm design for engineering applications.",
    instructor: "Dr. Robert Wilson",
    schedule: "Mon, Wed, Fri",
    location: "Online Class",
    isOnline: true,
    locationLink: "https://zoom.us/j/123456789",
    color: "from-blue-500 to-blue-600",
    students: 60,
    time: "10:00 AM - 11:30 AM",
    duration: "3 days (Mon - Fri)",
  },
  {
    id: "6",
    courseCode: "MEE 202",
    classTitle: "Advanced Calculus & Analysis",
    courseTitle: "Engineering Mathematics",
    description:
      "Differential equations, linear algebra, and numerical methods for engineers.",
    instructor: "Prof. Lisa Anderson",
    schedule: "Tue, Thu",
    location: "Room 201, Math Building",
    color: "from-blue-500 to-blue-600",
    students: 48,
    time: "01:00 PM - 02:30 PM",
    duration: "2 days (Tue - Thu)",
  },
  {
    id: "7",
    courseCode: "MEE 211",
    classTitle: "Machine Design Principles",
    courseTitle: "Mechanical Engineering",
    description:
      "Design and analysis of mechanical components, gears, and transmission systems.",
    instructor: "Dr. James Taylor",
    schedule: "Mon, Wed, Fri",
    location: "Workshop A",
    isOnline: false,
    color: "from-blue-500 to-blue-600",
    students: 35,
    time: "03:00 PM - 05:00 PM",
    duration: "3 days (Mon - Fri)",
  },
  {
    id: "8",
    courseCode: "MEE 261",
    classTitle: "Energy Conversion Systems",
    courseTitle: "Engineering Thermodynamics I",
    description:
      "Fundamentals of energy, work, entropy, and thermal efficiency in power systems.",
    instructor: "Prof. Patricia Martinez",
    schedule: "Tue, Thu",
    location: "Room 302, Engineering Building",
    color: "from-blue-500 to-blue-600",
    students: 42,
    time: "09:00 AM - 10:30 AM",
    duration: "2 days (Tue - Thu)",
  },
];

function EnrolledPage() {
  const [classes] = useState<Class[]>(mockClasses);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleAction = (action: string, classCode: string) => {
    console.log(`${action} for: ${classCode}`);
    setOpenDropdown(null);
    // Add your action logic here
  };

  // Filter classes happening today (for demo, using Mon, Wed, Fri)
  const todayClasses = classes.filter(
    (c) => c.schedule.includes("Mon") || c.schedule.includes("Wed"),
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Calendar Widget with Today's Events */}
        <div className="bg-background mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Today's Classes
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {todayClasses.length}{" "}
              {todayClasses.length === 1 ? "class" : "classes"}
            </span>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {todayClasses.length > 0 ? (
              todayClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer border border-gray-100 dark:border-gray-600"
                >
                  {/* Time */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {classItem.time.split(" - ")[0]}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {classItem.time.split(" - ")[1]}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {classItem.courseTitle}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {classItem.classTitle}
                    </h4>
                    {classItem.isOnline && classItem.locationLink ? (
                      <a
                        href={classItem.locationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 mt-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                        <span className="truncate">{classItem.location}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-1 mt-1 text-xs text-gray-600 dark:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{classItem.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Status Indicator */}
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No classes scheduled for today
              </div>
            )}
          </div>
        </div>

        {/* Search and View Toggle */}
        <div className="mb-8 flex justify-between items-center gap-4">
          <SearchBar
            maxWidth="max-w-md"
            placeholder="Search classes..."
            showShortcut={false}
          />
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              title="Grid View"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              title="List View"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Classes List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {classes.map((classItem) => (
            <ClassCard
              key={classItem.id}
              classItem={classItem}
              onAction={handleAction}
              viewMode={viewMode}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ClassCardProps {
  classItem: Class;
  onAction: (action: string, code: string) => void;
  viewMode: "grid" | "list";
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
}

function ClassCard({
  classItem,
  onAction,
  viewMode,
  openDropdown,
  setOpenDropdown,
}: ClassCardProps) {
  const isDropdownOpen = openDropdown === classItem.id;

  if (viewMode === "grid") {
    return (
      <div className="bg-white hover:shadow-lg rounded-2xl transition-all duration-300 border flex flex-col h-full">
        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-row gap-4 p-3">
            <div
              className={`w-14 h-14 rounded-lg bg-gradient-to-br ${classItem.color} flex items-center justify-center p-2 text-center`}
            >
              <div className="text-white font-bold text-base">
                {classItem.courseCode}
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center">
              <h3 className="text-base font-bold text-gray-900 line-clamp-1">
                {classItem.classTitle}
              </h3>
              <p className="text-sm text-foreground line-clamp-1">
                {classItem.courseTitle}
              </p>
              <p className="text-sm text-gray-600 line-clamp-1">
                {classItem.instructor}
              </p>
            </div>
          </div>
          {/* Details */}
          <div className="space-y-2 p-3 pt-0">
            <div className="flex items-center gap-2 text-base text-foreground">
              <span>{classItem.description}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex items-end gap-2 p-3 border-t">
          <Tooltip label="Tasks" position="top">
            <button
              onClick={() => onAction("profile", classItem.courseCode)}
              className="p-3 rounded-lg hover:bg-gray-100 transition-colors w-fit flex items-center justify-center"
            >
              <ListTodo className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>
          <Tooltip label="Curriculum" position="top">
            <button
              onClick={() => onAction("profile", classItem.courseCode)}
              className="p-3 rounded-lg hover:bg-gray-100 transition-colors w-fit flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>
          <Tooltip label="Resources" position="top">
            <button
              onClick={() => onAction("folder", classItem.courseCode)}
              className="p-3 rounded-lg hover:bg-gray-100 transition-colors w-fit flex items-center justify-center"
            >
              <Folder className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>
          <div className="relative w-fit">
            {/* <Tooltip label="More Options" position="top"> */}
            <button
              onClick={() =>
                setOpenDropdown(isDropdownOpen ? null : classItem.id)
              }
              className="w-fit p-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
            {/* </Tooltip> */}
            {isDropdownOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                <button
                  onClick={() => onAction("hide", classItem.courseCode)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-gray-700"
                >
                  <EyeOff className="w-4 h-4" />
                  Hide
                </button>
                <button
                  onClick={() => onAction("unenroll", classItem.courseCode)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-gray-700"
                >
                  <UserMinus className="w-4 h-4" />
                  Unenroll
                </button>
                <button
                  onClick={() => onAction("report", classItem.courseCode)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-red-600"
                >
                  <Flag className="w-4 h-4" />
                  Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white hover:shadow-lg rounded-2xl transition-all duration-300 p-6 border">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-6">
          {/* Icon */}
          <div
            className={`w-16 h-16 rounded-lg bg-gradient-to-br ${classItem.color} flex items-center justify-center p-2 flex-shrink-0`}
          >
            <div className="text-center">
              <div className="text-white font-bold text-lg">
                {classItem.courseCode}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
              {classItem.classTitle}
            </h3>
            <p className="text-base text-foreground line-clamp-1">
              {classItem.courseTitle}
            </p>
            <p className="text-sm text-gray-600 line-clamp-1">
              {classItem.instructor}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex-shrink-0 flex items-end gap-2">
          <Tooltip label="Tasks" position="top">
            <button
              onClick={() => onAction("profile", classItem.courseCode)}
              className="w-fit p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ListTodo className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>
          <Tooltip label="Curriculum" position="top">
            <button
              onClick={() => onAction("profile", classItem.courseCode)}
              className="w-fit p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>
          <Tooltip label="Resources" position="top">
            <button
              onClick={() => onAction("folder", classItem.courseCode)}
              className="w-fit p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Folder className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>
          <div className="relative">
            {/* <Tooltip label="More Options" position="top"> */}
            <button
              onClick={() =>
                setOpenDropdown(isDropdownOpen ? null : classItem.id)
              }
              className="w-fit p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
            {/* </Tooltip> */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                <button
                  onClick={() => onAction("hide", classItem.courseCode)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-gray-700"
                >
                  <EyeOff className="w-4 h-4" />
                  Hide
                </button>
                <button
                  onClick={() => onAction("unenroll", classItem.courseCode)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-gray-700"
                >
                  <UserMinus className="w-4 h-4" />
                  Unenroll
                </button>
                <button
                  onClick={() => onAction("report", classItem.courseCode)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-red-600"
                >
                  <Flag className="w-4 h-4" />
                  Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrolledPage;
