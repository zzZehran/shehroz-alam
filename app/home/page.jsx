import React from "react";
import Navbar from "../(components)/Navbar";
import Carousel from "../(components)/Carousel";
import Testimonials from "../(components)/Testimonials";
import Footer from "../(components)/Footer";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      {/* Divider start */}
      <div className="divider container-fluid">
        <h2>CHOOSE YOUR PROGRAM</h2>
        <p>Join Now and Get 40% Launch Discount.</p>
      </div>
      {/* Divider end */}

      {/* Programs start */}
      <div className="programs container-fluid">
        <div className="row">
          <div className="program col-lg-4">
            <h3 className="mb-3">LOW CARB, HIGH PERFORMANCE CRASH COURSE</h3>
            <p className="mb-4">
              A 7-day crash course that teaches you everything you need to know
              to get started with the low carb diet.
            </p>
            <button className="py-2 px-4">
              <Link
                href={"/low_carb_high_performance"}
                className="text-decoration-none text-white"
              >
                BUY NOW
              </Link>
            </button>
          </div>
          <div className="program col-lg-4">
            <h3 className="mb-3">Reverse Type II Diabetes Program</h3>
            <p className="mb-4">
              Reverse Type II Diabetes naturally by Correct Nutrition and live
              Medicine Free Life Again!
            </p>
            <button className="py-2 px-4">
              <Link
                href={"/reverse_type_2_diabetes"}
                className="text-decoration-none text-white"
              >
                BUY NOW
              </Link>
            </button>
          </div>
          <div className="program col-lg-4">
            <h3 className="mb-3">12 WEEK GET LEAN PROGRAME</h3>
            <p className="mb-4">PACK MUSCLES AND LOSE FAT AT THE SAME TIME</p>
            <button className="py-2 px-4">
              <Link
                href={"/12_week_lean"}
                className="text-decoration-none text-white"
              >
                BUY NOW
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* Programs end */}

      {/* Newsletter start */}
      <div className="newsletter container-fluid">
        <h2 className="mb-4">
          Sign up to receive weekly Blogs on Fitness & Nutrition, plus a free
          copy of my Home Workout EBook.
        </h2>
        <form action="" className="row justify-content-around">
          <input
            className="col-4 col-lg-4 px-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="col-4 col-lg-4 px-3"
            type="email"
            placeholder="Email"
          />
          <button className="col-3 col-lg-2 px-2 py-2">SUBMIT</button>
        </form>
      </div>
      {/* Newsletter end */}

      {/* About start */}
      <div className="about container-fluid">
        <div className="row gx-5">
          <div className="col-lg-6">
            <h2 className="mb-5">“Shehroz Alam Fitness and Nutrition”</h2>
            <h4 className="mb-4">
              Cutting-edge platform for proven fitness plans, personalized
              nutrition blueprints.
            </h4>
            <p className="mb-5">
              I am on a mission to teach 10,000 people by 2020, how they can get
              stronger, shredded and correct metabolic diseases like Type II
              Diabetes, High BP, High Triglycerides by Training and Nutrition.
            </p>
            <button className="px-3 py-2">
              {" "}
              <Link href={"/about"} className="text-decoration-none text-white">
                BUY NOW
              </Link>
            </button>
          </div>
          <div className="about-img col-lg-6">
            <Image src="/about.png" fill={true} alt="Shehroz posing" />
          </div>
        </div>
        <div className="row mt-lg-5">
          <h3 className="mb-5">
            Why choose Shehroz Alam Fitness and Nutrition
          </h3>
          <div className="col-lg-4">
            <div className="icon-card">
              <img src="/icons/wallet.png" alt="" />
              <h3 className="mb-lg-4 mt-3">100% Money Back Guarantee</h3>
              <p>
                If you feel like it's not your cup of tea, drop me a mail saying
                "it's not working out for me" and your "issue" and I'll refund
                the whole amount.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-card">
              <img src="/icons/time.png" alt="" />
              <h3 className="mb-lg-4 mt-3">One time learning - Save time!</h3>
              <p>
                No more bullshiting with new diet and workout plans every month.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-card">
              <img src="/icons/pay.png" alt="" />
              <h3 className="mb-lg-4 mt-3">ONE TIME PAYMENT - SAVE MONEY!</h3>
              <p>
                No more making payments every month. Learn once, achieve for
                life.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-card">
              <img src="/icons/support.png" alt="" />
              <h3 className="mb-lg-4 mt-3">24 HOUR SUPPORT</h3>
              <p>
                Facebook Community Access to meet like minded people and Q&A,
                Whatsapp Support, Email Support.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-card">
              <img src="/icons/goal.png" alt="" />
              <h3 className="mb-lg-4 mt-3">
                PERSONALIZED AND CUSTOMIZED SERVICES
              </h3>
              <p>Everything customized to your needs and goals.</p>
            </div>
          </div>
        </div>
      </div>
      {/* About end */}

      <Testimonials />
      <Footer />
    </>
  );
}
