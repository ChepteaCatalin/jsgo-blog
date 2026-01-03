# JavaScript: Global Offensive

My personal shit-talking blog.

This is a statically generated app using Next.js and Markdown.

## Running locally

Install dependencies, then run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Adding a new article

1. Add a new object to `data/posts-previews.ts`.
2. Add the article's image to `public/covers`. It should match the path defined in `postsPreviews.coverImage`.
3. Create a folder in `app/posts` with a name that matches the slug defined in the object added to `data/posts-previews.ts`.
4. Create a `page.mdx` file inside this folder and add the article's markdown content.
5. Create a `layout.tsx` file in the article folder, re-export `PostLayout`, and define the article's metadata. The sole purpose of this file is to define metadata.
