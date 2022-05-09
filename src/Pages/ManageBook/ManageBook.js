import React from 'react';
import useBooks from '../../hooks/useBooks';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import './ManageBook.css'

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
            < table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    <th>Add Books</th>


                </tr>
                {books.map(book => {
                    return (
                        <tr key={book._id}>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.quantity}</td>
                            <td>{<button onClick={() => handleDelete(book._id)}><AiFillDelete className='icon' /></button>}</td>
                            <td>{<Link to="/addbook"><button className='btn btn-outline-dark mb-2'>Add Book</button> </Link>}</td>

                        </tr>
                    )
                })}
            </table>
        </div>

    );
};

export default ManageBook;





// {/* <div className='w-50 mx-auto'>
//     <h2>Manage Books</h2>
//     {
//         books.map(book => <div key={book._id}>
//             <h5>{book.name} <button onClick={() => handleDelete(book._id)}><AiFillDelete className='icon' /></button>  <Link to="/addbook">
//                 <button className='btn btn-outline-dark'>Add Book</button>
//             </Link></h5>


//         </div>)
//     }


// </div> */}