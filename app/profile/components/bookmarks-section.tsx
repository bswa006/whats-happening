"use client";

import React from "react";
import Image from "next/image";

interface BookmarksSectionProps {
  eventCount: number;
}

/**
 * Bookmarks section component to display saved events
 * @param {BookmarksSectionProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function BookmarksSection({
  eventCount = 6,
}: BookmarksSectionProps): JSX.Element {
  return (
    <div className="flex flex-col w-full items-start gap-[13px] relative">
      <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full">
        <div className="flex items-center justify-between relative self-stretch w-full">
          <div className="inline-flex items-start gap-3 relative">
            <div className="relative w-[60px] h-[60px] border border-solid border-black overflow-hidden">
              <Image
                src="/static/images/frame-11378.png"
                alt="Bookmarks"
                fill
                className="object-cover"
              />
            </div>

            <div className="inline-flex flex-col items-start justify-center gap-1 relative">
              <div className="relative w-fit mt-[-1.00px] font-semibold text-black text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Bookmarks
              </div>

              <div className="font-semibold text-[#a8a8a8] text-[11px] text-center relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                {eventCount} EVENTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
