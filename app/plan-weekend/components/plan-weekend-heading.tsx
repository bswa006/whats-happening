"use client";

import React from "react";

/**
 * Heading component for the Plan Weekend page
 * @returns {JSX.Element} The rendered component
 */
export function PlanWeekendHeading(): JSX.Element {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <h1 className="relative w-[317px] [font-family:'Tungsten-Bold',Helvetica] font-bold text-[78px] text-center tracking-[0] leading-[67.9px]">
        <span className="text-[#2c2c2c]">Plan your </span>
        <span className="text-[#f6441d]">weekend</span>
      </h1>
    </div>
  );
}
