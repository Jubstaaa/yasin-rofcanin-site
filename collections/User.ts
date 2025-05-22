import { revalidatePaths } from "@/lib/actions";
import { CollectionConfig } from "payload";

export const User: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "titles",
      type: "text",
      hasMany: true,
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "mediaId",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "loginAttempts",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      name: "lockUntil",
      type: "date",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "resetPasswordExpiration",
      type: "date",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "resetPasswordToken",
      type: "text",
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidatePaths([
          { path: "/", type: "layout" },
          { path: "/about-me" },
          { path: "/contact" },
        ]);
      },
    ],
  },
};
