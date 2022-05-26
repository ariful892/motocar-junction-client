import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {

        const name = data.name;
        const description = data.description;
        const price = data.price;
        const minimumOrder = data.minimumOrder;
        const availableQuantity = data.availableQuantity;
        const img = data.image;

        const part = {
            name,
            description,
            price,
            minimumOrder,
            availableQuantity,
            img
        }

        console.log(part);

        // send review to database
        fetch('http://localhost:5000/part', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Product is added');
                    reset();
                }
                else (
                    toast.error('Failed to add')
                )
            })
    }

    return (
        <div>
            <h2 className='text-accent text-2xl my-3'>Add Product</h2>
            <div className='flex justify-center'>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-80 max-w-xs">
                        <label className="label">
                            <span className="label-text">Parts Name</span>
                        </label>
                        <input type="text"
                            placeholder='Enter Parts Name'
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text"
                            placeholder='Write parts description here'
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number"
                            placeholder='Price'
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input type="number"
                            placeholder='Minimum Order Quantity'
                            className="input input-bordered w-full max-w-xs"
                            {...register("minimumOrder", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Order Quantity</span>
                        </label>
                        <input type="number"
                            placeholder='Available Order Quantity'
                            className="input input-bordered w-full max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Order Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                        </label>
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text"
                            placeholder='Enter Image URL'
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='btn btn-accent w-full max-w-xs mt-2' type="submit" value='Add' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;