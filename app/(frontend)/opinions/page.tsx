import React from "react";
import type { Metadata } from "next";
import { BlogService } from "@/lib/services";
import PageHero from "../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore Yasin Rofcanin's blog posts and external publications. Insights on organisational behaviour, flexible work practices, and academic research.",
  keywords: [
    "Yasin Rofcanin Blog",
    "Organisational Behaviour Blog",
    "Academic Blog",
    "Research Publications",
    "Flexible Work Blog",
    "Work-Family Balance",
    "Academic Insights",
  ],
  openGraph: {
    title: "Blog - Yasin Rofcanin",
    description:
      "Explore Yasin Rofcanin's blog posts and external publications on organisational behaviour and research.",
    url: "https://yasinrofcanin.com/blog",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Yasin Rofcanin",
      },
    ],
  },
  alternates: {
    canonical: "/blog",
  },
};

async function BlogPage() {
  const blogs = await BlogService.findMany({
    include: { media: true },
  });

  const externalBlogs = blogs.filter((blog) => blog.type === "external");
  const personalBlogs = blogs.filter((blog) => blog.type === "personal");

  return (
    <>
      <PageHero
        title="Blog"
        description="Insights, stories, and updates from my professional journey."
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-0 md:px-8 max-w-none pt-16">
        {/* External Publications Section - Left */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Media Appearances</h2>
            <p className="text-gray-600">Media appearances and interviews</p>
          </div>

          {externalBlogs.length === 0 ? (
            <div className="text-gray-400 italic text-center py-12 bg-gray-50 rounded-lg">
              <Icon
                icon="mdi:file-document-outline"
                className="w-12 h-12 mx-auto mb-4 opacity-50"
              />
              <p>No media appearances found.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {externalBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Blog Image */}
                  {blog.media?.url && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={blog.media.url}
                        alt={blog.media.alt || blog.name}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-hover transition-colors">
                      {blog.name}
                    </h3>
                    {blog.description && (
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {blog.description}
                      </p>
                    )}
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="font-medium">
                        {blog.authors?.join(", ")}
                      </div>
                      {blog.publisher && <div>{blog.publisher}</div>}
                      {blog.date && (
                        <div>
                          {new Date(blog.date).toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                      )}
                    </div>
                    {blog.link && (
                      <Link
                        href={blog.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-hover font-semibold hover:underline text-sm mt-3 group/link"
                      >
                        READ MORE
                        <Icon
                          icon="mdi:arrow-right"
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Personal Blogs Section - Right */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Orianted Outlets</h2>
            <p className="text-gray-600">Personal thoughts and insights</p>
          </div>

          {personalBlogs.length === 0 ? (
            <div className="text-gray-400 italic text-center py-12 bg-gray-50 rounded-lg">
              <Icon
                icon="mdi:blog-outline"
                className="w-12 h-12 mx-auto mb-4 opacity-50"
              />
              <p>No oriented outlets found.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {personalBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Blog Image */}
                  {blog.media?.url && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={blog.media.url}
                        alt={blog.media.alt || blog.name}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-hover transition-colors">
                      {blog.name}
                    </h3>
                    {blog.description && (
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {blog.description}
                      </p>
                    )}
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="font-medium">
                        {blog.authors?.join(", ")}
                      </div>
                      {blog.date && (
                        <div>
                          {new Date(blog.date).toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-hover font-semibold hover:underline text-sm mt-3 group/link"
                    >
                      READ MORE
                      <Icon
                        icon="mdi:arrow-right"
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default BlogPage;
