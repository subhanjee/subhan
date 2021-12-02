 
import React from "react";
import Collection from "../../Components/Collection/Collection";
import Flash from "../../Components/FlashCards/Index";
import JustFor from "../../Components/Just-For-You/JustFor";
import Footer from "../../Components/Footer/Footer"
import Index from "../../Components/Nabar/Index";
// import Navbarr22 from "../../Components/Navbarr22/Navbarr"
// import Section from "../../Components/Section/Index";
// import Carosel22 from "../../Components/Carosel22/Carosel"
import "./landing.css";

function LandingPage() {
  return (
    <div className="land">
      <div style={{ marginTop: ".1rem" }}></div>

      <Index/>
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
