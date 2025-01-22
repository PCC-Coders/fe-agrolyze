import {NextResponse} from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  const token = request.cookies.get("token");

  if (
    !token &&
    (url.pathname.startsWith("/profile") ||
      url.pathname.startsWith("/riwayat") ||
      url.pathname.startsWith("/bookmark"))
  ) {
    return NextResponse.redirect(new URL("/masuk", request.url));
  }

  if (token && (url.pathname === "/masuk" || url.pathname === "/daftar")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/riwayat/:path*",
    "/bookmark/:path*",
    "/masuk",
    "/daftar",
  ],
};
