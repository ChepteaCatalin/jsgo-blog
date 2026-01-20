import Link from 'next/link';
import styles from './not-found.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Not Found!</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className={styles.link}>
        Go to the Homepage
      </Link>
    </div>
  );
}
