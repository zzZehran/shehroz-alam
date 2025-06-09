import React from "react";
import Divider from "./Divider";

export default function Programs() {
  return (
    <>
      <Divider />
      <div className="programs container-fluid">
        <div className="row">
          <div className="program col-lg-4">
            <h3 className="mb-3">LOW CARB, HIGH PERFORMANCE CRASH COURSE</h3>
            <p className="mb-4">
              A 7-day crash course that teaches you everything you need to know
              to get started with the low carb diet.
            </p>
            <button className="py-2 px-4">BUY NOW</button>
          </div>
          <div className="program col-lg-4">
            <h3 className="mb-3">LOW CARB, HIGH PERFORMANCE CRASH COURSE</h3>
            <p className="mb-4">
              Reverse Type II Diabetes naturally by Correct Nutrition and live
              Medicine Free Life Again!
            </p>
            <button className="py-2 px-4">BUY NOW</button>
          </div>
          <div className="program col-lg-4">
            <h3 className="mb-3">LOW CARB, HIGH PERFORMANCE CRASH COURSE</h3>
            <p className="mb-4">PACK MUSCLES AND LOSE FAT AT THE SAME TIME</p>
            <button className="py-2 px-4">BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}
