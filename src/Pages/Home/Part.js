import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const {name,img, description,price,minQty, availQty } = part;

    const navigate = useNavigate();
    const bookNow =() =>{
        navigate('/purchase')
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img style={{height:'200px', width:'300px'}} src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <h2 class="card-title">Price Per Unit:{price}</h2>
                <h3 class="card-title">Minimum Order Quantity :{minQty}</h3>
                <h3 class="card-title">Available Quantity : {availQty}</h3>
               
                <div class="card-actions">
                    <button onClick={bookNow} class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;