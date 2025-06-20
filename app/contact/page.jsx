"use client";
import Footer from "../(components)/Footer";
import Navbar from "../(components)/Navbar";
import Hero from "../(components)/Hero";
import styles from "./page.module.css";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function page() {
  const [state, handleSubmit] = useForm("mldnwlgw");
  console.log(state);
  return (
    <>
      <Navbar />
      <Hero title={"Contact"} navigation={"Contact"} />
      <div className="container my-5">
        <h1 className="text-center text-white mb-5">Contact Me</h1>
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-5 mb-4">
            <div
              className={`p-4 rounded ${styles.contact_info}`}
              style={{ backgroundColor: "#151515", color: "#fff" }}
            >
              <h3 className="mb-4">Get In Touch</h3>
              <p>
                <i className="bi bi-telephone-fill"></i>
                <strong>Phone:</strong> (+91) 9910772367
              </p>
              <p>
                <i className="bi bi-envelope-at-fill"></i>
                <strong>Email:</strong> info@shehrozalam.com
              </p>
              <p>
                <i className="bi bi-geo-alt-fill"></i> <strong>Address:</strong>{" "}
                New Friends Colony, Delhi-IND
              </p>

              <div className="mt-5">
                <h5>Follow Me</h5>
                <div className={`${styles.social_icon} d-flex gap-3`}>
                  <a
                    href="https://www.youtube.com/channel/UCfCc7lBhsV4ez2cIjXYJv6A"
                    className="text-white fs-4"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/theshehrozalam"
                    className="text-white fs-4"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://x.com/theshehrozalam"
                    className="text-white fs-4"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/theshehrozalam"
                    className="text-white fs-4"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`col-md-7 ${styles.contact_form}`}>
            <div className="p-4 rounded">
              <h3 className="mb-4">Get In Touch</h3>
              {state.submitting && (
                <div
                  className="alert alert-success d-flex justify-content-between"
                  role="alert"
                >
                  Loading...
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}
              <div>
                {state.errors && (
                  <div
                    className="alert alert-danger d-flex justify-content-between"
                    role="alert"
                  >
                    {/* Message sent successfully! */}
                    {state.errors.kind.toUpperCase()}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}
              </div>
              {state.succeeded && (
                <div
                  className="alert alert-success d-flex justify-content-between"
                  role="alert"
                >
                  {/* Message sent successfully! */}
                  {state.result.kind.toUpperCase()}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>{" "}
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.submit_btn} btn px-4 py-2`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
