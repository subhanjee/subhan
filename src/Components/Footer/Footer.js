import { Row, Col } from "antd";
import React from "react";
import { AppleFilled } from "@ant-design/icons";
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
                className="d-flex flex-column justify-content-center h-100"
              >
                <p
                  style={{
                    marginLeft: "3%",
                    color: " white",
                    fontSize: "15px",
                  }}
                >
                  Customer Care
                  <p className="hover1">How to Buy</p> 
                  <p className="hover1">Corporate & Bulk Purchasing</p>
                  <p className="hover1"> Returns & Refunds</p>
                  <p className="hover1">Trisage Shop</p>
                  <p className="hover1">Contact Us</p>
                  <p className="hover1">Purchase Protection</p>
                  <p className="hover1">Fulfilled by Trisage (FBT)</p>
                </p>
                <p
                  style={{
                    marginLeft: "3%",
                    color: " white",
                    fontSize: "15px",
                  }}
                >
                  <p>Make Money With Us</p>
                  <br></br>
                  <p className="hover1">Trisage University</p>  
                  <p className="hover1">Sell on Trisage</p>
                </p>
              </Col>
              <Col
                xs={20}
                sm={20}
                md={24}
                lg={6}
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
                  <p className="hover1">About Us</p>  
                  <p className="hover1">Digital Payments</p>
                  <p className="hover1">Trisage Cares</p>
                  <p className="hover1">Trisage Blog</p>
                  <p className="hover1">Terms & Conditions</p>
                  <p className="hover1">Privacy Policy</p>
                  <p className="hover1">Online Shopping App</p>
                  <p className="hover1">Online Grocery Shopping</p>
                  <p className="hover1">Trisage Exclusive</p>
                  <p className="hover1">How to shop on Trisage</p>
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
                  <img className="scan" src="scan.png" alt="" />
                  <div className="btndiv">
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
