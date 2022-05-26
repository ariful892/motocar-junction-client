import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const ManageProductsRow = ({ part, refetch, index }) => {

    const { _id, name, img, price, minimumOrder, availableQuantity } = part;
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleRemove = id => {
        setIsLoading(true)
        fetch(`https://frozen-gorge-46569.herokuapp.com/part/${id}`, {
            method: 'Delete',
            headers: {
                'content-type': 'application.json'
            }
        })
            .then(res => res.json()).then(data => {
                console.log(data);
                toast(`${name} is removed`);
                refetch();
                setIsLoading(false);
            });
    }

    return (
        <tr>
            <th>{index}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded">
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