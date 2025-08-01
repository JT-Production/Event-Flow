import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "EventFlow",
  description: "Find and create events effortlessly",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex-1 flex flex-col min-h-screen bg-gray-100 text-gray-900 ` + raleway.className}
      >
        
        {children}
       
      </body>
    </html>
  );
}
