import React from "react";
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: "What's Happening - Find Experiences in Bangalore",
  description: "Discover the best offbeat experiences in Bangalore",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/**
 * Root layout that wraps all pages
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactNode} Root layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background font-public-sans">
        <ClientLayout>
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
