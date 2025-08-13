import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import Script from 'next/script';

import theme from './theme';

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
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider forceColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
