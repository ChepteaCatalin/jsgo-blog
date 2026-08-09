import Logo from "@/components/Logo";
import PostPreview from "@/components/PostPreview";
import { postsPreviews } from "@/data/posts-previews";

export default function Page() {
  return (
    <main>
      <section className="my-10 md:my-16">
        <div className="flex flex-col items-center text-center sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:text-left">
          <div className="order-1 m-0 text-7xl font-bold tracking-tight md:text-8xl">
            <Logo />
          </div>
          <div
            aria-hidden="true"
            className="order-2 mt-3 h-0.5 w-24 rounded-full bg-linear-to-r from-amber-700 to-emerald-700 opacity-70 sm:order-3 sm:mt-4 sm:h-px sm:w-full dark:from-amber-300 dark:to-emerald-400"
          />
          <p className="order-3 m-0 mt-3 text-lg tracking-wide sm:order-4 sm:mt-4 md:text-2xl">
            JavaScript: Global Offensive
          </p>
          <p className="text-muted-foreground order-4 m-0 mt-2 text-sm italic sm:order-2 sm:mb-2 sm:text-base">
            A blog you’ll never read
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:gap-x-16 lg:gap-y-20">
        {postsPreviews.map((post, index) => (
          <PostPreview key={post.slug} post={post} priority={index === 0} />
        ))}
      </section>
    </main>
  );
}
