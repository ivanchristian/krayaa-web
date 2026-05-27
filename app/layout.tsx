import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import PostHogAnalytics from '../components/PostHogAnalytics';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://krayaa.shop'),
  title: 'Krayaa — Korea, Live.',
  description: 'Authentic K-beauty, K-pop merch, and Korean culture curated for India.',
  openGraph: {
    title: 'Krayaa — Korea, Live.',
    description: 'Authentic K-beauty, K-pop merch, and Korean culture curated for India.',
    url: 'https://krayaa.shop',
    siteName: 'Krayaa',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krayaa — Korea, Live.',
    description: 'Authentic K-beauty, K-pop merch, and Korean culture curated for India.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden bg-[var(--color-bg-primary)] text-white antialiased selection:bg-[var(--color-accent-primary)] selection:text-white">
        <PostHogAnalytics />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
