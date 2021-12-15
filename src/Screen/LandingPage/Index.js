 
import React from "react";
import Collection from "../../Components/Collection/Collection";
import Flash from "../../Components/FlashCards/Index";
import JustFor from "../../Components/Just-For-You/JustFor";
import Footer from "../../Components/Footer/Footer";
import Add from "../../Components/Add/Add";
import Navbarr from "../../Components/Navbarr/Navbarr";
// import Carosal from "../../Components/Carosel/Carosel"
import "./landing.css";
import Carosel from "../../Components/Carosel/Carosel";

function LandingPage() {
  return (
    <div className="land">
      <div style={{ marginTop: ".1rem" }}></div>
      <Add/>
      <Navbarr/>
      <Carosel />
      <Flash/>
      <Collection />
      <JustFor />
      <div style={{ marginTop: "1rem" }}>
      <Footer /> 
      </div>
    </div>
  );
}

export default LandingPage;
