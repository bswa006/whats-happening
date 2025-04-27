"use client";

import React from "react";

/**
 * Props for the NearMeHeading component
 */
interface NearMeHeadingProps {
  /**
   * Location text to display
   */
  location: string;
}

/**
 * Heading component for the Near Me page showing "WHAT'S HAPPENING NEAR ME" title and location
 * @param {NearMeHeadingProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function NearMeHeading({ location }: NearMeHeadingProps): JSX.Element {
  return (
    <div className="flex flex-col w-full items-center gap-2">
      <div className="relative self-stretch mt-[-1.00px] font-bold text-white text-sm text-center tracking-[0] leading-[12.2px]">
        WHAT&apos;S HAPPENING
      </div>

      <div className="relative self-stretch w-full">
        <div className="w-full font-bold text-white text-[80px] sm:text-[108px] text-center tracking-[0] leading-[1] whitespace-nowrap">
          NEAR ME
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
        <img
          className="relative w-[18px] h-[18px]"
          alt="Navigation"
          src="/static/images/navigation.svg"
        />

        <div className="relative w-fit mt-[-1.00px] font-semibold text-white text-base text-center tracking-[0.10px] leading-5 whitespace-nowrap">
          {location}
        </div>
      </div>
    </div>
  );
}
