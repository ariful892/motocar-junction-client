import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrders = () => {

    const [user, loading, error] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);


    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`http://localhost:5000/booking?email=${user.email}`).then(res => res.json()));

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    return (
        <div >
            <h2 className='text-accent text-2xl my-3'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index + 1}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteOrderModal
                deleteOrder={deleteOrder}
                refetch={refetch}
                setDeleteOrder={setDeleteOrder}
            ></DeleteOrderModal>}
        </div>
    );
};

export default MyOrders;