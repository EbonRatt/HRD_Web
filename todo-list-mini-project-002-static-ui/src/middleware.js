import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/", req.url));
    response.cookies.delete("next-auth.session-token");
    response.cookies.delete("next-auth.csrf-token");
    return response;
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/todopage", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
