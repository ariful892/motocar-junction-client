import { async } from '@firebase/util';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePartDetails from '../../hooks/usePartDetails';

import Loading from '../Shared/Loading';

const Purchase = () => {

    const [user, loading, error] = useAuthState(auth);
    const { partId } = useParams();

    // const { data: part, isLoading, qError } = useQuery('part', () => fetch(`http://localhost:5000/part/${partId}`).then(res => res.json()));
    // const { part, setPart } = usePartDetails(partId);
    const [isLoading, setIsLoding] = useState(true);
    const [part, setPart] = useState({});
    const [orderError, setOrderError] = useState('');


    useEffect(() => {
        fetch(`http://localhost:5000/part/${partId}`)
            .then(res => res.json())
            .then(data => {
                setPart(data);
                setIsLoding(false);
            })
    }, [partId]);

    let { name, img, description, minimumOrder, availableQuantity, price } = part;
    // let orderQ = part.orderQuantity;
    // let [orderQuantity, setOrderQuantity] = useState(minimumOrder);
    const orderRef = useRef('');



    if (loading) {
        return <Loading></Loading>

    }

    let newOrderQuantiry = minimumOrder;
    let updatedPart;

    const handleOrder = () => {
        newOrderQuantiry = orderRef.current.value;


        if (newOrderQuantiry < minimumOrder) {
            return setOrderError(<p className='text-red-500'>Please order al least 10 products</p>);

        }
        if (newOrderQuantiry > availableQuantity) {
            return setOrderError(<p className='text-red-500'>Sorry we don't have this much product in stock. Try later!</p>);

        }
        minimumOrder = newOrderQuantiry;
        updatedPart = { ...part, minimumOrder };
        setPart(updatedPart);
    }

    return (
        <div className='mt-12 px-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-secondary text-4xl">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <p>Minimum Order Quantity: {newOrderQuantiry}</p>
                    <p>Available Quantity: {availableQuantity}</p>
                    <div className='mt-4'>
                        <h3 className='font-bold'>Set Order Quantity</h3>
                        <input ref={orderRef} className="input input-bordered input-info w-full max-w-xs mt-2" type="number" name="order" id="" />
                        <button onClick={handleOrder} className="btn btn-secondary btn-xs w-12 ml-2">Set</button>
                        {orderError}
                    </div>
                </div>
            </div>

            <form className='mt-5 text-center'>
                <h3 className='text-secondary text-lg font-bold'>Buyer Info</h3>
                <input type="text" disabled value={user.displayName} className="input input-bordered input-info w-full max-w-xs mt-2" /> <br />
                <input type="text" disabled value={user.email} className="input input-bordered input-info w-full max-w-xs mt-2" /><br />
                <input type="text" placeholder='Your Address' className="input input-bordered input-info w-full max-w-xs mt-2" /><br />
                <input type="number" placeholder='Phone Number' className="input input-bordered input-info w-full max-w-xs mt-2" /><br />
                <input className="btn btn-secondary btn-sm mt-3" type="submit" value="Book" />
            </form>
        </div>
    );
};

export default Purchase;