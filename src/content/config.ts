import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Omit to credit the organization; set to publish under a named author.
    author: z.string().optional(),
    authorTitle: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Path under /public, e.g. "/images/blog/my-post.png". Falls back to the site OG image.
    image: z.string().optional(),
    // Drafts render in `astro dev` but are excluded from builds, the sitemap and RSS.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
