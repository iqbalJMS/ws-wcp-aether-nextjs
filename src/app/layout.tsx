import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { Providers } from './provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Home BRI - Melayani setulus hati',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const envValues = {
    drupalUrl:
      process.env.DRUPAL_ENDPOINT ||
      process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT ||
      '',
    baseUrl: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || '',
    pathUrl: process.env.PATH_URL || process.env.NEXT_PUBLIC_PATH_URL || '',
  };

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers valueEnvContext={envValues}>
          <div className="overflow-x-hidden">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
