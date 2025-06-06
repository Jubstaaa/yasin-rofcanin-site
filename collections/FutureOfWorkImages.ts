import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const FutureOfWorkImages: CollectionConfig = {
  slug: "futureOfWorkImages",
  dbName: "futureOfWorkImages",
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
