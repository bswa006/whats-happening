"use client";

import { BottomNav } from "@/components/ui/bottom-nav";
import { BackgroundPatterns } from "@/components/ui/background-patterns";
import { accessPassData, eventCards, tabOptions } from "./data/events";
import {
  AccessPass,
  ActionCards,
  EditorialPicks,
  LocationHeader,
  UpcomingEventCard,
} from "./components";

/**
 * Home page displaying events and activities happening in the user's location
 * Shows upcoming events, recommendations, and featured content
 * Migrated and implemented from Anima design
 */
export default function Home(): JSX.Element {
  return (
    <div className="relative w-full min-h-screen bg-[#ffa800] overflow-hidden">
      {/* Background patterns using shared component */}
      <BackgroundPatterns variant="grid" colorVariant="orange" />

      {/* Main content area */}
      <div className="flex flex-col w-full max-w-md mx-auto items-start gap-[30px] absolute top-[62px] left-0 right-0 px-4">
        {/* Location Header */}
        <LocationHeader />

        {/* Upcoming Events Section */}
        <UpcomingEventCard />

        {/* ActionCards for navigation to other pages */}
        <ActionCards />

        {/* Main content area with Anima-style scroll implementation */}
        <div className="absolute w-full max-w-md mx-auto h-[853px] left-0 right-0 overflow-y-scroll">
          <div className="relative w-full h-auto min-h-[2584px] top-[425px] bg-[#EAD5CA] rounded-t-2xl overflow-hidden border-2 border-solid border-black shadow-[0px_-6px_0px_#00000040]">
            <div className="flex flex-col w-full items-start gap-[45px] relative top-[42px] left-0 px-4 pb-20">
              {/* Access Pass Section */}
              <AccessPass data={accessPassData} />

              {/* Editorial Picks Section */}
              <EditorialPicks events={eventCards} tabs={tabOptions} />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 z-50">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
