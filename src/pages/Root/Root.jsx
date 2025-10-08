import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Header/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Outlet>
                <Banner></Banner>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;