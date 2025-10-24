import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='bg-green-100'>
            <section className='relative z-50'>
                <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;