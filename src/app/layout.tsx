import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-playfair',
  display: 'swap',
});

import { SEO_CONFIG } from '@/constants/seo';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SEO_CONFIG.baseUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: ['/images/hero.jpg'],
    creator: SEO_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': SEO_CONFIG.geo.region,
    'geo.placename': SEO_CONFIG.geo.placename,
    'geo.position': SEO_CONFIG.geo.position,
    'ICBM': SEO_CONFIG.geo.position,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans bg-zinc-950 text-zinc-100 antialiased selection:bg-white selection:text-black overflow-x-hidden w-full`}>
        <StructuredData />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG' && !window.location.pathname.startsWith('/admin')) {
                  e.preventDefault();
                }
              }, false);
              document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG' && !window.location.pathname.startsWith('/admin')) {
                  e.preventDefault();
                }
              }, false);
            `,
          }}
        />
      </body>
    </html>
  );
}
