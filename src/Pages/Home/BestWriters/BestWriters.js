import React from 'react';
import './BestWriters.css'



const BestWriters = () => {
    return (
        <div >
            <h2 className='text-dark text-center mt-5'> <strong>Top Writer</strong> </h2>
            <section>

                <a href="#">
                    <article className="card">
                        <figure className="card-img">
                            <img src="https://raw.githubusercontent.com/AliHossain01/writer/main/writer1.jpg" />
                            <figcaption>
                                Jhankar Mahbub
                            </figcaption>
                        </figure>

                    </article>
                </a>
                <a href="#">
                    <article className="card">
                        <figure className="card-img">
                            <img src="https://raw.githubusercontent.com/AliHossain01/writer/main/writer2.jpg" />
                            <figcaption>
                                Hasin Hyder
                            </figcaption>
                        </figure>

                    </article>
                </a>
                <a href="#">
                    <article className="card">
                        <figure className="card-img">
                            <img src="https://raw.githubusercontent.com/AliHossain01/writer/main/writer3.jpg" />
                            <figcaption>
                                Sumit Saha
                            </figcaption>
                        </figure>
                        {/* <div className="card-body">
                            <h2 className="card-title">cake</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu gravida urna, in venenatis leo.</p>
                        </div> */}
                    </article>
                </a>
            </section>

        </div>
    );
};

export default BestWriters;