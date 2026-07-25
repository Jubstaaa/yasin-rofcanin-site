import * as content from "./content";

/**
 * Static stand-ins for what used to be Prisma models.
 *
 * The content now lives in `content.ts` rather than MongoDB, but the pages call
 * these exactly the way they always did, so they did not have to change. The
 * query surface here is deliberately only as wide as the call sites need:
 * equality `where`, and `take`.
 *
 * `include` and `select` are accepted and ignored on purpose — the relations
 * Prisma used to join are already resolved in the content module, so there is
 * nothing left to fetch.
 */
type Row = Record<string, unknown>;

interface Query {
  where?: Record<string, unknown>;
  take?: number;
  include?: unknown;
  select?: unknown;
  orderBy?: unknown;
}

const matches = (row: unknown, where?: Record<string, unknown>) =>
  !where ||
  Object.entries(where).every(([key, value]) => (row as Row)[key] === value);

function collection<T>(rows: readonly T[]) {
  return {
    findMany: async (query: Query = {}): Promise<T[]> => {
      const found = rows.filter((row) => matches(row, query.where));
      return (query.take ? found.slice(0, query.take) : found) as T[];
    },
    findFirst: async (query: Query = {}): Promise<T | null> =>
      (rows.find((row) => matches(row, query.where)) ?? null) as T | null,
    findUnique: async (query: Query = {}): Promise<T | null> =>
      (rows.find((row) => matches(row, query.where)) ?? null) as T | null,
  };
}

export const SocialService = collection(content.socials);
export const BlogService = collection(content.blogs);
export const BookService = collection(content.books);
export const PublicationService = collection(
  content.publications
);
export const PublicationCategoryService = collection(
  content.publicationCategories
);
export const VideoService = collection(content.videos);
export const TeachingService = collection(content.teachings);
export const VisitingService = collection(content.visitings);
export const KeynoteTalkService = collection(
  content.keynoteTalks
);
export const InviteImagesService = collection(
  content.inviteImages
);
export const FutureOfWorkImagesService = collection(
  content.futureOfWorkImages
);

/**
 * There is no user table any more — authentication left with the CMS. The site
 * only ever needed the owner's own details, so they are a plain constant.
 */
export const profile = content.profile;
