import React from "react";
import "./collection.css";
import { Row, Col } from "antd";
import { Container } from "react-bootstrap";

function Collection() {
  return (
    <div>
      <Container>
        <h4>Collections</h4>
        <div className="Carddiv1">
          <Row justify="center">
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Coffee & Tea </p>
                <p>128 Products</p>
                <img className="img11" src="im.jpg" alt="" />
                <img className="img11" src="im1.jpg" alt="" />
                <img className="img11" src="im2.jpg" alt="" />
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Die-Cast Deal </p>
                <p>56 Products</p>
                <img className="img13" src="im3.jpg" alt="" />
                <img className="img13" src="im4.jpg" alt="" />
                <img className="img13" src="im5.jpg" alt="" />
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Crafting Love</p>
                <p>74 Products</p>
                <img className="img14" src="im6.jpg" alt="" />
                <img className="img14" src="im7.jpg" alt="" />
                <img className="img14" src="im8.jpg" alt="" />
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Diapper for Babies </p>
                <p>92 Products</p>
                <img className="img11" src="im9.jpg" alt="" />
                <img className="img11" src="im10.png" alt="" />
                <img className="img12" src="im11.png" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="Carddiv12">
          <Row justify="center">
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Coffee & Tea </p>
                <p>128 Products</p>
                <img className="img11" src="im.jpg" alt="" />
                <img className="img11" src="im1.jpg" alt="" />
                <img className="img11" src="im2.jpg" alt="" />
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Die-Cast Deal </p>
                <p>56 Products</p>
                <img className="img13" src="im3.jpg" alt="" />
                <img className="img13" src="im4.jpg" alt="" />
                <img className="img13" src="im5.jpg" alt="" />
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Crafting Love</p>
                <p>74 Products</p>
                <img className="img14" src="im6.jpg" alt="" />
                <img className="img14" src="im7.jpg" alt="" />
                <img className="img14" src="im8.jpg" alt="" />
              </div>
            </Col>
            <Col xs={20} sm={10} md={6} lg={6}>
              <div className="col11">
                <p>Diapper for Babies </p>
                <p>92 Products</p>
                <img className="img11" src="im9.jpg" alt="" />
                <img className="img11" src="im10.png" alt="" />
                <img className="img12" src="im11.png" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Collection;
