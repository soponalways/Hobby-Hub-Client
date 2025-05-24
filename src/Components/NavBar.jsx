import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from '/logo.png'
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import ThemeToggole from '../Theme/ThemeToggole';

const NavBar = () => {
    const { user, logoutUser, setUser } = use(AuthContext);
    const navigate = useNavigate();
    const listItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/groups">All Groups</NavLink></li>
        <li><NavLink to="/createGroup">Create Group</NavLink></li>
        <li><NavLink to="/myGroups">My Groups</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {listItem}
                    </ul>
                </div>
                <div className='w-6 md:w-8 lg:w-12'>
                    <Link to='/'><img src={Logo} alt="Hobby Hub" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listItem}
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-4 lg:gap-6">
                <div>
                    <ThemeToggole></ThemeToggole>
                </div>
                <div>
                {
                        user ?
                            <div className='flex gap-4 md:gap-6 lg:gap-8 items-center'>
                                <div className="avatar tooltip tooltip-left tooltip-primary" data-tip={user?.name}>
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photo} />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() => {
                                            logoutUser()
                                                .then(() => {
                                                    toast.success("You have successfully Logout");
                                                    navigate('/login');
                                                    setUser(null)
                                                })
                                                .catch(error => {
                                                    toast.warn(error.message)
                                                })
                                        }}
                                        className='btn btn-primary'>Logout</button>
                                </div>
                            </div>
                            :
                            <div className='flex gap-4 md:gap-6 lg:gap-8'>
                                <NavLink to="/login">Login</NavLink>
                                <NavLink to="/register">Register</NavLink>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;