"use client";

import React from "react";

/**
 * Invite friends button component
 * @returns {JSX.Element} The rendered component
 */
export function InviteFriends(): JSX.Element {
  const handleInviteClick = () => {
    // Future implementation: share functionality
    console.log("Invite friends clicked");
  };

  return (
    <button
      className="flex w-full items-center justify-center px-3.5 py-4 relative bg-[#ffe959] rounded-[10px] border-2 border-solid border-black"
      onClick={handleInviteClick}
    >
      <div className="flex items-center justify-between relative flex-1 grow">
        <div className="relative w-fit font-bold text-[#1a1a1a] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Invite Friends
        </div>

        <img
          className="relative w-6 h-6"
          alt="User plus"
          src="/static/images/user-plus.svg"
        />
      </div>
    </button>
  );
}
