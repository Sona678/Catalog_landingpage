import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img1 from '../assets/ImageE.png'; // Ensure these paths are correct
import img2 from '../assets/ImageF.png';
import img3 from '../assets/ImageG.png';
import img4 from '../assets/ImageH.png';

const Feature = () => {
  return (
    <div className='container mx-auto px-5 py-10 flex flex-col lg:flex-row mt-16'>
      {/* Text Section */}
      <div className='w-96 ml-28'>
        <h1 className='font-bold text-xl'>Who we are</h1>
        <h2 className='font-sans text-sm pt-6'>
          We are a collaboration of Non-Govt. and professionals working to ensure that government spending is done fairly, openly, efficiently, and creates the best value for money and best outcomes for Europe. We are working at the national and EU levels to advance the principles of openness in spending of funds, procurement, and company ownership within the EU.
        </h2>
        <h3 className='flex text-cyan-600 py-4 items-center gap-x-2 text-sm'>
          See more <FaArrowRight />
        </h3>
      </div>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 flex flex-col lg:flex-row px-4 ml-28'>
        <div className='flex flex-col gap-4 w-full lg:w-1/2'>
          <div className='flex flex-col items-center'>
            <img src={img1} alt="Feature Image 1" className='w-48 h-auto object-cover' /> {/* Adjust width */}
            <p className='mt-2 text-center text-x'>Adriana Homolova</p>
          </div>
          <div className='flex flex-col items-center mt-8'>
            <img src={img2} alt="Feature Image 2" className='w-48 h-auto object-cover' /> {/* Adjust width */}
            <p className='mt-2 text-center text-xm'>Karolis Granickas</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full lg:w-1/2 mt-10 mr-18'>
          <div className='flex flex-col items-center'>
            <img src={img3} alt="Feature Image 3" className='w-48 h-auto object-cover' /> {/* Adjust width */}
            <p className='mt-2 text-center text-xm'>Sandor Lederer</p>
          </div>
          <div className='flex flex-col items-center mt-10'>
            <img src={img4} alt="Feature Image 4" className='w-48 h-auto object-cover' /> {/* Adjust width */}
            <p className='mt-2 text-center text-xm'>Lily Evans</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
