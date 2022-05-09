import React from 'react';
import './BestSelling.css'

const BestSelling = ({ book }) => {
    const { name, img } = book;
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <div className="gallery">
                <a target="_blank" href="img_5terre.jpg">
                    {/* <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400"> */}
                    <img src={img} alt="..." />
                </a>

            </div>
        </div>

    );
};

export default BestSelling;
