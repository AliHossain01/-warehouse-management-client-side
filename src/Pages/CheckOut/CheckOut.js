import React from 'react';

const CheckOut = () => {
    return (
        <div>
            <div className="card w-50 mx-auto mt-5 text-center">
                <div className="card-header text-info">
                    Booking Confirmation
                </div>
                <div className="card-body">
                    <h5 className="card-title">Thanks for inviting me for the best click</h5>
                    <p className="card-text">I will contact you within 24 hours.</p>
                    <button className="btn btn-outline-dark">Contact With Me</button>
                    <button className="btn btn-outline-dark ms-5">Back to Home</button>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;