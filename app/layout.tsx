import { OG_IMAGE } from "@/lib/og-image";
import type { Metadata } from "next";
import Footer from "@/app/_components/footer";
import ScrollToTopButton from "@/app/_components/scroll-to-top-button";
import Header from "@/app/_components/header";

import { Raleway, Rancho } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const rancho = Rancho({
  subsets: ["latin"],
  variable: "--font-rancho",
  display: "swap",
  weight: "400",
});

const CDN = "https://yasinrofcanin.fra1.cdn.digitaloceanspaces.com";

// A static export cannot mint nonces and Next inlines its bootstrap scripts,
// hence 'unsafe-inline'. Every other origin is listed: the image CDN, YouTube
// thumbnails and the no-cookie player behind the video facade, the Elfsight
// LinkedIn feed on /keynote-talks, and the Web Analytics beacon Cloudflare
// injects at the edge. Headers a meta tag cannot
// carry (HSTS, frame-ancestors, nosniff) belong to the proxy.
const ELFSIGHT = "https://*.elfsight.com https://*.elfsightcdn.com";

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com ${ELFSIGHT}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: ${CDN} https://i.ytimg.com https://media.licdn.com ${ELFSIGHT}`,
  `media-src 'self' ${CDN}`,
  `font-src 'self' ${ELFSIGHT}`,
  `connect-src 'self' https://cloudflareinsights.com ${ELFSIGHT}`,
  "frame-src https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

export const metadata: Metadata = {
  title: {
    default: "Yasin Rofcanin - Professor of Organisational Behaviour",
    template: "%s | Yasin Rofcanin",
  },
  description:
    "Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment. Published in leading journals.",
  keywords: [
    "Yasin Rofcanin",
    "Organisational Behaviour",
    "University of Bath",
    "Flexible Work Practices",
    "Work-Family Enrichment",
    "Employee Behaviour",
    "Research",
    "Academic",
    "Professor",
  ],
  authors: [{ name: "Yasin Rofcanin" }],
  creator: "Yasin Rofcanin",
  publisher: "Yasin Rofcanin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Was pointed at the apex, which made every page canonicalise to a
  // yasinrofcanin.com URL that returns 404 — the apex is a single-page site and
  // has no /about-me, /publications or /contact.
  referrer: "strict-origin-when-cross-origin",
  metadataBase: new URL("https://beta.yasinrofcanin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [OG_IMAGE],
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Yasin Rofcanin - Professor of Organisational Behaviour",
    description:
      "Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment.",
    siteName: "Yasin Rofcanin",
  },
  twitter: {
    images: [OG_IMAGE.url],
    card: "summary_large_image",
    title: "Yasin Rofcanin - Professor of Organisational Behaviour",
    description:
      "Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment.",
  },
  // This is the beta and it must stay out of search results: it is a
  // near-duplicate of yasinrofcanin.com and would compete with it for the same
  // queries.
  //
  // Crawling is deliberately still allowed in robots.txt — a Disallow there
  // would stop Google from ever reading this tag, and it could go on indexing
  // the URLs from external links with no content at all.
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <meta
            httpEquiv="Content-Security-Policy"
            content={CONTENT_SECURITY_POLICY}
          />
        )}
      </head>
      <body className={`${raleway.variable} ${rancho.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
