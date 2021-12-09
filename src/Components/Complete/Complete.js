import React from "react";
import { Row, Col } from "antd";
import "./complete.css"

function Complete() {
  return (
    <div>
      <Row justify="center" className="align-items-stretch boxx boxx1">
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container"
        > 
        <p className="order">ORDER DETAILS</p>
        <div className="bookorder">
          <div>
            <p className="detials">Purse</p>
            <p className="detials">Purse</p>
            <p className="detials">Purse</p>
            <p className="detials">Purse</p>
          </div>
          <div>
          <p className="detials">Quantity : 12</p>
          <p className="detials">Quantity : 12</p>
          <p className="detials">Quantity : 12</p>
          <p className="detials">Quantity : 12</p>
          </div>
          <div>
          <p className="detials">Price : 25$</p>
          <p className="detials">Price : 25$</p>
          <p className="detials">Price : 25$</p>
          <p className="detials">Price : 25$</p>
          </div>
          </div>
        
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container"
        >
        <p className="order">PERSONAL DETAILS</p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <div >
      <p className="detials">Name</p>
      <p className="detials">Address</p>
      <p className="detials">Card Number</p>
      <p className="detials">CVV</p>
          </div>
          <div>
          <p className="detials">Jhone Doe</p>
          <p className="detials">12B Mughalpura Lahore</p>
          <p className="detials">xxxx-xxxx-xxxx-1208</p>
          <p className="detials">886</p>
          </div>
          </div>
        </Col>
      </Row>
      <p className="total"> SubTotal : 199$</p>
      <p className="total">Deleivery : 199$</p>
      <p className="total">Total : 199$</p>
     
    </div> 
  );
}

export default Complete;
