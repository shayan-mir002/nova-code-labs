import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaCode Labs – Web Development & Dashboard Experts",
  description:
    "NovaCode Labs builds high-performance websites, SaaS dashboards, admin panels, and custom web applications. Book a free consultation today.",
  keywords:
    "web development, SaaS dashboards, admin panels, custom web applications, React development, Next.js agency, NovaCode Labs",
  authors: [{ name: "NovaCode Labs" }],
  openGraph: {
    title: "NovaCode Labs – Web Development & Dashboard Experts",
    description:
      "High-performance websites, dashboards, and custom web applications that grow your business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaCode Labs – Web Development & Dashboard Experts",
    description: "We build websites and dashboards that grow your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#030712] text-white antialiased font-[Inter,sans-serif]">
        {children}
      </body>
    </html>
  );
}
