import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value || '';

  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    verify(token, JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
}