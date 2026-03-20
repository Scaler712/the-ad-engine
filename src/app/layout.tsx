import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Angle Ads — AI Video Ads That Get Clients",
  description:
    "We produce scroll-stopping video ads for your business using AI — delivered in days, not weeks. You never step in front of a camera.",
  openGraph: {
    title: "Angle Ads — AI Video Ads That Get Clients",
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
