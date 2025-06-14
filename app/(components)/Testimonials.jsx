import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonials container">
      <h2>TESTIMONIALS</h2>
      <p className="mt-3">Join our family and start your journey.</p>
      <div className="yt-video row mt-5">
        <div className="col-lg-3">
          <iframe
            src="https://www.youtube.com/embed/CbOPMXdmldI"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="col-lg-3">
          <iframe
            src="https://www.youtube.com/embed/I5Ba_ftVlsA"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="col-lg-3">
          <iframe
            src="https://www.youtube.com/embed/Fxo5rvcagow"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="col-lg-3">
          <iframe
            src="https://www.youtube.com/embed/hTKrx5y247Y"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
