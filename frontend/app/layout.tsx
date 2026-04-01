import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import VantaBackground from "@/components/VantaBackground";
import AppProviders from "@/components/AppProviders";
import ScrollRevealRoot from "@/components/ScrollRevealRoot";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bihar AI Mission - Empowering Bihar with Artificial Intelligence",
  description:
    "Bihar AI Mission educates citizens, students, and developers about Artificial Intelligence with categorized tools, guides, and prompt examples.",
  keywords:
    "Bihar, AI, Artificial Intelligence, Education, Tools, Prompt Engineering",
  authors: [{ name: "Bihar AI Mission" }],
  robots: "index, follow",
  openGraph: {
    title: "Bihar AI Mission",
    description:
      "Empowering Bihar with Artificial Intelligence",
    type: "website",
    url: "https://biharaimission.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ai-bg text-white font-inter overflow-x-hidden">
        <VantaBackground />
        <AppProviders>
          <Navbar />
          <ScrollRevealRoot />
          <main className="relative">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
