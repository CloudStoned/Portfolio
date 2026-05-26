import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScroll from './components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Cloud Neo Bagtas — AI Automation Specialist',
  description: 'Portfolio of Cloud Neo Bagtas, AI Automation Specialist. Helping small businesses and startups automate their entire workflow and build AI agents.',
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

