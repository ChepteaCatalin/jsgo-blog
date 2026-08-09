import Link from "next/link";

export default function PostsLayout({ children }: LayoutProps<"/posts">) {
  return (
    <main className="mx-auto max-w-3xl">
      <Link
        href="/"
        aria-label="JS:GO home"
        className="group mt-8 inline-block text-4xl font-bold no-underline"
      >
        <span className="text-amber-700 transition-colors group-hover:text-amber-600 dark:text-amber-300 dark:group-hover:text-amber-200">
          JS
        </span>
        <span className="text-muted-foreground">:</span>
        <span className="text-emerald-700 transition-colors group-hover:text-emerald-600 dark:text-emerald-400 dark:group-hover:text-emerald-300">
          GO
        </span>
      </Link>
      <article>{children}</article>
    </main>
  );
}
