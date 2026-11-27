import type { Metadata } from 'next'

import { ArrowRight, FileText, Newspaper } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import PageHero from '@/app/_components/page-hero'
import { blogs } from '@/lib/content'
import { OG_IMAGE } from '@/lib/og-image'

export const metadata: Metadata = {
    alternates: {
        canonical: '/opinions',
    },
    description:
        "Explore Yasin Rofcanin's blog posts and external publications. Insights on organisational behaviour, flexible work practices, and academic research.",
    keywords: [
        'Yasin Rofcanin Blog',
        'Organisational Behaviour Blog',
        'Academic Blog',
        'Research Publications',
        'Flexible Work Blog',
        'Work-Family Balance',
        'Academic Insights',
    ],
    openGraph: {
        description:
            "Explore Yasin Rofcanin's blog posts and external publications on organisational behaviour and research.",
        images: [OG_IMAGE],
        title: 'Blog - Yasin Rofcanin',
        url: '/opinions',
    },
    title: 'Blog',
}

function BlogPage() {
    const externalBlogs = blogs.filter(blog => blog.type === 'external')
    const personalBlogs = blogs.filter(blog => blog.type === 'personal')

    return (
        <>
            <PageHero
                description="Insights, stories, and updates from my professional journey."
                title="Blog"
            />

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-4 md:px-8 max-w-none pt-8 md:pt-12 lg:pt-16">
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">
                            Media Appearances
                        </h2>
                        <p className="text-gray-600">
                            Media appearances and interviews
                        </p>
                    </div>

                    {externalBlogs.length === 0 ? (
                        <div className="text-gray-400 italic text-center py-12 bg-gray-50 rounded-lg">
                            <FileText
                                aria-hidden
                                className="w-12 h-12 mx-auto mb-4 opacity-50"
                            />
                            <p>No media appearances found.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {externalBlogs.map(blog => (
                                <article
                                    className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                                    key={blog.id}>
                                    {blog.media.url && (
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <Image
                                                alt={
                                                    blog.media.alt || blog.name
                                                }
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                height={200}
                                                src={blog.media.url}
                                                width={400}
                                            />
                                        </div>
                                    )}

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
                                                {blog.authors.join(', ')}
                                            </div>
                                            {blog.publisher && (
                                                <div>{blog.publisher}</div>
                                            )}
                                            {blog.date && (
                                                <div>
                                                    {new Date(
                                                        blog.date
                                                    ).toLocaleString('en-US', {
                                                        month: 'long',
                                                        year: 'numeric',
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        {blog.link && (
                                            <Link
                                                className="inline-flex items-center gap-2 text-hover font-semibold hover:underline text-sm mt-3 group/link"
                                                href={blog.link}
                                                target="_blank">
                                                READ MORE
                                                <ArrowRight
                                                    aria-hidden
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

                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">
                            Orianted Outlets
                        </h2>
                        <p className="text-gray-600">
                            Personal thoughts and insights
                        </p>
                    </div>

                    {personalBlogs.length === 0 ? (
                        <div className="text-gray-400 italic text-center py-12 bg-gray-50 rounded-lg">
                            <Newspaper
                                aria-hidden
                                className="w-12 h-12 mx-auto mb-4 opacity-50"
                            />
                            <p>No oriented outlets found.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {personalBlogs.map(blog => (
                                <article
                                    className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                                    key={blog.id}>
                                    {blog.media.url && (
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <Image
                                                alt={
                                                    blog.media.alt || blog.name
                                                }
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                height={200}
                                                src={blog.media.url}
                                                width={400}
                                            />
                                        </div>
                                    )}

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
                                                {blog.authors.join(', ')}
                                            </div>
                                            {blog.date && (
                                                <div>
                                                    {new Date(
                                                        blog.date
                                                    ).toLocaleString('en-US', {
                                                        month: 'long',
                                                        year: 'numeric',
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        <Link
                                            className="inline-flex items-center gap-2 text-hover font-semibold hover:underline text-sm mt-3 group/link"
                                            href={`/opinions/${blog.slug}`}>
                                            READ MORE
                                            <ArrowRight
                                                aria-hidden
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
    )
}

export default BlogPage
