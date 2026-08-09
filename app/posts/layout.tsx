import Logo from "@/components/Logo";
import Link from "next/link";

export default function PostsLayout({ children }: LayoutProps<"/posts">) {
  return (
    <main className="mx-auto max-w-3xl">
      <header className="mt-8">
        <Link
          href="/"
          aria-label="JS:GO home"
          className="group inline-block text-5xl font-bold tracking-tight no-underline"
        >
          <Logo />
        </Link>
        <div
          aria-hidden="true"
          className="mt-3 h-px w-full bg-linear-to-r from-amber-700 to-emerald-700 opacity-70 dark:from-amber-300 dark:to-emerald-400"
        />
      </header>
      <article>{children}</article>
    </main>
  );
}
