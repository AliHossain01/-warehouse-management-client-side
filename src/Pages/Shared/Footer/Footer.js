import React from 'react';
import './Footer.css';



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className="site-footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Book's World is books warehouse. Here is the sea of books. A book can change life. A book is answer of any question. Books make history. </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="https://photography-services-e857d.web.app/">Books</a></li>
                            <li><a href="https://photography-services-e857d.web.app/">Best Selling</a></li>
                            <li><a href="https://photography-services-e857d.web.app/">Best Writter</a></li>
                            <li><a href="https://photography-services-e857d.web.app/">About</a></li>

                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="https://photography-services-e857d.web.app/">About Us</a></li>
                            <li><a href="https://photography-services-e857d.web.app/">Contact Us</a></li>
                            <li><a href="https://photography-services-e857d.web.app/">Contribute</a></li>
                            <li><a href="https://photography-services-e857d.web.app/">Privacy Policy</a></li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text"><small>All Rights Reserved By &copy; Book's World | {year} </small>

                        </p>
                    </div>


                </div>
            </div>
        </footer>

    );
};

export default Footer;

