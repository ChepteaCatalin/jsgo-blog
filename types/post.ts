import type { StaticImageData } from "next/image";

export interface PostPreview {
  title: string;
  slug: string;
  date: string;
  coverImage: StaticImageData;
  summary: string;
}
