import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const Publication: CollectionConfig = {
  slug: "publications",
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
      name: "publicationCategoryId",
      type: "relationship",
      relationTo: "publicationCategories",
      required: true,
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
