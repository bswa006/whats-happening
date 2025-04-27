"use client";

import React from "react";
import { useRouter } from "next/navigation";

/**
 * Settings button component that appears in the top right of the profile page
 * @returns {JSX.Element} The rendered component
 */
export function SettingsButton(): JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    // For future implementation: navigate to settings page
    console.log("Settings clicked");
  };

  return (
    <div className="inline-flex flex-col items-end px-3.5 py-2.5 absolute top-0 right-0 rounded-[39px] overflow-hidden z-10">
      <button
        onClick={handleClick}
        aria-label="Settings"
        className="cursor-pointer"
      >
        <img
          className="relative w-6 h-6"
          alt="Settings"
          src="/static/images/settings.svg"
        />
      </button>
    </div>
  );
}
