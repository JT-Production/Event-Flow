// app/dashboard/layout.tsx (Next.js App Router)

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen  overflow-y-auto">
        <Header />
        {children}

        <Footer />
      </main>
    </div>
  );
}
