import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
    }, []);

    const handleBooking = event => {
        event.preventDefault()

        // booking

        const booking = {
            email : user?.email,
            name : event.target.name?.value,
            address : event.target.address?.value,
            phoneNumber : event.target.phoneNumber?.value,
            availQty : event.target.availQty?.value,
            quantity : event.target.quantity?.value,
            price : event.target.price?.value,
            
        }

        console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(` Now pay for Purchase done`)
                }
                else{
                    toast.error(`Already have purchase ${item.name}`)
                }
                // setItem(null);
                
            });







        // // booking
        // const email = user?.email;
        // const address = event.target.address?.value;
        // const quantity = event.target.quantity?.value;
        // const availQty = event.target.availQty?.value;
        // const phoneNumber = event.target.phoneNumber?.value;
        // console.log(quantity, email, phoneNumber, address, availQty)
    }

    return (
        <div class="hero min-h-screen bg-base-200">

            <div class="hero-content flex-col lg:flex-row-reverse">

                <div>

                    <h1 className='text-center text-3xl font-bold mb-5 text-secondary'>{item.name}</h1>
                    <p className='mb-5 text-2xl text-center'>{item.description}</p>
                    <img src={item.img} class="max-w-sm rounded-lg shadow-2xl" />

                </div>
                <form onSubmit={handleBooking} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-center text-secondary font-bold'>{user?.displayName}</h1>


                        <div class="form-control">
                            <h1>Email</h1>
                            <input name='email' type="email" disabled placeholder='' value={user?.email} class="input input-bordered text-2xl font-bold" />
                        </div>

                        <div class="form-control">
                            <h1>Parts name</h1>
                            <input name='name' type="text" disabled placeholder='' value={item.name} class="input input-bordered text-2xl font-bold" />
                        </div>
                        <div class="form-control">
                            <h1>Address</h1>
                            <input name='address' type="text" placeholder='Address' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <h1>Phone Number</h1>
                            <input name='phoneNumber' type="text" placeholder="phone number" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <h1>Available Quantity</h1>
                            <input name='availQty' type="text" value={item.availQty} disabled placeholder={item.availQty} class="input input-bordered text-2xl font-bold" />
                        </div>
                        <div class="form-control">
                            <h1>Order Qunatity</h1>
                            <input name='quantity' type="number" placeholder="order quantity" class="input input-bordered " />

                        </div>
                        <div class="form-control">
                            <h1>Unit Price</h1>
                            <input name='price' type="number" value={item.price} placeholder="price" class="input input-bordered " />

                        </div>
                        
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Purchase;