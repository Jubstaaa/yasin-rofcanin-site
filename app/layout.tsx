import { Raleway, Rancho } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${rancho.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
