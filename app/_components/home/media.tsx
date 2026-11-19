import { videos } from "@/lib/content";
import React from "react";
import MediaSlider from "./media-slider";
import YouTubeFacade from "./youtube-facade";
import RichText from "@/app/_components/rich-text";
import Link from "next/link";
import Image from "next/image";

function Media() {

  return (
    <div className="bg-[url('/images/bg-media.jpg')] bg-fixed bg-center pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-10 lg:pb-12 -mb-8 md:-mb-10 lg:-mb-12">
      <div className="container mx-auto flex flex-col gap-6 md:gap-8 lg:gap-10 px-4">
        <h2 className="text-3xl md:text-4xl text-white text-center font-medium">Media</h2>
        <div className="w-[1px] h-12 md:h-16 lg:h-20 bg-hover -mb-12 md:-mb-16 lg:-mb-20 mx-auto"></div>
        <MediaSlider
          videos={videos.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {item.youtubeId && (
                <div className="overflow-hidden rounded-lg">
                  <YouTubeFacade
                    id={item.youtubeId}
                    title={item.title ?? "Talk by Yasin Rofcanin"}
                    noCookie
                    webp
                  />
                </div>
              )}
              {item.link && item.media && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Image
                    src={item.media.url}
                    alt={item.media.alt}
                    width={600}
                    height={600}
                    className="aspect-video object-cover w-full rounded-lg"
                  />
                </Link>
              )}
              <RichText
                className="prose-p:!text-white prose-a:!text-hover prose-p:text-sm md:prose-p:text-base"
                html={item.descriptionHtml}
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
}

export default Media;
