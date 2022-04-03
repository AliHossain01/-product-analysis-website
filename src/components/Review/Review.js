import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, message, rate, image } = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>Review: {message}</p>
            <p>Rating: {rate}</p>
        </div>
    );
};

export default Review;