import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "../components/sidebar-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coachme - CoachMe",
  description: "CoachMe Application",
};

export default function CoachmeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
