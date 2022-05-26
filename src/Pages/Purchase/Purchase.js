
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import Loading from '../Shared/Loading';

const Purchase = () => {

    const [user, loading, error] = useAuthState(auth);
    const { partId } = useParams();
    const [isLoading, setIsLoding] = useState(true);
    const [part, setPart] = useState({});
    const [orderError, setOrderError] = useState('');
    const orderRef = useRef('');
    let updatedPart;


    useEffect(() => {
        fetch(`https://frozen-gorge-46569.herokuapp.com/part/${partId}`)
            .then(res => res.json())
            .then(data => {
                setPart(data);
                setIsLoding(false);
            })
    }, [partId]);

    let { name, img, description, minimumOrder, availableQuantity, price } = part;
    let newOrderQuantity = minimumOrder;

    if (loading) {
        return <Loading></Loading>

    }

    const handleOrder = () => {

        newOrderQuantity = orderRef.current.value;

        if (newOrderQuantity < minimumOrder) {
            return setOrderError(<p className='text-red-500'>Please order minimum 10 products</p>);

        }
        if (newOrderQuantity > availableQuantity) {
            return setOrderError(<p className='text-red-500'>Sorry we don't have this much product in stock. Try later!</p>);

        }
        setOrderError('');
        minimumOrder = newOrderQuantity;
        updatedPart = { ...part, minimumOrder };
        setPart(updatedPart);
    }

    const handleBook = event => {

        event.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const partsName = part.name;
        const orderQuantity = part.minimumOrder;

        const booking = {
            name,
            email,
            address,
            phone,
            partId,
            partsName,
            minimumOrder
        }

        console.log(booking);

        fetch('https://frozen-gorge-46569.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Booking done!');
            })

    }

    return (
        <div className='my-16 px-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-secondary text-4xl">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <p>Minimum Order Quantity: {newOrderQuantity}</p>
                    <p>Available Quantity: {availableQuantity}</p>
                    <div className='mt-4'>
                        <h3 className='font-bold'>Set Order Quantity</h3>
                        <input ref={orderRef} className="input input-bordered input-info w-full max-w-xs mt-2" type="number" name="order" id="" />
                        <button onClick={handleOrder} className="btn btn-secondary btn-xs w-12 ml-2">Set</button>
                        {orderError}
                    </div>
                </div>
            </div>

            <form className='mt-5 text-center' onSubmit={handleBook}>
                <h3 className='text-secondary text-lg font-bold'>Buyer Info</h3>
                <input type="text" disabled value={user.displayName} className="input input-bordered input-info w-full max-w-xs mt-2" /> <br />
                <input type="text" disabled value={user.email} className="input input-bordered input-info w-full max-w-xs mt-2" /><br />
                <input type="text" name='address' placeholder='Your Address' className="input input-bordered input-info w-full max-w-xs mt-2" /><br />
                <input type="number" name='phone' placeholder='Phone Number' className="input input-bordered input-info w-full max-w-xs mt-2" /><br />
                <input className="btn btn-secondary btn-sm mt-3" type="submit" value="Book" />
            </form>
        </div>
    );
};

export default Purchase;