import React, { useEffect, useRef } from "react";
import "../Styles/Landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaArrowRight, FaCheck, FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import CarouselCard from "./CardCarousel";
import Footer from "./Footer";
import CustomBtn from "./CustomBtn";

function Landing() {
  const textRef = useRef(null);
  const animatedTextRef = useRef(null);
  const originalText = "We are here for <i>the voice of justice.</i>";
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    textElement.innerHTML = "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(originalText, "text/html");
    const textNodes = doc.body.childNodes;
    let charIndex = 0;
    textNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const chars = node.textContent.split("");
        chars.forEach((char) => {
          const span = document.createElement("span");
          span.className = "fade-in-char";
          span.style.animationDelay = `${charIndex * 0.05}s`;
          span.textContent = char;
          textElement.appendChild(span);
          charIndex++;
        });
      } else {
        const chars = node.textContent.split("");
        chars.forEach((char) => {
          const span = document.createElement("span");
          span.className = "fade-in-char italic-char";
          span.style.animationDelay = `${charIndex * 0.05}s`;
          span.textContent = char;
          textElement.appendChild(span);
          charIndex++;
        });
      }
    });
  }, []);

  useEffect(() => {
    const textElement = animatedTextRef.current;
    if (!textElement) return;

    const texts = [
      "Commercial Affairs",
      "Legal Solutions",
      "Negotiation Sessions",
    ];
    let currentIndex = 0;

    function animateText(newText) {
      textElement.classList.add("fade-out");

      setTimeout(() => {
        textElement.innerHTML = "";
        textElement.classList.remove("fade-out");

        const chars = newText.split("");
        chars.forEach((char, index) => {
          const span = document.createElement("span");
          span.className = "char";
          span.style.animationDelay = `${index * 0.05}s`;
          span.textContent = char;
          textElement.appendChild(span);
        });
      }, 300);
      textElement.innerHTML = "";
    }

    animateText(texts[currentIndex]);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      animateText(texts[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="main-bg">
        <Navbar />
        <div className="container col-md-10">
          <p className="top-text">Experienced business lawyers</p>
          <div className="quote col-md-6">
            <p>
              <span className="fade-in-text" ref={textRef}>
                {originalText}
              </span>
            </p>
          </div>
          <CustomBtn text="Explore Services" />
        </div>
      </section>
      <section className="container section">
        <div className="row d-flex gap-100">
          <div className="col-md-7 left-content">
            <img
              src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5669619.jpg&fm=jpg&_gl=1*1k86ans*_ga*MzM1NzAxMjQzLjE3MTY0MDU2MDI.*_ga_8JE65Q40S6*MTc0NTY2NjA4MS41LjEuMTc0NTY2ODAwMy4wLjAuMA.."
              alt=""
            />
          </div>
          <div className="col-md-5 right-content">
            <div className="">
              <img
                className="col-md-2 mb-4"
                src="https://craftohtml.themezaa.com/images/demo-lawyer-03.png"
                alt=""
              />
              <h3>
                We are here to fight against
                <span className="fw-700 font-style-italic text-decoration-line-bottom-medium">
                  {" "}
                  any violence.
                </span>
              </h3>
              <p className="col-md-8 mb-30 content-text">
                Lorem ipsum is simply dummy text the printing and typesetting
                industry lorem industry standard.
              </p>
              <div className="provided-sers">
                <span className="icon-check">
                  <FaCheck className="i" />
                </span>
                <p>Full service corporate & commercial law.</p>
              </div>
              <div className="provided-sers">
                <span className="icon-check">
                  <FaCheck className="i" />
                </span>
                <p>Full service corporate & commercial law.</p>
              </div>
              <div className="learn-more-box">
                <button className="section2-btn">
                  Learn More
                  <span className="btn2-icon">
                    <FaArrowRight />
                  </span>
                </button>
                <div className="phone">
                  <FaPhoneAlt /> <span> 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="divider ">
        <div className="lines"></div>
        <div className=" divider-text">
          <p>Committed to providing solutions for</p>
          <span id="animated-text" ref={animatedTextRef}></span>
        </div>
        <div className="lines"></div>
      </section>
      <section className="section-4">
        <div className="left-4 ">
          <p className="top-heading">Areas of Practice</p>
          <p className="bottom-heading">
            Different case, need <i>different services</i>{" "}
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Navigation, Autoplay]}
          className="mySwiper col-md-8"
        >
          <SwiperSlide>
            <CarouselCard
              icon="https://craftohtml.themezaa.com/images/demo-lawyer-home-icon-01.png"
              text="Business Law Advisor"
              bgImage="https://craftohtml.themezaa.com/images/demo-lawyer-home-01.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              icon="https://craftohtml.themezaa.com/images/demo-lawyer-home-icon-02.png"
              text="Investment litigation"
              bgImage="https://craftohtml.themezaa.com/images/demo-lawyer-home-02.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              icon="https://craftohtml.themezaa.com/images/demo-lawyer-home-icon-03.png"
              text="Trust and estates"
              bgImage="https://craftohtml.themezaa.com/images/demo-lawyer-home-03.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              icon="https://craftohtml.themezaa.com/images/demo-lawyer-home-icon-4.png"
              text="Child Care Support"
              bgImage="https://craftohtml.themezaa.com/images/demo-lawyer-home-04.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              icon="https://craftohtml.themezaa.com/images/demo-lawyer-home-icon-5.png"
              text="Personal Injury Advisory "
              bgImage="https://craftohtml.themezaa.com/images/demo-lawyer-home-05.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="container py-90">
        <div className="row mb-4">
          <div className="col-md-6 quad-content">
            <img
              src="https://craftohtml.themezaa.com/images/demo-lawyer-home-dotted-pattern.png"
              alt=""
              className="quad-bg"
            />
            <div className="row">
              <div className="col-6 quad-box">
                <span className="counts">86%</span>
                <span className="box-text">Cases Solved</span>
              </div>
              <div className="col-6 quad-box">
                <span className="counts">350</span>
                <span className="box-text">Happy Clients</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6 quad-box">
                <span className="counts">59+</span>
                <span className="box-text">Winning Awards</span>
              </div>
              <div className="col-6 quad-box">
                <span className="counts">100%</span>
                <span className="box-text">Success Chance</span>
              </div>
            </div>
          </div>
          <div className="col-md-5  px-3 sec-5-r">
            <p className="pb-3">
              We feel very proud for <span>our achievement.</span>{" "}
            </p>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    You deserve time to recover
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum is simply dummy text of the printing industry
                    industry typesetting industry lorem industry.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Don't settle for less than you deserve
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum is simply dummy text of the printing industry
                    industry typesetting industry lorem industry.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Experience you can trust
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum is simply dummy text of the printing industry
                    industry typesetting industry lorem industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
