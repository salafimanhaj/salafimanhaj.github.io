import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const en = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().optional().default(SITE.author),
      publisher: z.string().optional().default(SITE.author),
      pubDatetime: z.date().optional(),
      modDatetime: z.date().optional().nullable(),
      hijri: z.string().optional(),
      date: z.date().optional(),
      title: z.string().optional(),
      source: z.string().optional(),
      muftis: z.string().optional(),
      featured: z.boolean().optional().default(false),
      mp3: z.string().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional().default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string().optional(),
      excerpt: z.string().optional(),
      canonicalURL: z.string().optional(),
    }),
});

const ar = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().optional().default(SITE.author),
      publisher: z.string().optional().default(SITE.author),
      pubDatetime: z.date().optional(),
      modDatetime: z.date().optional().nullable(),
      hijri: z.string().optional(),
      date: z.date().optional(),
      title: z.string().optional(),
      source: z.string().optional(),
      muftis: z.string().optional(),
      featured: z.boolean().optional().default(false),
      mp3: z.string().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional().default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string().optional(),
      excerpt: z.string().optional(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = {
  ar: ar,
  en: en,
};
