import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Testimonials from "@/app/components/Testimonials";
import Image from "next/image";

import styles from "./page.module.css";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero
        title="Programs"
        navigation="Low Carb, High Perfomance Crash Course"
      />
      <div className={`${styles.carbProgram_container} container`}>
        <div className="row my-5 justify-content-evenly">
          <div className={`${styles.img_container} col-lg-5`}>
            <Image
              src={"/programs/carb.jpg"}
              fill={true}
              alt="Image of a pan containing various food items including egg whites, egg yolks and spices"
            ></Image>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <h1>“Low Carb, High Perfomance Crash Course”</h1>
            <h4 className="mt-4">
              ₹2,000
              <span
                className={`${styles.strike_through} ms-3 position-relative`}
              >
                ₹5,000
                <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                  60% <br />
                  OFF
                  <span className="visually-hidden">60% OFF</span>
                </span>
              </span>
            </h4>
            <button className="px-4 py-2 mt-3">BOOK NOW</button>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}
