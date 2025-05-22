import React from "react";
import { BlogService } from "@/lib/services";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";

async function BlogPage() {
  const blogs = await BlogService.findMany({
    include: { media: true },
  });

  return (
    <>
      <PageHero
        title="Blog"
        description="Insights, stories, and updates from my professional journey."
      />

      <div className="container mx-auto py-16 flex flex-col gap-12">
        {blogs.length === 0 ? (
          <div className="text-gray-400 italic text-center">
            No blog posts found.
          </div>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-xl p-12 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-none"
            >
              {/* Sol: İçerik */}
              <div className="flex-1 flex flex-col gap-6">
                <h2 className="text-2xl font-bold">{blog.name}</h2>
                <p className="text-lg text-secondary">{blog.description}</p>
                <div className="font-bold text-lg">
                  {blog.authors?.join(", ")}
                  {blog.publisher ? ` – ${blog.publisher}` : ""}
                  {blog.date
                    ? ` – ${new Date(blog.date).toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}`
                    : ""}
                </div>
                <Button href={blog.link} target="_blank">
                  READ MORE <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                </Button>
              </div>
              {/* Sağ: Görsel (varsa) */}
              {blog.media?.url && (
                <div className="w-64 h-64 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={blog.media.url}
                    alt={blog.media.alt || blog.name}
                    className="object-contain max-h-full max-w-full"
                    width={256}
                    height={256}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default BlogPage;
