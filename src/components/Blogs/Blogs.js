import React from 'react';

const Blogs = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 bg-gray-200'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' font-mono text-xl text-center md:text-4xl '>
                    Question Answer?
                </h1>

                <h1 className=' font-mono mt-10 text-xl text-center md:text-2xl '>
                    1. What is Context API?
                </h1>
                <p className=' font-mono mt-2 mb-3 font-semibold text-gray-900'>

                    Answer: Context API is</p>

                <h1 className=' font-mono mt-10 text-xl text-center md:text-2xl '>
                    2. What is Semantic Tag?
                </h1>
                <p className=' font-mono mt-2 mb-3 font-semibold text-gray-900'>

                    Answer: Semantic Tag is</p>



            </div>
        </section>
    );
};

export default Blogs;