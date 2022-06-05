import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))

    }, [])
    return (
        <div className='mt-6 '>
            <h2 className='text-center text-primary text-3xl'>The Parts We Are Manufacturing</h2>

            <div className='grid lg:grid-cols-3 sm:grid-cols-12 gap-4 justify-items-center'>
                {
                    parts.slice(0, 6).map(part => <Part
                        key={part._id}
                        part={part}

                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;