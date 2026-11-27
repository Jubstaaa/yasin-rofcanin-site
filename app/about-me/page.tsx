import type { Metadata } from 'next'

import React from 'react'

import Hero from '@/app/about-me/_components/hero'
import Teachings from '@/app/about-me/_components/teachings'
import Visitings from '@/app/about-me/_components/visitings'
import { OG_IMAGE } from '@/lib/og-image'

export const metadata: Metadata = {
    alternates: {
        canonical: '/about-me',
    },
    description:
        'Learn more about Yasin Rofcanin, Professor of Organisational Behaviour at University of Bath. Research interests in flexible work practices, employee behaviours, and work-family enrichment.',
    keywords: [
        'Yasin Rofcanin About',
        'Professor Organisational Behaviour',
        'University of Bath',
        'Academic Background',
        'Research Interests',
        'Flexible Work Practices',
        'Work-Family Enrichment',
        'Employee Behaviour',
    ],
    openGraph: {
        description:
            'Learn more about Yasin Rofcanin, Professor of Organisational Behaviour at University of Bath.',
        images: [OG_IMAGE],
        title: 'About Me - Yasin Rofcanin',
        url: '/about-me',
    },
    title: 'About Me',
}

function page() {
    return (
        <>
            <Hero />
            <Visitings />
            <Teachings />
        </>
    )
}

export default page
