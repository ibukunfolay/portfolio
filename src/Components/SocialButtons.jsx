import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="menu-lists  md:top-[25%] top-[30%] fixed md:right-[10px] right-[5px] z-20 ">
      <div className="backdrop-blur-2xl md:h-10 md:w-10 h-5 w-5 justify-center items-center flex mb-6 md:p-6 p-4 rounded-full shadow-md">
        <a href="mailto:ibukunfolay@gmail.com" target="_blank">
          <FaGoogle className=" h-4 w-4 md:h-6 md:w-6  text-sky-400" />
        </a>
      </div>
      <div className="backdrop-blur-2xl md:h-10 md:w-10 h-5 w-5 justify-center items-center flex mb-6 md:p-6 p-4 rounded-full shadow-md">
        <a href="https://www.linkedin.com/in/ibukunfolay/" target="_blank">
          <FaLinkedinIn className=" h-4 w-4 md:h-6 md:w-6 text-sky-400" />
        </a>
      </div>
      <div className="backdrop-blur-2xl md:h-10 md:w-10 h-5 w-5 justify-center items-center flex mb-6 md:p-6 p-4 rounded-full shadow-md">
        <a href="https://github.com/ibukunfolay" target="_blank">
          <FaGithub className=" h-4 w-4 md:h-6 md:w-6 text-sky-400" />
        </a>
      </div>
      <div className="backdrop-blur-2xl md:h-10 md:w-10 h-5 w-5 justify-center items-center flex mb-6 md:p-6 p-4 rounded-full shadow-md">
        <a href="https://twitter.com/ibukunfolay" target="_blank">
          <FaTwitter className=" h-4 w-4 md:h-6 md:w-6 text-sky-400" />
        </a>
      </div>
      <div className="backdrop-blur-2xl md:h-10 md:w-10 h-5 w-5 justify-center items-center flex mb-6 md:p-6 p-4 rounded-full shadow-md">
        <a href="https://t.me/ibukunfolay" target="_blank">
          <FaTelegramPlane className=" h-4 w-4 md:h-6 md:w-6 text-sky-400" />
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
