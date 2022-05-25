import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    const makeAdmin = () => {

        fetch(`https://shrouded-ridge-22657.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                autorization: 'Bearer'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        // fetch(`https://shrouded-ridge-22657.herokuapp.com/users/admin/${email}`)
        // .then(res=> res.json())
        // .then(data =>{
        //     console.log(data)
        // })

    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button onClick={makeAdmin} class="btn btn-xs btn-primary">Make Admin</button></td>
            <td><button class="btn btn-xs ">Remove User</button></td>
            <td>Blue</td>
        </tr>
    );
};

export default UserRow;