import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-playfair',
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
      <body className={`${montserrat.variable} ${playfair.variable} font-sans bg-zinc-950 text-zinc-100 antialiased selection:bg-white selection:text-black overflow-x-hidden w-full`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG' && !window.location.pathname.startsWith('/admin')) {
                  e.preventDefault();
                }
              }, false);
              document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG' && !window.location.pathname.startsWith('/admin')) {
                  e.preventDefault();
                }
              }, false);
            `,
          }}
        />
      </body>
    </html>
  );
}
