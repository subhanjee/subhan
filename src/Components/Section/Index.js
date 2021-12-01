import React from "react";
import { Container } from "react-bootstrap";
import "./section.css";

function Section() {
  return (
    <div className="Mainsection">
      <div className="subsection">
     
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{ flexDirection: "colum",  }}>
          <h1 className="daraz">Trisage App</h1>
          <h2 className="download">Download the app & Get 50% off</h2>
          <p className="new">*New Customer only | Max Discount: Rs 100</p>
        </div>
          <button className="dobtn">DOWNLOAD</button>
      </div>
      </div> 
    </div>
  );
}

export default Section;
