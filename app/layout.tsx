import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Brand Agency (CBA) | Digital Marketing & Strategy Rajahmundry",
  description: "Creative Brand Agency (CBA) builds high-performing digital brands through Branding, Social Media, Website Design, SEO, Analytics, Content Creation, Paid Ads & Video Marketing in Rajahmundry.",
  keywords: [
    "Creative Brand Agency",
    "CBA Rajahmundry",
    "Digital Marketing Agency Rajahmundry",
    "Website Design Rajahmundry",
    "Branding Agency",
    "Social Media Marketing",
    "SEO Rajahmundry",
    "Paid Ads Marketing",
    "Video Marketing",
    "Content Creation"
  ],
  authors: [{ name: "Creative Brand Agency" }],
  openGraph: {
    title: "Creative Brand Agency (CBA) | Digital Marketing Solutions",
    description: "Grow your business by building brands in the digital world. Strategy • Creativity • Technology",
    url: "https://creativebrandagency.com",
    siteName: "Creative Brand Agency",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth dark`}>
      <body className="bg-[#111522] text-[#F4F2ED] font-sans antialiased selection:bg-[#4659B8] selection:text-white">
        {children}
      </body>
    </html>
  );
}


