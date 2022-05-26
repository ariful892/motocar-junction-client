import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {

    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="drawer drawer-mobile my-8">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-primary'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side shadow-xl">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-primary ">

                    {!admin && <>
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/review'>Add a Review</Link></li>
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    </>}
                    {admin && <>
                        <li><Link to='/dashboard/add'>Add Product</Link></li>
                        <li><Link to='/dashboard/orders'>Manage Orders</Link></li>
                        <li><Link to='/dashboard/users'>Manage Users</Link></li>
                        <li><Link to='/dashboard/products'>Manage Products</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;