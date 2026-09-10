import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  return [
    {
      url: site.url,
      lastModified: ahora,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: site.url + "/privacidad",
      lastModified: ahora,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: site.url + "/terminos",
      lastModified: ahora,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
