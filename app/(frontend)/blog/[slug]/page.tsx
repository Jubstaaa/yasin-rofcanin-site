import React from "react";
import type { Metadata } from "next";
import { BlogService } from "@/lib/services";
import { notFound } from "next/navigation";
import PageHero from "../../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Link from "next/link";
import RichText from "../../components/ui/RichText";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the blog post
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const blog = await BlogService.findFirst({
    where: {
      slug: params.slug,
      type: "personal",
    },
    include: { media: true },
  });

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const description =
    blog.description ||
    `Read ${blog.name} by ${blog.authors?.join(", ")} on Yasin Rofcanin's blog.`;

  return {
    title: blog.name,
    description,
    keywords: [
      blog.name,
      ...(blog.authors || []),
      "Yasin Rofcanin",
      "Blog",
      "Organisational Behaviour",
      "Academic Research",
    ],
    authors: blog.authors?.map((author) => ({ name: author })),
    openGraph: {
      title: blog.name,
      description,
      url: `https://yasinrofcanin.com/blog/${params.slug}`,
      type: "article",
      publishedTime: blog.date?.toISOString(),
      authors: blog.authors,
      images: blog.media?.url
        ? [
            {
              url: blog.media.url,
              width: 1200,
              height: 630,
              alt: blog.media.alt || blog.name,
            },
          ]
        : [
            {
              url: "/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: blog.name,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.name,
      description,
      images: blog.media?.url ? [blog.media.url] : ["/images/og-image.jpg"],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = await BlogService.findFirst({
    where: {
      slug: params.slug,
      type: "personal",
    },
    include: { media: true },
  });

  if (!blog) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={blog.name}
        description={blog.description || ""}
        imageUrl={blog.media?.url}
      />

      <div className="container mx-auto py-16">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>{blog.authors?.join(", ")}</span>
              {blog.date && (
                <>
                  <span>•</span>
                  <span>
                    {new Date(blog.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Blog Content */}
          {blog.content && (
            <div className="prose prose-lg max-w-none">
              <RichText
                data={blog.content as unknown as SerializedEditorState}
              />
            </div>
          )}

          {/* Debug: Content Structure */}
          {process.env.NODE_ENV === "development" && blog.content && (
            <details className="mt-8 p-4 bg-gray-100 rounded-lg">
              <summary className="cursor-pointer font-semibold">
                Debug: Content Structure
              </summary>
              <pre className="mt-2 text-xs overflow-auto">
                {JSON.stringify(blog.content, null, 2)}
              </pre>
            </details>
          )}

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-hover font-semibold hover:underline"
            >
              <Icon icon="mdi:arrow-left" className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailPage;
