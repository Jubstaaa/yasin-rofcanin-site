import type { Metadata } from 'next'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

import PageHero from '@/app/_components/page-hero'
import RichText from '@/app/_components/rich-text'
import { blogs } from '@/lib/content'
import { OG_IMAGE } from '@/lib/og-image'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params

    const blog = blogs.find(
        post => post.slug === slug && post.type === 'personal'
    )

    if (!blog) {
        return {
            description: 'The requested blog post could not be found.',
            title: 'Blog Post Not Found',
        }
    }

    const description =
        blog.description ||
        `Read ${blog.name} by ${blog.authors.join(', ')} on Yasin Rofcanin's blog.`

    return {
        alternates: {
            canonical: `/opinions/${slug}`,
        },
        authors: blog.authors.map(author => ({ name: author })),
        description,
        keywords: [
            blog.name,
            ...blog.authors,
            'Yasin Rofcanin',
            'Blog',
            'Organisational Behaviour',
            'Academic Research',
        ],
        openGraph: {
            authors: blog.authors,
            description,
            images: blog.media.url
                ? [{ alt: blog.media.alt || blog.name, url: blog.media.url }]
                : [OG_IMAGE],
            publishedTime: blog.date?.toISOString(),
            title: blog.name,
            type: 'article',
            url: `/opinions/${slug}`,
        },
        title: blog.name,
        twitter: {
            card: 'summary_large_image',
            description,
            images: [blog.media.url],
            title: blog.name,
        },
    }
}

export function generateStaticParams() {
    const posts = blogs.filter(blog => blog.type === 'personal')
    return posts
        .filter(post => post.slug)
        .map(post => ({ slug: String(post.slug) }))
}

async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const blog = blogs.find(
        post => post.slug === slug && post.type === 'personal'
    )

    if (!blog) {
        notFound()
    }

    return (
        <>
            <PageHero
                description={blog.description || ''}
                imageUrl={blog.media.url}
                title={blog.name}
            />

            <div className="container mx-auto py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                            <span>{blog.authors.join(', ')}</span>
                            {blog.date && (
                                <>
                                    <span>•</span>
                                    <span>
                                        {new Date(blog.date).toLocaleString(
                                            'en-US',
                                            {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            }
                                        )}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {blog.contentHtml && (
                        <div className="prose prose-lg max-w-none">
                            <RichText html={blog.contentHtml} />
                        </div>
                    )}

                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <Link
                            className="inline-flex items-center gap-2 text-hover font-semibold hover:underline"
                            href="/opinions">
                            <ArrowLeft aria-hidden className="w-4 h-4" />
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetailPage
