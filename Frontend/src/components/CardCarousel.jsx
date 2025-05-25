import { FaArrowRight } from "react-icons/fa6";
import "../Styles/Landing.css";

import React from "react";

function CardCarousel({ icon, text, bgImage }) {
  return (
    <div
      className="carousel-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <i>
        <img src={icon} alt="icon" />
      </i>
      <div className="carousel-bot">
        <p>
          <i>{text}</i>
        </p>
        <span className="bg-white">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}
export default CardCarousel;
