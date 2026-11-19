import React from "react";

/**
 * Renders rich text that was serialized to HTML when the CMS was removed.
 *
 * This used to be Payload's Lexical React renderer. The editor state left with
 * the CMS, so the markup is produced once at export time instead — see the
 * generator note in `lib/content.ts`. The prose classes are carried over
 * unchanged so the typography still matches what Lexical produced.
 *
 * The HTML is ours: generated from our own export with every text node escaped
 * during serialization. Nothing user-supplied reaches this.
 */
export default function RichText({
  html,
  className,
  ...props
}: { html?: string | null } & React.HTMLAttributes<HTMLDivElement>) {
  if (!html) return null;

  return (
    <div
      className={`prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-hover prose-strong:text-gray-900 prose-blockquote:border-l-hover prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-lg ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
}
