import React from 'react';
import Banner from '../Banner/Banner';
import BestSellings from '../BestSellings/BestSellings';
import Books from './../Books/Books';
import './Home.css'
import BestWriters from './../BestWriters/BestWriters';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Books></Books>
            <BestSellings></BestSellings>
            <BestWriters></BestWriters>

        </>
    );
};

export default Home;