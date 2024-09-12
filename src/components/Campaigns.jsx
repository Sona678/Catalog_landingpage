// src/components/Campaigns.jsx
import React from 'react';
import Card from './Card';
import img1 from '../assets/ImageA.png';
import img2 from '../assets/Imageb.png';
import img3 from '../assets/ImageC.png';
function Campaigns() {
  return (
    <>
    <div className='container mx-auto p-12 justify-center w-full'>
      <h1 className='flex font-bold justify-center'>Campaigns</h1>
      <h2 className='flex flex-wrap text-center justify-center'>
        We aim to stop public funds siphoning off and we have a plan that will help. We <br/>
        are working at the national and EU levels to advance.
      </h2>
    </div>
    <div className='flex flex-wrap justify-center gap-4'>
    <Card img={img1} title='Open Directive Ownership'/>
        <Card img={img2} title='Beneficial Ownership'/>
        <Card img={img3} title="EU Recovery Transparency" />

    </div>
   </>
  );
}

export default Campaigns;
