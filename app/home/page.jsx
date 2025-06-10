import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Programs from "../components/Programs";
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Programs />
      <Newsletter />
      <About />
      <Testimonials />
    </>
  );
}
