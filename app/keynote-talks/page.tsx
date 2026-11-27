import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

import Invite from '@/app/_components/invite'
import PageHero from '@/app/_components/page-hero'
import { inviteImages, keynoteTalks } from '@/lib/content'

export default function KeynoteTalksPage() {
    const talks = keynoteTalks

    return (
        <>
            <PageHero
                description="Invited keynote speeches and talks at conferences, universities, and organizations."
                title="Keynote Talks"
            />

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-4 md:px-8 max-w-none">
                <div className="flex-1 flex flex-col gap-6 md:gap-8 py-8 md:py-12 lg:py-16 justify-between">
                    {talks.length === 0 ? (
                        <div className="text-gray-400 italic text-center text-sm md:text-base">
                            No keynote talks found.
                        </div>
                    ) : (
                        talks.map(talk => (
                            <div
                                className="bg-white rounded-xl p-5 md:p-6 lg:p-8 flex flex-col gap-3 md:gap-4 shadow-sm"
                                key={talk.id}>
                                <div className="flex flex-col gap-3 md:gap-2">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold">
                                            {talk.name}
                                        </h2>
                                        <div className="text-gray-500 text-base md:text-lg">
                                            {talk.location}
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-400 mt-1">
                                            {new Date(
                                                talk.date
                                            ).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </div>
                                    </div>
                                    {talk.link && (
                                        <Link
                                            className="text-hover font-semibold text-sm md:text-base flex items-center gap-2 hover:underline w-fit"
                                            href={talk.link}
                                            target="_blank">
                                            View Details{' '}
                                            <ArrowRight
                                                aria-hidden
                                                className="w-4 h-4 md:w-5 md:h-5"
                                            />
                                        </Link>
                                    )}
                                </div>
                                <div className="text-gray-700 text-sm md:text-base">
                                    {talk.description}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="w-full flex-shrink-0 py-8 md:py-12 lg:py-16 flex justify-center items-start">
                    <div
                        className="elfsight-app-d4c74095-ecdd-422a-b654-85a46fa4a837 w-full"
                        data-elfsight-app-lazy></div>
                </div>
            </div>
            <Invite
                href="/contact"
                images={inviteImages.map(item => ({
                    alt: item.media.alt,
                    src: item.media.url,
                }))}
            />

            <Script
                src="https://static.elfsight.com/platform/platform.js"
                strategy="lazyOnload"
            />
        </>
    )
}
