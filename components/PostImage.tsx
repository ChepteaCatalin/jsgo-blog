import Image, { type StaticImageData } from "next/image";

export default function PostImage({
  src,
  title,
}: Readonly<{
  src: StaticImageData;
  title: string;
}>) {
  return (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      sizes="(max-width: 48rem) 100vw, 48rem"
      style={{ width: "100%", height: "auto" }}
      priority
      placeholder="blur"
    />
  );
}
