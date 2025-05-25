import React from "react";
import "../Styles/Landing.css";

function AwardSection() {
  return (
    <div className="row award-section ">
      <div className="col-xl-3">
        <p className="award-heading">
          Powerful <span>achievement</span>{" "}
        </p>
      </div>
      <div className="col-xl-2">
        <img
          src="https://craftohtml.themezaa.com/images/demo-lawyer-awards-01.png"
          alt=""
        />
      </div>
      <div className="col-xl-2">
        <img
          src="https://craftohtml.themezaa.com/images/demo-lawyer-awards-02.png"
          alt=""
        />
      </div>
      <div className="col-xl-2">
        <img
          src="https://craftohtml.themezaa.com/images/demo-lawyer-awards-03.png"
          alt=""
        />
      </div>
      <div className="col-xl-2">
        <img
          src="https://craftohtml.themezaa.com/images/demo-lawyer-awards-04.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default AwardSection;
