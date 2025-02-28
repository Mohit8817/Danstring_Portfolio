import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
// images import here 


// fashionimg


// import fashionimg1 from '../../Images/'
// import fashionimg2 from '../../Images/'
// import fashionimg3 from '../../Images/'


// health img 
import Health1 from '../../Images/Aocare.png'
import Health2 from '../../Images/levelup.png'
import Health3 from '../../Images/Archover.png'
import Health4 from '../../Images/vinayak.png'


// Technology img 
import Technology1 from '../../Images/KSR.png'
import Technology2 from '../../Images/stall 12.png'
import Technology3 from '../../Images/AhamUrja.png'


// corporate img 
import corporate1 from '../../Images/IMAS.png'
import corporate2 from '../../Images/gradute.png'
import corporate3 from '../../Images/Reform.png'
import corporate4 from '../../Images/musichorn.png'
import corporate5 from '../../Images/Kiteactive.png'
import corporate6 from '../../Images/Fxkey.png'
import corporate7 from '../../Images/Brilliant.png'


// education img 
import education1 from '../../Images/Getfast.png'
import education2 from '../../Images/IMAS.png'
import education3 from '../../Images/OpenGurukul.png'
import education4 from '../../Images/Sdmi.png'
import education5 from '../../Images/SFL.png'

// realstate  img 
import realstate1 from '../../Images/IMo.png'
import realstate2 from '../../Images/kingsrelator.png'
import realstate3 from '../../Images/Santosha prop.png'

// landing page img 

// import landingpage1 from '../../Images/crd1 (1).png'
// import landingpage2 from '../../Images/crd1 (1).png'


// booking and event 
import event1 from '../../Images/musichorn.png'
import event2 from '../../Images/Kiteactive.png'
import event3 from '../../Images/Samridhi.png'

const Sectiontwo = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const portfolioData = [
        // Fashion Category
        // { id: 1, category: "Fashion", title: "Fashion Website 1", image: '', description: "Stylish & modern design." },
        // { id: 2, category: "Fashion", title: "Fashion Website 2", image: '', description: "Trendy eCommerce site." },
        // { id: 3, category: "Fashion", title: "Fashion Website 3", image: '', description: "Creative and unique styles." },

        // Health & Beauty Category
        { id: 4, category: "Health & Beauty", title: "AoCare", image: Health1, description: "Ortho Care for top-quality orthopedic implants and instruments.", website: "https://aocare.in/" },
        { id: 5, category: "Health & Beauty", title: "Level UP", image: Health2, description: "Revolutionizing Healthcare with Innovation & Excellence", website: "https://www.levelupmedicals.com/ " },
        { id: 6, category: "Health & Beauty", title: "Archoverseas", image: Health3, description: "Arch Overseas is a globally recognized leader in orthopedic innovation, offering *ISO 13485:2016* and *US-FDA 510K Cleared products*, CE-certified solutions, and Indian FDA-approved implants.", website: "https://archoverseas.com" },
        { id: 7, category: "Health & Beauty", title: "Vinayak Hospital", image: Health4, description: "Excellence, literally unparalleled superiority, is the essence of Vinayak Hospital. Vinayak performs state-of-the-art testing using high-tech equipment to help diagnose life.", website: "https://vinayakhospital.co.in/" },

        // Technology Category
        { id: 8, category: "Technology", title: " KSR Engineers", image: Technology1, description: " Renowned supplier of high-quality ball bearings, offering a wide range of products for industrial ", website: "https://ksrengineers.com/home/ " },
        { id: 9, category: "Technology", title: "Stall 12", image: Technology2, description: "CONSTRUCTION. Staal 12 biedt maatwerk platforms en tanks voor de voedingsmiddelen- en zuivelindustrie, volgens NEN-EN 1090 en EHEDG-richtlijnen. Keuze uit ...", website: " https://staal12.nl/" },
        { id: 10, category: "Technology", title: "Ahamurja", image: Technology3, description: "At Aham Urja, we are passionate about harnessing the power of the sun to create sustainable and efficient energy solutions.", website: "https://ahamurja.com/" },

        // Corporate Website Category
        { id: 11, category: "Corporate Website", title: "IMAS", image: corporate1, description: "At IMAS, we deliver high-quality education that will give you wings to fly limitlessly across the world.", website: "https://imas-sa.co.za/ " },
        { id: 12, category: "Corporate Website", title: "Greduate", image: corporate2, description: "At our greduate website, we are dedicated to empowering students like you as you navigate the exciting journey of higher education.", website: " https://greduate.com/" },
        { id: 13, category: "Corporate Website", title: "Reforminglives", image: corporate3, description: "Reforming Lives started from an awareness of the growing need for step down habilitation and Rehabilitation services and community-based therapy services in delhi.", website: "https://reforminglives.in/ " },
        { id: 14, category: "Corporate Website", title: "Musichornevent", image: corporate4, description: "At Musichorn, we pride ourselves on offering unique and inspiring event spaces that can be tailored to suit your specific needs. From stylish boardrooms to expansive halls, we have the flexibility to create the ideal atmosphere for your corporate event.", website: "https://musichornevent.com/ " },
        { id: 15, category: "Corporate Website", title: "Kiteactive", image: corporate5, description: "Discover the perfect kitesurf holiday with KiteActive! Enjoy top destinations worldwide, with kite surfing lessons & coaching. Book your adventurous kite ...", website: "https://kiteactiveventures.com/ " },
        { id: 16, category: "Corporate Website", title: "FX Key Global", image: corporate6, description: "Unlock your brand's full potential with our tailored digital marketing solutions, designed to boost your online presence and drive meaningful engagement. ", website: "https://fxkeyglobal.com/" },
        { id: 17, category: "Corporate Website", title: "Brillant Capital", image: corporate7, description: "Brillant Capital has become a top-tier, award-winning trading firm, delivering superior trading experiences and comprehensive account management. ", website: "https://brillantcapital.com/" },



        // Education Category
        { id: 18, category: "Education", title: "IMAS", image: education2, description: "At IMAS, we deliver high-quality education that will give you wings to fly limitlessly across the world. website.", website: " https://imas-sa.co.za/" },
        { id: 19, category: "Education", title: "GetFast Education", image: education1, description: "At Get Fast Education, we pride ourselves on our team of experienced college admission counselors who are dedicated to helping students like you succeed.", website: " https://danstring.co.in/demo/gfastreact/" },
        { id: 20, category: "Education", title: "Open Study Gurukul", image: education3, description: "Open Study is India's Premier institution established with the sole aim to initiate, enable and empower individuals to grow up to be extraordinary professionals ...", website: " https://openstudygurukul.com/" },
        { id: 21, category: "Education", title: "SDMI Academy", image: education4, description: "Located in Sant Nagar Burari, SDMI Academy is proud to offer a cutting-edge Digital Marketing program designed to equip you with the skills needed for today's ...", website: "https://sdmiacademy.com/ " },
        { id: 22, category: "Education", title: "speakfluentlingo", image: education5, description: "We are dedicated to offering top-notch English language education, encompassing comprehensive english speaking course, tailored to cater to learners of diverse ages and proficiency levels. ", website: "https://www.speakfluentlingo.com/" },

        // Real Estate Category
        { id: 23, category: "Real Estate", title: "IMO Estates", image: realstate1, description: "IMO Estates offers top-notch property and development services. Trust us for all your buying, selling, and property development needs.", website: " https://imoestates.com/" },
        { id: 24, category: "Real Estate", title: "Kings Realtors", image: realstate2, description: " Best real estate company for property sales, rentals, and investments. Kings Realtors offers expert guidance to meet all your real estate needs.", website: "https://kingsrealtors.com/" },
        { id: 25, category: "Real Estate", title: "Santosha Property", image: realstate3, description: " Santosh Property offers premium residential and commercial real estate solutions in Navi Mumbai, ensuring a perfect match for every buyer. Useful Links. Home ....", website: "https://santoshaproperty.co.uk/" },

        // Landing Page Category
        // { id: 17, category: "Landing Page", title: "Landing Page 1", image: landingpage1, description: "High-converting marketing page." },
        // { id: 18, category: "Landing Page", title: "Landing Page 2", image: landingpage2, description: "Startup lead generation." },

        // Event & Ticket Booking Category
        { id: 26, category: "Event and Ticket Booking", title: "Musichorn Event", image: event1, description: "At Musichorn, we pride ourselves on offering unique and inspiring event spaces that can be tailored to suit your specific needs. From stylish boardrooms to expansive halls, we have the flexibility to create the ideal atmosphere for your corporate event.", website: "https://musichornevent.com/ " },
        { id: 27, category: "Event and Ticket Booking", title: "Kiteactive", image: event2, description: "Discover the perfect kitesurf holiday with KiteActive! Enjoy top destinations worldwide, with kite surfing lessons & coaching. Book your adventurous kite ...", website: "https://kiteactiveventures.com/ " },
        { id: 28, category: "Event and Ticket Booking", title: "Samridhi Makeovers", image: event3, description: "Samridhi Makeovers in Malka Ganj, Delhi specializes in a wide range of services, including hair care, skin care, nails, hair removal, and makeup. With a team of ...", website: " https://samridhimakeovers.com/" },
    ];



    // tab categories 
    const categories = ["All", "Fashion", "Health & Beauty", "Technology", "Corporate Website", "Education", "Real Estate", "Landing Page", "Event and Ticket Booking"];

    const filteredProjects = selectedCategory && selectedCategory !== "All"
        ? portfolioData.filter((item) => item.category === selectedCategory)
        : portfolioData;




    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShow = (item) => {
        setSelectedProject(item);
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
        setSelectedProject(null);
    };
    return (
        <div>
            <div className="container-fluid second_cont">
                <h1 className="section_two_heading">Our Web Design Portfolio</h1>
                <div className="row">
                    <div className="col">
                        <div className="tab_sec">
                            <div className="radio-inputs">
                                {categories.map((category) => (
                                    <label key={category} className={`radio ${selectedCategory === category ? "active" : ""}`}>
                                        <input type="radio" name="radio" onChange={() => setSelectedCategory(category)} />
                                        <span className="name">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {filteredProjects.map((item) => (
                        <div key={item.id} className="col-md-4 mb-2">
                            <div className="my_card h-100 card" onClick={() => handleShow(item)} style={{ cursor: "pointer" }}>
                                <div className="card_body">
                                    <img src={item.image} className="card_img" alt={item.title} />
                                    <h5 className="card_title">
                                        <NavLink to={item.website} className="nav-link">
                                            {item.title}
                                        </NavLink>
                                    </h5>
                                    <p className="card_desc">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Popup Box */}
                {showPopup && (
                    <motion.div
                        className="popup-overlay"
                        onClick={handleClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="popup-box"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mt-5">
                                            <h2 className="right-text">{selectedProject?.title}</h2>
                                            <p className="right_para">{selectedProject?.description}</p>
                                        </div>


                                        <NavLink className="My_link" to={selectedProject?.website}>
                                            <span>View Website</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 74 74"
                                                height="34"
                                                width="34"
                                            >
                                                <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                                                <path
                                                    fill="black"
                                                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                                ></path>
                                            </svg>
                                        </NavLink>

                                    </div>
                                    <div className="col-lg-6">
                                        <button className="close-btn" onClick={handleClose}>&times;</button>
                                        <img src={selectedProject?.image} className="w-100 mb-3" alt={selectedProject?.title} />
                                    </div>
                                </div>
                            </div>




                        </motion.div>
                    </motion.div>
                )}
            </div>
            {selectedCategory && filteredProjects.length === 0 && <p className="text-center  text-info mt-4">No projects found for this category.</p>}
        </div>
    );
}

export default Sectiontwo;
