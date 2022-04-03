import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, message, rate, image } = props.product;
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>

            <div className='gap-4 flex justify-between items-center'>
                <div className='flex-shrink-0'>
                    <div>
                        <img
                            alt='profile'
                            src={image}
                            className='mx-auto object-cover rounded-full h-16 w-16 '
                        />
                    </div>
                </div>
                <div className=' flex flex-col justify-end'>
                    <span className='text-gray-600 font-medium'>{name}</span>
                    <span className='text-gray-400 text-xs'>{rate}</span>
                    <span className='text-gray-400 text-xs'>{message}</span>
                </div>
            </div>

        </div>
    );
};

export default Review;

