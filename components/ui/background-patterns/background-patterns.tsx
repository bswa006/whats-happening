"use client";

import React from "react";
import Image from "next/image";

/**
 * Background pattern types
 */
export type BackgroundPatternVariant = "circular" | "grid" | "combined";

/**
 * Props for the BackgroundPatterns component
 */
export interface BackgroundPatternsProps {
  /**
   * Type of background pattern to display
   * @default "combined"
   */
  variant?: BackgroundPatternVariant;
  /**
   * Background color shade, affects circular patterns
   * @default "orange"
   */
  colorVariant?: "orange" | "blue" | "purple" | "default";
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * Generalized background patterns component for use across pages
 * @param {BackgroundPatternsProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function BackgroundPatterns({
  variant = "combined",
  colorVariant = "orange",
  className = "",
}: BackgroundPatternsProps): JSX.Element {
  // Color mapping for different variants
  const colorMap = {
    orange: ["bg-[#f45221]", "bg-[#e34f23]", "bg-[#d9471b]", "bg-[#c33d13]"],
    blue: ["bg-[#2152f4]", "bg-[#234fe3]", "bg-[#1b47d9]", "bg-[#133dc3]"],
    purple: ["bg-[#8821f4]", "bg-[#7f23e3]", "bg-[#6e1bd9]", "bg-[#5e13c3]"],
    default: [
      "bg-transparent",
      "bg-transparent",
      "bg-transparent",
      "bg-transparent",
    ],
  };

  const colors = colorMap[colorVariant];

  return (
    <div
      className={`absolute w-full h-full ${className}`}
      style={{
        maxWidth: variant === "grid" ? "none" : "518px",
        maxHeight: variant === "grid" ? "none" : "5115px",
        left: variant === "grid" ? 0 : "50%",
        transform: variant === "grid" ? "none" : "translateX(-50%)",
        top: variant === "grid" ? 0 : "auto",
      }}
    >
      {/* Circular gradient patterns */}
      {(variant === "circular" || variant === "combined") && (
        <>
          <div
            className={`w-full max-w-[391px] aspect-square mx-auto mt-[63px] ${colors[0]} rounded-full border-[#00000033] border-2 border-solid`}
          />
          <div
            className={`w-full max-w-[286px] aspect-square mx-auto mt-[-286px] ${colors[1]} rounded-full border-[#0000004c] border-2 border-solid`}
          />
          <div
            className={`w-full max-w-[194px] aspect-square mx-auto mt-[-194px] ${colors[2]} rounded-full border-[#0000004c] border-2 border-solid`}
          />
          <div
            className={`w-full max-w-[121px] aspect-square mx-auto mt-[-121px] ${colors[3]} rounded-full border-[#0000004c] border-2 border-solid`}
          />
          <div className="w-full max-w-[518px] aspect-square mx-auto mt-[-470px] rounded-full border-[#0000001a] border-2 border-solid" />
        </>
      )}

      {/* Perspective grid */}
      {(variant === "grid" || variant === "combined") && (
        <div
          className={`flex flex-col w-full items-center ${
            variant === "combined" ? "mt-12" : ""
          }`}
        >
          <Image
            src="/static/images/perspective-grid.png"
            alt="Perspective grid"
            width={393}
            height={506}
            className="w-full h-auto"
          />
          {variant === "grid" && (
            <>
              <Image
                src="/static/images/perspective-grid-3.png"
                alt="Perspective grid"
                width={393}
                height={506}
                className="w-full h-auto"
              />
              <Image
                src="/static/images/perspective-grid-3.png"
                alt="Perspective grid"
                width={393}
                height={506}
                className="w-full h-auto"
              />
              <Image
                src="/static/images/perspective-grid-4.png"
                alt="Perspective grid"
                width={393}
                height={415}
                className="w-full h-auto"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
