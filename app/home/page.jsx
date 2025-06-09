import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Programs from "../components/Programs";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Programs />
      <Newsletter />
    </>
  );
}
