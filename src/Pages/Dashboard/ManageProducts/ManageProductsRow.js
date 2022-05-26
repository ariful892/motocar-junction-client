import React, { useState } from 'react';
import { useQuery } from 'react-query';

const ManageProductsRow = ({ part, index }) => {

    const { _id, name, img, price, minimumOrder, availableQuantity } = part;
    const [isLoading, setIsLoading] = useState(true);

    const handleRemove = id => {
        fetch('', {
            method: 'Delete',
            headers: {
                'content-type': 'application.json'
            }
        })
            .then(res => res.json()).then(data => {
                console.log(data);
                setIsLoading(false);
            });
    }

    return (
        <tr>
            <th>{index}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{minimumOrder}</td>
            <td>{availableQuantity}</td>
            <td><button onClick={() => handleRemove(_id)} className='btn btn-xs bg-red-500 border-0'>Remove</button></td>
        </tr>
    );
};

export default ManageProductsRow;