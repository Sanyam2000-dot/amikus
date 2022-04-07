import React from "react";
import "./FooterComp.css";
// import * as Icon from "react-bootstrap-icons";

const FooterComp = () => (
  <footer
    className="page-footer font-small blue pt-4"
    style={{
      backgroundColor: "rgba(var(--bs-dark-rgb)",
      marginTop: "1.5rem",
    }}
  >
    <div>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md px-4">
            <div style={{ paddingBottom: "20px" }}>
              <span className="p-2 icons">
                <a style={{ color: "white" }} href="/">
                  {/* <Icon.Facebook size="35px" /> */}
                </a>
              </span>
              <span className="p-2 icons">
                <a style={{ color: "white" }} href="/">
                  {/* <Icon.Linkedin size="35px" /> */}
                </a>
              </span>
              <span className="p-2 icons">
                <a style={{ color: "white" }} href="/">
                  {/* <Icon.Youtube size="35px" /> */}
                </a>
              </span>
              <span className="p-2 icons">
                <a style={{ color: "white" }} href="/">
                  {/* <Icon.Instagram size="35px" /> */}
                </a>
              </span>
            </div>
            <div>
              {/* <h6 className="text-uppercase">
                <a className="heading-links2" href="/about">
                  About NEOG
                </a>
              </h6> */}
              <p className="about-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a cum, repellat voluptas explicabo sequi? Quaerat
                magni molestias porro expedita ducimus, officiis illo officia
                pariatur vitae earum reprehenderit vero facere?
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase" style={{ color: "white" }}>
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a className="links-footer" href="#!">
                  Services
                </a>
              </li>
              <li>
                <a className="links-footer" href="#!">
                  Pricing
                </a>
              </li>
              <li>
                <a className="links-footer" href="#!">
                  Investment
                </a>
              </li>
              <li>
                <a className="links-footer" href="#!">
                  Bonds
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md px-5" style={{ alignContent: "center" }}>
            <div class="float-md-right ">
              <h6 className="text-uppercase">
                <a className="heading-links" href="/contact">
                  Contact Us
                </a>
              </h6>
              <p className="contact-para">
                UPES Energy Acres, <br />
                Bidholi, <br /> Dehradun - 248007, Uttarakhand, India <br />
                email : Udhaarbanking@neo.com {/* +91 1234567890 */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-copyright text-center py-3"
        style={{
          color: "rgba(255, 255, 255, .55)",
          fontSize: 16,
        }}
      >
        Copyright ©2022&nbsp;:
        <a className="links-at-footer" href="/">
          &nbsp;Udhaar Technical Team
        </a>
      </div>
    </div>
  </footer>
);

export default FooterComp;
