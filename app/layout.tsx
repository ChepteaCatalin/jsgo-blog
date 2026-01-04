import type { Metadata } from 'next';
import { inter } from './fonts';
import styles from './layout.module.css';
import './globals.css';
import GitHubHeader from '@/components/GitHubHeader';
import 'highlight.js/styles/github.css';

export const metadata: Metadata = {
  title: 'JavaScript: Global Offensive',
  description: `A blog you’ll never read.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GitHubHeader />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
