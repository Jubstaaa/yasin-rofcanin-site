import React from "react";
import { PublicationCategoryService } from "@/lib/services";
import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Button from "../components/ui/Button";

async function PublicationsPage() {
  const categories = await PublicationCategoryService.findMany({
    include: { publications: true },
  });

  return (
    <>
      <PageHero
        title="Publications"
        description="My work with colleagues explore three interrelated areas in management research."
      />

      <div className="container mx-auto py-16 flex flex-col gap-16">
        <div className="flex justify-end mb-8">
          <Button
            href="https://researchportal.bath.ac.uk/en/persons/yasin-rofcanin"
            target="_blank"
          >
            All Publications on Bath Portal
            <Icon icon="mdi:external-link" className="w-5 h-5" />
          </Button>
        </div>
        {categories.map((category) => (
          <section key={category.id}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pl-2 border-l-4 border-hover bg-green-50/40 py-2">
              {category.name}
            </h2>
            <div className="flex flex-col gap-8">
              {category.publications.length === 0 ? (
                <div className="text-gray-400 italic">
                  No publications in this category.
                </div>
              ) : (
                category.publications.map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-white rounded-lg shadow-sm p-8 flex flex-col gap-2"
                  >
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {pub.date
                        ? new Date(pub.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : ""}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{pub.name}</h3>
                    <Link
                      href={pub.link}
                      target="_blank"
                      className="text-hover font-semibold flex items-center gap-2 hover:underline"
                    >
                      READ MORE{" "}
                      <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default PublicationsPage;
