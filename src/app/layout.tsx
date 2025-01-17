import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import PageHeader from '~/components/PageHeader/PageHeader';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home Sweet Home',
  description: 'A simple app to help you find your dream home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PageHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
