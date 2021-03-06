import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        <button class="btn btn-square loading"></button>
    }

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        {/* <li><Link to='/purchase'>Purchase</Link></li> */}
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>

        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }

        {/* <li><Link to='/portfolio'>My Portfolio</Link></li> */}


        <li>{user ? <button class="btn btn-ghost" onClick={logout}>SignOut</button>
            : <Link to='/login'>Login</Link>}</li>

        <li><h1 className='text-secondary font-bold'>{user?.displayName}</h1></li>


    </>
    return (
        <div class="navbar bg-black-500">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/home" class="btn btn-ghost normal-case text-xl">Auto Parts</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
        </div>
    );
};

export default NavBar;