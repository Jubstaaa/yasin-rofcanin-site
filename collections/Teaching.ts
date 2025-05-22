import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const Teaching: CollectionConfig = {
  slug: "teachings",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "level",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      type: "text",
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidatePaths([{ path: "/about-me" }]);
      },
    ],
  },
};
