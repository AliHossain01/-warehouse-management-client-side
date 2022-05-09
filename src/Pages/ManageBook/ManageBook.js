import React from 'react';
import useBooks from '../../hooks/useBooks';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import './ManageBook.css'

const ManageBook = () => {
    const [books, setBooks] = useBooks();


    const navigate = useNavigate();

    const navigateToBookDetail = id => {
        navigate(`/inventory/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://gentle-garden-90772.herokuapp.com/inventory/${id}`;
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
                    <th>Email</th>
                    <th>Action</th>
                    <th>Update Books</th>


                </tr>
                {books.map(book => {
                    return (
                        <tr key={book._id}>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.quantity}</td>
                            <td>{book.email}</td>
                            <td>{<button onClick={() => handleDelete(book._id)}><AiFillDelete className='icon' /></button>}</td>
                            <td>{<button onClick={() => navigateToBookDetail(book._id)} className="btn btn-outline-dark ">Update</button>}</td>

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