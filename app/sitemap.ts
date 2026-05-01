import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mediwill.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.mediwill.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.mediwill.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.mediwill.in/ecosystem",
      lastModified: new Date(),
    },
  ];
}