import Image from 'next/image';

export default function PostImage({
  src,
  title,
}: Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  title: string;
}>) {
  return (
    <div id={`img-wrapper-${title}`}>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
      />
    </div>
  );
}
