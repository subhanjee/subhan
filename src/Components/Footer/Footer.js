import { Row, Col } from "antd";
import React from "react";
import { AppleFilled } from "@ant-design/icons";
// import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer class="footer ">
        <div class="footer-top">
          <div class="">
            <br></br> <br></br>
            <Row justify="center">
              <Col
                xs={20}
                sm={20}
                md={24}
                lg={4}
                className="  d-flex flex-column justify-content-center h-100"
              >
                <p
                  style={{
                    marginLeft: "3%",
                    color: " white",
                    fontSize: "15px",
                  }}
                >
                  Customer Care
                  <br></br>
                  <p className="hover1">How to Buy</p> <br></br>
                  <p className="hover1">Corporate & Bulk Purchasing</p>
                  <br></br>
                  <a className="hover1"> Returns & Refunds</a>
                  <br></br>
                  <a className="hover1">Trisage Shop</a>
                  <br></br>
                  <a className="hover1">Contact Us</a>
                  <br></br>
                  <a className="hover1">Purchase Protection</a>
                  <br></br>
                  <a className="hover1">Fulfilled by Trisage (FBT)</a>
                  <br></br>
                </p>
                <p
                  style={{
                    marginLeft: "3%",
                    color: " white",
                    fontSize: "15px",
                  }}
                >
                  <a>Make Money With Us</a>
                  <br></br>
                  <a className="hover1">Trisage University</a> <br></br>
                  <a className="hover1">Sell on Trisage</a>
                  <br></br>
                </p>
              </Col>
              <Col
                xs={20}
                sm={20}
                md={24}
                lg={6}
                // style={{marginLeft:"-33em"}}
                className=" d-flex flex-column justify-content-center h-100"
              >
                <p
                  style={{
                    marginLeft: "3%",
                    color: " white",
                    fontSize: "14px",
                  }}
                >
                  Trisage<br></br>
                  <a className="hover1">About Us</a> <br></br>
                  <a className="hover1">Digital Payments</a>
                  <br></br>
                  <a className="hover1">Trisage Cares</a>
                  <br></br>
                  <a className="hover1">Trisage Blog</a>
                  <br></br>
                  <a className="hover1">Terms & Conditions</a>
                  <br></br>
                  <a className="hover1">Privacy Policy</a>
                  <br></br>
                  <a className="hover1">Online Shopping App</a>
                  <br></br>
                  <a className="hover1">Online Grocery Shopping</a>
                  <br></br>
                  <a className="hover1">Trisage Exclusive</a>
                  <br></br>
                  <a className="hover1">How to shop on Trisage</a>
                  <br></br>
                  Contact: +92 309 4321 500<br></br>
                  Contact: +92 309 4321 500<br></br>
                  Mail: Info@trisagesolutions.com
                </p>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                className=" d-flex  justify-content-center h-100"
              >
                <div>
                  <a>
                    <img className="scan" src="scan.png" alt="" />
                  </a>

                  <div className="btndiv">
                    <a>
                      <div className="googlebtn">
                        <AppleFilled
                          style={{
                            color: "white",
                            fontSize: "1.8rem",
                            marginTop: ".1rem",
                          }}
                        />
                        <div>
                          <p className="color">Download on the </p>
                          <p className="color1">App Store</p>
                        </div>
                      </div>
                    </a>
                    <a>
                      <div className="googlebtn">
                        <img
                          style={{
                            width: "1.6rem",
                            height: "1.9rem",
                            marginTop: ".2rem",
                            marginLeft: ".2rem",
                          }}
                          src="imgj.jfif"
                          alt=""
                        />
                        <div>
                          <p className="color">GET ON IT </p>
                          <p className="color1">Google Play</p>
                        </div>
                      </div>
                    </a>
                    <a>
                      <div className="googlebtn">
                        <img
                          style={{
                            width: "1.8rem",
                            height: "1.9rem",
                            marginTop: ".2rem",
                            marginLeft: ".2rem",
                          }}
                          src="gallery.jpg"
                          alt=""
                        />
                        <div>
                          <p className="color">EXPLORE IT ON </p>
                          <p className="color1">App Gallery</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="footer-bottom ">
          <p>Copyright Trisage Solutions 2021. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
