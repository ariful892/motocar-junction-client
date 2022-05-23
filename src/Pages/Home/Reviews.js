import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='text-center px-10'>
            <h2 className='text-primary text-2xl'>What Our Customers Say!</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5'>
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