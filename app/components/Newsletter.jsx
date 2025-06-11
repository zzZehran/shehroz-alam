import React from "react";

export default function Newsletter() {
  return (
    <div className="newsletter container-fluid">
      <h2 className="mb-4">
        Sign up to receive weekly Blogs on Fitness & Nutrition, plus a free copy
        of my Home Workout EBook.
      </h2>
      <form action="" className="row justify-content-around">
        <input className="col-4 col-lg-4 px-3" type="text" placeholder="Name" />
        <input
          className="col-4 col-lg-4 px-3"
          type="email"
          placeholder="Email"
        />
        <button className="col-3 col-lg-2 px-2 py-2">SUBMIT</button>
      </form>
    </div>
  );
}
