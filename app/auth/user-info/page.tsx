"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";

/**
 * User Info page component
 *
 * This page allows users to enter their name as part of the
 * authentication flow. It features:
 * - A background image with food illustration
 * - A name input field
 * - Finish action button
 *
 * Pixel-perfect implementation from Anima/Figma design.
 */
export default function UserInfoPage() {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { updateUser } = useAuth();
  const router = useRouter();

  /**
   * Handles form submission
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      // Name validation
      console.error("Please enter your name");
      return;
    }

    setIsSubmitting(true);

    try {
      // Update user with full name
      updateUser({ fullName: name });

      // Redirect to home page after profile completion
      router.push("/home");

      console.log("Profile updated with name:", name);
    } catch (error) {
      console.error("Profile update failed:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col bg-white overflow-hidden">
      {/* Background illustration - using the same image as login page */}
      <img
        className="w-full h-[181px] object-cover"
        src="/images/food-illustration-original.png"
        alt="Food illustration"
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="flex-1 w-full px-6 flex flex-col">
        {/* Name input section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 gap-5 mt-10"
        >
          <div className="flex flex-col items-start gap-2">
            <label
              htmlFor="name-input"
              className="font-public-sans font-bold text-black text-2xl leading-[33.6px]"
            >
              What is your name?
            </label>
            <Input
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="p-4 w-full bg-white rounded-xl border-[1.5px] border-solid border-black font-semibold text-sm"
            />
          </div>

          {/* Bottom section with button */}
          <div className="mt-auto mb-6">
            <Button
              type="submit"
              className="w-full bg-[#f6781d] hover:bg-[#e0650c]"
              disabled={isSubmitting || !name.trim()}
            >
              {isSubmitting ? "Submitting..." : "Finish"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
