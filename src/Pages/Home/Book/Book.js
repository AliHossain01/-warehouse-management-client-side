import React from 'react';
import { useNavigate } from 'react-router-dom';




const Book = ({ book }) => {
    const { id, name, img, description, price, quantity, supplier } = book;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 text-center'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price} BDT</p>
                    <p>Quantity: {quantity} </p>
                    <p><small>Supplier: {supplier}</small></p>
                    <p className="card-text"><small>{description}</small></p>

                    <div className='text-center'>
                        <button onClick={() => navigateToServiceDetail(id)} className="btn btn-outline-dark ">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;






