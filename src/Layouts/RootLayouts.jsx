import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const RootLayouts = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <nav className='sticky top-0 z-10'>
                <NavBar></NavBar>
            </nav>
            <main className='min-h-[calc(100vh-50vh)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayouts;