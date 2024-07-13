import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./argetSortedPosts";
import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: CollectionEntry<"ar">[], tag: string) =>
  getSortedPosts(
    posts.filter(post => slugifyAll(post.data.tags).includes(tag))
  );

export default getPostsByTag;
