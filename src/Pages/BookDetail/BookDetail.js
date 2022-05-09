import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';

const BookDetail = () => {
    const [userQuantity, setUserQuantity] = useState(null);

    const { inventoryId } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));

    }, [book]);

    const quantity = parseInt(book.quantity);
    const handleDelivered = () => {
        console.log(quantity);
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            const deliveredQuantity = { newQuantity }

            const url = `http://localhost:5000/inventory/${inventoryId}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(deliveredQuantity)
            })
                .then(res => res.json())
                .then(data => console.log(data))

        }
        else {
            alert('Out of Stock')
        }
    }

    const getInputvalue = (event) => {
        const userValue = event.target.value;
        setUserQuantity(userValue)
        // toast('Your order is booked!!!');


    }

    const handleQuantity = (event) => {
        if (userQuantity && userQuantity > 0) {
            const newQuantity = parseInt(quantity) + parseInt(userQuantity);
            const setQuantity = { newQuantity }
            const url = `http://localhost:5000/inventory/${inventoryId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(setQuantity)
            })
                .then(res => res.json())
                .then(data => console.log(data))


        }
        else {
            alert('Please given a valid input')
        }
        event.target.reset();
    }







    return (
        <div className="card container w-75 mx-auto mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className='w-100 h-100' src={book.img} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">


                        <h5 className="card-title">{book.name}</h5>
                        <p>Price: {book.price} BDT</p>
                        <p>Quantity: {book.quantity} </p>
                        <p><small>Supplier: {book.supplier}</small></p>

                        <button id='item-btn' className="btn btn-outline-dark text-center " onClick={handleDelivered}>Delivered</button>

                    </div>

                    <div className='m-3'>

                        <form>

                            <input type="text" className='mb-2' onChange={getInputvalue} placeholder='Restock Quantity' />
                            <br />
                            <input id='item-btn' type="button" value="Restock" onClick={handleQuantity} />

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetail;










