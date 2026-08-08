import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function PostsLayout({ children }: LayoutProps<"/posts">) {
  return (
    <main>
      <Link href="/">JS:GO</Link>
      <ModeToggle />
      <article>{children}</article>
    </main>
  );
}
