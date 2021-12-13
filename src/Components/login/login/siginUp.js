import React from "react";
import "./signup.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";

function Siginup() {
  return (
    <div className="totalwidth">
      <div className="subdivofform">
        <div className="titletop">
          <div>
            <h3 className="heading">Welcome To The TriSage E-Commerce</h3>
          </div>
          <div>
            <p className="heading2">
              New Member?<Link to="">Register</Link> here
            </p>
          </div>
        </div>
        <Row className="rowofform">
          <Col lg={10} md={10} sm={20} xs={20} className="columnofform">
            <div>
              <p className="txtclr">Phone Number or Email</p>
              <input
                className="input11"
                placeholder="Please enter phone number or Email"
                type="text"
              ></input>
            </div>
            <div className="div2">
              <p className="txtclr">Password</p>
              <input
                className="input11"
                placeholder="Please enter Password"
                type="text"
              ></input>
              <div className="frgt11">
                <p>Forgot Password?</p>
              </div>
            </div>
          </Col>
          <Col lg={10} md={10} sm={20} xs={20} className="columnofform">
            <div className="div33">
              <button className="button11">Login</button>
              <p className="lgntxt">or,login with</p>
            </div>
            <div className="div3">
              <button className="button22">
                {" "}
                <FacebookOutlined style={{ paddingRight: ".5rem"}} />
                FaceBook
              </button>
            </div>
            <div className="div44">
              <button className="button33">
                {" "}
                <GooglePlusOutlined style={{ paddingRight: ".5rem" }} />
                Gmail
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Siginup;
