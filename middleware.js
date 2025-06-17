import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth({
  // Protect any routes that start with /studio
  protectedRoutes: ["/studio/"],
  loginPath: "/api/auth/login",
});

export const config = {
  matcher: ["/studio/:path*"],
};
