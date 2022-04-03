import React from 'react';

const About = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 bg-gray-200'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' font-mono text-xl text-center md:text-3xl '>
                    How we take orders?
                </h1>
                <p className='font-mono mt-10 mb-3 font-semibold text-gray-900'> Now we are taking orders from our facebook page and over phone calls. <br />
                    Our facebook page link : <a href="https://www.facebook.com/ColonbilVillageFood" className='link underline decoration-sky-500/30'> চলনবিল ভিলেজ ফুডস</a> </p>

            </div>
        </section>
    );
};

export default About;