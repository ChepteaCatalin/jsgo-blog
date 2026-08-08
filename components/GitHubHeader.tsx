export default function GitHubHeader() {
  return (
    <div className="bg-primary-foreground w-screen border-b px-5 py-1.25 text-center">
      The source code for this blog is{" "}
      <a
        href="https://github.com/ChepteaCatalin/jsgo-blog"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-[color] duration-200 ease-in-out hover:text-[#0070f3]"
      >
        available on GitHub
      </a>
    </div>
  );
}
