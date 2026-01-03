import type { MDXComponents } from 'mdx/types';
import styles from './mdx-components.module.css';

const components: MDXComponents = {
  h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
