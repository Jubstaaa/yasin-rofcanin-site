import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const Social: CollectionConfig = {
  slug: "socials",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidatePaths([{ path: "/", type: "layout" }]);
      },
    ],
  },
};
