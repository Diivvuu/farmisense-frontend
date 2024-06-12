import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Predict from "./pages/Predict";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import Tips from "./pages/Tips";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />}> */}
        <Route path="predict" element={<Predict />} />
        <Route path="government-schemes" element={<GovernmentSchemes />} />
        <Route path="tips" element={<Tips />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="sign-up" element={<Signup />} />
        <Route exact path="*" element={<Main />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
