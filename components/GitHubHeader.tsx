import styles from './GitHubHeader.module.css';

export default function GitHubHeader() {
  return (
    <div className={styles.container}>
      The source code for this blog is{' '}
      <a
        href="https://github.com/ChepteaCatalin/jsgo-blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        available on GitHub
      </a>
    </div>
  );
}
