"use client";

import React from "react";
import Image from "next/image";

/**
 * Booking section component that displays upcoming events and reservations
 * @returns {JSX.Element} The rendered component
 */
export function BookingSection(): JSX.Element {
  return (
    <div className="flex flex-col w-full items-start gap-[13px] relative">
      <div className="relative self-stretch mt-[-1.00px] font-bold text-black text-lg tracking-[0] leading-[normal]">
        My Bookings
      </div>

      <div className="flex items-center gap-[15px] relative self-stretch w-full">
        <div className="relative w-[209px] h-[108px] border border-solid border-black overflow-hidden">
          <Image
            src="/static/images/frame-11641.png"
            alt="Events"
            fill
            className="object-cover"
          />
          <div className="absolute top-[11px] left-3 font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Events
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 px-[7px] py-2 absolute top-[65px] left-3 bg-white border border-solid border-black">
            <div className="relative w-fit mt-[-1.00px] font-bold text-black text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
              3 UPCOMING
            </div>
          </div>
        </div>

        <div className="relative w-[209px] h-[108px] border border-solid border-black overflow-hidden">
          <Image
            src="/static/images/frame-11642.png"
            alt="Reservations"
            fill
            className="object-cover"
          />
          <div className="absolute top-[11px] left-3 font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Reservations
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 px-[7px] py-2 absolute top-[65px] left-3 bg-white border border-solid border-black">
            <div className="relative w-fit mt-[-1.00px] font-bold text-black text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
              1 UPCOMING
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
