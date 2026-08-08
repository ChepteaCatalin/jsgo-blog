import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function PostsLayout({ children }: LayoutProps<"/posts">) {
  return (
    <main>
      <Link
        href="/"
        className="mt-8 inline-block text-4xl font-bold no-underline hover:underline"
      >
        JS:GO
      </Link>
      <ModeToggle />
      <article>{children}</article>
    </main>
  );
}
