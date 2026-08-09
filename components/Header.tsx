import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="bg-primary-foreground flex items-center justify-between border-b px-2 py-1">
      <div>
        {[
          {
            href: "https://github.com/ChepteaCatalin/jsgo-blog",
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/catalin-cheptea",
            label: "LinkedIn",
          },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "ghost" })}
          >
            {label}
          </a>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
}
