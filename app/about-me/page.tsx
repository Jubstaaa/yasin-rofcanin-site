import { OG_IMAGE } from "@/lib/og-image";
import React from "react";
import type { Metadata } from "next";
import Hero from "@/app/about-me/_components/hero";
import Teachings from "@/app/about-me/_components/teachings";
import Visitings from "@/app/about-me/_components/visitings";

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
    images: [OG_IMAGE],
    title: "About Me - Yasin Rofcanin",
    description:
      "Learn more about Yasin Rofcanin, Professor of Organisational Behaviour at University of Bath.",
    url: "/about-me",
  },
  alternates: {
    canonical: "/about-me",
  },
};

function page() {
  return (
    <>
      <Hero />
      <Visitings />
      <Teachings />
    </>
  );
}

export default page;
