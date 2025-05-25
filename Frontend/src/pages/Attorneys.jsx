import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AttorneyCards from "../components/AttorneyCards";
import SectionHead from "../components/SectionHead";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import "../Styles/Attorneys.css";
import CustomBtn from "../components/CustomBtn";

function Attorneys() {
  const [selectedArea, setSelectedArea] = useState("All");
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  // Mock attorney data with areas
  const attorneys = [
    {
      id: 1,
      name: "Ahmad Ali",
      area: "Family Law",
      image: "https://craftohtml.themezaa.com/images/team-54.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 2,
      name: "Sara Khan",
      area: "Criminal Law",
      image: "https://craftohtml.themezaa.com/images/team-55.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 3,
      name: "Ali Raza",
      area: "Family Law",
      image: "https://craftohtml.themezaa.com/images/team-56.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 4,
      name: "Hassan Ahmed",
      area: "Criminal Law",
      image: "https://craftohtml.themezaa.com/images/team-57.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 5,
      name: "Zainab Malik",
      area: "Family Law",
      image: "https://craftohtml.themezaa.com/images/team-58.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 6,
      name: "Omar Farooq",
      area: "Criminal Law",
      image: "https://craftohtml.themezaa.com/images/team-59.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 7,
      name: "Fatima Saeed",
      area: "Family Law",
      image: "https://craftohtml.themezaa.com/images/team-56.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 8,
      name: "Usman Khan",
      area: "Criminal Law",
      image: "https://craftohtml.themezaa.com/images/team-55.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
    {
      id: 9,
      name: "Ayesha Noor",
      area: "Family Law",
      image: "https://craftohtml.themezaa.com/images/team-54.jpg",
      description:
        "Hi there I'm Ahmad, an expert in Family Law. Here to deliver the best of my knowledge and provide you with the best solutions possible.",
    },
  ];

  // Debug: Log the attorneys array
  console.log("Attorneys:", attorneys);

  const filteredAttorneys =
    selectedArea === "All"
      ? attorneys
      : attorneys.filter((attorney) => attorney.area === selectedArea) || [];

  // Debug: Log the filtered attorneys
  console.log("Filtered Attorneys:", filteredAttorneys);

  const areas = ["All", ...new Set(attorneys.map((attorney) => attorney.area))];

  // Debug: Log the areas
  console.log("Areas:", areas);

  // Ensure filteredAttorneys is an array and handle empty cases
  if (!Array.isArray(filteredAttorneys)) {
    console.error("filteredAttorneys is not an array:", filteredAttorneys);
    return (
      <div>
        <h2>Error: Unable to load attorneys</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section>
        <div className="section-top">
          <div className="container">
            <div className="row">
              <p className="col-md-6 section-name">
                Meet Our Attorneys
                {isLoggedIn ? (
                  <Link to="/create-profile" style={{ textDecoration: "none" }}>
                    <CustomBtn text="Create Your Profile" />
                  </Link>
                ) : (
                  <CustomBtn
                    text="Login to Create Profile"
                    onClick={() => navigate("/login")}
                  />
                )}
              </p>
              <p className="col-md-5 section-des ">
                Over the years, our commitment to excellence and passion for
                clients has been recognized.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-90">
        <SectionHead
          headTop="Qualified Experts"
          heading="Where expertise "
          italic="meets people"
        />
        <div className="filter-bar">
          <select
            value={selectedArea}
            onChange={(e) => {
              console.log("Selected Area:", e.target.value);
              setSelectedArea(e.target.value);
            }}
            className={selectedArea === "All" ? "" : "active"}
          >
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        {filteredAttorneys.length === 0 ? (
          <p>No attorneys found for this area.</p>
        ) : (
          <>
            <div className="row mb-5">
              {filteredAttorneys.slice(0, 3).map((attorney) => (
                <div className="col-md-4" key={attorney.id}>
                  <AttorneyCards
                    name={attorney.name}
                    area={attorney.area}
                    image={attorney.image}
                    description={attorney.description}
                  />
                </div>
              ))}
            </div>
            {filteredAttorneys.length > 3 && (
              <div className="row mb-5">
                {filteredAttorneys.slice(3, 6).map((attorney) => (
                  <div className="col-md-4" key={attorney.id}>
                    <AttorneyCards
                      name={attorney.name}
                      area={attorney.area}
                      image={attorney.image}
                      description={attorney.description}
                    />
                  </div>
                ))}
              </div>
            )}
            {filteredAttorneys.length > 6 && (
              <div className="row mb-5">
                {filteredAttorneys.slice(6, 9).map((attorney) => (
                  <div className="col-md-4" key={attorney.id}>
                    <AttorneyCards
                      name={attorney.name}
                      area={attorney.area}
                      image={attorney.image}
                      description={attorney.description}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Attorneys;
