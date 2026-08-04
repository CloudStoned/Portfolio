import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScroll from './components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'thecloudstack — AI Automation Specialist',
  description: 'Custom automation systems for small businesses and startups. I take the manual, repetitive work off your plate so your team can move faster without hiring more — get a free automation audit.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#F9F9F7] text-[#1A1A1A] antialiased" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

