import React from 'react';

const ManageOrderRow = ({ order, index }) => {

    const { name, address, phone, partsName, orderQuantity } = order;

    return (
        <tr>
            <th>{index}</th>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{partsName}</td>
            <td>{orderQuantity}</td>

        </tr>
    );
};

export default ManageOrderRow;