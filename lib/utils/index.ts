/**
 * Barrel export file for utility functions
 *
 * This provides a centralized export point for all utilities,
 * allowing for cleaner imports in consumer components.
 */

export * from "./date-formatter";

// Export cn function for Tailwind class merging
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names with Tailwind CSS classes
 *
 * This function provides several benefits:
 * 1. Combines multiple class names from different sources
 * 2. Properly handles conditional classes
 * 3. Deduplicates and resolves conflicting Tailwind classes
 * 4. Maintains the proper order for specificity
 *
 * @example
 * // Basic usage
 * cn("text-red-500", "bg-blue-500")
 * // => "text-red-500 bg-blue-500"
 *
 * // With conditionals
 * cn("text-lg", isLarge && "font-bold")
 * // => "text-lg font-bold" (if isLarge is true)
 * // => "text-lg" (if isLarge is false)
 *
 * // Resolving conflicts (Tailwind-specific)
 * cn("text-red-500", "text-blue-500")
 * // => "text-blue-500" (last one wins)
 *
 * @param {ClassValue[]} inputs - Class values to merge
 * @returns {string} Merged class names string ready to use in className prop
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
