import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Handle /images requests
  if (request.nextUrl.pathname.startsWith('/images')) {
    const fetchDest = request.headers.get('Sec-Fetch-Dest');
    // Block direct browser navigation
    if (fetchDest === 'document' || fetchDest === 'iframe') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    // Let actual image/fetch requests pass through without intl processing
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/images/:path*', '/', '/(es|en)/:path*'],
};
