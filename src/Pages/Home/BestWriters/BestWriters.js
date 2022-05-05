
import React from 'react';

import wedding1 from '../../../images/portfoli/wedding1.jpg';
import wedding2 from '../../../images/portfoli/wedding2.jpg';
import wedding3 from '../../../images/portfoli/wedding3.jpg';
import wedding4 from '../../../images/portfoli/wedding4.jpg';
import wedding5 from '../../../images/portfoli/wedding5.jpg';
import wedding6 from '../../../images/portfoli/wedding6.jpg';
import BestWriter from './../BestWriter/BestWriter';

const weddings = [
    { id: 1, img: wedding1 },
    { id: 2, img: wedding2 },
    { id: 3, img: wedding3 },
    { id: 4, img: wedding4 },
    { id: 5, img: wedding5 },
    { id: 6, img: wedding6 },
]

const BestWriters = () => {
    return (
        <div id='bestwriter' className='container'>
            <h2 className='text-dark text-center mt-5'> <strong>Best Writer</strong> </h2>
            <div className="row">
                {
                    weddings.map(wedding => <BestWriter
                        key={wedding.id}
                        expert={wedding}
                    ></BestWriter>)
                }
            </div>
        </div>
    );
};

export default BestWriters;