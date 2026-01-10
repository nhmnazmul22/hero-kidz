import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const protectedRoutes = ["/carts", "/checkout"];

export async function proxy(request) {
  const token = await getToken({ req: request });
  const isAuthenticated = Boolean(token);
  const reqUrl = request.nextUrl.pathname;
  const isPrivateRoute = protectedRoutes.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!isAuthenticated && isPrivateRoute) {
    return NextResponse.redirect(
      new URL(`/login?callBackUrl=${reqUrl}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/carts/:path*", "/checkout/:path*"],
};
