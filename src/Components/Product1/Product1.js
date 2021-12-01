import React from "react";
import { Row, Col, Input  } from "antd";
import { StarFilled,HeartOutlined,ShareAltOutlined,ExclamationCircleOutlined,EnvironmentOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";
import "./product1.css";

function Product1() {
  return (
    <div className="">
      <Row justify="center" className="align-items-stretch boxx">
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={16}
          className="container d-flex  justify-content-center  "
        >
          <div className="prodiv">
            <img className="imgstyle"
              src="img1.jpg"
              alt=" "
            />
            <div style={{ }}>
            <p className="hot">
              HOT SHAPERS Hot Belt for Women – Waist Slimming Girdle – Stomach
              Wrap Band for Sauna or Gym Sessions – Weight Loss, Increased Sweat
              and Tummy Fitness Trimmer or a Slimmer Physique
            </p>
            
            <StarFilled style={{color: "rgb(255,212,1)"  }} />
            <StarFilled style={{color: "rgb(255,212,1)"}} />
            <StarFilled style={{color: "rgb(255,212,1)"}} />
            <StarFilled style={{color: "rgb(255,212,1)"}}/>
            <div className="iconsection">
            <a className="brand">126 Ratings39 |</a>
            <a className="brand"> Answered Questions</a>
            <ShareAltOutlined style={{fontSize: "1.2rem"}} />
            <HeartOutlined style={{fontSize: "1.2rem"}} />
            </div>
            <p className="brand">Brand: <a className="brand"> No Brand | more Women from no brand </a></p>
            <hr/>
            <p>Rs. 399</p>
            <p>Rs. 1,050-67%</p>
            <hr/>
            </div>
          </div>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={5}
          className="container d-flex flex-column justify-content-center h-100"
        >
      <div className="sidediv">
      <div className="option">
    <p className="del">Delivery Options</p>
    <ExclamationCircleOutlined />
    </div>
    <div className="location">
    <EnvironmentOutlined style={{fontSize: "1.1rem",marginTop: ".5rem"}} />
    <p className="loc1">Sindh, Karachi-Gulshan-e-Iqbal, Block 15</p>
    <a className="loc1">CHANGE</a>
    </div>
    <hr/>
   <p> Home Delivery</p>
   <div className="daysdiv">
   <p className="days">6-9 days</p>
   <p>Rs 99</p>
   </div>
   <div className="en">
   <p>Enjoy free shipping promotion with minimum spend of Rs. 1,999 from</p>
   <a className="box">Mystery.Box.</a>
   </div>
    </div>
   
        </Col>
      </Row>
      <Row justify="center" className="align-items-stretch">
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={8}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
      </Row>
      <Row
        justify="center"
        style={{
          marginTop: "2em",
          paddingTop: "2em",
          paddingBottom: "2em",
        }}
        className="align-items-stretch"
      >
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={8}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={8}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={8}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={8}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        ></Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Product1;
