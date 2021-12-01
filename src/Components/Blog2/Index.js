import React from "react";
import { Row, Col, Input } from "antd";
import Footer from "../Footer/Footer"
import "./blog2.css";

const { Search } = Input;
const onSearch = (value) => console.log(value);

function Blog2() {
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
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover"> Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
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
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            How retail shopping has changed during covid-19
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            Nothing more clearly underscores how quickly the planet of retail
            can change than our current struggle with COVID-19. The coronavirus
            pandemic has made business continuity a monumental challenge for all
            retailers, including fashion brands who traditionally have relied on
            giving customers an opportunity to ascertain , feel and check out on
            the clothes they’re buying . Mrs. Darling first heard of Peter when
            she was tidying […]
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
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
          <img
            style={{ width: "95%", borderRadius: 25, marginTop: "1rem" }}
            src="shop21.jpg"
            alt="mission"
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover">Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            How people are shopping during covid-19
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            Total store growth continued to hamper in brick & mortar, while
            online sales accelerated last week. Grocery and Household care rose
            up to be within the top-five departments. Beverages and Salty Snacks
            accounted for many of the Grocery growth both online and offline.
            For the primary time since COVID started, Alcohol lost its top-five
            department status. Ice skating most likely created in Scandinavia
            […]
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            Keeping your stock full during a pandemic
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            As the COVID-19 crisis continues, so does people’s got to safely
            obtain basic necessities. More and more, folks are turning to online
            grocery services to urge their essentials delivered as they struggle
            to remain socially distanced. It’s an excellent option, especially
            for those that are at a better risk from the virus, but if you’ve
            never shopped for groceries online, now could also be a very
            confusing and chaotic time to start […]
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <img
            style={{ width: "95%", borderRadius: 25, marginTop: "1rem" }}
            src="shop4.jpg"
            alt="mission"
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover">Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <img
            style={{ width: "95%", borderRadius: 25, marginTop: "1rem" }}
            src="shop41.png"
            alt="mission"
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover">Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            Staying safe while buying grocery
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            Wear a mask, but skip the gloves. Don’t sanitize the apples. And if
            you’re older than 65, it’s probably best to still order your
            groceries online. As a food virologist, I hear tons of questions
            from people about the coronavirus risks in grocery stores and the
            way to remain safe while buying food amid the pandemic. Here are
            answers to a number of the common questions. […]
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            Picking right grocery sites for reliable delivery
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            Wear a mask, but skip the gloves. Don’t sanitize the apples. And if
            you’re older than 65, it’s probably best to still order your
            groceries online. As a food virologist, I hear tons of questions
            from people about the coronavirus risks in grocery stores and the
            way to remain safe while buying food amid the pandemic. Here are
            answers to a number of the common questions. […]
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <img
            style={{ width: "95%", borderRadius: 25, marginTop: "1rem" }}
            src="shop5.png"
            alt="mission"
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover">Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <img
            style={{ width: "95%", borderRadius: 25, marginTop: "1rem" }}
            src="shop6.jpg"
            alt="mission"
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover">Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            Innovation is changing the mall industries
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            This means that the stores will still exist, with a stress on stores
            in shopping malls. However, stores in shopping centres are going to
            be more like customer experience centres. With e-commerce offering
            deep discounts, deals and incentives, transactions are going to be
            majorly done on online stores. Designers will got to deal with this
            […]
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            Getting safe delivery during this pandemic
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            If the delivery provider maintains all the standards then it is safe
            to have get products delivered to you. It is hard to maintain but
            still safer to get your products ordered online and get delivered to
            your home rather than you going to the supermarket or in any stores.
            I don’t speak of specific […]
          </p>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <img
            style={{ width: "95%", borderRadius: 25, marginTop: "1rem" }}
            src="shop7.png"
            alt=" "
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover">Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <img
            style={{ width: "95%", borderRadius: 25, marginTop: "1rem" }}
            src="shop8.png"
            alt=" "
          />
          <div
            className="font1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <a className="hover"> OutDoor Activities, </a>
            <a className="hover">Retail,</a>
            <a className="hover">2+</a>
          </div>
          <a
            className="hover"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Read more
          </a>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={12}
          className="container d-flex flex-column justify-content-center h-100"
        >
          <h1
            style={{
              marginTop: "1em",
              fontFamily: "open sans",
              color: "#4D4D4D",
              fontSize: "32px",
            }}
          >
            Food delivery booming during covid-19
          </h1>
          <p
            style={{
              color: "#575F67",
              fontFamily: "Open Sans",
              fontSize: "20px",
            }}
          >
            The business of delivering restaurant meals to the house is
            undergoing rapid change as new online platforms race to capture
            markets and customers across America , Asia, Europe, and therefore
            the Middle East . Although these new Internet platforms are
            attracting considerable investment and high valuations—already, five
            are valued at quite $1 billion—little real knowledge about market
            dynamics, growth potential, or customer behavior exists. […]
          </p>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}

export default Blog2;
