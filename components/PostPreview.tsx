import Image from 'next/image';
import Link from 'next/link';
import styles from './PostPreview.module.css';
import type { PostPreview } from '@/types/posts-previews';

export default function PostPreview({
  post: { date, coverImage, slug, summary, title },
}: {
  post: PostPreview;
}) {
  const postLink = `/posts/${slug}`;
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <div className={styles.imageContainer}>
        <Link href={postLink} aria-label={title}>
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
      <p className={styles.title}>
        <Link href={postLink}>{title}</Link>
      </p>
      <div className={styles.date}>
        <time dateTime={date}>{formattedDate}</time>
      </div>
      <p className={styles.summary}>{summary}</p>
    </div>
  );
}
