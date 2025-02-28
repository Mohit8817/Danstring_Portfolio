import React from 'react'

import leftsideimg from '../../Images/Right_img.jpg'

const Sectionone = () => {
    return (
        <div>

            {/* text/ images ssection  */}

            <div className="container-fluid mt-5">
                <div className="row">
                    {/* img col  */}
                    <div className="col-lg-6">
                        <div className=''>
                            <img src={leftsideimg} alt="" className='left_img' />
                        </div>
                    </div>

                    {/* text col  */}
                    <div className="col-lg-6">
                        <div className='content_div'>
                            <h2 className='right-text'>Our Portfolio: Empowering Diverse Industries Worldwide</h2>
                            <p className='right_para'>At Danstring, we take pride in working with businesses of all sizes, from startups to multi-million-dollar enterprises. Our portfolio spans various industries, showcasing our expertise in Web Design & Digital Marketing.
                                <br />

                                As a leading Digital Marketing Agency in India, we craft tailored solutions that align with your industry’s unique needs. Our commitment to delivering high-quality services with a results-driven approach ensures that your business stands out in the competitive market. <br />

                                We understand the challenges different industries face and provide a strategic roadmap to success, helping you achieve excellent results through innovative digital solutions.</p>


                            <ul className='right_UL'>
                                <li><i className="fa fa-check-circle"></i> Dedicated in-house website designers and developers</li>
                                <li><i className="fa fa-check-circle"></i> Simple website content management with easy updates</li>
                                <li><i className="fa fa-check-circle"></i> Tailored functionalities and seamless data integrations</li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sectionone
