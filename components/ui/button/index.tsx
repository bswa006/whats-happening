"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button component variants and sizes configuration
 *
 * This defines all possible visual variations of the button component
 * using the class-variance-authority pattern with exact Figma design values.
 */
const buttonVariants = cva(
  // Base styles from Figma applied to all button variants
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // Different visual styles
      variant: {
        // Primary button - Orange with black border and shadow (Figma exact values)
        default:
          "bg-[#F7791E] text-white border border-black shadow-[6px_4px_0px_0px_rgba(0,0,0,1)]",
        // Destructive button - For delete/cancel actions
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outline button - For secondary actions
        outline:
          "bg-transparent text-black border border-black hover:bg-accent hover:text-accent-foreground",
        // Secondary button - Less prominent than default
        secondary:
          "bg-white text-black border border-black hover:bg-secondary/80",
        // Ghost button - No background until hovered
        ghost:
          "bg-transparent text-black hover:bg-accent hover:text-accent-foreground",
        // Link button - Appears as a link with button behavior
        link: "text-primary underline-offset-4 hover:underline",
      },
      // Size variations with exact Figma measurements
      size: {
        // Default size from Figma (56px height, specific padding)
        default: "h-[56px] px-4 py-[19px] text-base font-bold font-public-sans",
        // Small size
        sm: "h-10 px-3 py-2 text-sm",
        // Large size
        lg: "h-16 px-8 py-4 text-lg",
        // Square icon button
        icon: "h-10 w-10",
        // For fully custom sizing
        custom: "",
      },
    },
    // Default values if not specified
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Button component props interface
 *
 * @property {boolean} [asChild] - Whether to render as a child component via Radix UI Slot
 * @property {VariantProps<typeof buttonVariants>} - Visual variant properties from buttonVariants
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Button component for user interactions with pixel-perfect implementation from Figma
 *
 * A versatile button component that:
 * - Supports multiple visual variants (primary, outline, ghost, etc.)
 * - Uses exact Figma measurements for height, padding, border-radius
 * - Has precise shadow values and border styling from Figma
 * - Adapts to different sizes (default, sm, lg, icon)
 * - Can render as a child component via Radix UI Slot pattern
 * - Maintains accessibility features of native buttons
 *
 * @example
 * // Primary button (default)
 * <Button>Click me</Button>
 *
 * // Outline button, small size
 * <Button variant="outline" size="sm">Settings</Button>
 *
 * // As link that behaves like a button
 * <Button asChild><Link href="/about">About</Link></Button>
 *
 * @param {ButtonProps} props - Component props
 * @returns {React.ReactElement} Button element
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Slot component from Radix UI when asChild is true
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

// Add display name for React DevTools
Button.displayName = "Button";

export { Button, buttonVariants };
