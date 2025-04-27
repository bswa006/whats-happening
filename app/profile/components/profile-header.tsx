"use client";

import React from "react";
import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  memberSince: string;
}

/**
 * Profile header component displaying user information and avatar
 * @param {ProfileHeaderProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function ProfileHeader({
  name = "Raghu Raj",
  memberSince = "MEMBER SINCE OCT, 2024",
}: ProfileHeaderProps): JSX.Element {
  return (
    <div className="flex flex-col w-full items-center gap-[25px] relative flex-[0_0_auto]">
      <div className="relative w-24 h-24 rounded-[67.22px] border-[1.49px] border-solid border-black overflow-hidden">
        <Image
          src="/static/images/frame-11416.svg"
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-bold text-black text-lg tracking-[0] leading-[normal] whitespace-nowrap">
          {name}
        </div>

        <div className="relative w-fit font-semibold text-[#7c7c7c] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          {memberSince}
        </div>
      </div>
    </div>
  );
}
