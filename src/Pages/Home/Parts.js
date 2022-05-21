import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
 const [parts, setParts] = useState([]);

    useEffect(()=>{
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setParts(data))

    },[])
    return (
        <div className='mt-6 '>
            <h2 className='text-center text-primary text-3xl'>The Parts We Manufacture</h2>

           <div className='grid grid-cols-3 gap-4'>
           {
                parts.slice(0,3).map(part =><Part
                key={part.id}
                part={part}
                ></Part>)
            }
           </div>
        </div>
    );
};

export default Parts;