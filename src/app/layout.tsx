import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://iqacademy.in"),
  title: "IQ Academy of Excellence | Best Polytechnic & Diploma Coaching in Hyderabad",
  description:
    "IQ Academy of Excellence is Hyderabad's premier coaching institute for Polytechnic & Diploma Engineering (CSE, ECE, EEE, ME, CE, AI/ML), POLYCET, and ECET entrance preparation.",
  icons: {
    icon: [
      { url: "/images/iq-logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/iq-logo.png",
    apple: "/images/iq-logo.png",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  keywords: [
    "IQ Academy of Excellence",
    "Polytechnic Coaching Hyderabad",
    "Diploma Engineering Coaching",
    "ECET Coaching Hyderabad",
    "POLYCET Coaching",
    "Shah Ali Banda Coaching Classes",
    "Telangana SBTET Diploma C-24 C-26",
    "Best Engineering Diploma Institute",
    "Computer Science Diploma Coaching",
    "Electronics Engineering Classes",
  ],
  authors: [{ name: "IQ Academy of Excellence" }],
  creator: "IQ Academy of Excellence",
  publisher: "IQ Academy of Excellence",
  openGraph: {
    title: "IQ Academy of Excellence | Best Polytechnic & Diploma Coaching in Hyderabad",
    description:
      "Empowering Polytechnic & Diploma Engineering aspirants across Telangana with expert faculty, C-24/C-26 curriculum coaching, and top ECET/POLYCET rank preparation.",
    siteName: "IQ Academy of Excellence",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/iqae-crest.png",
        width: 512,
        height: 512,
        alt: "IQ Academy of Excellence Crest Emblem",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="icon" href="/images/iq-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/iq-logo.png" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body
        className="min-h-full bg-[#F6F4FE] text-[#1E1266] flex flex-col font-sans selection:bg-[#25176E] selection:text-white"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
