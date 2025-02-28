import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../Images/danstring_logo.png'
const Footer = () => {
    return (
        <>
            <div>
                <div className="container-fluid">
                    <footer className=" text-dark" style={{ backgroundColor: "#e4f3fa" }}>
                        <div className="container p-5">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-md-0 list-unstyled">
                                    <div className=" mt-0">
                                        <img src={logo} className='w-75' alt="Logo" loading="lazy" />


                                        <p className='m-0 p-0'> At Danstring, we specialize in Web Design and Digital Marketing, helping businesses of all sizes establish a strong online presence.</p>
                                    </div>
                                    <section className="mt-0">
                                        <a
                                            className="btn btn-link btn-floating btn-lg text-dark"
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="button"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i className="fa fa-facebook-f" />
                                        </a>

                                        <a
                                            className="btn btn-link btn-floating btn-lg text-dark"
                                            href="https://www.twitter.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="button"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i className="fa fa-twitter" />
                                        </a>

                                        <a
                                            className="btn btn-link btn-floating btn-lg text-dark"
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="button"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i className="fa fa-instagram" />
                                        </a>

                                        <a
                                            className="btn btn-link btn-floating btn-lg text-dark"
                                            href="https://www.linkedin.com/in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="button"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </section>

                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                                    <h5 className="text-uppercase mb-4">Services</h5>
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">Web Design</NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">Responsive Design</NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">Product Listing Ads</NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">On Page Optimization</NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">Google Plus Marketing</NavLink>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                                    <h5 className="text-uppercase mb-4">TOOls</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">Php </NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">WordPress </NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark"> React js </NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark"> Web Development  </NavLink>
                                        </li>
                                        <li className="mb-2">
                                            <NavLink to="/" className="text-dark">SEO Services</NavLink>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                                    <h5 className="text-uppercase mb-4">Contact</h5>
                                    <ul className="list-unstyled">
                                        <li><p><i className="fa fa-map-marker-alt pe-2" />A, 1 Block, near gurudwara, Vijay Colony, Block B, Sant Nagar, Burari, Delhi, 110084</p></li>
                                        <li>
                                            <p>
                                                <i className="fa fa-phone pe-2" />
                                                <a href="tel:+919818004228" className='text-dark'>+91-9818-004-228</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <i className="fa fa-envelope pe-2" />
                                                <a href="mailto:info@danstring.com" className='text-dark'>info@danstring.com</a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center p-3 mt-4" style={{ backgroundColor: 'rgba(138, 138, 138, 0.2)' }}>
                                Copyright © 2013-2025
                                <NavLink to="https://danstring.com/" className="text-dark"> Danstring Technologies</NavLink> All Rights Reserved.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Footer;
