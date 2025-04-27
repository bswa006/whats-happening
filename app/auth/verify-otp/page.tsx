"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { OtpInput } from "@/components/ui/otp-input";
import { Button } from "@/components/ui/button";

/**
 * OTP Verification page component
 * Allows users to enter a verification code sent to their phone number
 * @returns {JSX.Element} Rendered page component
 */
export default function VerifyOtpPage(): JSX.Element {
  const [otp, setOtp] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [formattedPhone, setFormattedPhone] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Get phone number from URL query parameter
    const phone = searchParams.get("phone");

    if (!phone) {
      // Redirect back to login if no phone number is provided
      console.error("No phone number provided");
      router.push("/auth/login");
      return;
    }

    setPhoneNumber(phone);
    // Format the phone number for display: +91 XXXXX XXXXX
    setFormattedPhone(`+91 ${phone.slice(0, 5)} ${phone.slice(5)}`);
  }, [searchParams, router]);

  const handleVerify = () => {
    // Validate OTP length
    if (otp.length !== 6) {
      console.error("Please enter a valid 6-digit OTP");
      return;
    }

    // Handle verification logic
    console.log("Verifying OTP:", otp, "for phone:", phoneNumber);

    // Redirect to user info page after successful verification
    router.push("/auth/user-info");
  };

  const handleResendOtp = () => {
    // Handle resend OTP logic
    console.log("Resending OTP to:", phoneNumber);
    // Reset OTP field
    setOtp("");
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Header image */}
      <div className="w-full h-[181px] relative">
        <img
          className="w-full h-full object-cover"
          alt="Food illustration"
          src="/images/food-illustration-original.png"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col w-full max-w-[347px] mx-auto mt-[52px] gap-[29px] px-4">
        <div className="flex flex-col w-full gap-5">
          {/* Title and description */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-black text-2xl leading-[33.6px]">
              Enter your code
            </h1>
            <p className="text-[#606060] text-sm leading-[19.6px]">
              <span className="font-medium">
                We sent a 6-digit verification code to the number you provided:{" "}
              </span>
              <span className="font-bold underline">{formattedPhone}</span>
            </p>
          </div>

          {/* OTP input */}
          <OtpInput
            value={otp}
            onChange={setOtp}
            length={6}
            className="w-full"
          />

          {/* Resend option */}
          <p className="text-sm leading-[19.6px]">
            <span className="font-medium text-[#606060]">
              Didn't receive OTP?{" "}
            </span>
            <button
              onClick={handleResendOtp}
              className="font-bold text-[#6838f4] bg-transparent border-none cursor-pointer"
            >
              Send Again
            </button>
          </p>
        </div>
      </div>

      {/* Verify button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center px-6">
        <Button
          onClick={handleVerify}
          disabled={otp.length !== 6}
          className="w-full py-[19px] bg-[#f6781d] rounded-lg text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black"
        >
          Verify
        </Button>
      </div>
    </div>
  );
}
