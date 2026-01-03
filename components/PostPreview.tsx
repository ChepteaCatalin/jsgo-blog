import Image from 'next/image';
import Link from 'next/link';
import styles from './PostPreview.module.css';
import type { PostPreview } from '@/types/posts-previews';

export default function PostPreview({
  post: { date, coverImage, slug, summary, title },
}: {
  post: PostPreview;
}) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <div className={styles.imageContainer}>
        <Link href={`/posts/${slug}`} aria-label={title}>
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
      <p>
        <Link href={`/posts/${slug}`}>{title}</Link>
      </p>
      <div>
        <time dateTime={date}>{formattedDate}</time>
      </div>
      <p>{summary}</p>
    </div>
  );
}
