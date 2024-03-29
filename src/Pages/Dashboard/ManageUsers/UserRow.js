import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://frozen-gorge-46569.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>{!role && <button onClick={makeAdmin} className="btn btn-xs btn-secondary">Make Admin</button>}</td>
            <td><button className="btn btn-xs bg-red-500 border-0">Remove</button></td>
        </tr>
    );
};

export default UserRow;