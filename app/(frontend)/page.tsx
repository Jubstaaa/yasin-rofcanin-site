import type { Metadata } from "next";
import React from "react";
import ImageSlider from "./components/landing/ImageSlider";
import {
  FutureOfWorkImagesService,
  InviteImagesService,
  SliderImageService,
  UserService,
} from "@/lib/services";
import Media from "./components/landing/Media";
import Publications from "./components/landing/Publications";
import EditorialRoles from "./components/landing/EditoralRoles";
import About from "./components/landing/About";
import Invite from "./components/landing/Invite";
import FutureOfWork from "./components/landing/FutureOfWork";

async function getScholarStats() {
  try {
    const res = await fetch(
      "https://scholar.google.com/citations?user=pzQhhegAAAAJ&hl=tr&oi=ao",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Google Scholar data");
    }

    const html = await res.text();

    const statsMatches = [...html.matchAll(/class="gsc_rsb_std">(\d+)<\/td>/g)];

    return {
      citations: statsMatches[0] ? parseInt(statsMatches[0][1]) : 0,
      hIndex: statsMatches[2] ? parseInt(statsMatches[2][1]) : 0,
      i10Index: statsMatches[4] ? parseInt(statsMatches[4][1]) : 0,
    };
  } catch (error) {
    console.error("Error scraping Google Scholar:", error);
    return { citations: 0, hIndex: 0, i10Index: 0 };
  }
}

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

  const inviteImages = await InviteImagesService.findMany({
    select: {
      media: true,
    },
  });

  const futureOfWorkImages = await FutureOfWorkImagesService.findMany({
    select: {
      media: true,
    },
  });

  const scholarStats = await getScholarStats();

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
