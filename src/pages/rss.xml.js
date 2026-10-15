import rss from "@astrojs/rss";
import { SITE_NAME, getPublishedPosts } from "../utils/blog";

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${SITE_NAME} Blog`,
    description: "Articles on physician life care planning, expert witness standards, and future care cost projections.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
  });
}
