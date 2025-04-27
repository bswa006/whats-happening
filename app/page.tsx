import { redirect } from "next/navigation";

/**
 * Home page that redirects to the Near Me page
 */
export default function Home() {
  redirect("/home");
}
