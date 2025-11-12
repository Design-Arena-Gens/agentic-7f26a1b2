import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-7f26a1b2.vercel.app"),
  title: {
    default: "lumen — Modern Living Essentials",
    template: "%s · lumen",
  },
  description:
    "Discover lumen, a modern commerce experience blending tactile technology, sculptural lighting, and sustainable home essentials.",
  openGraph: {
    title: "lumen — Modern Living Essentials",
    description:
      "Experience curated objects for calm and considered living. Shop lighting, audio, and home tech built for modern spaces.",
    url: "https://agentic-7f26a1b2.vercel.app",
    siteName: "lumen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1616628188505-404b4be1524a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Modern interior with sculptural lighting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "lumen — Modern Living Essentials",
    description:
      "Curated home technology and lighting designed for mindful spaces.",
    images: [
      "https://images.unsplash.com/photo-1616628188505-404b4be1524a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
