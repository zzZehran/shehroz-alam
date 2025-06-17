import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.custom_footer} mt-5`}>
        <div className="container">
          <div className="row g-5">
            {/* Brand and Bio Section */}
            <div className="col-lg-5 col-md-12">
              <div className={styles.footer_brand_section}>
                <div className="d-flex align-items-center mb-4">
                  <div className={styles.brand_logo}>
                    <img src="/logo.png" alt="" />
                  </div>
                </div>

                <p className={`${styles.bio_text} mb-4`}>
                  As you know by now, my name is Shehroz Alam. Proud Kashmiri
                  born in a family of enterpreneurs, father to the best cat in
                  the world. A Commerce graduate, turned Fitness Coach, a
                  Nutritionist and a Business Owner.
                </p>

                {/* Social Media Links */}
                <div className={styles.social_section}>
                  <h4 className={styles.social_title}>FOLLOW US</h4>
                  <div className="d-flex gap-3">
                    <Link
                      href="https://www.youtube.com/channel/UCfCc7lBhsV4ez2cIjXYJv6A"
                      className={styles.social_icon}
                    >
                      <span>
                        <i className="bi bi-youtube"></i>
                      </span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/theshehrozalam"
                      className={styles.social_icon}
                    >
                      <span>
                        <i className="bi bi-instagram"></i>
                      </span>
                    </Link>
                    <Link
                      href="https://x.com/theshehrozalam"
                      className={styles.social_icon}
                    >
                      <span>
                        <i className="bi bi-twitter"></i>
                      </span>
                    </Link>
                    <Link
                      href="https://www.facebook.com/theshehrozalam"
                      className={styles.social_icon}
                    >
                      <span>
                        <i className="bi bi-facebook"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="col-lg-3 col-md-6">
              <div className={styles.footer_nav_section}>
                <h3 className={styles.section_title}>MORE</h3>
                <nav className={styles.footer_nav}>
                  <Link href="/" className={styles.nav_link}>
                    Home
                  </Link>
                  <Link href="/privacy" className={styles.nav_link}>
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className={styles.nav_link}>
                    Terms & Conditions
                  </Link>
                </nav>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4 col-md-6">
              <div className={styles.footer_contact_section}>
                <h3 className={styles.section_title}>GET INFO</h3>
                <div className={styles.contact_info}>
                  <div className={styles.contact_item}>
                    <span className={styles.contact_icon}>📞</span>
                    <div className={styles.contact_details}>
                      <p className={styles.contact_label}>Phone:</p>
                      <p className={styles.contact_value}>
                        <Link
                          href="tel:919910772367"
                          className="text-decoration-none text-white"
                        >
                          (+91) 9910772367
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className={styles.contact_item}>
                    <span className={styles.contact_icon}>✉️</span>
                    <div className={styles.contact_details}>
                      <p className={styles.contact_label}>Email:</p>
                      <p className={styles.contact_value}>
                        <Link
                          href="mailto:info@shehrozalam.com"
                          className="text-decoration-none text-white"
                        >
                          info@shehrozalam.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className={styles.contact_item}>
                    <span className={styles.contact_icon}>📍</span>
                    <div className={styles.contact_details}>
                      <p className={styles.contact_label}>Address</p>
                      <p className={styles.contact_value}>
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
              <div className={styles.copyright_section}>
                <p className={styles.copyright_text}>
                  Copyright ©2025 All rights reserved | Powered By
                  <Link href="#" className={`${styles.copyright_link} ms-1`}>
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
