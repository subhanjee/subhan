import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from "../../Screen/LandingPage/Index";
import Product1 from "../Product1/Product1";
 import Checkout from "../Checkout/Checkout"
import Siginup from "../login/login/siginUp";

 function Router1() {
     return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product1" element={<Product1 />} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/signup" element={<Siginup/>} />
    
    </Routes>
  </BrowserRouter>
  
);
}
export default  Router1