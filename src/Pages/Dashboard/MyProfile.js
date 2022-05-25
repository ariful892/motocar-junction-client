import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {

        const name = data.name;
        const email = data.email;
        const address = data.address;
        const education = data.education;
        const phone = data.phone;
        const socialId = data.social;
        const img = data.image;

        const profile = {
            name,
            email,
            address,
            education,
            phone,
            socialId,
            img
        }

        console.log(profile);

        // send review to database
        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your profile is updated');
                    reset();
                }
                else (
                    toast.error('Failed to add review')
                )
            })
    }

    return (
        <div className='flex justify-center'>
            <div >
                <h2 className='text-2xl text-secondary my-3'>My Profile</h2>


                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-80 max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder='Your Name'
                            defaultValue={user.displayName}

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
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder='Your Email'
                            defaultValue={user.email}
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text"
                            placeholder='Your Address'
                            className="input input-bordered w-full max-w-xs"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text"
                            placeholder='Your Education'
                            className="input input-bordered w-full max-w-xs"
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Education is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number"
                            placeholder='Phone Number'
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn Account</span>
                        </label>
                        <input type="text"
                            placeholder='Your Linkedin Account'
                            className="input input-bordered w-full max-w-xs"
                            {...register("social", {
                                required: {
                                    value: true,
                                    message: 'Linkedin Account is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.social?.type === 'required' && <span className="label-text-alt text-red-500">{errors.social.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <textarea type="text"
                            placeholder='Give your rating'
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

                    <input className='btn btn-accent w-full max-w-xs mt-2' type="submit" value='Update Profile' />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;