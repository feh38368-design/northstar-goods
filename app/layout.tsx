import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Northstar Goods — Everyday, considered.', description: 'A concept storefront for thoughtfully chosen objects for everyday living.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
