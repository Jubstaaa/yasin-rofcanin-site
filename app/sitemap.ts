import type { MetadataRoute } from "next";

// `output: "export"` has no server to generate this on request, so it has to be
// written out at build time like every other page.
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://yasinrofcanin.com",
      lastModified: new Date(),
    },
  ];
}
