import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="bg-primary-foreground flex items-center justify-between border-b px-2 py-1">
      <div>
        <a
          href="https://github.com/ChepteaCatalin/jsgo-blog"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "ghost" })}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/catalin-cheptea"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "ghost" })}
        >
          LinkedIn
        </a>
      </div>
      <ModeToggle />
    </div>
  );
}
