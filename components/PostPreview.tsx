import Image from "next/image";
import Link from "next/link";
import type { PostPreview } from "@/types/post";

export default function PostPreview({
  post: { date, coverImage, slug, summary, title },
  priority = false,
}: Readonly<{
  post: PostPreview;
  priority?: boolean;
}>) {
  const postLink = `/posts/${slug}`;

  return (
    <div>
      <Link
        href={postLink}
        aria-label={title}
        className="relative mb-5 block aspect-video w-full overflow-hidden rounded-md"
      >
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 704px"
          priority={priority}
          placeholder="blur"
          className="mt-0 object-cover"
        />
      </Link>
      <Link
        href={postLink}
        className="inline-block text-3xl font-semibold no-underline hover:underline"
      >
        {title}
      </Link>
      <time dateTime={date} className="mt-3 block text-lg">
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
      <p className="mt-4 text-lg">{summary}</p>
    </div>
  );
}
