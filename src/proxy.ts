import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas que NO necesitan estar logueado
const PUBLIC_ROUTES = ['/', '/auth/login', '/auth/register'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Buscamos la cookie httpOnly que pone NestJS al hacer login
  const token = request.cookies.get('access_token');
  const isAuthenticated = !!token;

  // Ya logueado intentando entrar al login/register → lo mandamos al home
  if (isAuthenticated && PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Sin token intentando entrar a ruta privada → lo mandamos al login
  if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

// Solo vigilamos las rutas de la app, no archivos estáticos ni imágenes
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)).*)',
  ],
};
