import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {

    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/part', {
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
            <h2 className='text-2xl text-secondary my-3'>Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Minimum Order</th>
                            <th>Available Product</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ManageProductsRow
                                key={part._id}
                                part={part}
                                index={index + 1}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;