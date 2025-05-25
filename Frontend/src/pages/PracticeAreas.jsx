import React from "react";
import Navbar from "../components/Navbar";

function PracticeAreas() {
  return (
    <>
      <Navbar />
      <section>
        <div className="section-top">
          <div className="container">
            <div className="row ">
              <p className="col-md-6 section-name">Learn about our expertise</p>
              <p className="col-md-5 section-des">
                Over the years, our commitment to excellence and passion for
                clients has been recognized.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PracticeAreas;
