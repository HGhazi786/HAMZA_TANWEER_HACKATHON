import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/products/:path*",
    "/api/cart/:path*",
    "/cart",
    "/contact",
    "/about",
  ],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/studio/:path*"
  ],
};
