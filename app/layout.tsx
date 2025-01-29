import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Tabernacle of Grace Fellowship',
    template: '%s | Tabernacle of Grace Fellowship'
  },
  description: "Welcome to Tabernacle of Grace Fellowship - A place of worship, community, and spiritual growth.",
  keywords: ['church', 'christian', 'worship', 'community', 'fellowship', 'south africa'],
  authors: [{ name: 'Tabernacle of Grace Fellowship' }],
  creator: 'Tabernacle of Grace Fellowship',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.tgfchurch.com',
    siteName: 'Tabernacle of Grace Fellowship',
    title: 'Tabernacle of Grace Fellowship',
    description: 'A place of worship, community, and spiritual growth',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tabernacle of Grace Fellowship'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabernacle of Grace Fellowship',
    description: 'A place of worship, community, and spiritual growth',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
