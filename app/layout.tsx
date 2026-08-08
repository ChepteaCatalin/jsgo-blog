import type { Metadata } from 'next';
import styles from './layout.module.css';
import GitHubHeader from '@/components/GitHubHeader';
import './globals.css';
import './github.css';
import { Lora, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';

const lora = Lora({ subsets: ['latin'], variable: '--font-serif' });
export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'JavaScript: Global Offensive',
  description: `Opinionated takes on JavaScript and web development, challenging common misconceptions and emphasizing core concepts and a personal understanding of how things work.`,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn(lora.className, 'font-serif', lora.variable)}>
      <body>
        <GitHubHeader />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
