import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [bookings, setBookings] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))

    }
  }, [user])

  return (
    <div class="overflow-x-auto">
      <h1 className='text-4xl text-center text-secondary mb-2'>Your All Orders number</h1>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th> Name</th>
            <th> Parts Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>

          {
            bookings.map(book => <tr>
              <th>1</th>
              <td>{book.email}</td>
              <td>Quality Control Specialist</td>
              <td>{book.quantity}</td>
              <td>{book.price}</td>
            </tr>)
          }


        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;