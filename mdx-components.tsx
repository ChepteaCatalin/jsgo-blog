import type { MDXComponents } from 'mdx/types';
import styles from './mdx-components.module.css';

const components: MDXComponents = {
  h1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
  p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
