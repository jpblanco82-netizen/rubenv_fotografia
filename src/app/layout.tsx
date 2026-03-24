import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rubén Vela Fotografía - Paisaje y Nocturna',
  description: 'Portfolio profesional de Rubén Vela. Especialista en fotografía de paisaje, nocturna y aérea. 20 años explorando cumbres, 8 años capturando su luz.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans bg-zinc-950 text-zinc-100 antialiased selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
