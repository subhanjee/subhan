import React from "react";
import "./card.css";
import { Row, Col } from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Flash() {
  return (
    <div>
      <Container>
        <h4>Flash sale</h4>
        <div className="Carddiv">
          <h3 className="sale">On sale now</h3>
          <hr />
          <Row justify="center">
            <Col xs={20} sm={10} md={6} lg={4}>
              <Link style={{ color: "black" }} to="/product1">
                <div className="col1">
                  <img
                    className="img1"
                    src="https://static-01.daraz.pk/p/526b30f117ff7dc663498ec90679e8eb.jpg"
                    alt=""
                  />
                  <p>HOT SHAPERS Hot Belt for Women </p>
                  <p> Rs.299 </p>
                  <p  style={{ textDecoration: "line-through" }} className="txtcolor">
                    {" "}
                    Rs. 1,050
                  </p>
                  <p className="txtcolor">-72%</p>
                </div>
              </Link>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img
                  className="img2"
                  src="https://static-01.daraz.pk/p/cff44875e81c1e9169fc7ff331b53d21.jpg"
                  alt=""
                />
                <p>Brown leather Luxury Watch For Unisex</p>
                <p>Rs.277 </p>
                <p style={{ textDecoration: "line-through" }} className="txtcolor">
                  Rs. 999
                </p>
                <p className="txtcolor">-72%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img
                  className="img1"
                  src="https://static-01.daraz.pk/p/ddaa1b39f2b7bfeb67892f478279105b.jpg"
                  alt=""
                />
                <p>Spice, Herb,Tea and Seasoning Filter Ball </p>
                <p>Rs. 132</p>
                <p style={{ textDecoration: "line-through" }} className="txtcolor">
                  Rs. 700
                </p>
                <p className="txtcolor">-81%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img
                  className="img1"
                  src="https://static-01.daraz.pk/p/44cb22b8af2cce571134065769d252ec.jpg"
                  alt=""
                />
                <p>Electronic Stove Lighter / Spark Lighter </p>
                <p>Rs. 502</p>
                <p style={{ textDecoration: "line-through" }} className="txtcolor">
                  Rs. 700
                </p>
                <p className="txtcolor">-28%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img
                  className="img1"
                  src="https://static-01.daraz.pk/p/9f05c357e236a27a0d6169ad0ceba761.jpg"
                  alt=""
                />
                <p>Magic Slinky RAINBOW Springs Bounce </p>
                <p>Rs. 56</p>
                <p style={{ textDecoration: "line-through"}} className="txtcolor">
                 Rs. 99
                </p>
                <p className="txtcolor">-43%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img
                  className="img1"
                  src="https://static-01.daraz.pk/p/f6ea4a33a7153297b27c37861ff58175.jpg"
                  alt=""
                />
                <p>Tile Stickers Pack of 6/12/24 Pcs.12x12cm </p>
                <p>Rs. 240</p>
                <p style={{ textDecoration: "line-through" }} className="txtcolor">
                  Rs. 500
                </p>
               <p className="txtcolor">-52%</p> 
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Flash;
