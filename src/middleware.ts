import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/products/:path*",
    "/cart",
    "/contact",
    "/about",
    "/api/webhooks"
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/api/cart/:path*", "/studio/:path*"],
};
