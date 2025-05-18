import { PrismaClient } from "@prisma/client";

const createPrismaClient = () =>
  new PrismaClient().$extends({
    result: {
      user: {
        name: {
          needs: { firstName: true, lastName: true },
          compute(user) {
            return `${user.firstName} ${user.lastName}`;
          },
        },
      },
      media: {
        url: {
          needs: { filename: true },
          compute(media) {
            return `${process.env.VERCEL_BLOB_URL}/${media.filename}`;
          },
        },
        alt: {
          needs: { alt: true },
          compute(media) {
            return media.alt || "Yasin Rofcanin Site Image";
          },
        },
      },
    },
    query: {
      blog: {
        async findMany({ args, query }) {
          return query({
            ...args,
            orderBy: args.orderBy ?? { date: "desc" },
          });
        },
      },
    },
  });

const globalForPrisma = global as typeof globalThis & {
  prisma?: ReturnType<typeof createPrismaClient>;
};

export const prisma =
  globalForPrisma.prisma ?? (globalForPrisma.prisma = createPrismaClient());
