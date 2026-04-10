import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import IterationSwitcher from "@/components/IterationSwitcher";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cafe Maruja — A Quiet Hour on White Beach",
  description:
    "An editorial cafe at Station 3 of Boracay's White Beach. Slow brunch, considered cocktails, and the kind of golden hour you remember.",
  keywords: [
    "Boracay cafe",
    "Boracay brunch",
    "Station 3 Boracay",
    "Casa Pilar",
    "White Beach Boracay",
    "editorial cafe Boracay",
  ],
  openGraph: {
    title: "Cafe Maruja — A Quiet Hour on White Beach",
    description:
      "An editorial cafe at Station 3 of Boracay's White Beach. Slow brunch, considered cocktails, golden hour.",
    type: "website",
    locale: "en_PH",
    siteName: "Cafe Maruja",
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
      className={`${body.variable} ${heading.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-ink">
        <IterationSwitcher />
        {children}
      </body>
    </html>
  );
}
