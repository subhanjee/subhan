import React, { useState } from "react";
import "./Navbarr.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Navbar } from "react-bootstrap";

import { Drawer } from "antd";
// import Checkout from "../checkout/Checkout";

function Navbarr() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <div className="addsectionbg22">
        <div className="addSection122">
          <Navbar expand="lg">
            <Navbar.Brand style={{ marginRight: "2rem" }} href="#">
              TriSage Daraz
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <ShoppingCartOutlined
                style={{
                  fontSize: "2rem",
                  marginLeft: "48rem",
                  
                }}
                type="primary"
                onClick={showDrawer}
              />
              <Drawer
                width="270"
                title="Cart"
                placement="right"
                onClose={onClose}
                visible={visible}
              >
                <div className="checkoutProductsheight">
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                  <div className="checkoutProducts"></div>
                </div>
                <button className="Checkoutbutton">Checkout</button>
              </Drawer>
            </Navbar.Collapse>
          </Navbar>
          <a className="login">login</a>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
