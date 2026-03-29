import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'rubenvela_portfolio_secret_key_2026_03_28'
);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Solo protegemos las rutas que empiezan por /admin, excepto /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/api/admin/login') {
    const token = request.cookies.get('adminToken')?.value;
    console.log(`[Proxy] Protegiendo: ${pathname}. Token presente: ${!!token}`);

    if (!token) {
      console.log(`[Proxy] Redirigiendo a login (sin token).`);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      await jose.jwtVerify(token, JWT_SECRET);
      console.log(`[Proxy] Token verificado con éxito.`);
      return NextResponse.next();
    } catch (e: any) {
      console.error(`[Proxy] Error de verificación JWT:`, e.message);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
