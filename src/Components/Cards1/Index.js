import React from "react";
import { Carousel } from "antd";


function  Card1() {
  const contentStyle = {
    // height: '160px',
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img
            style={{ width: "10rem",margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />{" "}
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
            style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
            <img
              style={{ width: "10rem",  margin: "1rem" }}
              src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg"
              alt=""
            />
          </h3>
        </div>
      </Carousel>
      ,
    </div>
  );
}

export default  Card1;
