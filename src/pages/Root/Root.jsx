import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Header/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Book from '../Book/Book';
import Books from '../Books/Books';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Outlet>
                <Banner></Banner>
                <Books></Books>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;