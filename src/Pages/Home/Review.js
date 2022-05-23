import React from 'react';

const Review = ({ review }) => {

    const { name, img, rating, comment } = review;

    return (
        <div>
            <div className='flex items-center justify-center mt-5'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='text-left pl-3'>
                    <h4 className='font-bold'>{name}</h4>
                    <p><small>{comment}</small></p>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;