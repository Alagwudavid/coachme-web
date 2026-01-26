import { Metadata } from "next";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

export const metadata: Metadata = {
  title: "Chat | CoachMe",
  description: "Connect and chat with your community",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="h-screen lg:pl-20 pt-16 lg:pt-0">{children}</div>
    </>
  );
}
