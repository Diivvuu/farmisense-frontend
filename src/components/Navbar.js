import React from "react";
import Logo from "../utils/Assets/Logo.png";
import Dashboard from "../utils/Assets/dashboard.png";
import Predict from "../utils/Assets/predictIcon.png";
import Tips from "../utils/Assets/tipsIcon.png";
import Scheme from "../utils/Assets/schemeIcon.png";
import About from "../utils/Assets/AboutIcon.png";
const Navbar = () => {
  return (
    <div>
      <div className="bg-[#038d91] w-3/12 h-screen relative">
        <img
          alt="logo"
          className="w-10/12 mb-16 ml-8"
          style={{ position: "relative", top: "20px" }}
          src={Logo}
        />
        <div className="flex flex-col w-full justify-start items-start ml-[3.5rem] gap-16">
          <div className="flex justify-center items-center gap-4">
            <img alt="icons" className="w-6" src={Dashboard} />
            <h1 className="text-2xl text-[#d1efb2] font-bold">Dashboard</h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img alt="icons" className="w-8" src={Predict} />
            <h1 className="text-2xl text-[#d1efb2] font-bold">Predict Cost</h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img alt="icons" className="w-8" src={Tips} />
            <h1 className="text-2xl text-[#d1efb2] font-bold">
              Tips for Better Practice
            </h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img alt="icons" className="w-8" src={Scheme} />
            <h1 className="text-2xl text-[#d1efb2] font-bold">
              Government Launched
              <br />
              Schemes
            </h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img alt="icons" className="w-8" src={About} />
            <h1 className="text-2xl text-[#d1efb2] font-bold">About Us</h1>
          </div>
        </div>
        <div className="bg-[#d1efb2] h-[150px] w-full bottom-0 absolute rounded-t-[3rem]"></div>
      </div>
    </div>
  );
};

export default Navbar;
