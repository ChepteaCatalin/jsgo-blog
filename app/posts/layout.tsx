import Link from 'next/link';
import styles from './layout.module.css';

export default function PostsLayout({ children }: LayoutProps<'/posts'>) {
  return (
    <main>
      <Link href="/" className={styles.heading}>
        JS:GO
      </Link>
      <article className={styles.articleContent}>{children}</article>
    </main>
  );
}
