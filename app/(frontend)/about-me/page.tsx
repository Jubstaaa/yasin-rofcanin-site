import React from "react";
import type { Metadata } from "next";
import Hero from "../components/about-us/Hero";
import Teachings from "../components/about-us/Teachings";
import Visitings from "../components/about-us/Visitings";
import EditorialRoles from "../components/landing/EditoralRoles";
import { FutureOfWorkImagesService } from "@/lib/services";
import FutureOfWorkImages from "../components/landing/FutureOfWork";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Yasin Rofcanin, Professor of Organisational Behaviour at University of Bath. Research interests in flexible work practices, employee behaviours, and work-family enrichment.",
  keywords: [
    "Yasin Rofcanin About",
    "Professor Organisational Behaviour",
    "University of Bath",
    "Academic Background",
    "Research Interests",
    "Flexible Work Practices",
    "Work-Family Enrichment",
    "Employee Behaviour",
  ],
  openGraph: {
    title: "About Me - Yasin Rofcanin",
    description:
      "Learn more about Yasin Rofcanin, Professor of Organisational Behaviour at University of Bath.",
    url: "https://yasinrofcanin.com/about-me",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Me - Yasin Rofcanin",
      },
    ],
  },
  alternates: {
    canonical: "/about-me",
  },
};

const futureOfWorkImages = await FutureOfWorkImagesService.findMany({
  select: {
    media: true,
  },
});

async function page() {
  return (
    <>
      <Hero />
      <Teachings />
      <Visitings />
      <EditorialRoles />
      <FutureOfWorkImages
        images={futureOfWorkImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
      />
    </>
  );
}

export default page;
