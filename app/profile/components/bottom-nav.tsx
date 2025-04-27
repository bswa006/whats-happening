"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

/**
 * Bottom navigation component for the profile page
 * @returns {JSX.Element} The rendered component
 */
export function BottomNav(): JSX.Element {
  const router = useRouter();

  const navigateTo = (path: string) => () => {
    router.push(path);
  };

  return (
    <div className="fixed w-full h-[105px] bottom-0 left-0 bg-[#f6ede9] border-[1.5px] border-solid border-black z-50">
      <div className="flex w-[346px] items-center gap-[11px] relative top-[13px] left-6 max-w-md mx-auto">
        <button
          className="flex items-center justify-center gap-1.5 px-5 py-2.5 relative flex-1 grow rounded-[30px]"
          onClick={navigateTo("/home")}
          aria-label="Home"
        >
          <img
            className="relative w-7 h-7"
            alt="Home"
            src="/static/images/home.svg"
          />
        </button>

        <button
          className="flex items-center justify-center gap-1.5 px-5 py-2.5 relative flex-1 grow rounded-[30px]"
          onClick={navigateTo("/near-me")}
          aria-label="Near Me"
        >
          <div className="relative w-7 h-7">
            <div className="relative w-5 h-6 top-0.5 left-1">
              <div className="relative h-6">
                <img
                  className="absolute w-3 h-3 top-[13px] left-2"
                  alt="Union"
                  src="/static/images/union.svg"
                />

                <img
                  className="absolute w-5 h-6 top-0 left-0"
                  alt="Union"
                  src="/static/images/union-1.svg"
                />
              </div>
            </div>
          </div>
        </button>

        <button
          className="flex items-center justify-center gap-1.5 px-5 py-2.5 relative flex-1 grow bg-[#ead5ca] rounded-[30px]"
          onClick={navigateTo("/profile")}
          aria-label="Profile"
        >
          <div className="relative w-7 h-7 rounded-[67.22px] border-[1.49px] border-solid border-black overflow-hidden">
            <Image
              src="/static/images/frame-11416.svg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
