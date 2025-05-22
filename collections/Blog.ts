import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blogs",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "authors",
      type: "text",
      required: true,
      hasMany: true,
    },
    {
      name: "publisher",
      type: "text",
      required: true,
    },
    {
      name: "mediaId",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidatePaths([
          { path: "/" },
          { path: "/", type: "layout" },
          { path: "/publications" },
        ]);
      },
    ],
  },
};
