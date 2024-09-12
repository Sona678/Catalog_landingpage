import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function ResourcesCard({ img, title = "Defence Elvis", description = "It allows creating networks of public spending on goods services used in defense in 28 EU countries..." }) {
    return (
        <div className='shadow-lg rounded-lg w-full max-w-xs flex-shrink-0 mx-4'>
            <img src={img} alt="Logo" className='w-56 h-16 object-contain rounded-t-lg' />
            <div className='px-4 py-4'>
                <h1 className='font-bold text-lg py-2'>{title}</h1>
                <h2 className='text-gray-700 py-2'>{description}</h2>
                <button className='flex text-cyan-600 py-2 items-center gap-x-2'>
                    Learn more <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default ResourcesCard;
