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
            <div className="counter-section">

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
                {/* Profile Section */}
                <div className="photo-profile">
                    {/* <img src="profile.jpg" alt="Profile" /> */}
                </div>

                {/* Counter Section */}
                <div className="numbers">
                    {[
                        { number: 105, title: "Posts" },
                        { number: 5175, title: "Followers" },
                        { number: 468, title: "Following" },
                    ].map((item, index) => (
                        <div key={index} className="counter-box">
                            <CountUp duration={2} className="counter" end={item.number} />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sectionfour;
