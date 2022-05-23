import React from 'react';

const SummaryItem = ({ summary }) => {

    const { img, amount, topic } = summary;
    return (
        <div className="card w-48 bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{amount}</h2>
                <p>{topic}</p>
            </div>
        </div>
    );
};

export default SummaryItem;