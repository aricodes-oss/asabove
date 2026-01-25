import ScrollToTop from '@/components/ScrollToTop';
import SpaceBackground from '@/components/SpaceBackground';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Gaegu } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import Providers from './providers';
import theme from './theme';

const gaegu = Gaegu({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'As Above',
  description: 'Shoegaze band from Portland, OR',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          defer
          data-domain="asabovesound.com"
          src="https://plausible.aricodes.net/js/script.outbound-links.js"
        />
        <Script defer src="/mailerlite.js" />
        <ColorSchemeScript />
      </head>
      <body className={gaegu.className}>
        <MantineProvider forceColorScheme="dark" theme={theme}>
          <Providers>
            <SpaceBackground clouds={false}>
              <Suspense fallback={null}>{children}</Suspense>
            </SpaceBackground>
          </Providers>
          <ScrollToTop />
        </MantineProvider>
      </body>
    </html>
  );
}
