import React from "react";
import image from "../assets/2-2.png";
import { FaGripLines } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function Header() {
  return (
    <>
      <section className="hero">
        <div className="border-all">
          <div className="container1">
            <div className="row ">
              <div className="col-lg-2  b-r">
                <div className="mt-5">
                  <img className="lg-w-100 md-w-50 " src={image} alt="" />
                </div>
              </div>
              <div className="col-lg-10  ">
                <div className="row support ">
                  <div className="col-lg-2">
                    <p className="gap-2">
                      <i class="bi bi-envelope" color="blue"></i>{" "}
                      support@gmail.com
                    </p>
                  </div>
                  <div className="col-lg-3 ">
                    <p className="gap-2">
                      {" "}
                      <i class="bi bi-clock"></i>Mon - Fri 09: AM - 05: PM
                    </p>
                  </div>
                  <div className="col-lg-3 offset-lg-2 hide1">
                    <p className="gap-2">
                      {" "}
                      <i class="bi bi-geo-alt"></i>Richardson, California 62639
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <ul className="d-flex gap-4">
                      <li>
                        <i class="bi bi-facebook"></i>
                      </li>
                      <li>
                        <i class="bi bi-twitter"></i>
                      </li>

                      <li>
                        <i class="bi bi-linkedin"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    {" "}
                    <nav className="navbar navbar-expand-lg">
                      <div className="container">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className=" oks">
                            <i class="bi bi-list"></i>
                          </span>
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                aria-current="page"
                                to={"/"}
                              >
                                Home <i class="bi bi-plus-lg"></i>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                About Us
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Service <i class="bi bi-plus-lg"></i>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Pages <i class="bi bi-plus-lg"></i>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Blog <i class="bi bi-plus-lg"></i>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                        <ul className=" mb-0 mb-lg-0   tele gap-5">
                          <li className="mt-3">
                            <i class="bi bi-search"></i>
                          </li>
                          <li className="d-flex gap-2 txt1">
                            <img
                              className=""
                              src="https://logisknew.wowtheme7.com/wp-content/themes/logisk/assets/img/p-icon.png"
                              alt=""
                            />
                            <p>
                              <span className="d-block khairo"> Emergency</span>{" "}
                              +56 (201) 555-0124
                            </p>
                          </li>
                          <button className="">Load More</button>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mid-head">
                <h6>
                  <span className="pe-2">
                    <FaGripLines />
                  </span>
                  We're best logistics offer
                </h6>
                <h1>Worldwide Best Logistics Network</h1>
                <button className="mt-4">Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row py-5 g-0 g-sm-2">
            <div className="col-lg-4 bottom-part text-white">
              <div className="pe-3">
                <img
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/4.png"
                  alt=""
                />
              </div>

              <div>
                <h5 className="d-block">Real Time Delivery</h5>

                <p>This involves managing the Process of receiving</p>
              </div>
            </div>
            <div className="col-lg-4 bottom-part text-white">
              <div className="pe-3">
                <img
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/5.png"
                  alt=""
                />
              </div>

              <div>
                <h5 className="d-block">Worldwide services</h5>

                <p>This involves managing the Process of receiving</p>
              </div>
            </div>
            <div className="col-lg-4 bottom-part text-white">
              <div className="pe-3">
                <img
                  src="https://logisknew.wowtheme7.com/wp-content/uploads/2023/06/6.png"
                  alt=""
                />
              </div>

              <div>
                <h5 className="d-block">24/7 Online Support</h5>

                <p>This involves managing the Process of receiving</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Header;
