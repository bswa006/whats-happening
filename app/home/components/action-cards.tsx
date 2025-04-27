"use client";

import Link from "next/link";

/**
 * ActionCards component for Home page
 * Displays two cards with circular patterns for navigation to other pages
 */
export function ActionCards(): JSX.Element {
  return (
    <div className="flex w-full items-center gap-[15px] relative">
      {/* Near Me Card */}
      <Link
        href="/near-me"
        className="flex flex-col items-start gap-2.5 px-3.5 py-4 relative flex-1 grow bg-[#f6781d] rounded-[14px] overflow-hidden border-[1.77px] border-solid border-black"
      >
        <div className="absolute w-[184px] h-[184px] top-[-86px] left-[77px]">
          <div className="h-[184px]">
            <div className="relative w-[184px] h-[184px] rounded-[92.25px]">
              <div className="absolute w-[140px] h-[140px] top-[22px] left-[22px] bg-[#f45221] rounded-[69.76px] border-[0.71px] border-solid border-[#00000033]" />
              <div className="absolute w-[102px] h-[102px] top-[41px] left-[41px] bg-[#e34f23] rounded-[51.03px] border-[0.71px] border-solid border-[#0000004c]" />
              <div className="absolute w-[69px] h-[69px] top-[58px] left-[58px] bg-[#d9471b] rounded-[34.67px] border-[0.71px] border-solid border-[#0000004c]" />
              <div className="absolute w-[43px] h-[43px] top-[71px] left-[71px] bg-[#c33d13] rounded-[21.57px] border-[0.71px] border-solid border-[#0000004c]" />
              <div className="absolute w-[184px] h-[184px] top-0 left-0 rounded-[92.25px] border-[0.71px] border-solid border-[#0000001a]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[6.55px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-10 h-10" />
          <div className="relative w-[124px] [font-family:'Public_Sans',Helvetica] font-extrabold text-white text-sm tracking-[0] leading-[16.9px]">
            HAPPENING NEAR ME
          </div>
        </div>
      </Link>

      {/* Plan Weekend Card */}
      <Link
        href="/plan-weekend"
        className="flex flex-col items-start gap-2.5 px-3.5 py-4 relative flex-1 grow bg-[#e94cec] rounded-[14px] overflow-hidden border-[1.77px] border-solid border-black"
      >
        <div className="flex flex-col items-start gap-[6.55px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[41.14px] h-[41.14px]" />
          <div className="relative w-[124px] [font-family:'Public_Sans',Helvetica] font-extrabold text-white text-sm tracking-[0] leading-[16.9px]">
            PLAN YOUR WEEKEND
          </div>
        </div>
        <div className="absolute w-[136px] h-[136px] top-[-50px] left-[84px]">
          <div className="relative h-[136px] rounded-[68px]">
            <div className="absolute w-[136px] h-[136px] top-0 left-0 bg-[#ffd50066] rounded-[68px] border-[1.24px] border-solid border-[#ffd5004c] opacity-70" />
            <div className="absolute w-[108px] h-[108px] top-3.5 left-3.5 bg-[#ffd500] rounded-[54px] opacity-70" />
            <div className="absolute w-[78px] h-[78px] top-[29px] left-[29px] bg-[#ffd500] rounded-[39px]" />
          </div>
        </div>
      </Link>
    </div>
  );
}
