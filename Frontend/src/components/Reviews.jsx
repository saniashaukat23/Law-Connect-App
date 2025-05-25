import SectionHead from "./SectionHead";
import "../Styles/Reviews.css";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      text: "This theme has a wide variety of options and a really good customer support. Some of the customizations are unlimited but even so the theme still gives a lot of features while prioritizing web speed.",
      reviewer: "Hermain Miller",
      role: "Sales Manager",
      image: "https://craftohtml.themezaa.com/images/avtar-28.jpg",
    },
    {
      text: "This theme has a wide variety of options and a really good customer support. Some of the customizations are unlimited but even so the theme still gives a lot of features while prioritizing web speed.",
      reviewer: "Jane Doe",
      role: "Web Developer",
      image: "https://craftohtml.themezaa.com/images/avtar-29.jpg",
    },
    {
      text: "This theme has a wide variety of options and a really good customer support. Some of the customizations are unlimited but even so the theme still gives a lot of features while prioritizing web speed.",
      reviewer: "John Smith",
      role: "Project Manager",
      image: "https://craftohtml.themezaa.com/images/avtar-30.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const reviewRef = React.useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="container review-section">
      <div className="row">
        <div className="col-md-6 mt-4">
          <SectionHead
            headTop="Our satisfied clients"
            heading="What our clients are "
            italic="saying about us?"
          />
          <div className="arrowBtns">
            <button className="btn-previous" onClick={handlePrevious}>
              <FaArrowLeft />
            </button>
            <button className="btn-next" onClick={handleNext}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="col-md-5">
          <div className="review-slider" ref={reviewRef}>
            <div className="review-content">
              <p className="review-text">{currentReview.text}</p>
              <div className="review-card">
                <img src={currentReview.image} alt={currentReview.reviewer} />
                <div className="reviewerInfo">
                  <p className="reviewer">{currentReview.reviewer}</p>
                  <p className="reviewerCop">{currentReview.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
