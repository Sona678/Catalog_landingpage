import React from 'react';
import ResourcesCard from './ResourcesCard';
import logoA from '../assets/logoA.png'; // Ensure these paths are correct
import logoB from '../assets/logoB.png';
import logoC from '../assets/logoC.png';

export const Resources = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='text-center mb-8'>
        <h1 className='font-bold text-2xl mb-2'>Latest Resources</h1>
        <h2 className='text-lg'>
          The latest resources include Transparency Toolkit,<br /> Evidence, Best Practices
        </h2>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        <ResourcesCard img={logoA} />
        <ResourcesCard img={logoB} />
        <ResourcesCard img={logoC} />
      </div>
      <div className='text-center mt-8'>
        <button className='border-2 border-cyan-700 p-2 rounded-md'>
          View All Resources
        </button>
      </div>
    </div>
  );
};

export default Resources;
