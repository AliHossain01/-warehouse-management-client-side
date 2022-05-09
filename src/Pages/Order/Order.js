import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";

const Order = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyItems] = useState([]);



    useEffect(() => {


        const getOrders = async () => {

            const email = user.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);

        }

        getOrders();


    }, [user])

    return (
        <div className='w-50 mx-auto'>
            < table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th>ADD</th>


                </tr>
                {myitems.map(myitem => {
                    return (
                        <tr key={myitem._id}>
                            <td>{myitem.name}</td>
                            <td>{myitem.price}</td>
                            <td>{myitem.quantity}</td>
                            <td>{myitem.email}</td>
                            <td>{<button><AiFillDelete className='icon' /></button>}</td>
                            <td>{<Link to="/addbook"><button className='btn btn-outline-dark mb-2'>Add</button> </Link>}</td>

                        </tr>
                    )
                })}
            </table>
        </div>

    );
};

export default Order;

