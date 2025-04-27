"use client";

import { FrameWrapper } from "@/components/ui/frame-wrapper";
import { NearMeHeading } from "./components/near-me-heading";
import { BackgroundPatterns } from "./components/background-patterns";
import { HeaderBar } from "./components/header-bar";

/**
 * The main Near Me page component showing events near the user's location
 * @returns {JSX.Element} The rendered Near Me page
 */
export default function NearMePage(): JSX.Element {
  return (
    <main className="relative w-full min-h-screen bg-colors-color-general-bg-surface2 overflow-hidden">
      {/* Background patterns */}
      <BackgroundPatterns />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[393px] mx-auto">
        {/* Header with status bar */}
        <HeaderBar />

        {/* Main content */}
        <div className="pt-[207px] px-4">
          <NearMeHeading location="JP Nagar, 8th Phase" />
          <div className="mt-16">
            <FrameWrapper />
          </div>
        </div>
      </div>
    </main>
  );
}
