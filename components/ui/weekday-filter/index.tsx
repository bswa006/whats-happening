"use client";

import React, { useState } from "react";

/**
 * Interface for WeekdayFilter component props
 */
interface WeekdayFilterProps {
  /**
   * Array of day names to display
   */
  days: string[];
  /**
   * Initially selected day
   */
  selectedDay?: string;
  /**
   * Callback when a day is selected
   */
  onSelect?: (day: string) => void;
}

/**
 * Component for filtering by day of the week
 * @param {WeekdayFilterProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function WeekdayFilter({
  days,
  selectedDay,
  onSelect,
}: WeekdayFilterProps): JSX.Element {
  const [selected, setSelected] = useState<string>(selectedDay || days[0]);

  const handleSelect = (day: string) => {
    setSelected(day);
    if (onSelect) {
      onSelect(day);
    }
  };

  return (
    <div className="inline-flex items-center gap-2">
      {days.map((day) => (
        <button
          key={day}
          className={`inline-flex items-center justify-center px-5 py-[9px] rounded-[42px] overflow-hidden ${
            selected === day
              ? "bg-colors-color-general-label-selected text-colors-color-general-label-selectedtext border border-solid border-colors-color-general-border-default"
              : "bg-colors-color-general-label-default text-colors-color-general-label-defaulttext border-2 border-solid border-colors-color-general-border-default"
          }`}
          onClick={() => handleSelect(day)}
        >
          <div
            className={`relative w-fit ${
              selected === day ? "mt-[-1.00px]" : "mt-[-2.00px]"
            } font-semibold text-[15px] text-center tracking-[0] leading-5 whitespace-nowrap`}
          >
            {day}
          </div>
        </button>
      ))}
    </div>
  );
}
