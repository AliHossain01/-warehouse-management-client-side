import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import useBooks from './../../hooks/useBooks';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyItems] = useState([]);
    const [books, setBooks] = useBooks();

    const navigate = useNavigate();

    const navigateToBookDetail = id => {
        navigate(`/inventory/${id}`);
    }



    useEffect(() => {


        const getMyAllItems = async () => {

            const email = user.email;
            const url = `https://gentle-garden-90772.herokuapp.com/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);

        }

        getMyAllItems();


    }, [user])

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
                    const remaining = myitems.filter(myitem => myitem._id !== id);
                    setMyItems(remaining);
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
                    <th>Update</th>


                </tr>
                {myitems.map(myitem => {
                    return (
                        <tr key={myitem._id}>
                            <td>{myitem.name}</td>
                            <td>{myitem.price}</td>
                            <td>{myitem.quantity}</td>
                            <td>{myitem.email}</td>
                            <td>{<button onClick={() => handleDelete(myitem._id)}><AiFillDelete className='icon' /></button>}</td>
                            <td>{<button onClick={() => navigateToBookDetail(myitem._id)} className="btn btn-outline-dark ">Update</button>}</td>

                        </tr>
                    )
                })}
            </table>
        </div>

    );
};

export default MyItem;

