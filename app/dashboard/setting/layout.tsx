import { Metadata } from "next";
import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/sidebar";

export const metadata: Metadata = {
  title: "Account setting | CoachMe",
  description: "Your to-do list and tasks",
};

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-page bg-background">{children}</div>
    </>
  );
}
