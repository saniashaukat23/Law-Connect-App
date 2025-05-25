import React from "react";
import "../Styles/AboutUs.css";
import {
  FaMagnifyingGlass,
  FaQuestion,
  FaCheck,
  FaFileContract,
} from "react-icons/fa6";
function ProcessChart() {
  const bars = [
    {
      className: "bar-1",
      number: "01",
      label: "Make a decision",
      icon: <FaCheck className="innerIcon" size={"30px"} />,
    },
    {
      className: "bar-2",
      number: "02",
      label: "Designing question",
      icon: <FaQuestion className="innerIcon" size={"30px"} />,
    },
    {
      className: "bar-3",
      number: "03",
      label: "Literature review",
      icon: <FaMagnifyingGlass className="innerIcon" size={"30px"} />,
    },
    {
      className: "bar-4",
      number: "04",
      label: "Case result",
      icon: <FaFileContract className="innerIcon" size={"30px"} />,
    },
  ];

  return (
    <>
      <div className="process-container">
        {bars.map((bar, index) => (
          <div
            className={`bar-wrapper ${
              index % 2 === 0 ? "align-start" : "align-bottom"
            }`}
            key={index}
          >
            {index % 2 === 0 && (
              <>
                <p className="bar-label">{bar.label}</p>{" "}
              </>
            )}

            <div className={`bar ${bar.className}`}>
              <div className="circle">
                <div className="inner">{bar.icon}</div>
              </div>
              <div className="mid"></div>
              <div className="no">
                <p>{bar.number}</p>
              </div>
            </div>
            {index % 2 !== 0 && (
              <>
                <p className="bar-label">{bar.label}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProcessChart;
