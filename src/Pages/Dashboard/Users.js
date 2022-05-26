import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {


    
    // const {data: users, isLoding} = useQuery('users', () =>fetch('https://shrouded-ridge-22657.herokuapp.com/users').then(res =>res.json()));
    // if(isLoding){
    //     return <button class="btn btn-square loading"></button> 
    // }
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch('https://shrouded-ridge-22657.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center text-secondary mb-2'>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;