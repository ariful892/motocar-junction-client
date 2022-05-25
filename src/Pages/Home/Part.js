import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {

    const { _id, name, img, description, minimumOrder, availableQuantity, price } = part;

    return (
        <div className="card bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10 ">
                <img src={img} alt="Shoes" className="rounded-xl hover:w-full" />

            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{description}</p>
                <p>Minimum Order: {minimumOrder}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <h3 className='text-red-500 text-xl'>${price}</h3>

            </div>
            <Link to={`/purchase/${_id}`} className="btn btn-primary w-full hover:bg-secondary border-0 font-bold">Purchase</Link>
        </div>
    );
};

export default Part;