import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {

    const [paid, setPaid] = useState(false);
    const { _id, name, email, address, phone, partsName, price } = order;

    const handleCancel = () => {
        fetch(`https://frozen-gorge-46569.herokuapp.com/booking/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (

        <tr>
            <th>{index}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{partsName}</td>
            <td>{price}</td>
            <td>
                {!paid ?
                    <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-success btn-xs mr-2'>Pay</button></Link>
                    :
                    <span className='text-success mr-2'>Pending</span>
                }
                {!paid && <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-modal" className='btn btn-xs bg-red-600 border-0'>Cancel</label>}
            </td>
        </tr>

    );
};

export default OrderRow;