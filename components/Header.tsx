import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div>
      <div className="bg-primary-foreground border-b px-5 py-2.25 pr-12 text-center text-sm">
        The source code for this blog is{" "}
        <a
          href="https://github.com/ChepteaCatalin/jsgo-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-[color] duration-200 ease-in-out hover:text-[#0550ae] dark:hover:text-[#58a6ff]"
        >
          available on GitHub
        </a>
      </div>
      <div className="absolute top-0.75 right-1.5">
        <ModeToggle />
      </div>
    </div>
  );
}
