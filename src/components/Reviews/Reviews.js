import React from 'react';
import useProducts from './../../hooks/useProducts';
import Review from './../Review/Review';

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 bg-gray-200'>
            <p className='text-center text-3xl font-bold text-gray-800'>
                What our Customer Says!!.
            </p>
            <p className='text-center mb-12 text-xl font-normal text-gray-500 '>
                Total Reviews: {products.length}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center'>
                {
                    products.map(product => <Review key={product.id} product={product}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;

