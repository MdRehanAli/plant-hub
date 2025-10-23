import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/plants'>Plants</NavLink></li>
        <li><NavLink to='/myprofile'>My Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-green-800 text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-green-800 rounded-box z-1 mt-5 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">🌱 PlantHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="p-2 btn bg-transparent text-white border-none shadow-none">Login</NavLink>
                <NavLink to='/signup' className="p-2 btn bg-transparent text-white border-none shadow-none">SignUp</NavLink>
            </div>
        </div>
    );
};

export default Navbar;