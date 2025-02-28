import React from 'react'

import Rightsideimg from '../../Images/cardimg2.png'

const Sectionthree = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {/* img col  */}
                    <div className="col-lg-6">
                        <div className='content_div'>
                            <h2 className='right-text'>Empowering Businesses with Cutting-Edge Digital Solutions</h2>
                            <p className='right_para'> At Danstring, we are passionate about helping businesses thrive—whether you're a budding startup or a well-established enterprise. Our extensive portfolio spans multiple industries, demonstrating our proficiency in Web Design and Digital Marketing. <br />
                                As a premier Digital Marketing Agency in India, we develop customized strategies tailored to your industry’s specific demands. By combining creativity, technology, and data-driven insights, we ensure your brand gains a competitive edge in the digital landscape.
                                <br />

                                We recognize the unique challenges faced by different industries and provide a strategic blueprint for success. Through our innovative digital solutions, we drive measurable growth, enhance brand visibility, and help you achieve remarkable business outcomes.

                            </p>

                        </div>
                    </div>

                    {/* text col  */}
                    <div className="col-lg-6">
                        <div className=''>
                            <img src={Rightsideimg} alt="" className='right_img' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Sectionthree
