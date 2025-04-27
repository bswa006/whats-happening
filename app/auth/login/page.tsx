"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { useAuth } from "@/hooks/use-auth";

/**
 * Login page component
 *
 * This page allows users to enter their phone number as the first step
 * in the authentication flow. It features:
 * - A background image with food illustration
 * - A phone input with country code
 * - Terms and conditions links
 * - Next action button
 *
 * Pixel-perfect implementation from Anima/Figma design.
 */
export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

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

      // Redirect to verify-otp page with phone number as query parameter
      router.push(`/auth/verify-otp?phone=${phone}`);

      console.log("Login successful with phone:", phone);
    } catch (error) {
      console.error("Login failed:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col bg-white overflow-hidden">
      {/* Background illustration - updated to match Anima design */}
      <img
        className="w-full h-[181px] object-cover"
        src="/images/food-illustration-original.png"
        alt="Food illustration"
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="flex-1 w-full px-6 pt-[29px] flex flex-col">
        {/* Header section */}
        <div className="flex flex-col items-start gap-1.5 mb-[29px]">
          <h1 className="font-public-sans font-bold text-[28px] text-[#080808] leading-7 mt-[-1px]">
            Get Started
          </h1>
          <p className="font-public-sans font-normal text-[15px] text-[#080808] leading-[22.5px]">
            Find the best offbeat experiences in Bangalore
          </p>
        </div>

        {/* Phone input section */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
          <div className="flex flex-col items-start gap-[13px]">
            <label
              id="phone-input-label"
              className="font-public-sans font-bold text-[13px] text-black leading-[19.5px] mt-[-1px]"
            >
              ENTER YOUR PHONE NUMBER
            </label>
            <PhoneInput
              value={phone}
              onChange={setPhone}
              placeholder="1234567890"
            />
          </div>

          {/* Bottom section with terms and button */}
          <div className="mt-auto mb-6 flex flex-col items-center gap-4">
            <p className="text-center font-public-sans font-medium text-xs text-[#606060] leading-[16.8px]">
              By continuing you are agreeing to the{" "}
              <Link href="/terms" className="font-bold underline">
                terms & conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-bold underline">
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
