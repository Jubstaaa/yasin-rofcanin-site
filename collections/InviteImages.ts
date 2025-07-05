import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const InviteImages: CollectionConfig = {
  slug: "inviteImages",
  dbName: "inviteImages",
  fields: [
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
        await revalidatePaths([{ path: "/" }]);
      },
    ],
  },
};
