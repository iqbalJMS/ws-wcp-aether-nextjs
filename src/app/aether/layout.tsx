import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home - Bank BRI | Melayani Dengan Setulus Hati',
};

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
