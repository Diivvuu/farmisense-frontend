import React from "react";
import Logo from "../utils/Assets/Logo.png";
import WelcomePhoto from "../utils/Assets/WelcomePhoto.png";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
const SignUp = () => {
  return (
    <div className="bg-[#038d91] h-screen relative">
      <div className="w-5/12">
        <img className="w-full" src={Logo} alt="Logo" />
      </div>
      <div className="flex">
        <div className="flex flex-col pl-16 gap-8 ">
          <h1 className="text-5xl text-left mt-4 font-semibold text-[#d5f4b4]">
            Create Account
          </h1>
          <div className="flex gap-12">
            <input
              placeholder="First Name"
              className="pl-4 pr-20 py-4 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
            />
            <input
              placeholder="Last Name"
              className="pl-4 pr-20 py-4 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
            />
          </div>
          <div className="flex gap-12">
            <input
              placeholder="State"
              className="pl-4 pr-20 py-4 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
            />
            <input
              placeholder="City"
              className="pl-4 pr-20 py-4 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
            />
          </div>
          <div className="flex flex-col gap-12 relative">
            <div className="absolute">
              <HiOutlineMail className="absolute left-3 w-12 h-8 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                className="pl-16 pr-36 py-5 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="absolute top-24">
              <AiOutlineEyeInvisible className="absolute left-3 w-12 h-8 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                className="pl-16 pr-36 py-5 border-b border-gray-400 focus:outline-none rounded-2xl placeholder:text-[#c0df9f] placeholder:text-2xl"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex mt-48 ml-8 gap-16">
            <button className="text-2xl font-bold rounded-full bg-[#d0e7b7] p-4 px-8">
              BACK
            </button>
            <button className="text-2xl font-bold rounded-full bg-[#d0e7b7] p-4 px-8">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="absolute w-6/12 right-36">
          <img className="w-full" src={WelcomePhoto} alt="Welcome" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
