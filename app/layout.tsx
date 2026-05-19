import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import PostHogAnalytics from '../components/PostHogAnalytics';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Krayaa — Korea, Live.',
  description: 'Authentic K-beauty, K-pop merch, and Korean culture curated for India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden bg-[var(--color-bg-primary)] text-white antialiased selection:bg-[var(--color-accent-primary)] selection:text-white">
        <PostHogAnalytics />
        {children}
      </body>
    </html>
  );
}
