import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-primary'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side shadow-xl">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-primary ">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add a Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/add'>Add Product</Link></li>
                    <li><Link to='/dashboard/orders'>Manage Orders</Link></li>
                    <li><Link to='/dashboard/users'>Manage Users</Link></li>
                    <li><Link to='/dashboard/products'>Manage Products</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;