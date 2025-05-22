import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const KeynoteTalk: CollectionConfig = {
  slug: "keynoteTalks",
  dbName: "keynoteTalks",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "link",
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
