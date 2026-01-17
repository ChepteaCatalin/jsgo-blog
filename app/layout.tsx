import type { Metadata } from 'next';
import { lora } from './fonts';
import styles from './layout.module.css';
import GitHubHeader from '@/components/GitHubHeader';
import './globals.css';
import './github.css';

export const metadata: Metadata = {
  title: 'JavaScript: Global Offensive',
  description: `Opinionated takes on JavaScript and web development, challenging common misconceptions and emphasizing core concepts and a personal understanding of how things work.`,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={lora.className}>
      <body>
        <GitHubHeader />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
