import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user;
    const makeAdmin = () => {

        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                autorization: 'Bearer'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('successfully made an admin')
            })

        // fetch(`http://localhost:5000/users/admin/${email}`)
        // .then(res=> res.json())
        // .then(data =>{
        //     console.log(data)
        // })

    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-primary">Make Admin</button>}</td>
            <td><button class="btn btn-xs ">Remove User</button></td>
           
        </tr>
    );
};

export default UserRow;