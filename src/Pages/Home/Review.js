import React from 'react';
import Rating from './Rating';

const Review = ({review}) => {
    const {name, revie} = review;
    return (
        <div class="card w-96 bg-neutral text-neutral-content mt-6">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{revie}</p>
                <Rating></Rating>
                
            </div>
        </div>
    );
};

export default Review;