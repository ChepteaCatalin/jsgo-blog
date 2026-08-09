import PostPreview from "@/components/PostPreview";
import { postsPreviews } from "@/data/posts-previews";

export default function Page() {
  return (
    <main>
      <section>
        <div>
          <h1>JS:GO</h1>
          <p>A blog you’ll never read</p>
        </div>
        <p>JavaScript: Global Offensive</p>
      </section>
      <section className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {postsPreviews.map((post, index) => (
          <PostPreview key={post.slug} post={post} priority={index === 0} />
        ))}
      </section>
    </main>
  );
}
