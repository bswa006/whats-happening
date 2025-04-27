"use client";

import React from "react";

/**
 * Interface for LocationDisplay component props
 */
interface LocationDisplayProps {
  /**
   * Location name to display
   */
  location: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional custom CSS class name
   */
  className?: string;
}

/**
 * Component that displays the user's current location with a navigation icon
 * @param {LocationDisplayProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function LocationDisplay({
  location,
  onClick,
  className,
}: LocationDisplayProps): JSX.Element {
  return (
    <div
      className={`inline-flex items-center justify-center gap-1.5 ${
        className || ""
      }`}
      onClick={onClick}
    >
      <img
        className="relative w-[18px] h-[18px]"
        alt="Navigation"
        src="/static/images/map-pin-icon.svg"
      />
      <div className="relative w-fit font-semibold text-white text-base text-center tracking-[0.10px] leading-5 whitespace-nowrap">
        {location}
      </div>
    </div>
  );
}
