import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const { serviceId } = useParams();


    return (
        <div>
            <div className="card w-50 mx-auto mt-5 text-center">
                <div className="card-header">
                    <h2>Welcome</h2>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Thanks for inviting me for the best click</h5>
                    <p className="card-text">Hope you will get a wonderful experience </p>
                    <div className='text-center'>
                        <Link to="/checkout">
                            <button className='btn btn-outline-dark'>Confirm Booking</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

