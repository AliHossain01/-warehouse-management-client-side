import React from 'react';
import Banner from '../Banner/Banner';
import Portfolios from '../Portfolios/Portfolios';
import Books from './../Books/Books';
import './Home.css'


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Books></Books>


            <Portfolios></Portfolios>

        </>
    );
};

export default Home;