import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blogs",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        condition: (data) => data.type === "personal",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (data?.type === "personal" && !value && data?.name) {
              return data.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            }
            return value;
          },
        ],
      },
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
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "External Publication",
          value: "external",
        },
        {
          label: "Personal Blog",
          value: "personal",
        },
      ],
      defaultValue: "external",
    },
    {
      name: "link",
      type: "text",
      admin: {
        condition: (data) => data.type === "external",
      },
    },
    {
      name: "content",
      type: "richText",
      admin: {
        condition: (data) => data.type === "personal",
      },
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
      admin: {
        condition: (data) => data.type === "external",
      },
    },
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
        await revalidatePaths([
          { path: "/" },
          { path: "/", type: "layout" },
          { path: "/blog" },
        ]);
      },
    ],
  },
};
