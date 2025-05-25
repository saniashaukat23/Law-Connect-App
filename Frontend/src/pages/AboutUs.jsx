import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import SectionHead from "../components/SectionHead";
import ProcessChart from "../components/ProcessChart";
import "../Styles/AboutUs.css";
import React from "react";
import Footer from "../components/Footer";
function AboutUs() {
  return (
    <>
      <Navbar />
      <section>
        <div className="section-top">
          <div className="container">
            <div className="row ">
              <p className="col-md-6 section-name">About LawConnect</p>
              <p className="col-md-5 section-des">
                Over the years, our commitment to excellence and passion for
                clients has been recognized.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-90 container ">
        <SectionHead
          headTop="Facts of lawyer agency"
          heading="We are committed to helping our"
          italic=" clients succeed."
          text="We are a full-service business law firm providing clients with the highest quality legal advice. We solve complex business issues."
        />
        <div className="row card-sec">
          <div className="col-3">
            <Cards
              img="https://craftohtml.themezaa.com/images/demo-lawyer-about-02.png"
              heading="Free Consultation"
              text="Quis autem velo eum iure suam nihil molestiae."
            />
          </div>
          <div className="col-3">
            <Cards
              img="https://craftohtml.themezaa.com/images/demo-lawyer-about-03.png"
              heading="Qualified Attorneys"
              text="Quis autem velo eum iure suam nihil molestiae."
            />{" "}
          </div>
          <div className="col-3">
            <Cards
              img="https://craftohtml.themezaa.com/images/demo-lawyer-about-04.png"
              heading="Proven Results"
              text="Quis autem velo eum iure suam nihil molestiae."
            />{" "}
          </div>
          <div className="col-3">
            <Cards
              img="https://craftohtml.themezaa.com/images/demo-lawyer-about-05.png"
              heading="Legal Information"
              text="Quis autem velo eum iure suam nihil molestiae."
            />{" "}
          </div>
        </div>
      </section>
      <section className=" container">
        <SectionHead
          headTop="Our working process"
          heading="Our working process for "
          italic="winning a case"
        />
        <ProcessChart />
        <Reviews />
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
