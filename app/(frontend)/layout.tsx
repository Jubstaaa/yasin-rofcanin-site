import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import Header from "./components/Header";

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
  metadataBase: new URL("https://beta.yasinrofcanin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Yasin Rofcanin - Professor of Organisational Behaviour",
    description:
      "Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment.",
    siteName: "Yasin Rofcanin",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yasin Rofcanin - Professor of Organisational Behaviour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasin Rofcanin - Professor of Organisational Behaviour",
    description:
      "Professor of Organisational Behaviour at University of Bath. Research on flexible work practices, proactive employee behaviours, and work-family enrichment.",
    images: ["/images/og-image.jpg"],
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
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
      <ScrollToTopButton />
    </>
  );
}
