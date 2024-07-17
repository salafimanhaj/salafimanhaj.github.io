import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://salafimanhaj.github.io/", // replace this with your deployed domain
  author: "alsalafiyyah@icloud.com",
  desc: "Kmowledge of Shariah",
  title: "Salafi Manhaj",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  defaultLocale: 'en-EN',
  locales: ['en', 'ar'],
  langTag: ['en-EN'],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: ` ${SITE.title}`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/alsalafiyyah",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];

export const arSOCIALS: SocialObjects = [
  {
    name: "RSS",
    href: "/ar/rss.xml",
    linkTitle: ` ${SITE.title}`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/alsalafiyyah",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
