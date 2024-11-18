import React from "react";
import image from "../assets/2-2.png";
import { FaRegCheckCircle } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="foots">
        <div className="container text-white d-flex justify-content-between">
          <div>
            <h3>Delivering your world one package at a time</h3>
            <p>logistics slogan that highlights the importance</p>
          </div>
          <button>Load More</button>
        </div>
      </section>
      <footer className="py-4">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 text-white">
              <img src={image} alt="" />
              <p className="pt-5">
                Quickly supply alternative strategic theme areas vis-a-vis B2C
                mindshare. Objectively repurpose stand-alone synergy via
                user-centric architectures.
              </p>
              <ul className="d-flex gap-3 social-m pt-4">
                <li>
                  <i class="bi bi-facebook"></i>
                </li>
                <li>
                  <i class="bi bi-twitter"></i>
                </li>

                <li>
                  <i class="bi bi-instagram"></i>
                </li>
                <li>
                  <i class="bi bi-linkedin"></i>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 text-white text-start last-p">
              <ul className="text-start">
                <li className="mb-4">
                  <h4>Services</h4>
                </li>
                <li>
                  <a href="">About Company</a>
                </li>
                <li>
                  <a href="">Latest services</a>
                </li>
                <li>
                  <a href="">Why Choose Us</a>
                </li>
                <li>
                  <a href="">Blog & News</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 text-white text-start last-p">
              <ul>
                <li className="mb-4">
                  <h4>Explore</h4>
                </li>
                <li>
                  <a href="">Air Freight</a>
                </li>
                <li>
                  <a href="">Ocean Freight</a>
                </li>
                <li>
                  <a href="">Railway Freight</a>
                </li>
                <li>
                  <a href="">Warehousing</a>
                </li>
                <li>
                  <a href="">Distribution</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 pt-3">
              <h4 className="text-white mb-5">Subscribe</h4>
              <form
                action="
              "
              >
                <input
                  className="mb-3"
                  type="email"
                  placeholder="Email Address"
                />
              </form>
              <p>
                {" "}
                <FaRegCheckCircle /> I Agree to all your terms and Policies
              </p>
            </div>
          </div>
        </div>
      </footer>
      <section className="copy-r">
        <div className="container d-flex justify-content-between">
          <div>
            <p>© Copyright 2024 All right reserved.</p>
          </div>
          <div>
            <p>
              Privacy & Policy <span>|</span> Latest Services
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
