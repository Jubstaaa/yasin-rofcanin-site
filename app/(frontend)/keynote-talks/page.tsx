import React from "react";
import { KeynoteTalkService } from "@/lib/services";
import PageHero from "../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default async function KeynoteTalksPage() {
  const talks = await KeynoteTalkService.findMany();

  return (
    <>
      <PageHero
        title="Keynote Talks"
        description="Invited keynote speeches and talks at conferences, universities, and organizations."
      />

      <div className="container mx-auto py-16 flex flex-col gap-12">
        {talks.length === 0 ? (
          <div className="text-gray-400 italic text-center">
            No keynote talks found.
          </div>
        ) : (
          talks.map((talk) => (
            <div
              key={talk.id}
              className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold">{talk.name}</h2>
                  <div className="text-gray-500 text-lg">{talk.location}</div>
                  {talk.date && (
                    <div className="text-sm text-gray-400 mt-1">
                      {new Date(talk.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  )}
                </div>
                {talk.link && (
                  <Link
                    href={talk.link}
                    target="_blank"
                    className="text-hover font-semibold flex items-center gap-2 hover:underline"
                  >
                    View Details{" "}
                    <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                  </Link>
                )}
              </div>
              <div className="text-gray-700">{talk.description}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
