"use client";

import { HeaderBar as SharedHeaderBar } from "@/components/ui/header-bar";
import { useRouter } from "next/navigation";

/**
 * HeaderBar component for the Plan Weekend page
 * Includes back button navigation to home page
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
