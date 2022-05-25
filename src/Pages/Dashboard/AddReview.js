import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '6f102cbc31f4a3f52f9ee8f089c14fd8';

    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: user.displayName,
                        comment: data.review,
                        rating: data.rating,
                        img: img
                    };
                    console.log(review);

                    // send review to database
                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Thanks for the review');
                                reset();
                            }
                            else (
                                toast.error('Failed to add review')
                            )
                        })
                }
            })
    };


    return (
        <div>
            <h2 className='text-accent text-2xl my-3'>Add Review</h2>
            <div className='flex justify-center'>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            value={user.displayName}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea type="text"
                            placeholder='Write your review here'
                            className="input input-bordered w-full max-w-xs"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <textarea type="number"
                            placeholder='Give your rating'
                            className="input input-bordered w-full max-w-xs"
                            {...register("rating", {
                                required: {
                                    value: true,
                                    message: 'Rating is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        </label>
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Profile Photo</span>
                        </label>
                        <input type="file"
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

export default AddReview;