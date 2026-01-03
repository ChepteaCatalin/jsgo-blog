import type { Metadata } from 'next';
import { inter } from './fonts';
import styles from './layout.module.css';
import './globals.css';

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
        <div className={styles.githubHeader}>
          The source code for this blog is{' '}
          <a href="https://github.com/ChepteaCatalin/jsgo-blog">
            available on GitHub
          </a>
        </div>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
