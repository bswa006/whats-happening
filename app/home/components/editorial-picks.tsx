"use client";

import { EventData, TabData } from "../data/events";
import { EventCard } from "@/components/ui/event-card";

interface EditorialPicksProps {
  events: EventData[];
  tabs: TabData[];
}

/**
 * Editorial Picks section for the Home page
 * Displays a list of event cards with filtering tabs
 */
export function EditorialPicks({
  events,
  tabs,
}: EditorialPicksProps): JSX.Element {
  return (
    <div className="flex flex-col w-full items-start gap-6 relative">
      <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-bold text-[#111111] text-lg tracking-[0] leading-[25.2px]">
          Editorial Picks for Today
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-2 relative flex-1 grow">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`inline-flex items-center justify-center px-4 py-[7px] relative flex-[0_0_auto] ${
                  tab.isActive
                    ? "bg-colors-color-general-text-primary"
                    : "bg-[#faf5f2] border border-solid border-colors-color-general-text-primary"
                } rounded-[7px] overflow-hidden`}
              >
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-semibold ${
                    tab.isActive
                      ? "text-white"
                      : "text-colors-color-general-text-primary"
                  } text-[15px] text-center tracking-[0] leading-5 whitespace-nowrap`}
                >
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
          <img
            className="relative w-6 h-6"
            alt="Align left"
            src="/static/images/align-left.svg"
          />
        </div>

        {/* Event Card List */}
        <div className="flex flex-col items-start gap-[29px] relative self-stretch w-full flex-[0_0_auto]">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              distance={event.distance}
              description={event.description}
              price={event.price}
              pricing={event.pricing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
