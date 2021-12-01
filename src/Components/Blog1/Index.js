import React from "react";
import "./blog1.css";
import { Row, Col} from "antd";
import { Input } from "antd";

// const backgroundURL = "shop1.jpg";
// const backgroundStyle = {
//   backgroundImage: `url(${backgroundURL})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "bottom",
//   height: "80vh",
//    Width: "40vw"
// };
// const backgroundURL1 = "/images/react.png";
// const backgroundStyle1 = {
//   backgroundImage: `url(${backgroundURL1})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "bottom",
//   height: "100vh",
// };
const { Search } = Input;
const onSearch = (value) => console.log(value);

function Blog1() {
  return (
    <div style={{ height: "100vh" }}>
      <Row justify="center" className="align-items-stretch h-80">
        <Col
          style={{ justifyContent: "center", display: "flex" }}
          xs={0}
          sm={0}
          md={0}
          lg={12}
        >
          <img className="shopimg" src="shop1.jpg" alt="" /> 
        </Col>
        <Col xs={20} sm={20} md={24} lg={12}>
          <div className="Search">
            <Search
              style={{ width: "20rem" }}
              placeholder="Search..."
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>
          <div className="recentdiv">
          <h1 style={{ fontSize: "30px"}}>Recent Posts</h1>
          <ul className="list">
          <li>
         <a className="font"> How retail shopping has changed during covid-19</a>
          </li>
          <li>
         <a className="font"> How people are shopping during covid-19</a>
          </li>
          <li>
         <a className="font">Keeping your stock full during a pandemic</a>
          </li>
          <li>
         <a className="font">Staying safe while buying grocery</a>
          </li>
          <li>
          <a className="font">Picking right grocery sites for reliable delivery</a>
           </li>
           </ul>
          </div>
          <div className="linelog"></div>
        </Col>
        
      </Row>
    </div>
  );
}

export default Blog1;
