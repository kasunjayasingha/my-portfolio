import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: "Your Name — Portfolio",
    template: "%s — Your Name",
  },
  description:
    "Futuristic, minimal portfolio — projects, skills, and contact. Built with Next.js.",
  keywords: [
    "Next.js",
    "Portfolio",
    "Frontend",
    "Developer",
    "Framer Motion",
    "Tailwind",
  ],
  openGraph: {
    title: "Your Name — Portfolio",
    description:
      "Futuristic, minimal portfolio — projects, skills, and contact.",
    url: "https://portfolio.example.com",
    siteName: "Your Name — Portfolio",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
