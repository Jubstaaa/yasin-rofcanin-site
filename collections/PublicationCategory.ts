import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const PublicationCategory: CollectionConfig = {
  slug: "publicationCategories",
  dbName: "publicationCategories",
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
      name: "description",
      type: "text",
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidatePaths([{ path: "/" }]);
      },
    ],
  },
};
