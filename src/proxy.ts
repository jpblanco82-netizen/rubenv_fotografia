import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'rubenvela_portfolio_secret_key_2026_03_28'
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Solo protegemos las rutas que empiezan por /admin, excepto /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/api/admin/login') {
    const token = request.cookies.get('adminToken')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      await jose.jwtVerify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
