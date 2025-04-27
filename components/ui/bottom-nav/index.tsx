"use client";

import React from "react";
import Link from "next/link";

/**
 * BottomNav component for mobile navigation
 * Provides fixed navigation at the bottom of the screen
 * @returns {JSX.Element} The rendered component
 */
export function BottomNav(): JSX.Element {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t-2 border-solid border-black z-50">
      <div className="w-full h-full grid grid-cols-5 items-center justify-items-center">
        <Link
          href="/home"
          className="flex flex-col items-center justify-center"
        >
          <img
            src="/static/images/home-icon.svg"
            alt="Home"
            className="w-6 h-6"
          />
          <span className="text-xs mt-1 font-medium">Home</span>
        </Link>

        <Link
          href="/near-me"
          className="flex flex-col items-center justify-center"
        >
          <img
            src="/static/images/explore-icon.svg"
            alt="Explore"
            className="w-6 h-6"
          />
          <span className="text-xs mt-1 font-medium">Near Me</span>
        </Link>

        <Link
          href="/scan"
          className="flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center -mt-4">
            <img
              src="/static/images/scan-icon.svg"
              alt="Plan"
              className="w-7 h-7"
            />
          </div>
        </Link>

        <Link
          href="/plan-weekend"
          className="flex flex-col items-center justify-center"
        >
          <img
            src="/static/images/ticket-icon.svg"
            alt="Tickets"
            className="w-6 h-6"
          />
          <span className="text-xs mt-1 font-medium">Plan</span>
        </Link>

        <Link
          href="/profile"
          className="flex flex-col items-center justify-center"
        >
          <img
            src="/static/images/profile-icon.svg"
            alt="Profile"
            className="w-6 h-6"
          />
          <span className="text-xs mt-1 font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
