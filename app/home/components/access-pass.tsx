"use client";

import Image from "next/image";
import { AccessPassData } from "../data/events";

interface AccessPassProps {
  data: AccessPassData;
}

/**
 * Access Pass component for priority events
 * Displays a card with sliding functionality for showcasing priority access events
 */
export function AccessPass({ data }: AccessPassProps): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex w-full items-center justify-between relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-bold text-black text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
            Explore Access Pass
          </div>
          <div className="flex w-6 h-6 items-center justify-center gap-2.5 px-2 py-1 relative bg-[#242424]">
            <div className="relative w-fit mt-[-1.50px] [font-family:'Public_Sans',Helvetica] font-bold text-white text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
              4
            </div>
          </div>
        </div>
        <img
          className="relative w-[17px] h-[17px]"
          alt="Arrow right"
          src="/static/images/arrow-right.svg"
        />
      </div>
      <div className="relative self-stretch w-full h-[187px] bg-neutral-950 rounded-[15px] overflow-hidden">
        <div className="relative w-full h-[187px]">
          <Image
            src={data.image}
            alt="Priority access"
            fill
            className="object-cover"
          />
          <div className="absolute w-full h-[130px] top-[57px] left-0">
            <div className="flex flex-col w-[90%] items-center justify-center gap-2 absolute top-[59px] left-[5%]">
              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-bold text-white text-[15px] tracking-[0] leading-[22.5px]">
                  {data.title}
                </div>
                <div className="w-[141px] opacity-70 [font-family:'Public_Sans',Helvetica] font-semibold text-white text-[11px] leading-[16.5px] relative tracking-[0]">
                  {data.date}
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <div className="relative w-1 h-1 bg-[#989898] rounded-sm" />
                <div className="relative w-1 h-1 bg-[#3c3c3c] rounded-sm" />
                <div className="relative w-1 h-1 bg-[#3c3c3c] rounded-sm" />
              </div>
            </div>
            <img
              className="absolute w-[26px] h-6 top-[15px] left-0"
              alt="Chevron left"
              src="/static/images/chevron-left.svg"
            />
            <img
              className="absolute w-[26px] h-6 top-[15px] right-0"
              alt="Chevron right"
              src="/static/images/chevron-right-2.svg"
            />
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 absolute top-3.5 left-[17px] bg-black">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-semibold text-white text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
              {data.badgeText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
