import React from "react";
import "./Navbarr.css";
import { ShoppingCartOutlined } from '@ant-design/icons';
import {Navbar,} from "react-bootstrap";
function Navbarr22() {
  return (
    <div > 
       <div className="addsectionbg22">
                <div className="addSection122">
      <Navbar expand="lg">
     
          <Navbar.Brand style={{ marginRight: "4rem"}}  href="#">TriSage Daraz</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <input
              style={{
                backgroundColor: "rgb(245,245,245)",
                width: "60%",
                padding: ".6rem",
                border:"none"
              }}
              type="text"
              placeholder="Search"
            />
            <ShoppingCartOutlined style={{fontSize:"2rem", marginLeft:"1rem",marginRight:"4rem"}} />
            <img style={{width:"14rem", height:"3rem"}} src="https://icms-image.slatic.net/images/ims-web/48114d55-0118-4552-8e50-984b22850f7a.png" alt="UserName" />
          </Navbar.Collapse>
         
      </Navbar>
      </div>
          </div>
    </div>
  );
}

export default Navbarr22;