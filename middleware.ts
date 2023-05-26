import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get('token')?.value;

  if (!cookie && request.nextUrl.pathname != '/') { 
    return NextResponse.redirect(new URL('/', request.url));
  }

  let isValid = await fetch(process.env.API_URL + '/auth/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: cookie }),
  });

  console.log(isValid.ok);

  if (!isValid.ok && request.nextUrl.pathname != '/') { 
    let response = NextResponse.next();
    response.cookies.delete('token');
    response.headers.set('Location', process.env.APP_URL + '/');
    return response;
  }

  if (request.nextUrl.pathname == '/' && isValid.ok) {
    return NextResponse.redirect(new URL('/painel', request.url));
  }
}

export const config = {
  matcher: ['/','/painel/:path*'],
}