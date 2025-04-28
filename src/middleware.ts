import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Create a matcher for public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)',
  '/api/test-db(.*)'
]);

export default clerkMiddleware((auth, req) => {
  // If the route is not public and the user is not signed in, protect it
  if (!isPublicRoute(req)) {
    // This uses the correct auth.protect() approach
    // The middleware will handle redirecting to sign-in or returning 401 for API routes
    auth.protect();
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)'
  ],
}; 