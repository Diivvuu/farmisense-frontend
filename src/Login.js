import React from "react";
import Logo from "./utils/Assets/Logo.png";
import WelcomePhoto from "./utils/Assets/WelcomePhoto.png";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  return (
    <div className="bg-[#038d91] h-screen relative">
      <div className="w-5/12">
        <img className="w-full" src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between items-center absolute left-40 top-80 transform -translate-y-2/4">
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
        <div className="relative top-24">
          <div>
            <button>LOGIN</button>
          </div>
          <div>
            <div>
              <p>Not an Existing User?</p>
              <button>Sign Up</button>
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
