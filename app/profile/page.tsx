"use client";

import React from "react";
import { HeaderBar } from "./components/header-bar";
import { SettingsButton } from "./components/settings-button";
import { ProfileHeader } from "./components/profile-header";
import { AccessPass } from "./components/access-pass";
import { BookingSection } from "./components/booking-section";
import { BookmarksSection } from "./components/bookmarks-section";
import { InviteFriends } from "./components/invite-friends";
import { BottomNav } from "./components/bottom-nav";

/**
 * User profile page component
 * @returns {JSX.Element} The rendered profile page
 */
export default function ProfilePage(): JSX.Element {
  return (
    <div className="relative w-full min-h-screen bg-[#f6eee9] overflow-hidden">
      <div className="absolute w-[134px] h-[348px] top-[-412px] left-[130px] bg-[#f9ff00] blur-[45.1px] opacity-30" />

      <div className="relative w-full max-w-md mx-auto min-h-screen">
        {/* Header with back button */}
        <HeaderBar />

        {/* Settings button */}
        <SettingsButton />

        {/* Main content area */}
        <div className="flex flex-col w-full items-center gap-[29px] absolute top-[124px] left-0 px-4 pb-32">
          {/* Profile header with avatar and name */}
          <ProfileHeader
            name="Raghu Raj"
            memberSince="MEMBER SINCE OCT, 2024"
          />

          {/* Access pass card */}
          <AccessPass expiryDate="04 JUNE 2025" />

          {/* My bookings section */}
          <BookingSection />

          {/* Bookmarks section */}
          <BookmarksSection eventCount={6} />

          {/* Invite friends button */}
          <InviteFriends />
        </div>

        {/* Bottom navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
