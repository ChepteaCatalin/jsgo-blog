import Image from 'next/image';
import styles from './PostImage.module.css';

export default function PostImage({
  src,
  title,
}: Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  title: string;
}>) {
  return (
    <div className={styles.imageWrapper} id={`img-wrapper-${title}`}>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        sizes="100vw"
        className={styles.image}
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
      />
    </div>
  );
}
