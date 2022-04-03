import React from 'react';
import useProducts from './../../hooks/useProducts';
import Review from './../Review/Review';

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='flex gap-4 flex justify-between'>

            <p className='text-center text-3xl font-bold text-gray-800'>
                What our Customer Says!!..
            </p>

            {
                products.map(product => <Review key={product.id} product={product}></Review>)
            }
        </div>
    );
};

export default Reviews;