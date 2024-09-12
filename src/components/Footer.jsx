import React from 'react';
import logo from '../assets/Logomark.png';
import cclogo from '../assets/cclogo.png';
import backgroundImage from '../assets/sunset.jpg'; 
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

export const Footer = () => {
  return (
    <>
    <div className="relative text-white">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        style={{ zIndex: -1 }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 z-[-1]" />

      {/* Footer Content */}
      <div className="relative z-10 flex flex-wrap justify-between p-8">
        {/* Left Side */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Company Logo" className="h-[32px]" />
            <h1 className="text-2xl font-bold">Catalog</h1>
          </div>
          <div className="text-left mb-8">
            <p className="text-lg text-gray-300">
              We are a collaboration of non-governmental<br /> organizations and professionals working to <br />ensure that
              government spending.
            </p>
          </div>
          <div className="flex gap-5">
            <TiSocialLinkedinCircular className="text-2xl" />
            <AiFillTwitterCircle className="text-2xl" />
            <IoLogoYoutube className="text-2xl" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap gap-10">
          <div className="w-1/4">
            <h3 className="font-bold text-xl">Links</h3>
            <ul className="space-y-2">
              <li>Campaigns</li>
              <li>Resources</li>
              <li>News</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold text-xl">Resources</h3>
            <ul className="space-y-2">
              <li>Transparency Toolkit</li>
              <li>Evidence</li>
              <li>Best Practices</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold text-xl">Work with Us</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center py-4 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full">
      
        <div className="text-black text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm sm:text-base">Terms and Conditions</p>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img src={cclogo} alt="CC Logo" className="w-24 h-auto sm:w-32 lg:w-40" />
        </div>
      </div>
    </div>
    </>

  );
}

export default Footer;
