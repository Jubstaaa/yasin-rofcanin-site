import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const Video: CollectionConfig = {
  slug: "videos",
  fields: [
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "link",
      type: "text",
    },
    {
      name: "youtubeId",
      type: "text",
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
        await revalidatePaths([{ path: "/" }]);
      },
    ],
  },
};
