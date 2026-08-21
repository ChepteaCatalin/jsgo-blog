import Link from "next/link";
import Logo from "@/components/Logo";

export default function LogoLink() {
  return (
    <Link
      href="/"
      aria-label="JS:GO home"
      className="group inline-block text-5xl font-bold tracking-tight no-underline"
    >
      <Logo />
    </Link>
  );
}
