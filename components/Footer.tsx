import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-muted-foreground mx-auto box-content flex max-w-3xl items-center justify-between px-7.5 pt-4 pb-8 text-sm md:max-w-5xl lg:max-w-384 [body:has(main[data-width=narrow])_&]:max-w-3xl">
      <p className="m-0">No cookies. No tracking.</p>
      <Link href="/privacy" className="underline underline-offset-4">
        Privacy Policy
      </Link>
    </footer>
  );
}
