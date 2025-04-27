"use client";

import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import { cn } from "@/lib/utils";

/**
 * OtpInput component props interface
 *
 * @property {string} value - Current OTP value
 * @property {(value: string) => void} onChange - Callback when OTP value changes
 * @property {number} length - Number of OTP digits (default: 6)
 * @property {string} [className] - Optional additional CSS classes
 */
interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  className?: string;
}

/**
 * OTP Input Component
 *
 * A responsive OTP input component with individual digit fields
 * that follows the design specs from the provided images:
 * - Square input fields with rounded corners
 * - Thin borders with light gray color
 * - Properly handles keyboard navigation, paste events, and focus
 *
 * @example
 * <OtpInput
 *   value={otp}
 *   onChange={setOtp}
 *   length={6}
 * />
 *
 * @param {OtpInputProps} props - Component props
 * @returns {React.ReactElement} OTP input component
 */
export function OtpInput({
  value,
  onChange,
  length = 6,
  className,
}: OtpInputProps) {
  // Create array of refs for each input field
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize input refs based on length
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  // Focus the first empty input on mount
  useEffect(() => {
    const firstEmptyIndex = value.length < length ? value.length : 0;
    const inputToFocus = inputRefs.current[firstEmptyIndex];
    if (inputToFocus) {
      inputToFocus.focus();
    }
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newVal = e.target.value;

    // Only accept single digit (0-9)
    if (!/^\d*$/.test(newVal)) return;

    // Create a new OTP value by replacing the digit at the current index
    const newOtp = value.split("");

    // Handle replacement or addition
    if (newVal.length === 1) {
      newOtp[index] = newVal;

      // Combine and call onChange callback
      const updatedOtp = newOtp.join("");
      onChange(updatedOtp);

      // Focus next input if available
      if (index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace key
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // If backspace is pressed and current input is empty
    if (e.key === "Backspace" && !value[index]) {
      // Focus previous input if available
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    // If left arrow key is pressed
    if (e.key === "ArrowLeft") {
      // Focus previous input if available
      if (index > 0 && inputRefs.current[index - 1]) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      }
    }

    // If right arrow key is pressed
    if (e.key === "ArrowRight") {
      // Focus next input if available
      if (index < length - 1 && inputRefs.current[index + 1]) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle paste event - allows pasting a complete OTP code
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is digits and has correct length
    if (pastedData && /^\d+$/.test(pastedData)) {
      // Use only up to the required length
      const otpValue = pastedData.slice(0, length);
      onChange(otpValue);

      // Focus the next field that needs input, or the last field if complete
      const focusIndex = Math.min(otpValue.length, length - 1);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  return (
    <div className={cn("flex w-full justify-between gap-2", className)}>
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className="flex aspect-square w-[14%] items-center justify-center rounded-[12px] border border-gray-300 bg-white"
        >
          <input
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="h-full w-full bg-transparent text-center font-public-sans text-xl font-semibold focus:outline-none"
            aria-label={`Digit ${index + 1}`}
            autoComplete="one-time-code"
          />
        </div>
      ))}
    </div>
  );
}
