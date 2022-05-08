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
        <div>
            <div className="card w-50 mx-auto mt-5 text-center">
                <div className="card-header">
                    <h2>{book.name}</h2>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Thanks for inviting me for the best click</h5>
                    <p className="card-text">Hope you will get a wonderful experience </p>
                    <div className='text-center'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;

