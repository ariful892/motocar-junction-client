
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2BIlGpRUpaj7AOCUS7oz9GTurTjO9cObxu3nrfzBNb9urRb3VnRN9bPvQfsxmDz4SyEOl6ulj7Zm480mzqknZi00YIJEObTw');

const Payment = () => {

    const { bookingId } = useParams();
    console.log(bookingId)

    const { data: order, isLoading } = useQuery(['booking', bookingId], () => fetch(`https://frozen-gorge-46569.herokuapp.com/booking/${bookingId}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    if (order) {
        console.log(order);
    }


    return (
        <div className='flex justify-center'>
            <div>
                <h2 className='text-secondary text-2xl my-5 '>Complete your payment</h2>
                <div className="card flex justify-center w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body ">
                        <p className="text-success font-bold">Hello, {order.name}</p>
                        <h2 className="card-title">Your booking parts is {order.partsName}</h2>
                        <p>Complete your payment to get the product.</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <CheckoutForm order={order}>

                    </CheckoutForm>
                </div>
            </div>
        </div>
    );
};

export default Payment;