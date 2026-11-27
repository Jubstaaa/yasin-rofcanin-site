import type { Metadata } from 'next'

import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import AnimatedText from '@/app/_components/animated-text'
import ContentIcon from '@/app/_components/content-icon'
import PageHero from '@/app/_components/page-hero'
import { profile, socials } from '@/lib/content'
import { OG_IMAGE } from '@/lib/og-image'

export const metadata: Metadata = {
    alternates: {
        canonical: '/contact',
    },
    description:
        'Get in touch with Yasin Rofcanin, Professor of Organisational Behaviour at University of Bath. Contact for research collaborations, speaking engagements, or academic inquiries.',
    keywords: [
        'Contact Yasin Rofcanin',
        'University of Bath Contact',
        'Academic Contact',
        'Research Collaboration',
        'Speaking Engagements',
        'Organisational Behaviour Professor',
        'Academic Inquiries',
    ],
    openGraph: {
        description:
            'Get in touch with Yasin Rofcanin for research collaborations, speaking engagements, or academic inquiries.',
        images: [OG_IMAGE],
        title: 'Contact - Yasin Rofcanin',
        url: '/contact',
    },
    title: 'Contact',
}

function page() {
    const user = profile

    return (
        <>
            <PageHero
                description="Get in touch"
                imageUrl="/images/contact_page_title.jpg"
                title="Contact"
            />

            <AnimatedText
                className="text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] text-[#f1f1f1] font-extrabold text-center -mb-20 md:-mb-28 lg:-mb-40"
                text="TOUCH"
            />
            <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start">
                <div className="w-full lg:flex-1 flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-full md:max-w-[320px] lg:max-w-[350px] h-auto">
                        <Image
                            alt="Contact Visual"
                            className="rounded-lg object-cover w-full h-auto"
                            height={350}
                            src="/images/contact-books.jpg"
                            width={350}
                        />

                        <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 w-full lg:w-[280px] xl:w-[320px] rounded-xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 z-0">
                                <Image
                                    alt="Media Background"
                                    className="object-cover"
                                    fill
                                    src="/images/bg-media.jpg"
                                />
                            </div>
                            <div className="relative z-10 text-white p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-5 lg:gap-6">
                                <div>
                                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                                        <Mail
                                            aria-hidden
                                            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                                        />
                                        <span className="font-semibold text-base md:text-lg">
                                            Email
                                        </span>
                                    </div>
                                    <Link
                                        className="text-sm md:text-base underline break-all"
                                        href={`mailto:${user.email}`}>
                                        {user.email}
                                    </Link>
                                </div>
                                <div className="flex gap-3 md:gap-4 mt-2 md:mt-3">
                                    {socials.map(social => (
                                        <Link
                                            href={social.link}
                                            key={social.id}
                                            target="_blank">
                                            <ContentIcon
                                                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                                                name={social.icon}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Get <span className="text-hover">in touch</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
                        Got a question or just want to say hi? Email is the
                        quickest way to reach me.
                    </p>
                    <Link
                        className="inline-flex items-center gap-2 md:gap-3 rounded-lg bg-hover px-5 md:px-6 py-3 text-white text-sm md:text-base"
                        href={`mailto:${user.email}`}>
                        <Mail aria-hidden className="w-5 h-5 md:w-6 md:h-6" />
                        {user.email}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default page
