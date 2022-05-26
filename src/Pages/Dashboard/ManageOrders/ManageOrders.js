import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {

    const { data: ordres, isLoading } = useQuery('order', () => fetch('https://frozen-gorge-46569.herokuapp.com/booking', {
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
            <h2>Manage Orders {ordres.length}</h2>
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
                            ordres.map((order, index) => <ManageOrderRow
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