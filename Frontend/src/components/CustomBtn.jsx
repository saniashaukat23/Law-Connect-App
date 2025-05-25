import "../Styles/Landing.css";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
function CustomBtn(props) {
  return (
    <button className="content-btn">
      {props.text}
      <span className="btn-icon">
        <FaArrowRight />
      </span>
    </button>
  );
}

export default CustomBtn;
