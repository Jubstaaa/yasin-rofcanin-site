import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Yasin Rofcanin ",
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
