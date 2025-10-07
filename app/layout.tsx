import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://portfolio.kasunjayasinghe.com"),
  title: {
    default: "Kasun Jayasinghe — Portfolio",
    template: "%s — Kasun Jayasinghe",
  },
  description:
    "Results-oriented Full Stack Developer (Java/Spring Boot, React/Angular). Nearly 2 years experience building secure, scalable systems.",
  keywords: [
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "Angular",
    "Microservices",
    "Next.js",
    "TypeScript",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kasun Jayasinghe — Portfolio",
    description:
      "Full Stack Developer — Java, Spring Boot, React, Angular. Secure microservices and scalable UIs.",
    url: "https://portfolio.kasunjayasinghe.com",
    siteName: "Kasun Jayasinghe — Portfolio",
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
  twitter: {
    card: "summary_large_image",
    title: "Kasun Jayasinghe — Portfolio",
    description:
      "Full Stack Developer — Java, Spring Boot, React, Angular. Secure microservices and scalable UIs.",
    images: ["/vercel.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  viewportFit: "cover",
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
