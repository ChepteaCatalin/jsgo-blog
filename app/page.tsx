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
      <section>
        {postsPreviews.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
