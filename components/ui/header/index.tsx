"use client";

import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  city?: string;
  className?: string;
}

export function Header({
  title = "What's Happening in",
  city = "Bangalore",
  className = "",
}: HeaderProps): JSX.Element {
  return (
    <div
      className={`flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] ${className}`}
    >
      <div className="flex flex-col w-[145px] items-start justify-center gap-px relative">
        <div className="relative self-stretch mt-[-1.00px] opacity-60 [font-family:'Public_Sans',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[19.6px]">
          {title}
        </div>

        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-bold text-[#111111] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
            {city}
          </div>

          <img
            className="relative w-[18px] h-[18px]"
            alt="Chevron down"
            src="/static/images/chevron-down.svg"
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]" />
    </div>
  );
}
