"use client";

import { FC } from "react";
import Image from "next/image";

interface FrameProps {
  location?: string;
}

/**
 * Header frame component showing the "What's Happening Near Me" title and location
 */
export const Frame: FC<FrameProps> = ({ location = "JP Nagar, 8th Phase" }) => {
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
};
