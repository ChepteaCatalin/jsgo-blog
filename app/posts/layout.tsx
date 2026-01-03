import Link from 'next/link';
import styles from './layout.module.css';

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Link href="/" className={styles.heading}>
        JS:GO
      </Link>
      <article>{children}</article>
    </main>
  );
}
