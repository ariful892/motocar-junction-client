

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const handlePay = () => {
        toast.success('Your payment is done')
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit()}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        value={order.name}
                        disabled
                        className="input w-80 input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Parts Id</span>
                    </label>
                    <input type="text"
                        value={order.partId}
                        className="input input-bordered w-full max-w-xs"
                        {...register("partId", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            }
                        })}
                    />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number"
                        placeholder='Enter Price'
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.price?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>


                <input onClick={handlePay} className='btn btn-secondary text-white w-full max-w-xs mt-2' type="submit" value='Pay' />
            </form>
        </div>

    );
};

export default CheckoutForm;