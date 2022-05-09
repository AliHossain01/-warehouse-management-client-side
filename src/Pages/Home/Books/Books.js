import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { Link } from 'react-router-dom';


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://gentle-garden-90772.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div id='books' className='container mt-3 mb-3'>
            <h2 className='text-center text-dark'><strong>Books</strong></h2>
            <div className="row">
                {
                    books.slice(0, 6).map(book => <Book
                        key={book._id}
                        book={book}
                    ></Book>)

                }
            </div>

            <div className='mx-auto d-block w-50 mt-5'>
                <Link to="/manage"><button className='btn btn-outline-dark mb-2 btn-lg'>Manage Books</button> </Link>
            </div>

        </div>
    );
};

export default Books;