import type { MetadataRoute } from "next";
import { podcasts, seasons, hosts, posts } from "@/lib/content";

const staticRoutes = [
  "",
  "/about-us",
  "/who-we-are-2",
  "/what-we-do-2",
  "/meet-your-hosts",
  "/our-schedule",
  "/donate",
  "/contact-us",
  "/shop",
  "/podcast-list",
  "/podcast-list-dark",
  "/blog",
  "/podcast-category/entertainment",
  "/podcast-category/past-podcast",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://morradio.co.uk";
  const now = new Date();
  const urls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
  }));
  for (const p of podcasts) urls.push({ url: `${base}/podcast-item/${p.slug}`, lastModified: now });
  for (const s of seasons) urls.push({ url: `${base}/podcast-season/${s.slug}`, lastModified: now });
  for (const h of hosts.filter((x) => !["/meet-your-hosts"].includes(x.page)))
    urls.push({ url: `${base}${h.page}`, lastModified: now });
  for (const post of posts) urls.push({ url: `${base}/blog/${post.slug}`, lastModified: now });
  return urls;
}
