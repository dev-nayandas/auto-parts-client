import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { partId } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        // const url = `parts.json/${partId}`;
        fetch(`http://localhost:5000/parts/${partId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    
    return (
        <div class="hero min-h-screen bg-base-200">
            
            <div class="hero-content flex-col lg:flex-row-reverse">
                
                <div>
                    
                <h1 className='text-center text-3xl font-bold mb-5 text-secondary'>{item.name}</h1>
                <p className='mb-5 text-2xl text-center'>{item.description}</p>
                <img src={item.img} class="max-w-sm rounded-lg shadow-2xl" />
                
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                    <h1 className='text-center text-secondary font-bold'>{user?.displayName}</h1>
                    <h1 className='text-center text-secondary font-bold'>{user?.email}</h1>
                        <div class="form-control">
                        <h1>Address</h1>  
                     <input  type="text"   placeholder='Address' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                        <h1>Phone Number</h1>
                            <input  type="text" placeholder="phone number" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <h1>Available Quantity</h1>
                            <input  type="text" disabled placeholder={item.availQty} class="input input-bordered text-2xl font-bold" />
                        </div>
                        <div class="form-control">
                        <h1>Order Qunatity</h1>
                            <input type="number"  placeholder="order quantity" class="input input-bordered " />
                            
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Purchase;