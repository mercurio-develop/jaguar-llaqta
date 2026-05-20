import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Enforce HTTPS and non-www
  const url = request.nextUrl.clone();
  let hostname = request.headers.get('host') || '';
  let protocol = request.headers.get('x-forwarded-proto') || url.protocol;

  if (!hostname.includes('localhost') && !hostname.includes('127.0.0.1')) {
    let shouldRedirect = false;

    if (hostname.startsWith('www.')) {
      hostname = hostname.replace('www.', '');
      shouldRedirect = true;
    }

    // Force https
    if (protocol === 'http' || protocol === 'http:') {
      protocol = 'https:';
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      url.hostname = hostname;
      url.protocol = 'https:';
      return NextResponse.redirect(url, 301);
    }
  }

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
