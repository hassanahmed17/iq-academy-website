import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Cinzel, Cinzel_Decorative } from "next/font/google";
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

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://iqacademy.in"),
  title: "IQ Academy of Excellence | Best Polytechnic & Diploma Coaching in Hyderabad",
  description:
    "IQ Academy of Excellence is Hyderabad's premier coaching institute for Polytechnic & Diploma Engineering (CSE, ECE, EEE, ME, CE, AI/ML), POLYCET, and ECET entrance preparation.",
  icons: {
    icon: [
      { url: "/images/iqloader-logo.png", type: "image/png" },
    ],
    shortcut: "/images/iqloader-logo.png",
    apple: "/images/iqloader-logo.png",
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
        url: "/images/iqloader-logo.png",
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
      className={`${inter.variable} ${plusJakarta.variable} ${cinzel.variable} ${cinzelDecorative.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="icon" href="/images/iqloader-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/iqloader-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/iqloader-logo.png" />
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
