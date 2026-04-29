import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: '¿Tienes algún proyecto en mente o quieres adquirir una impresión? Contacta con Rubén Vela para consultas sobre fotografía de paisaje y talleres.',
  keywords: ['contacto Rubén Vela', 'contratar fotógrafo', 'comprar fotos paisaje', 'fotógrafo Valladolid'],
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
