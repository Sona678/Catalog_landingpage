import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Card({img,title,description="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people,"}){
    return(
        <>
        <div className='inline-block shadow-lg rounded-lg w-80 ml-10 mt-4'>
            <img src={img} alt="Logo" className='flex flex-1'></img>
            <div className='justify-center text-left px-4 py-4 font-sans'>
            <h1 className='flex flex-1 font-bold py-3'>{title}</h1>
            <h2 className='flex flex-1 justify-center text-left py-3'>{description}</h2>
            <button className='flex text-cyan-600 py-4 items-center gap-x-2'>Learn more <FaArrowRight/> </button>
            </div>
            </div>
            </>
    )
}
export default Card;