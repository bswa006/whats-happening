"use client";

import React from "react";

interface AccessPassProps {
  expiryDate: string;
}

/**
 * Access pass component displaying the user's membership card
 * @param {AccessPassProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function AccessPass({
  expiryDate = "04 JUNE 2025",
}: AccessPassProps): JSX.Element {
  return (
    <div className="relative w-full h-32 bg-[#191919] rounded-[11px] overflow-hidden border-[none] shadow-[0px_0px_36px_2px_#00000073]">
      <div className="absolute w-[136px] h-[205px] top-0 left-[228px]">
        <div className="absolute w-[74px] h-[166px] top-[9px] left-[62px] bg-[#c1ff74] blur-[45.1px] opacity-40" />
        <div className="absolute w-[9px] h-[205px] top-0 left-[118px] bg-[#deff13]" />

        <div className="inline-flex items-center absolute top-[97px] left-0">
          <div className="relative w-fit font-semibold text-white text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            VIEW BENEFITS
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt="Chevron right"
            src="/static/images/chevron-right.svg"
          />
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-1 absolute top-[75px] left-[18px]">
        <div className="relative w-fit mt-[-1.00px] opacity-70 font-semibold text-white text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          EXPIRES ON
        </div>
        <div className="font-bold text-white text-[15px] relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
          {expiryDate}
        </div>
      </div>

      <div className="absolute h-4 top-4 left-[18px] [background:linear-gradient(52deg,rgba(175,255,44,1)_0%,rgba(105,153,26,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-sm tracking-[0] leading-[normal] whitespace-nowrap">
        ACCESS PASS
      </div>
    </div>
  );
}
