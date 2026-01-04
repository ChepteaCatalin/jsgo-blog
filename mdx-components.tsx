import type { MDXComponents } from 'mdx/types';
import styles from './mdx-components.module.css';
import { geistMono } from './app/fonts';

const components: MDXComponents = {
  h1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
  h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
  p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  li: ({ children }) => <li className={styles.listItem}>{children}</li>,
  pre: ({ children }) => <pre className={styles.pre}>{children}</pre>,
  code: ({ children }) => (
    <code className={`${styles.code} ${geistMono.className}`}>{children}</code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
