import React from "react";
import { InviteImagesService, KeynoteTalkService } from "@/lib/services";
import PageHero from "../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Script from "next/script";
import Invite from "../components/landing/Invite";

export default async function KeynoteTalksPage() {
  const talks = await KeynoteTalkService.findMany();

  const inviteImages = await InviteImagesService.findMany({
    select: {
      media: true,
    },
  });
  return (
    <>
      <PageHero
        title="Keynote Talks"
        description="Invited keynote speeches and talks at conferences, universities, and organizations."
      />

      <div className="w-full flex flex-col lg:flex-row gap-8 px-0 md:px-8 max-w-none">
        {/* Left: Talks List */}
        <div className="flex-1 flex flex-col gap-8 py-16">
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
        {/* Right: LinkedIn Feed (Elfsight Widget) */}
        <div className="w-full lg:w-[420px] flex-shrink-0 py-16 flex justify-center items-start">
          <div
            className="elfsight-app-d4c74095-ecdd-422a-b654-85a46fa4a837"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
      <Invite
        images={inviteImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
        href="/contact"
      />
      {/* Elfsight LinkedIn Feed Script */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
    </>
  );
}
