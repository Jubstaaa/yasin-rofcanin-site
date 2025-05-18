import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Media } from "./collections/Media";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { User } from "./collections/User";
import { Social } from "./collections/Social";
import { Blog } from "./collections/Blog";
import { Teaching } from "./collections/Teaching";
import { Visiting } from "./collections/Visiting";
import { SliderImages } from "./collections/SliderImages";
import { FutureOfWorkImages } from "./collections/FutureOfWorkImages";
import { Video } from "./collections/Video";
import { KeynoteTalk } from "./collections/KeynoteTalk";
import { Publication } from "./collections/Publication";
import { PublicationCategory } from "./collections/PublicationCategory";

export default buildConfig({
  editor: lexicalEditor(),

  collections: [
    User,
    Media,
    Social,
    Blog,
    Teaching,
    Visiting,
    SliderImages,
    FutureOfWorkImages,
    Video,
    KeynoteTalk,
    Publication,
    PublicationCategory,
  ],
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],

  secret: process.env.PAYLOAD_SECRET || "",

  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),

  sharp,
});
