import type { PostPreview } from "@/types/post";
import whyIDontLikeAngularCover from "@/public/covers/why-i-dont-like-angular.jpg";
import whatIsAFunctionCover from "@/public/covers/what-is-a-function.png";
import pureFunctionCover from "@/public/covers/pure-function.jpg";
import howAmILearningReactCover from "@/public/covers/how-am-i-learning-react.jpeg";
import smallElephantCover from "@/public/covers/small-elephant.jpg";
import nerdCover from "@/public/covers/nerd.jpg";

export const postsPreviews: PostPreview[] = [
  {
    title: `React: Getting Started`,
    slug: "react-getting-started",
    date: "2026-11-01",
    coverImage: smallElephantCover,
    summary: "Getting started with React and understanding its core concepts.",
  },
  {
    title: `How am I learning React?`,
    slug: "how-am-i-learning-react",
    date: "2026-10-28",
    coverImage: howAmILearningReactCover,
    summary: "Sharing my approach to learning React in depth.",
  },
  {
    title: "Awesome React Resources",
    slug: "awesome-react-resources",
    date: "2026-10-25",
    coverImage: nerdCover,
    summary:
      "A curated collection of high-quality resources for learning React. No hype, no low-effort tutorials, no beginner-level material covering obvious concepts: just genuinely valuable resources.",
  },
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
