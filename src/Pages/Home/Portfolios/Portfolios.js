import React from 'react';

import wedding1 from '../../../images/portfoli/wedding1.jpg';
import wedding2 from '../../../images/portfoli/wedding2.jpg';
import wedding3 from '../../../images/portfoli/wedding3.jpg';
import wedding4 from '../../../images/portfoli/wedding4.jpg';
import wedding5 from '../../../images/portfoli/wedding5.jpg';
import wedding6 from '../../../images/portfoli/wedding6.jpg';
import Portfolio from './../Portfolio/Portfolio';

const weddings = [
    { id: 1, name: 'Wedding', img: wedding1 },
    { id: 2, name: 'Reception', img: wedding2 },
    { id: 3, name: 'Haldi', img: wedding3 },
    { id: 4, name: 'Farewell', img: wedding4 },
    { id: 5, name: 'OutDoor', img: wedding5 },
    { id: 6, name: 'Baby', img: wedding6 },
]

const Portfolios = () => {
    return (
        <div id='portfolio' className='container'>
            <h2 className='text-dark text-center mt-5'> <strong>Best Selling</strong> </h2>
            <div className="row">
                {
                    weddings.map(wedding => <Portfolio
                        key={wedding.id}
                        expert={wedding}
                    ></Portfolio>)
                }
            </div>
        </div>
    );
};

export default Portfolios;