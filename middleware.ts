import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// You can have some public routes where you want to skip the authentication like landing page etc
// export default authMiddleware({
//   publicRoutes: ["/", "/contact"]
// });
export default authMiddleware({
  publicRoutes: ["/api/uploadThing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
