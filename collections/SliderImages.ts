import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const SliderImages: CollectionConfig = {
  slug: "sliderImages",
  dbName: "sliderImages",
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
