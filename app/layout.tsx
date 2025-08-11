import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
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
        className={'flex-1 flex flex-col min-h-screen bg-gray-100 text-gray-900 ' + raleway.className}
      >
        
        {children}
       
      </body>
    </html>
  );
}
