import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'rubenvela_portfolio_secret_key_2026_03_28'
);
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Jpbl@nco82!';

    const isMatch = password === ADMIN_PASSWORD;
    console.log(`[Login API] Intento de login. ¿Coincide?: ${isMatch}`);

    if (isMatch) {
      const token = await new jose.SignJWT({ role: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(JWT_SECRET);

      console.log(`[Login API] JWT generado con éxito.`);
      const response = NextResponse.json({ success: true }, { status: 200 });
      
      response.cookies.set('adminToken', token, {
        httpOnly: true,
        secure: true, // Forzamos secure en produccion/vercel
        sameSite: 'lax', // Cambiamos de strict a lax para evitar problemas de bloqueo en redirecciones
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      console.log(`[Login API] Cookie enviada.`);
      return response;
    }

    console.log(`[Login API] Credenciales inválidas.`);
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  } catch (error: any) {
    console.error(`[Login API] Error crítico:`, error.message);
    return NextResponse.json({ error: 'Error en el servidor: ' + error.message }, { status: 500 });
  }
}
