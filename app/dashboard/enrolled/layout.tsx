import { Metadata } from "next";
import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/sidebar";

export const metadata: Metadata = {
  title: "Enrolled Classes | CoachMe",
  description: "Your enrolled classes",
};

export default function EnrolledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-page bg-muted">{children}</div>
    </>
  );
}
