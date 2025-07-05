import React from "react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from "@payloadcms/richtext-lexical/react";
import { MediaService } from "@/lib/services";
import Image from "next/image";

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: async ({ node }) => {
    const media = await MediaService.findUnique({
      where: {
        id: String(node.value),
      },
      select: {
        url: true,
        alt: true,
        id: true,
      },
    });
    if (media) {
      return (
        <Image
          src={media.url}
          alt={media.alt || "Blog image"}
          width={1920}
          height={1080}
          className="w-auto lg:max-h-96 h-auto shadow object-contain rounded-lg"
        />
      );
    }
  },
});

export default function RichText(
  props: {
    data: SerializedEditorState;
  } & React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <RichTextWithoutBlocks
      converters={jsxConverters}
      {...props}
      className={`prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-hover prose-strong:text-gray-900 prose-blockquote:border-l-hover prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-lg ${props.className || ""}`}
    />
  );
}
