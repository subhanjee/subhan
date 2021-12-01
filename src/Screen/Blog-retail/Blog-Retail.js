import React from "react";
import Retail from "../../Components/How-Reatail/Reatail";
import Index from "../../Components/Nabar/Index";
import "./blog-retail.css";

function BlogRetail() {
  return (
    <div>
      <Index />
      <div className="MainBlog">
        <div className="img">
          <p className="heading">explore</p>
          <h2 className="heading1">
            How retail shopping has changed during covid-19 explore
          </h2>
        </div>
      </div>
      <Retail />
    </div>
  );
}

export default BlogRetail;
