import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';

// import 'normalize.css';

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
    <html lang="en" data-bs-theme="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
