import LogoLink from "@/components/LogoLink";

export default function PrivacyLayout({ children }: LayoutProps<"/privacy">) {
  return (
    <main data-width="narrow" className="mx-auto max-w-3xl">
      <header className="mt-8">
        <LogoLink />
        <div
          aria-hidden="true"
          className="mt-3 h-px w-full bg-linear-to-r from-amber-700 to-emerald-700 opacity-70 dark:from-amber-300 dark:to-emerald-400"
        />
      </header>
      <article>{children}</article>
    </main>
  );
}
