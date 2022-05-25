import React from 'react';

const MyOrders = () => {
    return (
        <div class="overflow-x-auto">
            <h1 className='text-4xl text-center text-secondary mb-2'>Your All Orders</h1>
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th> Parts Name</th>
        <th>Quantity</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default MyOrders;