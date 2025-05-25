import React from "react";
import "../Styles/Landing.css";
import CustomBtn from "./CustomBtn";
import "../Styles/footer.css";
import logo from "../assets/logo.svg";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="footer py-90">
        <div className=" container">
          <div className="footer-top footer-divider">
            <img
              src="https://craftohtml.themezaa.com/images/demo-lawyer-07.png"
              alt=""
            />
            <p>
              Contact us today for a <span>free case evaluation?</span>
            </p>
            <CustomBtn text="Free consultation" />
          </div>
          <div className="row pt-5 side-bar">
            <div className="col-md-4">
              <div className="logo">
                <img src={logo} alt="" />
                <h3>Law Connect</h3>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="footer-bar">
                <FaLocationArrow />
                <p className="mb-0">Landmark</p>
              </div>
              <p className="bot-text">
                27 Eden eden centre, Orchard, Paris, France
              </p>
            </div>
            <div className="col-md-4 ">
              <div className="footer-bar">
                <FaPhoneAlt />
                <p className="mb-0 ">Contact</p>
              </div>
              <span className="bot-text">(123) 456 7890</span>
              <p className="bot-text">info@domain.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
