import React from "react";
import { Row, Col, Input, Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";
import "./retail.css";
import Comments from "../Comments/Comment";

const { Search } = Input;
const onSearch = (value) => console.log(value);

function Retail() {
  return (
    <div className="">
      <Row justify="center" className="align-items-stretch boxx">
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <img
            style={{ width: "95%", borderRadius: "1rem", marginTop: "2rem" }}
            src="shop1.jpg"
            alt="about-us"
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> Nov 27 </a>
            <a className="hover"> Comments</a>
          </div>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={8}
          className="container d-flex flex-column justify-content-center h-100"
        >
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
            <h1 style={{ fontSize: "30px" }}>Recent Posts</h1>
            <ul className="list">
              <li>
                <a className="font">
                  {" "}
                  How retail shopping has changed during covid-19
                </a>
              </li>
              <li>
                <a className="font"> How people are shopping during covid-19</a>
              </li>
              <li>
                <a className="font">
                  Keeping your stock full during a pandemic
                </a>
              </li>
              <li>
                <a className="font">Staying safe while buying grocery</a>
              </li>
              <li>
                <a className="font">
                  Picking right grocery sites for reliable delivery
                </a>
              </li>
            </ul>
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
        >
          <p
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#1b336f",
              fontSize: "18px",
            }}
          >
            Nothing more clearly underscores how quickly the planet of retail
            can change than our current struggle with COVID-19.
          </p>
          <p
            style={{
              color: "#1b336f",
              fontFamily: "Open Sans",
              fontSize: "18px",
            }}
          >
            The coronavirus pandemic has made business continuity a monumental
            challenge for all retailers, including fashion brands who
            traditionally have relied on giving customers an opportunity to
            ascertain , feel and check out on the clothes they’re buying .
          </p>
          <p
            style={{
              color: "#1b336f",
              fontFamily: "Open Sans",
              fontSize: "18px",
            }}
          >
            Mrs. Darling first heard of Peter when she was tidying up her
            children’s minds. It is the nightly custom of every good mother
            after her children are asleep to rummage in their minds and put
            things straight for next morning, repacking into their proper places
            the many articles that have wandered during the day.
          </p>
          <p
            style={{
              color: "#1b336f",
              fontFamily: "Open Sans",
              fontSize: "18px",
            }}
          >
            If you could keep awake (but of course you can’t) you would see your
            own mother doing this, and you would find it very interesting to
            watch her. It is quite like tidying up drawers. You would see her on
            her knees, I expect, lingering humorously over some of your
            contents, wondering where on earth you had picked this thing up,
            making discoveries sweet and not so sweet, pressing this to her
            cheek as if it were as nice as a kitten, and hurriedly stowing that
            out of sight. When you wake in the morning, the naughtiness and evil
            passions with which you went to bed have been folded up small and
            placed at the bottom of your mind and on the top, beautifully aired,
            are spread out your prettier thoughts, ready for you to put on.
          </p>
          <p
            style={{
              color: "#1b336f",
              fontFamily: "Open Sans",
              fontSize: "18px",
            }}
          >
            Total store growth continued to hamper in brick & mortar, while
            online sales accelerated last week. Grocery and Household care rose
            up to be within the top-five departments. Beverages and Salty Snacks
            accounted for many of the Grocery growth both online and offline.
            For the primary time since COVID started, Alcohol lost its top-five
            department status.
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={8}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <div className="recentdiv">
            <h1 style={{ fontSize: "30px" }}>Recent Comments</h1>
            <ul className="list">
              <li>
                <a className="font">
                  {" "}
                  David on Getting safe delivery during this pandemic
                </a>
              </li>
              <li>
                <a className="font">
                  {" "}
                  dorian on Keeping your stock full during a pandemic
                </a>
              </li>
              <li>
                <a className="font">
                  David Simmons on How people are shopping during covid-19
                </a>
              </li>
              <li>
                <a className="font">
                  Nicole on How people are shopping during covid-19
                </a>
              </li>
              <li>
                <a className="font">
                  dorian on How retail shopping has changed during covid-19
                </a>
              </li>
            </ul>
          </div>
        </Col>
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
        >
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ fontWeight: "bold", color: "#1b336f" }}>Tag:</p>
            <a className="hover" style={{ marginLeft: "1rem" }}>
              Clothing,
            </a>
            <a className="hover" style={{ marginLeft: "1rem" }}>
              Retail,
            </a>
            <a className="hover" style={{ marginLeft: "1rem" }}>
              Shopping,
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ fontWeight: "bold", color: "#1b336f" }}>Categories:</p>

            <a className="hover">Outdoor Activities,</a>
            <a className="hover">Retail,</a>
            <a className="hover">Shopping Mall,</a>
            <a className="hover">Surfing</a>
          </div>
        </Col>
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
        >
          <hr/>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "8rem", borderRadius: "0.5rem" }}
              src="shop1.jpg"
              alt="about-us"
            />
            <div style={{ flexDirection: "colum", padding: "1rem" }}>
              <a className="pre">Previous</a>
              <p className="how">How people Are Shoppig During Covid-19</p>
            </div>
          </div>
          <hr />
          <h3 className="One-Comment">
            One Comment on “How retail shopping has changed during covid-19”
          </h3>
        </Col>
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
        >
          <div className="avatar">
            <Avatar size={70} icon={<UserOutlined />} />
            <div className="Colum">
              <p style={{ fontWeight: "bold" }}>Dorian</p>
              <p>
                This is best Ecommerce theme based on Gutenberg, Woocommerce and
                Algoila
              </p>
            </div>
          </div>
        </Col>
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
        >
        <div className="leave">
        <h2 style={{color:"#1b336f"}}>Leave a Reply</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <Comments/>
         </div>
        </Col>
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

export default Retail;
