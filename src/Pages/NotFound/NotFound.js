import React from 'react';
import notfound from '../../assests/notfound.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img className='max-h-screen' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;