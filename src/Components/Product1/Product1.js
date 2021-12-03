import React from "react";
import { Row, Col } from "antd";
import {
  StarFilled,
  HeartOutlined,
  ShareAltOutlined,
  ExclamationCircleOutlined,
  EnvironmentOutlined,
 
} from "@ant-design/icons";
import Footer from "../Footer/Footer";
import "./product1.css";
import { Container } from "react-bootstrap";

function Product1() {
  return (
    <div className="MainBox">
      <Container>
        <Row justify="center" className="align-items-stretch boxx boxx1">
          <Col
            xs={20}
            sm={20}
            md={24}
            lg={8}
            className="container d-flex    justify-content-center  "
          >
            <div className="prodiv">
              <img
                className="imgstyle"
                src="https://static-01.daraz.pk/p/cf9a45356e37e8b5496c09382789ff28.jpg"
                alt=" "
              />
            </div>
          </Col>
          <Col
            xs={20}
            sm={20}
            md={24}
            lg={8}
            className="container d-flex flex-column justify-content-center h-100"
          >
            <h3 className="super">
              Super Bass Earphones - 3.5mm Jack - Supported with all devices
            </h3>
            <div style={{ display: "flex", marginTop: ".5rem" }}>
              <StarFilled style={{ color: "#FFD401" }} />
              <StarFilled style={{ color: "#FFD401" }} />
              <StarFilled style={{ color: "#FFD401" }} />
              <StarFilled style={{ color: "#FFD401" }} />
              <StarFilled style={{ color: "#FFD401" }} />
              <p className="rating">23 Ratings</p>
              <ShareAltOutlined style={{ fontSize: "1.2rem" }} />
              <HeartOutlined style={{ fontSize: "1.2rem" }} />
            </div>
            <p className="brand">
              Brand:
              <p className="no-brand">No Brand More | Wearable Technology</p>
            </p>
            <hr style={{ marginTop: "-.5rem" }} />
            <h3 className="prize">Rs. 215</h3>
            <p className="less"> Rs. 3,300-93%</p>
            <hr style={{ marginTop: "-.2rem" }} />
            <p className="less"> Color Family</p>
            <p className="less"> Quantity</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="buybtn">Buy now</button>
              <button className="addbtn">Add to Cart</button>
            </div>
          </Col>
          <Col
            xs={20}
            sm={20}
            md={24}
            lg={8}
            className="container d-flex flex-column justify-content-center h-100"
          >
            <div className="sidediv">
              <div className="option">
                <p className="del">Delivery Options</p>
                <ExclamationCircleOutlined />
              </div>
              <div className="location">
                <EnvironmentOutlined
                  style={{ fontSize: "1.1rem", marginTop: ".5rem" }}
                />
                <p className="loc1">Sindh, Karachi-Gulshan-e-Iqbal, Block 15</p>
                <p className="loc1">CHANGE</p>
              </div>
              <hr />
              <p> Home Delivery</p>
              <div className="daysdiv">
                <p className="days">6-9 days</p>
                <p>Rs 99</p>
              </div>
              <div className="en">
                <p>
                  Enjoy free shipping promotion with minimum spend of Rs. 5,000
                  from SAQLAIN RAZA (IV).
                </p>
              </div>
              <p className="box">Cash on Delivery Available</p>
              <hr />
              <div className="option">
                <p className="del">Return & Warranty</p>
                <ExclamationCircleOutlined />
              </div>
              <p>7 Days Returns</p>
              <p className="mind">Change of mind is not applicable</p>
              <p>Warranty not available</p>
            </div>
            <div className="sidediv1">
              <p>Sold by</p>
              <div className="option1">
                <p style={{ fontSize: "15px" }}>SAQLAIN RAZA (IV)</p>
                <p>Chat Now</p>
              </div>
              <div className="location"></div>
              <hr />
              <div className="en"></div>
            </div>
          </Col>
        </Row>
        <Row justify="center" className="align-items-stretch">
          <Col
            xs={20}
            sm={20}
            md={24}
            lg={24}
            className="justify-content-center h-100"
          >
            <div className="secondpart">
              <p className="device">
                Product details of Super Bass Earphones - 3.5mm Jack - Supported
                with all devices
              </p>
            </div>
            <div className="secondpart1">
              <ul>
                <li>
                  <p>
                    Specifications:1)High Bass2)Flexible and Wrinkles free
                    Wire3)Purified Sound Quality4)Noise Cancellation Supported
                    Mic5)Supported for All Phones/Laptops6) 7 Days return
                    Warranty
                  </p>
                </li>
              </ul>
              <hr />
              <p className="spec">Specifications:</p>
              <ol>
                <li className="list">High Bass</li>
                <li className="list">Flexible and Wrinkles free Wire</li>
                <li className="list">Purified Sound Quality</li>
                <li className="list">Noise Cancellation Supported Mic</li>
                <li className="list">Supported for All Phones/Laptops</li>
                <li className="list">7 Days return Warranty</li>
              </ol>
              <hr />
              <p className="device">
                Specifications of Super Bass Earphones - 3.5mm Jack - Supported
                with all devices
              </p>
              <p style={{ color: "grey" }}>SKU</p>
              <p>243598453_PK-1462701850</p>
              <div style={{ display: "flex" }}>
                <p style={{ color: "grey" }}> What’s in the box</p>
                <p style={{ marginLeft: ".8rem" }}> 1 x handsfree</p>
              </div>
              <hr />
            </div>
          </Col>
        </Row>
        <Row justify="center" className="align-items-stretch">
          <Col
            xs={20}
            sm={20}
            md={24}
            lg={24}
            className="justify-content-center h-100"
          >
            <div className="thirdpart">
              <p className="device1">
                Ratings & Reviews of Super Bass Earphones - 3.5mm Jack -
                Supported with all devices
              </p>
            </div>
            <div className="thirdpart1">
              <div className="staricon">
                <div>
                  <p className="rate"> 5.0/5 </p>
                  <div style={{marginTop: "-1.5rem" }}>
                  <StarFilled
                    style={{ color: "#FACA51", fontSize: "1.6rem" }}
                  />
                  <StarFilled
                    style={{ color: "#FACA51", fontSize: "1.6rem" }}
                  />
                  <StarFilled
                    style={{ color: "#FACA51", fontSize: "1.6rem" }}
                  />
                  <StarFilled
                    style={{ color: "#FACA51", fontSize: "1.6rem" }}
                  />
                  <StarFilled
                    style={{ color: "#FACA51", fontSize: "1.6rem" }}
                  />
                  </div>
                  <p style={{ color: "grey" }}> 23 Rating</p>
                </div>
                <div style={{flexDirection: "column", marginTop: ".8rem",marginLeft: "1rem"}}>
                <div className="fill1">
                <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
                </div>
                <div className="fill2">
                <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#EFF0F5", fontSize: ".9rem" }}
              />
                </div>
                <div className="fill3">
                <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{color: "#EFF0F5",  fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#EFF0F5", fontSize: ".9rem" }}
              />
                </div>
                <div className="fill4">
                <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#FACA51", fontSize: ".9rem" }}
              />
              <StarFilled
                style={{color: "#EFF0F5",   fontSize: ".9rem" }}
              />
              <StarFilled
                style={{color: "#EFF0F5",  fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#EFF0F5",  fontSize: ".9rem" }}
              />
                </div>
                <div className="fill4">
                <StarFilled
                style={{ color: "#EFF0F5",  fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#EFF0F5",  fontSize: ".9rem" }}
              />
              <StarFilled
                style={{color: "#EFF0F5",   fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#EFF0F5",  fontSize: ".9rem" }}
              />
              <StarFilled
                style={{ color: "#EFF0F5", fontSize: ".9rem" }}
              />
              </div>
              </div>
              </div>
              <hr />
              <div  >
              <p style={{ textAlign: "center", color: "grey" }}>
                This product has not received a written review yet.
              </p> 
              <p style={{ textAlign: "center", color: "grey" }}>
                Let others know what do you think and be the first to write a
                review.
              </p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Product1;
