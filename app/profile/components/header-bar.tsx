"use client";

import { HeaderBar as SharedHeaderBar } from "@/components/ui/header-bar";
import { useRouter } from "next/navigation";

/**
 * HeaderBar component for the Profile page
 * Contains status bar and back button
 * @returns {JSX.Element} The rendered component
 */
export function HeaderBar(): JSX.Element {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/home");
  };

  return (
    <SharedHeaderBar
      onBackClick={handleBackClick}
      theme="light"
      showBackButton={true}
    />
  );
}
