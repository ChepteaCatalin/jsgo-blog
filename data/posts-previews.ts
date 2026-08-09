import type { PostPreview } from "@/types/post";
import whyIDontLikeAngularCover from "@/public/covers/why-i-dont-like-angular.jpg";
import whatIsAFunctionCover from "@/public/covers/what-is-a-function.png";
import pureFunctionCover from "@/public/covers/pure-function.jpg";

export const postsPreviews: PostPreview[] = [
  {
    title: `Why I don't like Angular`,
    slug: "why-i-dont-like-angular",
    date: "2026-01-28",
    coverImage: whyIDontLikeAngularCover,
    summary:
      "Explaining why Angular is a bad framework, in my opinion, based on my personal experience with it.",
  },
  {
    title: "What is a function?",
    slug: "what-is-a-function",
    date: "2026-01-04",
    coverImage: whatIsAFunctionCover,
    summary:
      "Introducing the concept of function and clarifying some common misconceptions.",
  },
  {
    title: "Pure function",
    slug: "pure-function",
    date: "2026-01-03",
    coverImage: pureFunctionCover,
    summary:
      "Explaining what pure functions are and clarifying some misconceptions that often confuse developers.",
  },
];
