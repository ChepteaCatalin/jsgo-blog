import styles from './page.module.css';

export default function Page() {
  return (
    <main>
      <section className={styles.header}>
        <h1 className={styles.title}>JS:GO</h1>
        <p className={styles.description}>A blog you’ll never read.</p>
      </section>
    </main>
  );
}
