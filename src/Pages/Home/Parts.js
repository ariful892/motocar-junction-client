import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Part from './Part';

const Parts = () => {

    // const { data:parts } = useQuery('part', () => fetch('http://localhost:5000/part').then(res => res.json()));

    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);

    return (
        <div className='mt-24 px-5'>
            <h2 className='text-3xl text-primary uppercase'>Available Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>

        </div>
    );
};

export default Parts;