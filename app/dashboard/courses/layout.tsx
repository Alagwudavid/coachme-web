import { Metadata } from "next";
import Navbar from "@/components/old/navbar";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Courses | CoachMe",
  description: "Browse and manage your courses",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-page bg-background relative border">{children}</div>
    </>
  );
}
