// "use client";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function page() {
  const buttonStyle = {
    color: "black",
    backgroundColor: "white",
    padding: ".75rem 1.5rem",
    border: "none",
    borderRadius: "10px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    textDecoration: "none",
    display: "inline-block",
    width: "200px", // <-- fixed width for both buttons
    textAlign: "center", // center text inside the button
    fontSize: "1.2rem",
  };

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="d-flex flex-column align-items-center gap-3">
        <Link href={"/studio"} style={buttonStyle}>
          Studio
        </Link>
        <LoginLink style={buttonStyle}>Sign in</LoginLink>
        <LogoutLink style={buttonStyle}>Sign out</LogoutLink>
      </div>
    </div>
  );
}
