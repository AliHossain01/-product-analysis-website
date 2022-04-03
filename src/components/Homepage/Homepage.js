import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='bg-gray-200'>
            <div className='flex justify-center md:justify-between px-12 py-8 '>
                <div>
                    <h1 className='text-5xl font-mono'>Your Next Item</h1>
                    <h1 className='text-5xl font-mono'>Your Best Item</h1>
                    <p>ঘি ত্বকের শুষ্কতা দূর করে তা আর্দ্র রাখে | <br /> ভিটামিন এ থাকায় এটি চোখের জন্য ভালো। </p>


                </div>
                <div className='h-45 w-45'>
                    <img src="/ghee.png" alt="" />
                </div>

            </div>

            <div className='md:px-16 py-8'>
                <div className='flex flex-col justify-center  items-center '>
                    <h1 className=' font-mono text-xl md:text-5xl '>
                        Customer Reviews
                    </h1>
                    <Link
                        to='/reviews'
                        className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'
                    >
                        See All Reviews
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Homepage
