import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Bootstrap" width="300" height="60" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONSULTATION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOGS & VIDEOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
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
                <i class="bi bi-instagram"></i>
              </span>
            </Link>
            <Link href="https://x.com/theshehrozalam" className="social-icon">
              <span>
                <i class="bi bi-twitter"></i>
              </span>
            </Link>
            <Link
              href="https://www.facebook.com/theshehrozalam"
              className="social-icon"
            >
              <span>
                <i class="bi bi-facebook"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
