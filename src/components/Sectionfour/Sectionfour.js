import React from 'react';
import CountUp from 'react-countup';

// Importing images dynamically using an array
import img1 from '../../Images/toolimg.webp';
import img2 from '../../Images/toolimg2.webp';
import img3 from '../../Images/toolimg3.webp';
import img4 from '../../Images/toolimg4.webp';
import img5 from '../../Images/toolimg5.webp';
import img6 from '../../Images/toolimg6.webp';
import img7 from '../../Images/toolimg7.webp';
import img8 from '../../Images/toolimg8.webp';
import img9 from '../../Images/toolimg9.webp';
import img10 from '../../Images/toolimg10.webp';
import img11 from '../../Images/toolimg11.webp';
import img12 from '../../Images/toolimg12.webp';
import img13 from '../../Images/toolimg13.webp';
import img14 from '../../Images/toolimg14.webp';
import img15 from '../../Images/toolimg15.webp';

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15
];

const Sectionfour = () => {
    return (
        <div>
            {/* Technology and Tools Section */}
            <div className="container-fluid sectionfour">
                <div className="row">
                    <div className="col">
                        <h2 className='section_four_heading'>Technology and Tools we use</h2>
                        <p className='section_four_para'>
                            At Danstring Technologies, we leverage the latest technologies and cutting-edge tools to
                            deliver outstanding solutions for our clients. Our expertise ensures top-quality results,
                            tailored to meet your business needs with precision and innovation.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`tool-${index + 1}`} className='toolimg' />
                        ))}
                    </div>
                </div>
            </div>

            {/* Counter Section */}
            <div className="container mt-5 mb-5">

                <div className="row">
                    <div className="col">
                        <h2 className='section_four_heading'> Satisfied Clients, Trusted by Many</h2>
                        <p className='section_four_para'>
                            We have successfully partnered with 500+ clients worldwide, ensuring satisfaction through top-tier digital solutions, seamless execution, and customer-focused strategies.
                        </p>
                    </div>
                </div>
                {/* Counter Section */}

                <div className="row">
                    <div className="col">
                        <div className="counterdiv">
                            {[
                                { number: 105, title: "Team Member" },
                                { number: 600, title: "Satisfied Clients & Growing" },
                                { number: 1200, title: "Completed Websites" },
                                { number: 100, title: "Sales Generated for Clients" },
                            ].map((item, index) => (
                                <div key={index} className="counter-box">
                                    <CountUp duration={2} className="counter_num" end={item.number} /><span className='countspan'>+</span>
                                    <div className='counter_name'>{item.title}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectionfour;
