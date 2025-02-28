import { NavLink } from "react-router-dom";
import React from "react";
import partnerimg from '../../Images/google-partner.webp'
const Nav = () => {

    return (
        <div>
            {/* this is  nav Strip   */}

            {/* strip  */}
            <div className="container-fluid strip">
                <div className="row">
                    <div className="col-lg-7">
                        <p className='strip_para'>
                            Danstring – Leading the Way as the Best SEO Company of the Year!
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <div className='strip_right_text'>
                            <span>
                                <a href="tel:+919818004228" className='Number'>
                                    +91-9818-004-228
                                </a>
                            </span>
                            <span>
                                <NavLink to="https://danstring.com/" className="cta">
                                    <span>Franchise Opportunity</span>
                                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </NavLink>
                            </span>

                            <span>
                                <img src={partnerimg} alt="" className='partnerimg' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>



            {/* counter section  */}






        </div>
    )
}

export default Nav
