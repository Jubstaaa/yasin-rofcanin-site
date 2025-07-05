import type { Metadata } from "next";
import React from "react";
import ImageSlider from "./components/landing/ImageSlider";
import {
  // FutureOfWorkImagesService,
  InviteImagesService,
  SliderImageService,
  UserService,
} from "@/lib/services";
import Media from "./components/landing/Media";
import Publications from "./components/landing/Publications";
import EditorialRoles from "./components/landing/EditoralRoles";
import About from "./components/landing/About";
import Invite from "./components/landing/Invite";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Yasin Rofcanin's academic website. Professor of Organisational Behaviour at University of Bath, researching flexible work practices, employee behaviours, and work-family enrichment.",
  keywords: [
    "Yasin Rofcanin",
    "Home",
    "Organisational Behaviour",
    "University of Bath",
    "Academic Research",
    "Flexible Work",
    "Work-Family Balance",
  ],
  openGraph: {
    title: "Yasin Rofcanin - Professor of Organisational Behaviour",
    description:
      "Welcome to Yasin Rofcanin's academic website. Professor of Organisational Behaviour at University of Bath.",
    url: "https://yasinrofcanin.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yasin Rofcanin - Professor of Organisational Behaviour",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

async function page() {
  const sliderImages = await SliderImageService.findMany({
    select: {
      media: true,
    },
  });

  const user = await UserService.findUnique({
    where: {
      email: "y.rofcanin@bath.ac.uk",
    },
  });

  // const futureOfWorkImages = await FutureOfWorkImagesService.findMany({
  //   select: {
  //     media: true,
  //   },
  // });

  const inviteImages = await InviteImagesService.findMany({
    select: {
      media: true,
    },
  });

  return (
    <>
      <ImageSlider
        images={sliderImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
        user={{
          firstName: user?.firstName,
          lastName: user?.lastName,
          titles: user?.titles,
        }}
      />
      <About name={user?.firstName ?? ""} />
      <Publications />
      <EditorialRoles />
      <Invite
        images={inviteImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
        href="/keynote-talks"
      />
      {/* <FutureOfWork
        images={futureOfWorkImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
      /> */}
      <Media />
    </>
  );
}

export default page;
