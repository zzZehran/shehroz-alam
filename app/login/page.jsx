// "use client";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function page() {
  return (
    <>
      <LoginLink>Sign in</LoginLink>;<RegisterLink>Sign up</RegisterLink>;
      <LogoutLink>Logout</LogoutLink>
    </>
  );
}
