import Image from 'next/image';
import styles from './PostImage.module.css';

export default function PostImage({
  src,
  title,
}: Readonly<{
  src: string;
  title: string;
}>) {
  return (
    <div className={styles.imageWrapper} id={`img-wrapper-${title}`}>
      <Image src={src} alt={`Cover Image for ${title}`} fill sizes="100vw" />
    </div>
  );
}
