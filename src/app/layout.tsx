import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F1 Ultimate | Precision. Speed. Engineering.",
  description: "Experience the pinnacle of automotive engineering and racing excellence with F1 Ultimate. Explore aerodynamic mastery, power units, and kinetic physics.",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "F1 Ultimate | Precision. Speed. Engineering.",
    description: "Experience the pinnacle of automotive engineering and racing excellence with F1 Ultimate. Explore aerodynamic mastery, power units, and kinetic physics.",
    url: "https://f1-ultimate.com",
    siteName: "F1 Ultimate",
    images: [
      {
        url: "/favicon.jpg",
        width: 1200,
        height: 630,
        alt: "F1 Ultimate Car Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "F1 Ultimate | Precision. Speed. Engineering.",
    description: "Experience the pinnacle of automotive engineering and racing excellence with F1 Ultimate.",
    images: ["/favicon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-f1-red selection:text-white`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
