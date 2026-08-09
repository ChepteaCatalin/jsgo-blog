import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div>
      <h1>Not Found!</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go to the Homepage</Link>
    </div>
  );
}
