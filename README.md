# JavaScript: Global Offensive

My personal blog.

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
3. Create a folder in `app/posts` with a name that matches the `slug` defined in the object added to `data/posts-previews.ts`.
4. Create a `page.mdx` file inside this folder and add the article's markdown content.
5. Define metadata and export the `metadata` identifier from `page.mdx`.

## Privacy Policy

The Privacy Policy (`app/privacy/page.mdx`) is written to comply with the EU GDPR and the Republic of Moldova's Law No. 195/2024 on personal data protection. It describes the current setup: hosting on Vercel (Hobby plan), no cookies, no analytics, and only a theme preference in `localStorage`.

If you decide to self-host this site, don't forget to update the Privacy Policy. At a minimum, make sure to update the contact information, the hosting provider, log retention, and international transfers sections, and the supervisory authority if you are not based in Moldova. Any change that adds cookies, analytics, or third-party resources must be reflected in the policy before it goes live.
