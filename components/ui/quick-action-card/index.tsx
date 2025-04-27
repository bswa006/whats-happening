"use client";

import React from "react";

/**
 * Interface for QuickActionCard component props
 */
interface QuickActionCardProps {
  /**
   * The title text to display
   */
  title: string;
  /**
   * Background color for the card (hex value)
   */
  bgColor: string;
  /**
   * Icon path for the action
   */
  icon?: string;
}

/**
 * Card component for quick actions with a colored background and optional icon
 * @param {QuickActionCardProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function QuickActionCard({
  title,
  bgColor,
  icon,
}: QuickActionCardProps): JSX.Element {
  return (
    <div
      className="flex-1 min-w-[150px] flex flex-col items-start gap-2.5 px-3.5 py-4 rounded-[14px] overflow-hidden border-[1.77px] border-solid border-black"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full flex flex-col items-start gap-[6.55px]">
        <div className="relative w-10 h-10">
          {icon && <img src={icon} alt={title} className="w-full h-full" />}
        </div>
        <div className="font-extrabold text-white text-sm leading-[16.9px]">
          {title}
        </div>
      </div>

      {/* Circular decorative elements */}
      <div className="absolute w-[136px] h-[136px] top-[-50px] right-[-20px] opacity-70">
        <div className="relative h-[136px] rounded-[68px]">
          <div className="absolute w-[136px] h-[136px] top-0 left-0 rounded-[68px] border-[1.24px] border-solid opacity-20" />
          <div className="absolute w-[108px] h-[108px] top-3.5 left-3.5 rounded-[54px] opacity-50" />
          <div className="absolute w-[78px] h-[78px] top-[29px] left-[29px] rounded-[39px]" />
        </div>
      </div>
    </div>
  );
}
