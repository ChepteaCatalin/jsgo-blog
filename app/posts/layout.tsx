import Link from 'next/link';

export default function PostsLayout({ children }: LayoutProps<'/posts'>) {
  return (
    <main>
      <Link href="/">JS:GO</Link>
      <article>{children}</article>
    </main>
  );
}
