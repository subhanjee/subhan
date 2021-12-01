import React, { useState } from "react";
import { Drawer, Button, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./sider.css";
function Index() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Space>
        <ShoppingCartOutlined
          style={{ fontSize: "2rem", color: "#1b336f" }}
          onClick={showDrawer}
        />
      </Space>
      <Drawer
        placement={placement}
        width={300}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <img src="./logo1.png" alt="" />
        <hr />
        <a className="link">Shop</a>
        <br />
        <a className="link">BLog</a>
        <br />
        <a className="link">Terms & Conditioons</a>
        <br />
        <a className="link">All Product</a>
        <br />
        <a className="link">Cart</a>
        <br />
        <a className="link">Chechout</a>
      </Drawer>
    </div>
  );
}

export default Index;
