import React from "react";
import { VideoService } from "@/lib/services";
import Image from "next/image";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import RichText from "../ui/RichText";

async function Media() {
  const videos = await VideoService.findMany({
    select: {
      id: true,
      description: true,
      youtubeId: true,
      media: true,
      link: true,
    },
  });

  return (
    <div className="bg-[url('/images/bg-media.jpg')] bg-fixed bg-center py-24">
      <div className="container mx-auto flex flex-col gap-10">
        <h2 className="text-4xl text-white text-center font-medium">Media</h2>
        <div className="w-[1px] h-40 bg-hover -mb-20 mx-auto"></div>
        <div className="grid grid-cols-2 gap-10">
          {videos.map((item) => (
            <div key={item.id} className="flex flex-col gap-5">
              {item.youtubeId && (
                <iframe
                  className="aspect-video"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  allowFullScreen
                />
              )}
              {item.link && item.media && (
                <Image
                  src={item.media.url}
                  alt={item.media.alt}
                  width={600}
                  height={600}
                  className="aspect-video object-cover"
                />
              )}
              <RichText
                className="text-white prose-a:text-hover"
                data={item.description as unknown as SerializedEditorState}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Media;
