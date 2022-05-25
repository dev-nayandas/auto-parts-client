import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
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
                <img src={item.img} class="max-w-sm rounded-lg shadow-2xl" />
                
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input  type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered " />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;