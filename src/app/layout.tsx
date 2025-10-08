import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import WhatsappIcon from "@/assets/WhatsappIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industrial Corp - Excellence in Manufacturing Since 1969",
  description:
    "Global leader in industrial materials and manufacturing solutions. Serving customers worldwide with over 50 years of expertise in chemical solutions, equipment, and advanced materials.",
  openGraph: {
    title: "Industrial Corp - Excellence in Manufacturing Since 1969",
    description:
      "Global leader in industrial materials and manufacturing solutions. Serving customers worldwide with over 50 years of expertise.",
    type: "website",
    images: [
      "https://lovable.dev/opengraph-image-p98pqg.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  authors: [{ name: "Industrial Corp" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Link
          className="fixed bottom-4 right-4 flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white  shadow-lg p-2 rounded-full"
          href="https://wa.me/9746866962"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon/>
          Chat
        </Link>
      </body>
    </html>
  );
}
