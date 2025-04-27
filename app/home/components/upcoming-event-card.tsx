"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface UpcomingEventCardProps {
  className?: string;
}

/**
 * Custom upcoming event card component for the home page
 * Features a single image with left-aligned text content
 * Uses the correct background color from the design
 */
export function UpcomingEventCard({
  className = "",
}: UpcomingEventCardProps): JSX.Element {
  return (
    <div
      className={`w-full bg-[#faf5f2] rounded-[15px] overflow-hidden border-2 border-solid border-black py-4 px-5 ${className}`}
    >
      {/* Card header with title and count */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-xl text-black">Upcoming</h2>
        <Link href="/tickets">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 border-solid border-black">
            <span className="font-bold text-[15px] text-black">2</span>
          </div>
        </Link>
      </div>

      {/* Card content with image and text */}
      <div className="flex items-center">
        {/* Left image */}
        <div className="flex-shrink-0 w-[124px] h-[80px] rounded-[10px] border-2 border-solid border-black overflow-hidden">
          <Image
            src="/static/images/frame-90.png"
            alt="Event image"
            width={124}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content - left aligned */}
        <div className="flex flex-col ml-4">
          <Link href="/events/bangkok-to-bengaluru">
            <p className="font-bold text-xl leading-tight text-black">
              Bangkok to Bengaluru
            </p>
          </Link>
          <span className="font-medium text-gray-600 mt-1">14 FEB</span>
          <Link href="/tickets/booking">
            <span className="font-medium text-[#e67e22] mt-1">
              EVENT BOOKING
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
