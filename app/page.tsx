import type { Metadata } from 'next'

import React from 'react'

import About from '@/app/_components/home/about'
import EditorialRoles from '@/app/_components/home/editorial-roles'
import FutureOfWork from '@/app/_components/home/future-of-work'
import ImageSlider from '@/app/_components/home/image-slider'
import Media from '@/app/_components/home/media'
import Publications from '@/app/_components/home/publications'
import Invite from '@/app/_components/invite'
import { futureOfWorkImages, inviteImages, profile } from '@/lib/content'
import { OG_IMAGE } from '@/lib/og-image'

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
    description:
        "Welcome to Yasin Rofcanin's academic website. Professor of Organisational Behaviour at University of Bath, researching flexible work practices, employee behaviours, and work-family enrichment.",
    keywords: [
        'Yasin Rofcanin',
        'Home',
        'Organisational Behaviour',
        'University of Bath',
        'Academic Research',
        'Flexible Work',
        'Work-Family Balance',
    ],
    openGraph: {
        description:
            "Welcome to Yasin Rofcanin's academic website. Professor of Organisational Behaviour at University of Bath.",
        images: [OG_IMAGE],
        title: 'Yasin Rofcanin - Professor of Organisational Behaviour',
        url: '/',
    },
    title: 'Home',
}

function page() {
    const user = profile

    const scholarStats = {
        citations: user.scholarCitations || 0,
        hIndex: user.scholarHIndex || 0,
        i10Index: user.scholarI10Index || 0,
    }

    return (
        <>
            <ImageSlider
                user={{
                    firstName: user.firstName,
                    lastName: user.lastName,
                    titles: user.titles,
                }}
            />
            <About scholarStats={scholarStats} />
            <Publications />
            <EditorialRoles />
            <FutureOfWork
                images={futureOfWorkImages.map(item => ({
                    alt: item.media.alt,
                    src: item.media.url,
                }))}
            />
            <Invite
                href="/keynote-talks"
                images={inviteImages.map(item => ({
                    alt: item.media.alt,
                    src: item.media.url,
                }))}
            />

            <Media />
        </>
    )
}

export default page
