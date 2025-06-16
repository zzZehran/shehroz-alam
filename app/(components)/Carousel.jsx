"use client";
import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-internval="1000">
          <div className="overlay-container">
            <h2>DAY ONE OR ONE DAY, YOU DECIDE</h2>
          </div>
          <img
            src="/carousel/img_1.jpg"
            className="d-block w-100"
            alt="shehroz on stage"
          />
        </div>
        <div className="carousel-item" data-bs-internval="1000">
          <div className="overlay-container mx-auto">
            <h2>PHYSICAL WEAKNESS IS A SYMPTOM OF MENTAL WEAKNESS</h2>
          </div>
          <img
            src="/carousel/img_2.jpg"
            className="d-block w-100"
            alt="shehroz training"
          />
        </div>
        <div className="carousel-item" data-bs-internval="1000">
          <div className="overlay-container">
            <h2>BUILD MODEL FIGURE WITH MASTER TRAINER SHEHROZ</h2>
          </div>
          <img
            src="/carousel/img_3.jpg"
            className="d-block w-100"
            alt="shehroz showing his physice"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
