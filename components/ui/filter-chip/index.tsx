"use client";

import React from "react";

/**
 * Interface for FilterChip component props
 */
interface FilterChipProps {
  /**
   * The label text to display
   */
  label: string;
  /**
   * Whether the chip is in active state
   */
  active?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Chip component for filtering in lists and grids
 * @param {FilterChipProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function FilterChip({
  label,
  active = false,
  onClick,
}: FilterChipProps): JSX.Element {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-[7px] rounded-[7px] overflow-hidden 
        ${
          active
            ? "bg-colors-color-general-text-primary text-colors-color-general-bg-subtle"
            : "bg-colors-color-general-bg-subtle text-colors-color-general-text-primary border border-solid border-colors-color-general-text-primary"
        }`}
      onClick={onClick}
      type="button"
    >
      <div className="font-semibold text-[15px] leading-5 text-center whitespace-nowrap">
        {label}
      </div>
    </button>
  );
}
