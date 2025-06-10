import Image from "next/image";
import React from "react";

export default function About() {
  return (
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
          <button className="px-3 py-2">READ MORE</button>
        </div>
        <div className="about-img col-lg-6">
          <img src="/about.png" alt="Shehroz posing" />
        </div>
      </div>
      <div className="row mt-5">
        <h3 className="mb-5">Why choose Shehroz Alam Fitness and Nutrition</h3>
        <div className="col-lg-4">
          <div className="icon-card">
            <img src="/icons/wallet.png" alt="" />
            <h3 className="mb-4 mt-3">100% Money Back Guarantee</h3>
            <p>
              If you feel like it's not your cup of tea, drop me a mail saying
              "it's not working out for me" and your "issue" and I'll refund the
              whole amount.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="icon-card">
            <img src="/icons/time.png" alt="" />
            <h3 className="mb-4 mt-3">One time learning - Save time!</h3>
            <p>
              No more bullshiting with new diet and workout plans every month.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="icon-card">
            <img src="/icons/pay.png" alt="" />
            <h3 className="mb-4 mt-3">ONE TIME PAYMENT - SAVE MONEY!</h3>
            <p>
              No more making payments every month. Learn once, achieve for life.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="icon-card">
            <img src="/icons/support.png" alt="" />
            <h3 className="mb-4 mt-3">24 HOUR SUPPORT</h3>
            <p>
              Facebook Community Access to meet like minded people and Q&A,
              Whatsapp Support, Email Support.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="icon-card">
            <img src="/icons/goal.png" alt="" />
            <h3 className="mb-4 mt-3">PERSONALIZED AND CUSTOMIZED SERVICES</h3>
            <p>Everything customized to your needs and goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
