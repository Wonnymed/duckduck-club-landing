import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DuckDuck Club',
  description: 'Premium access landing page for DuckDuck Club',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
