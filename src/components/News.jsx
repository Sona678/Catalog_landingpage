import React from 'react';
import NewsCard from './NewsCard';
import News1 from '../assets/News1.png';
import News2 from '../assets/News2.png';
import News3 from '../assets/News3.png';
import News4 from '../assets/News4.png';
import News5 from '../assets/News5.png';
import News6 from '../assets/News6.png';

function News() {
    return (
        <>
            <div className='container  mx-auto p-8 mt-14'>
                <h1 className='text-2xl font-bold text-center mb-4'>News</h1>
                <h2 className='text-center text-gray-700 mb-6'>
                    We aim to stop public funds siphoning off and we have a plan that will<br/> help. We are working at the national and EU levels to advance.
                </h2>
                <div className='flex flex-wrap justify-center gap-6'>
                    <NewsCard img={News1} />
                    <NewsCard img={News2} />
                    <NewsCard img={News3} />
                    <NewsCard img={News4} />
                    <NewsCard img={News5} />
                    <NewsCard img={News6} />
                </div>
                <div className='text-center mt-8'>
                    <button className='text-black border-2 border-blue-500 py-2 px-4 rounded'>
                        View All News
                    </button>
                </div>
            </div>
        </>
    );
}

export default News;
