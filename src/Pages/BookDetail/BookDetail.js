import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { inventoryId } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));

    }, [])



    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 text-center w-50 mx-auto'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={book.img} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{book.name}</h5>
                    <p>Price: {book.price} BDT</p>
                    <p>Quantity: {book.quantity} </p>
                    <p><small>Supplier: {book.supplier}</small></p>

                    <div className='text-center d-flex justify-content-around'>
                        <button className="btn btn-outline-dark  ">Delivered</button>
                        <button className="btn btn-outline-dark ">Restock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;

