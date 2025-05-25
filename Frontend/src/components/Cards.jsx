import React from "react";
import "../Styles/cards.css";
import { FaDollarSign } from "react-icons/fa";
function Cards(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.img} alt="" />
        <p className="card-heading">{props.heading}</p>
        <p className="card-text">{props.text}</p>
      </div>
    </>
  );
}

export default Cards;
