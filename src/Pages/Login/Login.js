
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || googleUser);
    let from = location.state?.from?.pathname || "/";


    let loginError;


    if (token) {
        navigate(from, { replace: true });
    }


    if (error || googleError) {
        loginError = <p className='text-red-500'> {error?.message || googleError?.message}</p>;
    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password);
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }





    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-secondary text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                            <label className="label mb-0 pb-0">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                            <button className='btn btn-link btn-xs text-red-500 text-left pl-1 mb-3'>Forgot Password ?</button>
                        </div>
                        {loginError}

                        <input className='btn btn-secondary text-white w-full max-w-xs' type="submit" value='LOGIN' />
                    </form>
                    <p>New to Doctors Portal?<Link to='/register' className='pl-1 text-sm text-primary'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn" onClick={handleGoogleSignIn}>SIGN IN WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;