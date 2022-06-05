import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div className='mt-6 mb-6'>
            <h2 className='text-center text-primary text-3xl'>Reviews</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-12 justify-items-center gap-4'>
                {

                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;