import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from "../../Screen/LandingPage/Index";
import Product1 from "../Product1/Product1";
 import Checkout from "../Checkout/Checkout"

 function Router1() {
     return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product1" element={<Product1 />} />
      <Route path="/checkout" element={<Checkout/>} />
    
    </Routes>
  </BrowserRouter>
  
);
}
export default  Router1