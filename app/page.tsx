import PostPreview from '@/components/PostPreview';
import styles from './page.module.css';
import { postsPreviews } from '@/data/posts-previews';

export default function Page() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.flexContainer}>
          <h1 className={styles.title}>JS:GO</h1>
          <p className={styles.description}>A blog you’ll never read.</p>
        </div>
        <p className={styles.longTitle}>JavaScript: Global Offensive</p>
      </section>
      <section className={styles.postsList}>
        {postsPreviews.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
