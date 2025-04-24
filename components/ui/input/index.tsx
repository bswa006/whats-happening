"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Props interface for the Input component
 *
 * Extends all standard HTML input attributes to ensure
 * the component can be used as a drop-in replacement for a native input.
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * A reusable input component with pixel-perfect styling from Figma
 *
 * Features:
 * - Exact height (49px), border radius (12px), and padding from Figma
 * - Precise border styling (1px solid black)
 * - Font styling matching Figma specs exactly
 * - Accessible styling for focus and disabled states
 * - Customizable appearance through className prop
 *
 * @param {InputProps} props - Component props including standard HTML input attributes
 * @param {string} [props.className] - Optional additional CSS classes
 * @param {string} [props.type] - Input type (text, email, password, etc.)
 * @returns {React.ReactElement} Styled input element
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type || "text"}
        className={cn(
          // Base styling with exact pixel values from Figma
          "flex h-[49px] w-full rounded-[12px] border border-black bg-white px-4 py-3 text-sm",
          // Font styling as specified in Figma
          "font-public-sans font-semibold",
          // Placeholder opacity from Figma design
          "placeholder:opacity-30",
          // Focus state
          "focus:ring-2 focus:ring-primary focus:outline-none",
          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Custom classes
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

// Display name for DevTools
Input.displayName = "Input";

export { Input };
