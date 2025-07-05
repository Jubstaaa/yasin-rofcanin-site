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
  metadataBase: new URL("https://yasinrofcanin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yasinrofcanin.com",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
