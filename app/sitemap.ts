import { MetadataRoute } from "next";
import convertibles from "@/assets/convertibles";

const slugs = convertibles.map((option) => option.toLowerCase());

const sitemapUrls = slugs.map((slug) => {
  return {
    url: "https://www.imagebgremover.io/convert-image/" + slug,
    lastModified: new Date(),
  };
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...sitemapUrls,
    {
      url: "https://www.imagebgremover.io/compress-image",
      lastModified: new Date(),
    },
    {
      url: "https://www.imagebgremover.io/remove-background",
      lastModified: new Date(),
    },
    {
      url: "https://www.imagebgremover.io/convert-image",
      lastModified: new Date(),
    },
    {
      url: "https://www.imagebgremover.io/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.imagebgremover.io/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.imagebgremover.io/terms-of-use",
      lastModified: new Date(),
    },

    {
      url: "https://www.imagebgremover.io/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.imagebgremover.io/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.imagebgremover.io/cookies-policy",
      lastModified: new Date(),
    },
  ];
}
