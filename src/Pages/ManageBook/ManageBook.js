import React from 'react';
import useBooks from '../../hooks/useBooks';
import { Link } from 'react-router-dom';

const ManageBook = () => {
    const [books, setBooks] = useBooks();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = books.filter(books => books._id !== id);
                    setBooks(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Books</h2>
            {
                books.map(books => <div key={books._id}>
                    <h5>{books.name} <button onClick={() => handleDelete(books._id)}>X</button></h5>

                </div>)
            }

            <div className='text-center'>
                <Link to="/addbook">
                    <button className='btn btn-outline-dark'>Add Book</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageBook;