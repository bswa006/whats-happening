"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for the EventCard component
 */
interface EventCardProps {
  /**
   * Title of the event
   */
  title: string;
  /**
   * Description of the event
   */
  description: string;
  /**
   * Date of the event
   */
  date: string;
  /**
   * Time of the event
   */
  time: string;
  /**
   * Location of the event
   */
  location: string;
  /**
   * Distance from current location
   */
  distance: string;
  /**
   * Price of the event
   */
  price: string;
  /**
   * Background image URL
   */
  image: string;
  /**
   * Pricing status of the event
   */
  pricing?: "free" | "ticketed" | "sold-out";
  /**
   * Event ID for linking
   */
  id?: string;
}

/**
 * EventCard component for displaying event information
 */
export const EventCard: FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  distance,
  price,
  image,
  pricing,
  id = "default",
}) => {
  return (
    <div className="flex flex-col items-start w-full bg-[#faf5f2] rounded-[10px] overflow-hidden border-2 border-solid border-colors-color-general-border-default shadow-[4px_4px_0px_#00000073]">
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="relative w-full aspect-[2.2/1] border-2 border-solid border-colors-color-general-border-default">
          <div className="absolute inset-0">
            <Link href={`/events/${id}`}>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
          </div>
          {pricing && (
            <div className="absolute top-3 left-3">
              <div
                className={`inline-flex items-center px-2 py-1 rounded-full ${
                  pricing === "free"
                    ? "bg-green-500"
                    : pricing === "sold-out"
                    ? "bg-red-500"
                    : "bg-blue-500"
                } text-white text-xs font-bold`}
              >
                {pricing === "free"
                  ? "FREE"
                  : pricing === "sold-out"
                  ? "SOLD OUT"
                  : "TICKETED"}
              </div>
            </div>
          )}
          <div className="absolute bottom-4 right-4 flex items-center gap-[9px]">
            <Link href="/share">
              <div className="inline-flex items-center p-2 bg-[#faf5f2] rounded-[104px] border-2 border-solid border-colors-color-general-border-default shadow-[0px_2px_0px_#000000]">
                <img
                  className="w-[18px] h-[18px]"
                  alt="Share"
                  src="/static/images/share-1.svg"
                />
              </div>
            </Link>
            <Link href="/tickets/save">
              <div className="inline-flex items-center p-2 bg-[#faf5f2] rounded-[104px] border-2 border-solid border-colors-color-general-border-default shadow-[0px_2px_0px_#000000]">
                <img
                  className="w-[18px] h-[18px]"
                  alt="Bookmark"
                  src="/static/images/bookmark-1.svg"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[18px] pt-0 pb-5 px-[18px] w-full">
          <div className="flex flex-col items-start gap-[11px] w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <Link href={`/events/${id}`}>
                <h3 className="font-bold text-colors-color-general-card-text text-lg tracking-[0] leading-[27px]">
                  {title}
                </h3>
              </Link>

              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-start justify-between w-full">
                  <div className="inline-flex items-center gap-1 opacity-70">
                    <img
                      className="w-[18px] h-[18px]"
                      alt="Calendar"
                      src="/static/images/calendar-1.svg"
                    />

                    <div className="inline-flex items-center gap-2">
                      <div className="font-medium text-colors-color-general-card-text text-[13px] whitespace-nowrap">
                        {date}
                      </div>

                      <img
                        className="h-full w-px"
                        alt="Line"
                        src="/static/images/line-47-3.svg"
                      />

                      <div className="font-medium text-colors-color-general-card-text text-[13px] whitespace-nowrap">
                        {time}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/explore?location=${encodeURIComponent(location)}`}
                >
                  <div className="flex items-center gap-1 w-full opacity-70">
                    <img
                      className="w-[18px] h-[18.25px]"
                      alt="Map pin"
                      src="/static/images/map-pin-1.svg"
                    />

                    <div className="font-medium text-colors-color-general-card-text text-[13px] whitespace-nowrap">
                      {location}
                    </div>

                    <img
                      className="h-full w-px"
                      alt="Line"
                      src="/static/images/line-47-3.svg"
                    />

                    <div className="font-bold text-colors-color-general-card-text text-[13px] whitespace-nowrap">
                      {distance}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <p className="font-normal text-colors-color-general-card-text text-[13px] tracking-[0] leading-[19.5px]">
              {description}
            </p>

            <Link href={`/tickets/buy/${id}`}>
              <div className="flex items-center gap-1 w-full">
                <img
                  className="w-[18px] h-[18px]"
                  alt="Tag"
                  src="/static/images/tag-1.svg"
                />

                <div className="font-bold text-colors-color-general-card-text text-[15px] whitespace-nowrap">
                  {price}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
