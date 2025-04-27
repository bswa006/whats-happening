"use client";

import React from "react";

/**
 * Interface for LocationHeader component props
 */
interface LocationHeaderProps {
  /**
   * The current location name to display
   */
  location: string;
}

/**
 * Header component that displays the current location with a dropdown option
 * @param {LocationHeaderProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function LocationHeader({ location }: LocationHeaderProps): JSX.Element {
  return (
    <div className="flex items-center justify-between relative w-full">
      <div className="flex flex-col items-start justify-center gap-px">
        <div className="opacity-60 font-medium text-sm text-[#111111]">
          What's Happening in
        </div>
        <div className="inline-flex items-center gap-1">
          <div className="font-bold text-lg text-[#111111]">{location}</div>
          <img
            className="w-[18px] h-[18px]"
            alt="Change location"
            src="/static/images/chevron-down.svg"
          />
        </div>
      </div>
      <div className="inline-flex items-center gap-4" />
    </div>
  );
}
