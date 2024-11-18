import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaGripLines } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";
import team4 from "../assets/team-4.png";
import appoint from "../assets/appoint.png";
import truck1 from "../assets/truck-1.png";
import truck2 from "../assets/truck-2.png";
function Home() {
  return (
    <>
      <section className="pt-5">
        <div className="container pt-4">
          <div className="row pt-4">
            <div className="col-lg-6 col-md-12">
              <img
                className="resp-p w-100"
                src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/07/8.webp"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 logic pt-5">
              <h6 className="bg-b">
                <span className="pe-2 ">
                  <FaGripLines />
                </span>
                About Company
              </h6>
              <h2 className="font-h2">
                Logistics Solutions That Deliver Excellence
              </h2>
              <p>
                Logistics features can refer to the various aspects and
                components of the supply chain that are involved in the
                transportation, warehousing, and distribution of goods. Here are
                some key logistics features:
              </p>
              <div className="row pt-3">
                <div className="col-lg-4 col-md-3 col-sm-3">
                  <img
                    className="d-lg-block"
                    src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/9.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 pb-3">
                  <div className="d-flex gap-3 pt-3">
                    <div className="d-sm-block">
                      <img
                        src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/10.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4>Reverse logistics</h4>
                      <p>This involves managing the Process of receiving</p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex gap-3 pt-3">
                    <div>
                      <img
                        src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/10.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4>Tracking and visibility</h4>
                      <p>This involves managing the Process of receiving</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aautar d-flex gap-3">
                <button className="">Load More</button>
                <img
                  className=""
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/12.png"
                  alt=""
                />
                <h4 className="d-block">
                  Guy Hawkins{" "}
                  <span>
                    <p>Founder CEO</p>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Logistics py-5 ">
        <div className="container">
          <h6 className="bg-b">
            <span className="pe-2 ">
              <FaGripLines />
            </span>
            About Company
          </h6>
          <div className="d-flex ">
            <h2 className="h2 pb-5 pt-2">Popular Logistics Services</h2>
            <button className="ms-auto">Load More</button>
          </div>
          <div className="row gx-4 gy-3 ">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="cards-1">
                <img
                  className=""
                  src="https://logisknew.wowtheme7.com/wp-content/themes/logisk/assets/img/home-3/14.png"
                  alt=""
                />
                <h5>Air Freight</h5>
                <p className="br">
                  Phasellus placerat dui sed metus luctus, vel hendrerit
                </p>

                <p className="blu">
                  <a href="">
                    READ MORE{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="cards-1">
                <img
                  className=""
                  src="https://logisknew.wowtheme7.com/wp-content/themes/logisk/assets/img/home-3/14.png"
                  alt=""
                />
                <h5>Air Freight</h5>
                <p className="br">
                  Phasellus placerat dui sed metus luctus, vel hendrerit
                </p>

                <p className="blu">
                  <a href="">
                    READ MORE{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="cards-1">
                <img
                  className=""
                  src="https://logisknew.wowtheme7.com/wp-content/themes/logisk/assets/img/home-3/14.png"
                  alt=""
                />
                <h5>Air Freight</h5>
                <p className="br">
                  Phasellus placerat dui sed metus luctus, vel hendrerit
                </p>

                <p className="blu">
                  <a href="">
                    READ MORE{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="cards-1">
                <img
                  className=""
                  src="https://logisknew.wowtheme7.com/wp-content/themes/logisk/assets/img/home-3/14.png"
                  alt=""
                />
                <h5>Air Freight</h5>
                <p className="br">
                  Phasellus placerat dui sed metus luctus, vel hendrerit
                </p>

                <p className="blu">
                  <a href="">
                    READ MORE{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="black py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-6">
              <h6 className="bg-b">
                <span className="pe-2 ">
                  <FaGripLines />
                </span>
                What We Offer
              </h6>
              <h2 className="hellow pb-3">
                We Provide Timely & Cost-Effective Delivery
              </h2>
              <div className="d-flex gap-3 logi mb-4 pb-4">
                <div>
                  <img
                    src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/19.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Real-Time Tracking</h3>
                  <p>
                    Aenean id mi fermentum, tristique felis condimentum augue.
                    Pellentesque
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 logi mb-4 pb-4">
                <div>
                  <img
                    src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/19.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Real-Time Tracking</h3>
                  <p>
                    Aenean id mi fermentum, tristique felis condimentum augue.
                    Pellentesque
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 logi">
                <div>
                  <img
                    src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/19.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Real-Time Tracking</h3>
                  <p>
                    Aenean id mi fermentum, tristique felis condimentum augue.
                    Pellentesque
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-md-6 photo">
              <img
                className=""
                src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/07/21.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="working  py-5">
        <div className="container pt-5">
          <h6 className="bg-b text-center">
            <span className="pe-2 ">
              <FaGripLines />
            </span>
            About Company
            <span className="ps-2 ">
              <FaGripLines />
            </span>
          </h6>
          <h2 className="text-center bg-d">Working Process For Services</h2>
          <div className="row gy-5 text-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services text-center">
                <img
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/22.png"
                  alt=""
                />
                <h6>Online booking</h6>
                <p>Pellentesque in ipsum id Orci porta dapibus.</p>
                <div className="badge  text-center">
                  <p>01</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services text-center">
                <img
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/23.png"
                  alt=""
                />
                <h6>Ocean Freight</h6>
                <p>Pellentesque in ipsum id Orci porta dapibus.</p>
                <div className="badge  text-center">
                  <p>02</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services text-center">
                <img
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/24.png"
                  alt=""
                />
                <h6>Road Freight</h6>
                <p>Pellentesque in ipsum id Orci porta dapibus.</p>
                <div className="badge  text-center">
                  <p>03</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services text-center">
                <img
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/25.png"
                  alt=""
                />
                <h6>Rail Freight</h6>
                <p>Pellentesque in ipsum id Orci porta dapibus.</p>
                <div className="badge  text-center">
                  <p>04</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="port py-5">
        <div className="container">
          <h6 className="bg-b">
            <span className="pe-2 ">
              <FaGripLines />
            </span>
            Our Portfolio
          </h6>
          <div className="explore">
            <h2 className="mb-2 ">Explore Our Recent Work</h2>
            <button>Load More</button>
          </div>
        </div>
        <div className="pt-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide">
                <div className="badge-1">
                  <p>Transportation</p>
                  <h5>Product Distribution</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="badge-1">
                  <p>Transportation</p>
                  <h5>Product Distribution</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="badge-1">
                  <p>Transportation</p>
                  <h5>Product Distribution</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="badge-1">
                  <p>Transportation</p>
                  <h5>Product Distribution</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="testimonial pb-5">
        <div className="container">
          <h6 className="bg-b text-center">
            <span className="pe-2 ">
              <FaGripLines />
            </span>
            About Company
            <span className="ps-2 ">
              <FaGripLines />
            </span>
          </h6>
          <h2 className="text-center bg-d">Working Process For Services</h2>
          <div className="row pt-5 gy-sm-5">
            <div className="col-lg-4 col-md-12">
              <div className="dane">
                <div className="lane ">
                  <h5>Devon Lane</h5>
                  <h6>Co-Founder</h6>
                </div>
                <p>
                  “Progressively strategize intermandated manufactured products
                  after multidisci plinary sources. Conveniently iterate
                  value-added systems with.”
                </p>
                <div className="img-abs">
                  <img
                    src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/32.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="dane">
                <div className="lane ">
                  <h5>Devon Lane</h5>
                  <h6>Co-Founder</h6>
                </div>
                <p>
                  “Progressively strategize intermandated manufactured products
                  after multidisci plinary sources. Conveniently iterate
                  value-added systems with.”
                </p>
                <div className="img-abs">
                  <img
                    src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/33.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="dane">
                <div className="lane ">
                  <h5>Devon Lane</h5>
                  <h6>Co-Founder</h6>
                </div>
                <p>
                  “Progressively strategize intermandated manufactured products
                  after multidisci plinary sources. Conveniently iterate
                  value-added systems with.”
                </p>
                <div className="img-abs">
                  <img
                    src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/34.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row team p-4">
            <div className="col-lg-3 col-md-3 col-sm-12 text-center">
              <img className="" src={team1} alt="" />
              <h3>165 +</h3>
              <p>Product delivery</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12  text-center">
              <img className="" src={team2} alt="" />
              <h3>165 +</h3>
              <p>Product delivery</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 text-center">
              <img className="" src={team3} alt="" />
              <h3>165 +</h3>
              <p>Product delivery</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 text-center">
              <img className="" src={team4} alt="" />
              <h3>165 +</h3>
              <p>Product delivery</p>
            </div>
          </div>
        </div>
      </section>
      <section className="product">
        <div className="container">
          <div className="row gy-sm-4 ">
            <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
              <h6 className="bg-b mb-3">
                <span className="pe-2 ">
                  <FaGripLines />
                </span>
                Booking Appointment
              </h6>
              <h2>Book Online Skip The Line Save Time!</h2>
              <p>
                Proin aliquam velit sed elit luctus, a luctus augue
                pellentesque. Mauris gravida dui ut tincidunt blandit. Nulla
                pretium
              </p>
              <div className="row mails">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <p>Emergency</p> <h6>+12 (88) 555-013</h6>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <img src={appoint} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <p className="d-block"> Email Address</p>

                  <h6>support@inf.com</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 offset-lg-1 offset-md-1 quote">
              <h4 className="pb-3">Request a Quote</h4>
              <form action="">
                <input className="mb-3" type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Name" />
                <h6 className="mt-3 pb-2">DIST (Miles):</h6>
                <div className="single-input-progress progress mb-4" style={{}}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="d-lg-flex gap-5 ">
                  <div>
                    <select className="mb-2">
                      <option>Select</option>
                      <option>opt1</option>
                      <option>opt2</option>
                    </select>
                  </div>
                  <div className="">
                    <select>
                      <option>Select</option>
                      <option>opt1</option>
                      <option>opt2</option>
                    </select>
                  </div>
                </div>
                <button className="mt-3">Request a Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5  heroes">
        <div className="container">
          <h6 className="bg-b text-center">
            <span className="pe-2 ">
              <FaGripLines />
            </span>
            LATEST BLOG
            <span className="ps-2 ">
              <FaGripLines />
            </span>
          </h6>
          <h2 className="text-center bg-d">Latest News And Articles</h2>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 respo">
              <div className="position-relative img-0">
                <div className="hov">
                  <img className="w-100" src={truck1} alt="" />
                </div>

                <div className="details shadow">
                  <ul className=" border-0 m-0 pb-2 d-flex gap-4">
                    <li>
                      <a className="" href="#">
                        <FaUser color="#1869FE" /> By logisk
                      </a>
                    </li>
                    <li>
                      <SlCalender color="#1869FE" />
                      27 Jun
                    </li>
                  </ul>
                  <h5>
                    <a href="">Learning Transport Is Not Difficult</a>
                  </h5>
                  <p>Express delivery is going to slow down Unleash…</p>
                  <h6>
                    <a className="read-more-text" href="">
                      READ MORE <FaArrowRight />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 respo">
              <div className="position-relative img-0">
                <div className="hov">
                  <img className="w-100" src={truck2} alt="" />
                </div>

                <div className="details shadow">
                  <ul className=" border-0 m-0 pb-2 d-flex gap-4">
                    <li>
                      <a className="" href="#">
                        <FaUser color="#1869FE" /> By logisk
                      </a>
                    </li>
                    <li>
                      <SlCalender color="#1869FE" />
                      27 Jun
                    </li>
                  </ul>
                  <h5>
                    <a href="">Learning Transport Is Not Difficult</a>
                  </h5>
                  <p>Express delivery is going to slow down Unleash…</p>
                  <h6>
                    <a className="" href="">
                      READ MORE <FaArrowRight />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative img-0">
                <div className="hov">
                  <img className="w-100" src={truck2} alt="" />
                </div>

                <div className="details shadow">
                  <ul className=" border-0 m-0 pb-2 d-flex gap-4">
                    <li>
                      <a className="" href="#">
                        <FaUser color="#1869FE" /> By logisk
                      </a>
                    </li>
                    <li className="">
                      <SlCalender color="#1869FE" />
                      27 Jun
                    </li>
                  </ul>
                  <h5>
                    <a href="">Learning Transport Is Not Difficult</a>
                  </h5>
                  <p>Express delivery is going to slow down Unleash…</p>
                  <h6>
                    <a className="read-more-text" href="">
                      READ MORE <FaArrowRight />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
