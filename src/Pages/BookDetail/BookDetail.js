import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';

const BookDetail = () => {



    const { inventoryId } = useParams();
    const [book, setBooks] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data));

    }, [])







    // const handleUpdateQuantity = (e) => {
    //     e.preventDefault()
    //     const name = book.name;
    //     const description = book.description;
    //     const price = book.price;
    //     const supplier = book.supplier;

    //     const preQuantity = parseInt(book.quantity);
    //     const newQuantity = parseInt(e.target.name.value);
    //     // console.log(reStock);
    //     const quantity = (preQuantity + newQuantity);
    //     console.log(quantity);
    //     const updatedQuantity = { quantity, name, description, price, supplier };
    //     console.log(updatedQuantity);
    //     const url = `http://localhost:5000/inventory/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             alert('Are You Sure??')
    //             e.target.reset()
    //         })

    // }

    //onSubmit={handleUpdateQuantity}





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

                        <button className="btn btn-outline-dark text-center ">Delivered</button>

                    </div>

                    <div>
                        <form>
                            <input className='m-2' type="number" name="quantity" placeholder='Restock Quantity' required />
                            <input type="submit" value="Restock" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;










