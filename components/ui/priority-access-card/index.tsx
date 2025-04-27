"use client";

import React from "react";

/**
 * Card component for priority access events
 * @returns {JSX.Element} The rendered component
 */
export function PriorityAccessCard(): JSX.Element {
  return (
    <div className="relative w-full h-[187px] bg-neutral-950 rounded-[15px] overflow-hidden">
      <div
        className="relative w-full h-[187px] bg-cover bg-center"
        style={{ backgroundImage: "url('/static/images/access-pass-bg.png')" }}
      >
        <div className="absolute w-full h-[130px] top-[57px] left-0">
          <div className="flex flex-col w-full px-[17px] items-center justify-center gap-2 absolute top-[59px]">
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full">
              <div className="relative self-stretch mt-[-1.00px] blur-[3px] font-bold text-white text-[15px] leading-[22.5px]">
                The History of Money
              </div>
              <div className="w-[141px] blur-[3px] opacity-70 font-semibold text-white text-[11px] leading-[16.5px]">
                12 APR 2024
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <div className="w-1 h-1 bg-[#989898] rounded-sm" />
              <div className="w-1 h-1 bg-[#3c3c3c] rounded-sm" />
              <div className="w-1 h-1 bg-[#3c3c3c] rounded-sm" />
            </div>
          </div>

          <button className="absolute w-[26px] h-6 top-[15px] left-0 bg-transparent border-none">
            <img
              className="w-full h-full"
              alt="Previous"
              src="/static/images/chevron-left.svg"
            />
          </button>

          <button className="absolute w-[26px] h-6 top-[15px] right-0 bg-transparent border-none">
            <img
              className="w-full h-full"
              alt="Next"
              src="/static/images/chevron-right.svg"
            />
          </button>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 absolute top-3.5 left-[17px] bg-black">
          <div className="font-semibold text-white text-[10px] leading-[15px] whitespace-nowrap">
            PRIORITY ACCESS
          </div>
        </div>
      </div>
    </div>
  );
}
