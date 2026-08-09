import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-4xl font-bold">Not Found!</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className={`mt-2 ${buttonVariants({ variant: "ghost" })}`}>
        Go to the Homepage
      </Link>
    </div>
  );
}
