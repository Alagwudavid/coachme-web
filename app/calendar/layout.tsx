import { Metadata } from "next";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Calendar | CoachMe",
  description: "Manage your schedule and events",
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <div className="ml-20 min-h-page bg-background relative border">
        {children}
        <Footer />
      </div>
    </>
  );
}
