import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function NewsCard({ img, title = "Statement from the Catalogue Coalition...", description = "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..." }) {
    return (
        <div className='container inline-block shadow-lg w-80 ml-4 mt-4 justify-center'>
            <img src={img} alt="News" className='w-full h-48 object-cover rounded-3xl p-2' />
            <div className='px-4 py-4 rounded-lg'>
                <h1 className='text-xl font-bold py-3'>{title}</h1>
                <h2 className='text-gray-700 py-3'>{description}</h2>
                <button className='text-cyan-600 py-4 flex items-center gap-x-2'>
                    Learn more <FaArrowRight /></button>
                
            </div>
        </div>
    );
}

export default NewsCard;
