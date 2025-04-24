import { redirect } from "next/navigation";

/**
 * Root page redirects to the authentication flow
 * @returns {null} No UI, just redirects
 */
export default function HomePage() {
  redirect("/auth/enter-phone");
  return null;
}
