import React from "react";
import CustomBtn from "./CustomBtn";
import "../Styles/Attorneys.css";
function AttorneyCards(props) {
  const initialLetter = props.name ? props.name.charAt(0).toUpperCase() : "A";

  return (
    <>
      <div className="attorney-card">
        <div className="card-head">
          <div className="name-letter">
            <p>{initialLetter}</p>
          </div>
          <div className="head-details">
            <div className="attorney-name">{props.name}</div>
            <div className="attorney-category">{props.area}</div>
          </div>
        </div>
        <img src={props.image} alt={props.name || "Attorney"} />
        <div className="description">
          <p className="des-head">About Me!</p>
          <p className="des-text">{props.description}</p>
        </div>
        <CustomBtn text="Learn more" />
      </div>
    </>
  );
}

export default AttorneyCards;
