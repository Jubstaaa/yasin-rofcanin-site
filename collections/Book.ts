import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const Book: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "mediaId",
      type: "upload",
      relationTo: "media",
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidatePaths([
          { path: "/" },
          { path: "/publications" },
        ]);
      },
    ],
  },
};

