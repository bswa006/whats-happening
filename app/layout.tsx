import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What's Happening - Near Me",
  description: "Discover events near you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
