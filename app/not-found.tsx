import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Not Found!</h1>
      <p>Could not find the requested resource.</p>
      <Link href="/" className={styles.link}>
        Go to the Homepage
      </Link>
    </div>
  );
}
