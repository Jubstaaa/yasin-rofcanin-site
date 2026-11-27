import type { Metadata } from 'next'

import { Raleway, Rancho } from 'next/font/google'

import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import ScrollToTopButton from '@/app/_components/scroll-to-top-button'
import { OG_IMAGE } from '@/lib/og-image'

import './globals.css'

const raleway = Raleway({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-raleway',
})

const rancho = Rancho({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-rancho',
    weight: '400',
})

const CDN = 'https://yasinrofcanin.fra1.cdn.digitaloceanspaces.com'

const ELFSIGHT = 'https://*.elfsight.com https://*.elfsightcdn.com'

const CONTENT_SECURITY_POLICY = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com ${ELFSIGHT}`,
    "style-src 'self' 'unsafe-inline'",
    `img-src 'self' data: ${CDN} https://i.ytimg.com https://media.licdn.com ${ELFSIGHT}`,
    `media-src 'self' ${CDN}`,
    `font-src 'self' ${ELFSIGHT}`,
    `connect-src 'self' https://cloudflareinsights.com ${ELFSIGHT}`,
    'frame-src https://www.youtube-nocookie.com',
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests',
].join('; ')

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
    authors: [{ name: 'Yasin Rofcanin' }],
    creator: 'Yasin Rofcanin',
    description:
        'Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment. Published in leading journals.',
    formatDetection: {
        address: false,
        email: false,
        telephone: false,
    },
    keywords: [
        'Yasin Rofcanin',
        'Organisational Behaviour',
        'University of Bath',
        'Flexible Work Practices',
        'Work-Family Enrichment',
        'Employee Behaviour',
        'Research',
        'Academic',
        'Professor',
    ],
    metadataBase: new URL('https://beta.yasinrofcanin.com'),

    openGraph: {
        description:
            'Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment.',
        images: [OG_IMAGE],
        locale: 'en_US',
        siteName: 'Yasin Rofcanin',
        title: 'Yasin Rofcanin - Professor of Organisational Behaviour',
        type: 'website',
        url: '/',
    },
    publisher: 'Yasin Rofcanin',
    referrer: 'strict-origin-when-cross-origin',
    robots: {
        follow: false,
        googleBot: {
            follow: false,
            index: false,
        },
        index: false,
    },
    title: {
        default: 'Yasin Rofcanin - Professor of Organisational Behaviour',
        template: '%s | Yasin Rofcanin',
    },

    twitter: {
        card: 'summary_large_image',
        description:
            'Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment.',
        images: [OG_IMAGE.url],
        title: 'Yasin Rofcanin - Professor of Organisational Behaviour',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                {process.env.NODE_ENV === 'production' && (
                    <meta
                        content={CONTENT_SECURITY_POLICY}
                        httpEquiv="Content-Security-Policy"
                    />
                )}
            </head>
            <body
                className={`${raleway.variable} ${rancho.variable} antialiased`}>
                <a
                    className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:shadow"
                    href="#main">
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
                <Footer />
                <ScrollToTopButton />
            </body>
        </html>
    )
}
