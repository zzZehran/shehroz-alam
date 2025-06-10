import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="custom-footer mt-5">
        <div className="container">
          <div className="row g-5">
            {/* Brand and Bio Section */}
            <div className="col-lg-5 col-md-12">
              <div className="footer-brand-section">
                {/* Logo Placeholder */}
                <div className="d-flex align-items-center mb-4">
                  <div className="brand-logo">
                    <img src="/logo.png" alt="" />
                  </div>
                </div>

                <p className="bio-text mb-4">
                  As you know by now, my name is Shehroz Alam. Proud Kashmiri
                  born in a family of enterpreneurs, father to the best cat in
                  the world. A Commerce graduate, turned Fitness Coach, a
                  Nutritionist and a Business Owner.
                </p>

                {/* Social Media Links */}
                <div className="social-section">
                  <h4 className="social-title">FOLLOW US</h4>
                  <div className="d-flex gap-3">
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
                    <Link
                      href="https://x.com/theshehrozalam"
                      className="social-icon"
                    >
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
            </div>

            {/* Navigation Links */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-nav-section">
                <h3 className="section-title">MORE</h3>
                <nav className="footer-nav">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                  <Link href="/privacy" className="nav-link">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="nav-link">
                    Terms & Conditions
                  </Link>
                </nav>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-contact-section">
                <h3 className="section-title">GET INFO</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div className="contact-details">
                      <p className="contact-label">Phone:</p>
                      <p className="contact-value">(+91) 9910772367</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div className="contact-details">
                      <p className="contact-label">Email:</p>
                      <p className="contact-value">info@shehrozalam.com</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div className="contact-details">
                      <p className="contact-label">Address</p>
                      <p className="contact-value">
                        New Friends Colony, Delhi-
                        <br />
                        IND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="row">
            <div className="col-12">
              <div className="copyright-section">
                <p className="copyright-text">
                  Copyright ©2025 All rights reserved | Powered By
                  <Link href="#" className="copyright-link ms-1">
                    Zehran
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
