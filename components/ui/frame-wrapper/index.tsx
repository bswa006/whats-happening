"use client";

import { FC } from "react";
import { EventCard } from "../event-card";

interface EventSection {
  title: string;
  date: string;
  events: Array<{
    title: string;
    date: string;
    time: string;
    location: string;
    distance: string;
    description: string;
    price: string;
    image: string;
  }>;
}

interface FrameWrapperProps {
  sections?: EventSection[];
}

/**
 * Frame wrapper component that contains sections of events
 */
export const FrameWrapper: FC<FrameWrapperProps> = ({ sections }) => {
  // Default sections if none provided
  const eventSections = sections || [
    {
      title: "Today",
      date: "Friday, 25 March 2025",
      events: [
        {
          title: "Bangalore Through the Centuries",
          date: "4th Feb",
          time: "6:30 PM",
          location: "MG Road",
          distance: "2km Away",
          description:
            "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
          price: "₹500",
          image: "/static/images/frame-11587-1.png",
        },
        {
          title: "Bangalore Through the Centuries",
          date: "4th Feb",
          time: "6:30 PM",
          location: "MG Road",
          distance: "2km Away",
          description:
            "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
          price: "₹500",
          image: "/static/images/frame-11587-7.png",
        },
      ],
    },
    {
      title: "Tomorrow",
      date: "Friday, 25 March 2025",
      events: [
        {
          title: "Bangalore Through the Centuries",
          date: "4th Feb",
          time: "6:30 PM",
          location: "MG Road",
          distance: "2km Away",
          description:
            "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
          price: "₹500",
          image: "/static/images/frame-11587-1.png",
        },
        {
          title: "Bangalore Through the Centuries",
          date: "4th Feb",
          time: "6:30 PM",
          location: "MG Road",
          distance: "2km Away",
          description:
            "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
          price: "₹500",
          image: "/static/images/frame-11587-7.png",
        },
      ],
    },
    {
      title: "Later",
      date: "Friday, 25 March 2025",
      events: [
        {
          title: "Bangalore Through the Centuries",
          date: "4th Feb",
          time: "6:30 PM",
          location: "MG Road",
          distance: "2km Away",
          description:
            "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
          price: "₹500",
          image: "/static/images/frame-11587-1.png",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-12">
      {eventSections.map((section, sectionIndex) => (
        <div
          key={`section-${sectionIndex}`}
          className="flex flex-col items-start gap-3 w-full"
        >
          <div className="flex flex-col w-full max-w-[150px] items-start gap-px">
            <div className="w-full font-bold text-colors-color-general-text-secondary text-2xl tracking-[0] leading-[33.6px]">
              {section.title}
            </div>

            <div className="w-full opacity-80 font-semibold text-colors-color-general-text-secondary text-sm tracking-[0] leading-[19.6px]">
              {section.date}
            </div>
          </div>

          <div className="flex flex-col items-start gap-[29px] w-full">
            {section.events.map((event, eventIndex) => (
              <EventCard
                key={`event-${sectionIndex}-${eventIndex}`}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                distance={event.distance}
                description={event.description}
                price={event.price}
                image={event.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
