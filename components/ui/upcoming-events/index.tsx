"use client";

import React from "react";
import Image from "next/image";

interface EventItem {
  id: string;
  title: string;
  date: string;
  type: string;
  leftImage: string;
  rightImage: string;
}

/**
 * Component displaying a preview of upcoming events in a carousel
 * Shows a horizontal scrollable list of upcoming event cards
 * @returns {JSX.Element} The rendered component
 */
export function UpcomingEvents(): JSX.Element {
  // Sample data for the carousel
  const events: EventItem[] = [
    {
      id: "1",
      title: "Bangkok to Bengaluru",
      date: "14 FEB",
      type: "EVENT BOOKING",
      leftImage: "/static/images/frame-90.png",
      rightImage: "/static/images/frame-90-1.png",
    },
    {
      id: "2",
      title: "Science Gallery Talk",
      date: "18 FEB",
      type: "EVENT BOOKING",
      leftImage: "/static/images/frame-11587-2.png",
      rightImage: "/static/images/frame-11587-4.png",
    },
  ];

  // Track current event index for navigation
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const currentEvent = events[currentIndex];

  return (
    <div className="relative w-full h-[140px] bg-white rounded-[9px] overflow-hidden border-2 border-solid border-black">
      {/* Header with count */}
      <div className="absolute top-4 left-5 flex items-center gap-2">
        <div className="font-bold text-base text-[#0e0e0e]">Upcoming</div>
        <div className="flex w-[22px] h-[22px] items-center justify-center p-2.5 bg-white rounded-full border-2 border-solid border-black">
          <div className="font-bold text-[11px] text-black text-center">
            {events.length}
          </div>
        </div>
      </div>

      {/* Hidden navigation buttons for functionality */}
      <div className="hidden">
        <button onClick={handlePrevious} aria-label="Previous event" />
        <button onClick={handleNext} aria-label="Next event" />
      </div>

      {/* Content layout - exactly matching the Figma design */}
      <div className="absolute top-[52px] left-5 flex w-full items-start">
        {/* Left Image */}
        <div className="relative w-[110px] h-[70px] rounded-[10px] border-2 border-solid border-black overflow-hidden flex-shrink-0">
          <Image
            src={currentEvent.leftImage}
            alt="Event image"
            fill
            className="object-cover"
          />
        </div>

        {/* Event info aligned next to left image */}
        <div className="flex flex-col items-start gap-[3px] ml-4">
          <div className="font-bold text-[15px] text-[#0e0e0e]">
            {currentEvent.title}
          </div>
          <div className="opacity-60 font-bold text-xs text-black">
            {currentEvent.date}
          </div>
          <div className="font-bold text-[11px] text-[#e15c11]">
            {currentEvent.type}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-[110px] h-[70px] rounded-[10px] border-2 border-solid border-black overflow-hidden ml-auto mr-5 flex-shrink-0">
          <Image
            src={currentEvent.rightImage}
            alt="Event visual"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-1">
        {events.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
