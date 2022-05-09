
import React from 'react';

import book1 from '../../../images/portfoli/book1.jpg';
import book2 from '../../../images/portfoli/book2.jpg';
import book3 from '../../../images/portfoli/book3.jpg';

import BestSelling from './../BestSelling/BestSelling';

const books = [
    { id: 1, img: book1 },
    { id: 2, img: book2 },
    { id: 3, img: book3 },

]

const BestSellings = () => {
    return (
        <div id='bestselling' className='container'>
            <h2 className='text-dark text-center mt-3'> <strong>Top Selling</strong> </h2>
            <div className="row">
                {
                    books.map(book => <BestSelling
                        key={book.id}
                        book={book}
                    ></BestSelling>)
                }
            </div>
        </div>
    );
};

export default BestSellings;