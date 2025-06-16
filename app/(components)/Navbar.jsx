import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <div className="container">
        <Link href={"/"} className="navbar-brand">
          <img src="/logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href={"/"}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/about"}>
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PROGRAMS
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    href={"/low_carb_high_performance"}
                  >
                    Low carb high perfomance crash course
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={"/reverse_type_2_diabetes"}
                  >
                    Reverse Type 2 Diabetes Program
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={"/12_week_lean"}>
                    12 Weeks Get Lean Program
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/consultation"}>
                CONSULTATION
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/blogs"}>
                BLOGS & VIDEOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/contact"}>
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              href="https://www.youtube.com/channel/UCfCc7lBhsV4ez2cIjXYJv6A"
              className="social-icon"
            >
              <span>
                <i className="bi bi-youtube"></i>
              </span>
            </Link>
            <Link
              href="https://www.instagram.com/theshehrozalam"
              className="social-icon"
            >
              <span>
                <i className="bi bi-instagram"></i>
              </span>
            </Link>
            <Link href="https://x.com/theshehrozalam" className="social-icon">
              <span>
                <i className="bi bi-twitter"></i>
              </span>
            </Link>
            <Link
              href="https://www.facebook.com/theshehrozalam"
              className="social-icon"
            >
              <span>
                <i className="bi bi-facebook"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
