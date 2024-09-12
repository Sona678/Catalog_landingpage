// src/components/HeroSection.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing FontAwesome arrow icon
import Img1 from '../assets/Hero.png'; // Import the image

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${Img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center flex flex-col gap-6 sm:gap-8 lg:gap-12 items-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
          Beautiful Analytics to Grow Smarter
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-normal">
          Powerful, self-serve product and growth analytics to help you convert, engage,<br />
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <button className="border border-yellow-400 bg-white/10 rounded-lg py-2 px-4 sm:py-3 sm:px-6 text-white flex items-center gap-2">
          Why Catalog? <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
