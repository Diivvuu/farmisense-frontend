import React from "react";
import Logo from "./utils/Assets/Logo.png";
import WelcomePhoto from "./utils/Assets/WelcomePhoto.png";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaCircleChevronRight } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="bg-[#038d91] h-screen relative">
      <div className="w-5/12">
        <img className="w-full" src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between items-center absolute left-40 top-96 transform -translate-y-2/4">
        <div className="relative">
          <HiOutlineMail className="absolute left-3 w-10 h-8 top-1/2 transform -translate-y-1/2 text-black" />
          <input
            className="pl-16 pr-32 py-6 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="relative top-8">
          <AiOutlineEyeInvisible className="absolute left-3 w-10 h-8 top-1/2 transform -translate-y-1/2 text-black" />
          <input
            className="pl-16 pr-32 py-6 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="relative flex flex-col justify-center items-center gap-16 top-24">
          <div>
            <button className="bg-[#d0e7b7] px-8 py-2 rounded-full text-lg text-[#266038] font-bold text-pretty">
              LOGIN
            </button>
          </div>
          <div>
            <div className="flex gap-8">
              <p className="text-white text-lg ">Not an Existing User?</p>
              <button className="flex items-center bg-slate-800 text-white font-semibold gap-8 px-16 rounded-full focus:outline-none relative">
                <span className="absolute left-1/2 transform -translate-x-1/2">
                  Sign Up
                </span>
                <div className="absolute right-1">
                  <FaCircleChevronRight className="text-xl" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-5/12 right-36">
        <img className="w-full" src={WelcomePhoto} alt="Welcome" />
      </div>
    </div>
  );
};

export default Login;
