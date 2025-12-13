import React from "react";
import type { Metadata } from "next";
import {
  BookService,
  PublicationCategoryService,
  SocialService,
} from "@/lib/services";
import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Button from "../components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Explore Yasin Rofcanin's academic publications and research papers in organisational behaviour, flexible work practices, and employee well-being.",
  keywords: [
    "Yasin Rofcanin Publications",
    "Academic Papers",
    "Research Publications",
    "Organisational Behaviour Research",
    "Flexible Work Practices",
    "Employee Well-being",
    "University of Bath Publications",
    "Academic Journals",
  ],
  openGraph: {
    title: "Publications - Yasin Rofcanin",
    description:
      "Explore Yasin Rofcanin's academic publications and research papers in organisational behaviour.",
    url: "https://yasinrofcanin.com/publications",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Publications - Yasin Rofcanin",
      },
    ],
  },
  alternates: {
    canonical: "/publications",
  },
};

async function PublicationsPage() {
  const categories = await PublicationCategoryService.findMany({
    include: { publications: true },
  });

  const books = await BookService.findMany({
    include: {
      media: true,
    },
  });

  const socials = await SocialService.findMany();
  const googleScholar = socials.find((s) =>
    s.name.toLowerCase().includes("scholar")
  );

  return (
    <>
      <PageHero
        title="Publications"
        description="My work with colleagues explore three interrelated areas in management research."
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-0 md:px-8 max-w-none pt-16">
        {/* Publications Section - Left */}
        <section>
          <div className="mb-8 flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Professor of Psychology
              </h2>
              <p className="text-gray-600">
                Over 500 scientific articles and more than 30 books published,
                Yasin Rofcanin is one of the world’s most prolific and
                influential psychologists.
              </p>
            </div>

            <div className="flex gap-4">
              {googleScholar && (
                <Button
                  href={googleScholar.link}
                  target="_blank"
                  size="sm"
                  icon="mdi:arrow-right"
                >
                  Google Scholar citations
                </Button>
              )}
              <Button
                href="https://researchportal.bath.ac.uk/en/persons/yasin-rofcanin"
                target="_blank"
                size="sm"
              >
                All Publications on Bath Portal
                <Icon icon="mdi:external-link" className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-12 mt-12">
            {categories.map((category) => (
              <div key={category.id}>
                <h3 className="text-xl md:text-2xl font-bold mb-6 pl-2 border-l-4 border-hover bg-green-50/40 py-2">
                  {category.name}
                </h3>
                <div className="flex flex-col gap-6">
                  {category.publications.length === 0 ? (
                    <div className="text-gray-400 italic">
                      No publications in this category.
                    </div>
                  ) : (
                    category.publications.map((pub) => (
                      <div
                        key={pub.id}
                        className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2 block">
                          {pub.date
                            ? new Date(pub.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : ""}
                        </span>
                        <Link href={pub.link} target="_blank">
                          <h4 className="text-lg font-medium mb-2 hover:text-hover transition-all duration-300 leading-snug">
                            {pub.name}
                          </h4>
                        </Link>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                          {pub.description}
                        </p>
                        <Link
                          href={pub.link}
                          target="_blank"
                          className="text-hover text-xs font-bold flex items-center gap-2 hover:text-black w-fit transition-all duration-300"
                        >
                          READ MORE{" "}
                          <Icon icon="mdi:arrow-right" className="w-3 h-3" />
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Books Section - Right */}
        <section>
          <div className="mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold mb-2">Books</h2>
            <p className="text-gray-600">Selected books and editorial works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {books.length === 0 ? (
              <div className="col-span-2 text-gray-400 italic text-center py-12 bg-gray-50 rounded-lg">
                No books found.
              </div>
            ) : (
              books.map((book) => (
                <div key={book.id} className="flex gap-4 items-start group">
                  {/* Book Cover / Icon */}
                  <Link
                    href={book.link}
                    target="_blank"
                    className="flex-shrink-0 w-48 h-auto bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative shadow-sm group-hover:shadow-md transition-all duration-300 aspect-[3/4]"
                  >
                    {book.media ? (
                      <Image
                        src={book.media.url}
                        alt={book.media.alt || book.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                        <Icon
                          icon="mdi:book-open-page-variant"
                          className="w-8 h-8"
                        />
                      </div>
                    )}
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <Link href={book.link} target="_blank">
                      <h4 className="font-medium text-lg leading-snug group-hover:text-hover transition-colors line-clamp-2">
                        {book.name}
                      </h4>
                    </Link>

                    <Link
                      href={book.link}
                      target="_blank"
                      className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 hover:text-hover transition-colors w-fit"
                    >
                      View Book{" "}
                      <Icon icon="mdi:arrow-right" className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default PublicationsPage;
