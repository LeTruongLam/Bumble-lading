import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/dashboard"];
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken");
  // check private path
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  // dang nhap roi thif khong cho vaof login va register
  //   if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
  //     return NextResponse.redirect(new URL("/dashboard", request.url));
  //   }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/sign-in", "/sign-up"],
};
