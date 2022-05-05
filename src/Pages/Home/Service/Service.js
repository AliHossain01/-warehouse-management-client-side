import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import { BsCamera } from "react-icons/bs";


const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
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
                    <p>Rate: {price} BDT</p>
                    <p className="card-text"><small>{description}</small></p>

                    <div className='text-center'>
                        <button onClick={() => navigateToServiceDetail(id)} className="btn btn-outline-dark ">Invite Me <BsCamera className='icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;






