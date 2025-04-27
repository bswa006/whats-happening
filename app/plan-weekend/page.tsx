"use client";

import { WeekdayFilter } from "@/components/ui/weekday-filter";
import { FrameWrapper } from "@/components/ui/frame-wrapper";
import { PlanWeekendHeading } from "./components/plan-weekend-heading";
import { BackgroundPatterns } from "./components/background-patterns";
import { HeaderBar } from "./components/header-bar";
import { weekendEvents } from "./data/events";

/**
 * The main Plan Weekend page component
 * @returns {JSX.Element} The rendered Plan Weekend page
 */
export default function PlanWeekend(): JSX.Element {
  return (
    <div className="relative w-full min-h-screen bg-colors-color-general-bg-surface1 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        {/* Background patterns */}
        <BackgroundPatterns />

        {/* Header with status bars */}
        <HeaderBar />

        {/* Main content */}
        <div className="relative z-10 px-4">
          <PlanWeekendHeading />
          <div className="flex justify-center my-4">
            <WeekdayFilter
              days={["Friday", "Saturday", "Sunday"]}
              selectedDay="Friday"
            />
          </div>
          <FrameWrapper sections={weekendEvents} />
        </div>
      </div>
    </div>
  );
}
