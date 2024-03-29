import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {

    const { data: orders, isLoading } = useQuery('order', () => fetch('https://frozen-gorge-46569.herokuapp.com/booking', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-accent text-2xl my-3'>Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Total Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrderRow
                                key={order._id}
                                order={order}
                                index={index + 1}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;