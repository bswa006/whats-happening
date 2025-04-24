"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

/**
 * Props for the PhoneInput component
 *
 * @property {string} value - Current phone number value
 * @property {function} onChange - Callback function when value changes
 * @property {string} [placeholder] - Optional placeholder text for the input
 * @property {boolean} [disabled] - Whether the input is disabled
 * @property {string} [className] - Optional additional CSS classes
 */
interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Phone input component with country code prefix
 *
 * This specialized input:
 * - Displays a non-editable country code prefix (+91 for India)
 * - Accepts only numeric input for the phone number
 * - Limits input to 10 digits maximum
 * - Applies consistent styling to match the Figma design
 * - Follows accessibility best practices with appropriate labels
 *
 * @param {PhoneInputProps} props - Component props
 * @returns {React.ReactNode} A composite phone input field with country code
 */
export function PhoneInput({
  value,
  onChange,
  placeholder = "1234567890",
  disabled = false,
  className,
  ...props
}: PhoneInputProps) {
  /**
   * Handles input changes by filtering to numbers only
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Filter out any non-numeric characters from the input
    const numbersOnly = e.target.value.replace(/[^0-9]/g, "");

    // Restrict to maximum 10 digits (standard for Indian phone numbers)
    const phoneNumber = numbersOnly.slice(0, 10);

    // Call the parent component's onChange handler with the sanitized value
    onChange(phoneNumber);
  };

  return (
    <div
      className="flex w-full gap-2"
      role="group"
      aria-labelledby="phone-input-label"
    >
      {/* Country Code Prefix - Non-editable */}
      <div
        className="flex h-[49px] items-center justify-center gap-2 rounded-[12px] border border-black bg-white px-[13px] py-3"
        aria-label="Country code prefix"
      >
        {/* Indian flag with complete Ashoka Chakra detail */}
        <div className="relative h-4 w-6 overflow-hidden">
          <svg viewBox="0 0 36 24" className="h-full w-full">
            {/* Saffron band */}
            <rect x="0" y="0" width="36" height="8" fill="#FF9933" />
            {/* White band */}
            <rect x="0" y="8" width="36" height="8" fill="#FFFFFF" />
            {/* Green band */}
            <rect x="0" y="16" width="36" height="8" fill="#138808" />
            {/* Ashoka Chakra (blue wheel) */}
            <circle cx="18" cy="12" r="3" fill="#000080" />
            {/* 24 spokes in the wheel */}
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1="18"
                y1="12"
                x2={18 + 2.8 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={12 + 2.8 * Math.sin((i * 15 * Math.PI) / 180)}
                stroke="#000080"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Country code text */}
        <span className="font-public-sans text-sm font-semibold text-black">
          +91
        </span>
      </div>

      {/* Phone number input field */}
      <Input
        type="tel"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`flex-1 font-public-sans text-sm font-semibold text-text-black placeholder:opacity-30 ${
          className || ""
        }`}
        aria-label="Phone number"
        maxLength={10} // Additional HTML validation
        pattern="[0-9]{10}" // Ensure only 10 digits are accepted
        title="Please enter a 10-digit phone number"
        required
        {...props}
      />
    </div>
  );
}
