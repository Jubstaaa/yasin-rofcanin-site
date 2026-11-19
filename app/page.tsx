import { futureOfWorkImages, inviteImages, profile } from "@/lib/content";
import type { Metadata } from "next";
import React from "react";
import ImageSlider from "@/app/_components/home/image-slider";
import Media from "@/app/_components/home/media";
import Publications from "@/app/_components/home/publications";
import EditorialRoles from "@/app/_components/home/editorial-roles";
import About from "@/app/_components/home/about";
import Invite from "@/app/_components/invite";
import FutureOfWork from "@/app/_components/home/future-of-work";

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
    url: "/",
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

function page() {
  const user = profile;



  const scholarStats = {
    citations: user?.scholarCitations || 0,
    hIndex: user?.scholarHIndex || 0,
    i10Index: user?.scholarI10Index || 0,
  };

  return (
    <>
      <ImageSlider
        user={{
          firstName: user?.firstName,
          lastName: user?.lastName,
          titles: user?.titles,
        }}
      />
      <About scholarStats={scholarStats} />
      <Publications />
      <EditorialRoles />
      <FutureOfWork
        images={futureOfWorkImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
      />
      <Invite
        images={inviteImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
        href="/keynote-talks"
      />

      <Media />
    </>
  );
}

export default page;
