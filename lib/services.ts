import { prisma } from "./prisma";

export const UserService = prisma.user;
export const SocialService = prisma.social;
export const BlogService = prisma.blog;
export const PublicationService = prisma.publication;
export const MediaService = prisma.media;
export const SliderImageService = prisma.sliderImages;
export const VideoService = prisma.video;
