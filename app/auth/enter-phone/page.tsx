"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { useAuth } from "@/hooks/use-auth";

/**
 * EnterPhone page component
 *
 * This page allows users to enter their phone number as the first step
 * in the authentication flow. It features:
 * - A background image with food illustration
 * - A phone input with country code
 * - Terms and conditions links
 * - Next action button
 *
 * The layout follows the pixel-perfect implementation from Figma design.
 */
export default function EnterPhonePage() {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  /**
   * Handles form submission
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      // Phone validation
      console.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Call login from auth hook
      await login({ phoneNumber: phone });

      // Redirect would happen via the axios interceptor in case of error
      // or can be handled here for successful flow
      console.log("Login successful with phone:", phone);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-black">
      {/* Background illustration - directly from Figma */}
      <div
        className="h-[40vh] w-full"
        style={{
          backgroundImage: "url('/images/food-illustration-original.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Modal container - no rounded corners to match Figma */}
      <div className="flex-1 w-full bg-white px-[22px] pb-[24px] pt-[30px] shadow-lg">
        {/* Header section */}
        <div className="mb-[29px]">
          {/* Title section */}
          <div className="mb-[6px]">
            <h1 className="font-public-sans text-[28px] font-bold leading-[1em] text-[#080808]">
              Get Started
            </h1>
            <p className="mt-[6px] font-public-sans text-[15px] font-normal leading-[1.5em] text-[#080808]">
              Find the best offbeat experiences in Bangalore
            </p>
          </div>
        </div>

        {/* Phone input section */}
        <form onSubmit={handleSubmit}>
          <div className="mb-auto">
            <label
              id="phone-input-label"
              className="mb-[13px] block font-public-sans text-[13px] font-bold uppercase leading-[1.5em] text-black"
            >
              ENTER YOUR PHONE NUMBER
            </label>
            <PhoneInput value={phone} onChange={setPhone} />
          </div>

          {/* Bottom section with terms and button */}
          <div className="mt-[52px] flex flex-col items-center gap-[16px]">
            <p className="text-center font-montserrat text-xs font-medium leading-[1.4em] text-[#606060]">
              By continuing you are agreeing to the{" "}
              <Link href="/terms" className="underline">
                terms & conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                privacy policy
              </Link>
            </p>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || phone.length !== 10}
            >
              {isSubmitting ? "Submitting..." : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
