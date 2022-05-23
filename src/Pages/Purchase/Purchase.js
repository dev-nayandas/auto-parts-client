import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partId } = useParams();
    const { item, setItem } = useState({})
    useEffect(() => {
        // const url = `parts.json/${partId}`;
        fetch(`parts.json/${partId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div class="card w-96 bg-secondary text-white shadow-xl   ">
            <div class="card-body ">
                <h2 class="card-title">{partId}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>User name : nayan</p>
                <p>Email: rich.nayan@gmail.com</p>
                <p>Qunatity : 500 pcs</p>
                
                <p>Phone: 01676375020</p>
                <p>Address: cumilla</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary btn-center">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;