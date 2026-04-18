import type { Metadata } from 'next';
import { siteConfig, currentUrl } from '@/lib/site.config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(currentUrl),
  title: {
    default: `${siteConfig.name} — Data & AI consulting on Databricks`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Data & AI consulting on Databricks. We solve the most critical data, ML and generative AI problems for global teams.',
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    images: [{ url: '/brand/og-1200x630.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/brand/og-1200x630.webp'],
  },
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      'es-CL': '/',
      'en': '/en/',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
