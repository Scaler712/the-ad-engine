import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Ad Engine — AI-Powered Video Ads That Get Clients",
  description:
    "We produce scroll-stopping video ads for your business using AI — delivered in days, not weeks. You never step in front of a camera. You just get ads that work.",
  openGraph: {
    title: "The Ad Engine — AI-Powered Video Ads That Get Clients",
    description:
      "Scroll-stopping AI video ads delivered in days. No camera needed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
