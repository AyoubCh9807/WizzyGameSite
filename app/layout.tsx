import type {Metadata} from 'next';
import { Space_Grotesk, Inter, Silkscreen } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: 'OverTempo | Secure Your Core',
  description: 'The ultimate fast-paced multiplayer magical combat experience.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${silkscreen.variable}`}>
      <body suppressHydrationWarning className="bg-zinc-950 text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
