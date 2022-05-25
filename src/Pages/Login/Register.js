import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Register = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [token] = useToken(user || googleUser);

    let passError;
    let registerError;


    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    if (error || googleError || updateError) {
        registerError = <p className='text-red-500'> {error?.message || googleError?.message || updateError?.message}</p>;
    }

    const onSubmit = async data => {
        if (data.password !== data.confirmpass) {
            passError = <p className='text-red-500'> Two password didn't match!</p>;
        }
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-secondary text-3xl font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder='Your Name'
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
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder='Enter Password'
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password"
                                placeholder='Confirm Password'
                                className="input input-bordered w-full max-w-xs"
                                {...register("confirmpass", {
                                    required: {
                                        value: true,
                                        message: 'Confirm Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label ">
                                {errors.confirmpass?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmpass.message}</span>}
                                {errors.confirmpass?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmpass.message}</span>}
                            </label>

                        </div>

                        {registerError}
                        {passError}

                        <input className='btn btn-secondary text-white w-full max-w-xs mt-2' type="submit" value='SIGN UP' />
                    </form>
                    <p>Already have an account? <Link to='/login' className='pl-1 text-sm text-primary'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn" onClick={handleGoogleSignIn}>SIGN IN WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;