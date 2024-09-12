import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Logo1 from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png';
import Logo3 from '../assets/Logo3.png';
import Logo4 from '../assets/Logo4.png';
import Logo5 from '../assets/Logo5.png';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

export const Who = () => {
  const [currentLogos, setCurrentLogos] = useState(logos);

  const handleNext = () => {
    setCurrentLogos((prevLogos) => {
      const newLogos = [...prevLogos];
      const firstLogo = newLogos.shift(); // Remove the first logo
      newLogos.push(firstLogo); // Add it to the end
      return newLogos;
    });
  };

  const handlePrevious = () => {
    setCurrentLogos((prevLogos) => {
      const newLogos = [...prevLogos];
      const lastLogo = newLogos.pop(); // Remove the last logo
      newLogos.unshift(lastLogo); // Add it to the beginning
      return newLogos;
    });
  };

  return (
    <div className='container mx-auto pl-20 mt-12'>
      <div className='flex items-center justify-center mb-6'>
        <FaArrowLeft
          className='text-2xl cursor-pointer mr-10' // Add margin-right
          onClick={handlePrevious}
        />
        <div className='flex overflow-hidden justify-evenly gap-20'>
          {currentLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className='w-22 h-22 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain'
            />
          ))}
        </div>
        <FaArrowRight
          className='text-2xl cursor-pointer ml-10' // Add margin-left
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Who;
