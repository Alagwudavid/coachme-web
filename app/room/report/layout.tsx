"use client";

import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/sidebar";
import ResponsiveContainer from "../../../components/responsive-container";

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ResponsiveContainer className="min-h-page bg-background relative border">
        {children}
      </ResponsiveContainer>
    </>
  );
}
