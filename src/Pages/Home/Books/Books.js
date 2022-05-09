import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
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

        </div>
    );
};

export default Books;