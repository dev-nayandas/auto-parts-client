import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {partId} = useParams();
    const {part, setPart} = useState()
    useEffect(()=>{
        // const url = `parts.json/${partId}`;
        fetch(`parts.json/${partId}`)
        .then(res => res.json())
        .then(data =>setPart(data))
    },[])
    return (
        <div class="card w-96 bg-base-500 shadow-xl  ">
            <div class="card-body ">
                <h2 class="card-title">{part}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>User name</p>
                <p>Email</p>
                <p>Qunatity</p>
                <p>User name</p>
                <p>Phone</p>
                <p>Address</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;