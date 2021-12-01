import React from "react";
import "./card.css";
import { Row, Col, Divider } from "antd";
import { Container } from "react-bootstrap";

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
              <div className="col1">
                <img className="img1" src="img1.jpg" alt="" />
                <p>Tummy Trimmer for Home gym | Belly </p>
                <p> Rs.375 </p>
                <p> Rs.4,444 -92% </p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img className="img1" src="img2.jpg" alt="" />
                <p>Fast Charger Adapter + Data cable Micro </p>
                <p>Rs.269 </p>
                <p>Rs.599-55%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img className="img1" src="img3.jpg" alt="" />
                <p>Climbing Rose Red Flower Seeds</p>
                <p>Rs. 132</p>
                <p>Rs. 700-81%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img className="img1" src="img4.jpg" alt="" />
                <p>11 inch Revolving Cake Turntable, </p>
                <p>Rs. 502</p>
                <p>Rs. 700-28%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img className="img1" src="img5.jpg" alt="" />
                <p>Super Strong Faced Powerful Adhesive </p>
                <p>Rs. 56</p>
                <p>Rs. 99-43%</p>
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={4}>
              <div className="col1">
                <img className="img1" src="img6.jpg" alt="" />
                <p>Contact lenses Grey Eye Contact lens </p>
                <p>Rs. 240</p>
                <p>Rs. 500-52%</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Flash;
