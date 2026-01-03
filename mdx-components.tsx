import type { MDXComponents } from 'mdx/types';
import styles from './mdx-components.module.css';

const components: MDXComponents = {
  h1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
  p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  pre: ({ children }) => <pre className={styles.pre}>{children}</pre>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
