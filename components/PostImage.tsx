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
        fill
        sizes="(min-width: 1536px) 1476px, (min-width: 1280px) 1220px, (min-width: 1024px) 964px, (min-width: 768px) 708px, (min-width: 640px) 580px, calc(100vw - 60px)"
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
      />
    </div>
  );
}
