import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';

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
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider forceColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
