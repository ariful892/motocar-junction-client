import React from 'react';

const OrderRow = ({ order, index, setDeleteOrder }) => {

    const { _id, name, email, address, phone, partsName } = order;

    const handleCancel = () => {
        fetch(`http://localhost:5000/booking/${_id}`, {
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
            <td>
                <button className='btn btn-success btn-xs mr-2'>Pay</button>
                <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-modal" className='btn btn-xs bg-red-600 border-0'>Cancel</label>
            </td>
        </tr>

    );
};

export default OrderRow;